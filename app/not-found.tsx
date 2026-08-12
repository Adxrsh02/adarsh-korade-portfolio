import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for doesn't exist or has been moved.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center bg-white">
      <Container>
        <div className="flex flex-col items-center text-center py-24 gap-8">
          {/* 404 display */}
          <p className="text-xs font-semibold uppercase tracking-widest text-[#EA580C]">
            404 Error
          </p>

          <h1
            className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif]
                       font-bold text-5xl sm:text-6xl lg:text-7xl
                       text-[#0A0A0A] tracking-tight leading-none"
          >
            Page not found
          </h1>

          <p className="text-lg text-[#737373] max-w-[480px] leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button as="a" href="/" variant="primary" size="lg">
              Back to Home
            </Button>
            <Button as="a" href="/contact" variant="secondary" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
