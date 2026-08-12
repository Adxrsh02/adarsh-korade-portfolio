"use client";

import { useState, useCallback, useRef, useId } from "react";
import emailjs from "@emailjs/browser";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { Loader2, Send, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Toast } from "./Toast";
import { SUBJECT_OPTIONS, CONTACT_COPY } from "@/lib/contact-data";
import type {
  ContactFormValues,
  ContactFormErrors,
  FormStatus,
  ToastData,
} from "@/types/contact";

/* =========================================================
   VALIDATION
   ========================================================= */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[\d\s\-().]{7,20}$/;

function validateForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address";
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (values.phone.trim() && !PHONE_REGEX.test(values.phone)) {
    errors.phone = "Please enter a valid phone number";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter your message";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
}

/* =========================================================
   FIELD COMPONENT
   ========================================================= */

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function Field({ id, label, error, required, children }: FieldProps) {
  const errorId = `${id}-error`;
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-medium text-[#262626] leading-none"
      >
        {label}
        {required && (
          <span className="ml-1 text-[#EA580C]" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {/* Clone child with error binding */}
      <div
        aria-describedby={error ? errorId : undefined}
      >
        {children}
      </div>
      {error && (
        <p
          id={errorId}
          role="alert"
          className="text-xs text-red-500 leading-snug flex items-center gap-1"
        >
          {error}
        </p>
      )}
    </div>
  );
}

/* =========================================================
   SHARED INPUT CLASSES
   ========================================================= */

function inputCls(hasError: boolean, extraCls = "") {
  return cn(
    "w-full rounded-lg border px-4 py-3",
    "text-base text-[#171717] bg-white",
    "placeholder:text-[#A3A3A3]",
    "transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]",
    "outline-none",
    // Default state
    !hasError &&
      "border-[#E5E5E5] focus:border-[#FB923C] focus:ring-2 focus:ring-[#FB923C]/20",
    // Error state
    hasError && "border-red-400 ring-2 ring-red-100",
    extraCls
  );
}

/* =========================================================
   ContactForm
   ========================================================= */

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const MAX_MESSAGE_LENGTH = 2000;

export function ContactForm() {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const firstErrorRef = useRef<HTMLElement | null>(null);
  const turnstileRef = useRef<TurnstileInstance | undefined>(undefined);

  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormValues, boolean>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [toast, setToast] = useState<ToastData | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);

  // ----- Handlers -----

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value }));

      // Clear error on change if field was touched
      if (touched[name as keyof ContactFormValues]) {
        const newErrors = validateForm({ ...values, [name]: value });
        setErrors((prev) => ({
          ...prev,
          [name]: newErrors[name as keyof ContactFormErrors],
        }));
      }
    },
    [values, touched]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));

      const newErrors = validateForm(values);
      setErrors((prev) => ({
        ...prev,
        [name]: newErrors[name as keyof ContactFormErrors],
      }));
    },
    [values]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Mark all fields as touched
      const allTouched = Object.fromEntries(
        Object.keys(INITIAL_VALUES).map((k) => [k, true])
      ) as Record<keyof ContactFormValues, boolean>;
      setTouched(allTouched);

      const validationErrors = validateForm(values);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length > 0) {
        // Focus first error field
        const firstErrorKey = Object.keys(validationErrors)[0] as keyof ContactFormValues;
        const el = document.getElementById(`${uid}-${firstErrorKey}`);
        el?.focus();
        return;
      }

      if (!turnstileToken) {
        setToast({
          type: "error",
          message: "Please complete the security verification before sending.",
        });
        return;
      }

      setStatus("sending");

      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            name: values.name.trim(),
            email: values.email.trim(),
            subject: values.subject || "General Inquiry",
            message: values.message.trim(),
            time: new Date().toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
              dateStyle: "medium",
              timeStyle: "short",
            }),
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );

        setStatus("success");
        setFormSuccess(true);
        setValues(INITIAL_VALUES);
        setTouched({});
        setErrors({});
        setTurnstileToken(null);
        turnstileRef.current?.reset?.();

        setToast({
          type: "success",
          message: CONTACT_COPY.form.successToast,
        });
      } catch {
        setStatus("error");
        setToast({
          type: "error",
          message: CONTACT_COPY.form.errorToast,
        });
      } finally {
        if (status !== "success") {
          setStatus("idle");
        }
      }
    },
    [values, turnstileToken, uid, status]
  );

  const isSubmitting = status === "sending";
  const canSubmit = !isSubmitting && !!turnstileToken;
  const charCount = values.message.length;

  // ----- Render -----

  return (
    <>
      {/* Success state */}
      {formSuccess ? (
        <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-green-50 border border-green-200">
            <CheckCircle className="w-8 h-8 text-green-500" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2">
              Message Sent!
            </h3>
            <p className="text-[#737373] text-sm leading-relaxed max-w-[300px]">
              Thank you for reaching out. I'll get back to you within 24 hours.
            </p>
          </div>
          <button
            onClick={() => setFormSuccess(false)}
            className="mt-2 text-sm font-medium text-[#EA580C] hover:text-[#C2410C] transition-colors duration-150"
          >
            Send another message →
          </button>
        </div>
      ) : (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          aria-label="Contact form"
          className="flex flex-col gap-4"
        >
          {/* Row: Name */}
          <Field
            id={`${uid}-name`}
            label="Full Name"
            error={touched.name ? errors.name : undefined}
            required
          >
            <input
              id={`${uid}-name`}
              name="name"
              type="text"
              autoComplete="name"
              aria-required="true"
              aria-invalid={!!(touched.name && errors.name)}
              placeholder="Your full name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              maxLength={100}
              className={inputCls(!!(touched.name && errors.name))}
            />
          </Field>

          {/* Row: Email */}
          <Field
            id={`${uid}-email`}
            label="Email Address"
            error={touched.email ? errors.email : undefined}
            required
          >
            <input
              id={`${uid}-email`}
              name="email"
              type="email"
              autoComplete="email"
              aria-required="true"
              aria-invalid={!!(touched.email && errors.email)}
              placeholder="you@company.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              className={inputCls(!!(touched.email && errors.email))}
            />
          </Field>

          {/* Row: Phone (optional) */}
          <Field
            id={`${uid}-phone`}
            label="Phone Number"
            error={touched.phone ? errors.phone : undefined}
          >
            <input
              id={`${uid}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              aria-invalid={!!(touched.phone && errors.phone)}
              placeholder="+91 9004892091 (optional)"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              className={inputCls(!!(touched.phone && errors.phone))}
            />
          </Field>

          {/* Row: Subject */}
          <Field id={`${uid}-subject`} label="Subject">
            <select
              id={`${uid}-subject`}
              name="subject"
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              className={cn(
                inputCls(false),
                "cursor-pointer appearance-none",
                "bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23A3A3A3' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")] bg-no-repeat bg-[right_1rem_center]",
                values.subject === "" && "text-[#A3A3A3]"
              )}
            >
              {SUBJECT_OPTIONS.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  disabled={opt.value === ""}
                  hidden={opt.value === ""}
                >
                  {opt.label}
                </option>
              ))}
            </select>
          </Field>

          {/* Row: Message */}
          <Field
            id={`${uid}-message`}
            label="Message"
            error={touched.message ? errors.message : undefined}
            required
          >
            <>
              <textarea
                id={`${uid}-message`}
                name="message"
                rows={4}
                aria-required="true"
                aria-invalid={!!(touched.message && errors.message)}
                placeholder="Tell me about your project, idea, or opportunity..."
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                maxLength={MAX_MESSAGE_LENGTH}
                className={cn(
                  inputCls(!!(touched.message && errors.message)),
                  "resize-none leading-relaxed"
                )}
              />
              {/* Character count */}
              <p
                className="mt-1 text-xs text-[#A3A3A3] text-right"
                aria-live="polite"
                aria-atomic="true"
              >
                {charCount}/{MAX_MESSAGE_LENGTH}
              </p>
            </>
          </Field>

          {/* Cloudflare Turnstile */}
          <div className="flex flex-col items-start gap-1">
            <Turnstile
              ref={turnstileRef}
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""}
              onSuccess={setTurnstileToken}
              onExpire={() => setTurnstileToken(null)}
              onError={() => {
                setTurnstileToken(null);
                setToast({
                  type: "error",
                  message: "Security verification failed. Please refresh and try again.",
                });
              }}
              options={{ theme: "light", size: "normal" }}
            />
            {!turnstileToken && status !== "idle" && (
              <p className="text-xs text-[#A3A3A3]">
                Please complete the verification above to enable sending.
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!canSubmit}
            aria-disabled={!canSubmit}
            aria-label={isSubmitting ? "Sending your message…" : "Send message"}
            className={cn(
              "w-full flex items-center justify-center gap-2.5",
              "rounded-lg px-6 h-12",
              "text-base font-semibold text-white",
              "transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2",
              // Enabled
              canSubmit && [
                "bg-[#F97316] shadow-sm",
                "hover:bg-[#EA580C] hover:shadow-md hover:scale-[1.01]",
                "active:bg-[#C2410C] active:scale-[0.99]",
                "cursor-pointer",
              ],
              // Disabled
              !canSubmit && "bg-[#F97316]/40 cursor-not-allowed"
            )}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                <span>{CONTACT_COPY.form.sendingLabel}</span>
              </>
            ) : (
              <>
                <span>{CONTACT_COPY.form.submitLabel}</span>
                <Send className="w-4 h-4" aria-hidden="true" />
              </>
            )}
          </button>

          {/* Privacy note */}
          <p className="text-xs text-[#A3A3A3] text-center leading-relaxed">
            Your information is kept private and will never be shared with third
            parties.
          </p>
        </form>
      )}

      {/* Toast */}
      <Toast toast={toast} onDismiss={() => setToast(null)} />
    </>
  );
}
