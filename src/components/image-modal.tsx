"use client";

import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { bp } from "@/lib/utils";

interface ImageModalProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function ImageModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: ImageModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
        aria-label="Close"
      >
        <X size={24} />
      </button>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Main image */}
      <div
        className="relative max-w-[90vw] max-h-[85vh] w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={bp(currentImage.src)}
          alt={currentImage.alt}
          width={1200}
          height={800}
          className="max-w-full max-h-full object-contain rounded-lg"
          priority
        />
      </div>

      {/* Image caption */}
      {currentImage.alt && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center">
          <p className="text-white/80 text-sm">{currentImage.alt}</p>
        </div>
      )}
    </div>
  );
}
