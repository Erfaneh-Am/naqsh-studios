// Form delivery for the static site.
//
// FormSubmit forwards submissions straight to Erin's inbox. No account, no
// backend, no key to rotate. The first submission to a new address triggers a
// one-time activation email; until that link is clicked, submissions are held
// rather than delivered.
const ENDPOINT = "https://formsubmit.co/ajax/erin@naqsh-studios.com";

export type SubmitResult = { ok: boolean; message: string };

export async function submitForm(
  fields: Record<string, string>,
  subject: string,
): Promise<SubmitResult> {
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        ...fields,
        _subject: subject,
        _template: "table",
        _captcha: "false",
      }),
    });
    const data = await res.json().catch(() => null);
    // FormSubmit returns success as either a boolean or the string "true".
    if (res.ok && data && String(data.success) === "true") {
      return { ok: true, message: "" };
    }
    return {
      ok: false,
      message:
        (data && data.message) ||
        "Something went wrong. Please email erin@naqsh-studios.com directly.",
    };
  } catch {
    return {
      ok: false,
      message:
        "Could not reach the server. Please email erin@naqsh-studios.com directly.",
    };
  }
}
