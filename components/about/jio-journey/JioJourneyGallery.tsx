"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { CertificateLightbox } from "@/components/about/CertificateLightbox";
import { JIO_JOURNEY_PHOTOS } from "@/lib/about-data";

/* =========================================================
   JIO JOURNEY GALLERY
   Editorial photo grid — 4 photos in a composed layout
   ========================================================= */

export function JioJourneyGallery() {
  const [lightboxPhoto, setLightboxPhoto] = useState<{
    src: string;
    alt: string;
    caption: string;
  } | null>(null);

  const [feature, half1, half2, wide] = JIO_JOURNEY_PHOTOS;

  return (
    <>
      <section className="bg-[#FAFAFA] py-10 md:py-14" aria-label="Jio journey photo gallery">
        <Container>
          <div className="flex flex-col gap-4 mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#A3A3A3]">
              Memories
            </p>
            <h2 className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] text-2xl font-bold text-[#0A0A0A]">
              A Year in Photos
            </h2>
          </div>

          {/* Photo grid */}
          <div className="flex flex-col gap-4">
            {/* Feature photo — full width */}
            {feature && (
              <GalleryPhoto
                photo={feature}
                className="w-full aspect-[16/9]"
                onOpen={setLightboxPhoto}
              />
            )}

            {/* Two half-width photos side by side */}
            {(half1 || half2) && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {half1 && (
                  <GalleryPhoto
                    photo={half1}
                    className="aspect-[4/3]"
                    onOpen={setLightboxPhoto}
                  />
                )}
                {half2 && (
                  <GalleryPhoto
                    photo={half2}
                    className="aspect-[4/3]"
                    onOpen={setLightboxPhoto}
                  />
                )}
              </div>
            )}

            {/* Wide bottom photo */}
            {wide && (
              <GalleryPhoto
                photo={wide}
                className="w-full aspect-[16/7]"
                onOpen={setLightboxPhoto}
              />
            )}
          </div>
        </Container>
      </section>

      {/* Lightbox */}
      {lightboxPhoto && (
        <CertificateLightbox
          imageSrc={lightboxPhoto.src}
          imageAlt={lightboxPhoto.alt}
          certName={lightboxPhoto.caption}
          onClose={() => setLightboxPhoto(null)}
        />
      )}
    </>
  );
}

/* ── Gallery Photo ───────────────────────────────────────── */

interface GalleryPhotoProps {
  photo: { src: string; alt: string; caption?: string };
  className?: string;
  onOpen: (photo: { src: string; alt: string; caption: string }) => void;
}

function GalleryPhoto({ photo, className = "", onOpen }: GalleryPhotoProps) {
  return (
    <figure className={`relative overflow-hidden rounded-xl cursor-zoom-in group ${className}`}>
      <button
        type="button"
        className="absolute inset-0 w-full h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 rounded-xl"
        onClick={() =>
          onOpen({
            src: photo.src,
            alt: photo.alt,
            caption: photo.caption ?? photo.alt,
          })
        }
        aria-label={`View full size: ${photo.caption ?? photo.alt}`}
      />
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px"
      />

      {/* Caption overlay */}
      {photo.caption && (
        <figcaption className="absolute bottom-0 inset-x-0 px-4 py-3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <p className="text-xs font-medium text-white">{photo.caption}</p>
        </figcaption>
      )}
    </figure>
  );
}
