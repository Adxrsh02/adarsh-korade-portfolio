/* =========================================================
   CONTACT PAGE — TYPE DEFINITIONS
   ========================================================= */

/** Form field values */
export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

/** Validation error map */
export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

/** Form submission state */
export type FormStatus = "idle" | "validating" | "sending" | "success" | "error";

/** Toast notification */
export interface ToastData {
  type: "success" | "error";
  message: string;
}

/** Contact info card data */
export interface ContactInfoItem {
  id: string;
  icon: "mail" | "phone" | "linkedin" | "github" | "pinterest";
  label: string;
  value: string;
  displayValue: string;
  href: string;
  external?: boolean;
}

/** GitHub stats shape */
export interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  publicGists: number;
}

/** A single stat card for GitHub */
export interface GitHubStatItem {
  id: string;
  label: string;
  value: number | string;
  icon: "repo" | "users" | "star" | "code";
}
