"use client";

import { useEffect } from "react";

// Drives the homepage hero carousel via direct DOM manipulation, matching the
// same imperative (non-React-state) pattern used by the header's mobile menu
// toggle. Split out from page.tsx so that file can stay a server component
// and export page metadata.
export function HomeHeroCarousel() {
  useEffect(() => {
    const slides = document.querySelectorAll(".carousel-slide");
    const buttons = document.querySelectorAll(".carousel-slide + .absolute button.size-3"); // Select buttons after slides
    let currentSlide = 0;
    function showSlide(index: number): void {
      slides.forEach((slide: Element, i: number) => {
        const htmlSlide = slide as HTMLElement;
        htmlSlide.style.display = i === index ? "flex" : "none"; // Use flex for vertical centering
      });
      buttons.forEach((button: Element, i: number) => {
        const htmlButton = button as HTMLElement;
        htmlButton.classList.toggle("bg-white", i === index);
        htmlButton.classList.toggle("bg-white/50", i !== index);
      });
    }
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
    // Auto-advance carousel
    let slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    // Manual navigation
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        clearInterval(slideInterval); // Stop auto-advance
        currentSlide = i;
        showSlide(currentSlide);
        slideInterval = setInterval(nextSlide, 5000); // Restart auto-advance
      });
    });
    showSlide(currentSlide); // Initialize first slide and button state

    return () => clearInterval(slideInterval);
  }, []);

  return null;
}
