import { NextResponse } from "next/server";

/**
 * Server-side Cloudflare Turnstile token verification endpoint.
 * Calls Cloudflare Siteverify API with TURNSTILE_SECRET_KEY server-side.
 */
export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Missing Turnstile verification token." },
        { status: 400 }
      );
    }

    const secretKey = process.env.TURNSTILE_SECRET_KEY;

    // If TURNSTILE_SECRET_KEY is not set on the server, skip server-side check
    if (!secretKey) {
      return NextResponse.json({
        success: true,
        verified: false,
        message: "TURNSTILE_SECRET_KEY not set; skipped server verification.",
      });
    }

    const formData = new URLSearchParams();
    formData.append("secret", secretKey);
    formData.append("response", token);

    const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0];
    if (clientIp) {
      formData.append("remoteip", clientIp.trim());
    }

    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      }
    );

    const data = await response.json();

    if (!data.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Security verification failed.",
          errorCodes: data["error-codes"] || [],
        },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, verified: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Internal error verifying security token." },
      { status: 500 }
    );
  }
}
