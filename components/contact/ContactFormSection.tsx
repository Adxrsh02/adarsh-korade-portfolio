import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "./ContactForm";
import { ContactInfoSidebar } from "./ContactInfoSidebar";
import { CONTACT_COPY } from "@/lib/contact-data";

/* =========================================================
   ContactFormSection
   Two-column layout: form (left 60%) + sidebar (right 40%)
   Background: alt (#FAFAFA) for visual separation from hero.
   ========================================================= */

export function ContactFormSection() {
  return (
    <SectionWrapper
      id="contact-form"
      background="alt"
      aria-label="Contact form and contact information"
    >
      <Container>
        {/* Mobile: stacked. Desktop: 2-col */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_340px] gap-8 lg:gap-10 xl:gap-12 items-start">

          {/* LEFT — Contact Form Card */}
          <div>
            {/* Form header */}
            <div className="mb-6">
              <h2 className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-semibold text-2xl sm:text-3xl text-[#0A0A0A] tracking-tight leading-tight mb-2">
                {CONTACT_COPY.form.heading}
              </h2>
              <p className="text-[#737373] text-base leading-relaxed">
                {CONTACT_COPY.form.subheading}
              </p>
            </div>

            {/* Form card */}
            <div className="bg-white rounded-2xl border border-[#E5E5E5] shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-5 sm:p-6">
              <ContactForm />
            </div>
          </div>

          {/* RIGHT — Contact Info Sidebar */}
          <div className="lg:pt-[72px]">
            {/* Extra top padding so sidebar aligns with form start (below its own heading) */}
            <ContactInfoSidebar />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
