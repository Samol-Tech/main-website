"use client";

import Link from "next/link";
import { use, useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const slides = document.querySelectorAll(".carousel-slide");
    const buttons = document.querySelectorAll(".carousel-slide + .absolute button.size-3"); // Select buttons after slides
    // console.log(buttons)
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
  }, []);
  return (
    <main className="flex flex-1 justify-center">
      <div className="layout-content-container flex flex-col max-w-full flex-1">
        {/* Hero section with Carousel */}
        <section className="relative w-full overflow-hidden min-h-[500px] lg:min-h-[600px] flex items-center justify-center bg-gray-900">
          {/* First Hero  */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out carousel-slide"
            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url('./image/code-hero.png')" }}
          >
            <div className="flex flex-col mx-auto items-center justify-center h-full text-center px-4 py-20 relative z-10">
              <div className="max-w-4xl flex flex-col items-center gap-4">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl lg:text-6xl mb-4">
                  Web Development That Transforms Ideas into Digital Reality
                </h1>
                <p className="text-gray-200 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-6">
                  SamolTech Consult delivers innovative, secure, and scalable digital solutions to propel your business forward. We are
                  your trusted partner for cutting-edge software development.
                </p>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-lg"
                >
                  <span className="truncate">Launch Your Website</span>
                </button>
              </div>
            </div>
          </div>

          {/*Second hero */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out carousel-slide"
            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url('./image/mobile-hero.jpg')" }}
          >
            <div className="flex flex-col mx-auto items-center justify-center h-full text-center px-4 py-20 relative z-10">
              <div className="max-w-4xl flex flex-col items-center gap-4">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl lg:text-6xl mb-4">
                  Seamless Mobile Experiences, Built For Success
                </h1>
                <p className="text-gray-200 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-6">
                  SamolTech Consult delivers innovative, secure, and scalable digital solutions to propel your business forward. We are
                  your trusted partner for cutting-edge software development.
                </p>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-lg"
                >
                  <span className="truncate">Build Your Mobile App</span>
                </button>
              </div>
            </div>
          </div>
          {/* Third Hero  */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out carousel-slide"
            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url('./image/cloud-hero.jpg')" }}
          >
            <div className="flex flex-col mx-auto items-center justify-center h-full text-center px-4 py-20 relative z-10">
              <div className="max-w-4xl flex flex-col items-center gap-4">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl lg:text-6xl mb-4">
                  Robust Cloud Infrastructure for Future-Proof Scalability
                </h1>
                <p className="text-gray-200 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-6">
                  SamolTech Consult delivers innovative, secure, and scalable digital solutions to propel your business forward. We are
                  your trusted partner for cutting-edge software development.
                </p>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-lg"
                >
                  <span className="truncate">Optimize Your Cloud</span>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
            <button className="size-3 rounded-full bg-white/50 hover:bg-white transition-colors duration-300"></button>
            <button className="size-3 rounded-full bg-white/50 hover:bg-white transition-colors duration-300"></button>
            <button className="size-3 rounded-full bg-white/50 hover:bg-white transition-colors duration-300"></button>
          </div>
        </section>

        <section
          className="hidden py-16 sm:py-20 bg-primary/5 dark:bg-background-dark/5 border-t border-b border-gray-200 dark:border-gray-800"
        >
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-[#111318] dark:text-white sm:text-3xl leading-tight">
              Driving Digital Transformation with Expert IT Solutions
            </h2>
            <p className="mt-4 text-md leading-7 text-gray-700 dark:text-gray-300">
              SamolTech&nbsp;Consult Solutions is your trusted partner for comprehensive
              <strong className="font-semibold">software development</strong>
              and advanced
              <strong className="font-semibold">IT solutions</strong>. We specialize in custom web and mobile applications, cloud computing,
              and cybersecurity, helping businesses achieve seamless <strong className="font-semibold">digital transformation</strong>. Our
              expert team leverages cutting-edge technology to build scalable, secure, and future-proof systems tailored to your unique
              needs. Whether you&apos;re looking for innovative software, robust infrastructure, or strategic IT consultancy, we deliver
              excellence that propels your growth and enhances your competitive edge.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <h2 className="text-[#111318] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-5 pt-5 text-center">
            Our Core Expertise
          </h2>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            <div
              className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark p-6 flex-col hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <span className="material-symbols-outlined text-primary">code</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#111318] dark:text-white text-base font-bold leading-tight">Website Development</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                  Crafting responsive, high-performance websites that captivate and convert.
                </p>
              </div>
            </div>
            <div
              className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark p-6 flex-col hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <span className="material-symbols-outlined text-primary">phone_iphone</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#111318] dark:text-white text-base font-bold leading-tight">Mobile App Development</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                  Building seamless native and hybrid mobile applications for iOS and Android.
                </p>
              </div>
            </div>
            <div
              className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark p-6 flex-col hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <span className="material-symbols-outlined text-primary">cloud_queue</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#111318] dark:text-white text-base font-bold leading-tight">Cloud &amp; DevOps</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                  Optimizing your infrastructure for scalability, efficiency, and reliability.
                </p>
              </div>
            </div>
            <div
              className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark p-6 flex-col hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <span className="material-symbols-outlined text-primary">security</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#111318] dark:text-white text-base font-bold leading-tight">Cybersecurity</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                  Protecting your digital assets with cutting-edge security solutions.
                </p>
              </div>
            </div>
            <div
              className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark p-6 flex-col hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <span className="material-symbols-outlined text-primary">groups</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#111318] dark:text-white text-base font-bold leading-tight">IT Consultancy</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                  Providing strategic IT guidance to navigate your technological landscape.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-24 bg-gray-100 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-primary text-base font-semibold tracking-wide uppercase">Client Success Stories</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-[#111318] dark:text-white sm:text-4xl">
                What Our Valued Clients Say
              </p>
              <p className="mt-4 text-xl leading-8 text-gray-600 dark:text-gray-300">
                Hear directly from businesses thriving with SamolTech Consult.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <figure
                className="rounded-2xl bg-white dark:bg-gray-800 p-10 shadow-xl ring-1 ring-gray-900/5 transition-transform duration-300 hover:scale-105"
              >
                <blockquote className="text-lg leading-7 text-gray-700 dark:text-gray-300">
                  <p>
                    “SamolTech Consult transformed our online presence with a stunning, high-performance website. Their team was
                    professional, responsive, and truly understood our vision. We&apros;ve seen a significant increase in user engagement
                    since the launch.”
                  </p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-x-4">
                  <img
                    className="h-12 w-12 rounded-full bg-gray-50"
                    alt="Photo of Sarah Johnson"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7EMrP6rpZNDudAM4aZzP-MbpWrsdqYzZ3yzECm-3kXx7xLChthL2kkx1N15Ux6mfntnhC5xnJaYBVM6tcfhJPeTV7nTVTaeqWMceqaFUhJlolesZiItVcuJiOQtLFChhCYr7vC9JBf_Co15LLNJamEYL1e8y2exIzgZ35Waqpj71jK2I65ZXQyUoxVViJ6J1HzbkO2jTxaM_Eq0uqAs6faOjsSwHw4Fya3iM1bOn0gmIxCDS5uG9cj_A3w75J3Ca83qhqBXtMkQrk"
                  />
                  <div>
                    <div className="font-semibold text-[#111318] dark:text-white">Sarah Johnson</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">Marketing Director, TechCorp</div>
                  </div>
                </figcaption>
              </figure>
              <figure
                className="rounded-2xl bg-white dark:bg-gray-800 p-10 shadow-xl ring-1 ring-gray-900/5 transition-transform duration-300 hover:scale-105"
              >
                <blockquote className="text-lg leading-7 text-gray-700 dark:text-gray-300">
                  <p>
                    “The mobile app developed by SamolTech has been a game-changer for our business. The process was seamless from start
                    to finish, and the final product exceeded our expectations in both design and functionality. Highly recommended!”
                  </p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-x-4">
                  <img
                    className="h-12 w-12 rounded-full bg-gray-50"
                    alt="Photo of Michael Chen"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGqg1cEFg9TMI8aTVsii2QQXWBeCFanIy89DAd5jh8f2AqOjuWE0Vwv9FIk8oiDFK38x8XT37rxCyBHnMdRUJTLjc1HZf6KWqf-QQUbdJOC-kqJuspH3fp2XN79XFxVJT2ePL84A-xXfSFbnJVIPu_DKOaQiyb0DZAyEC6MJ8ZNxzfnwyAEsLPKRDsaXv8dH7Aa1b8_xXKcBOneDOCHVa2ZJtOrPDUGTbT48rb4pp3TBQOlJ-NFUX2bdYRWjRa9vn9BlxUaw81S3oq"
                  />
                  <div>
                    <div className="font-semibold text-[#111318] dark:text-white">Michael Chen</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">CEO, NextGen Startups</div>
                  </div>
                </figcaption>
              </figure>
              <figure
                className="rounded-2xl bg-white dark:bg-gray-800 p-10 shadow-xl ring-1 ring-gray-900/5 transition-transform duration-300 hover:scale-105"
              >
                <blockquote className="text-lg leading-7 text-gray-700 dark:text-gray-300">
                  <p>
                    “SamolTech provided exceptional cybersecurity solutions. Their expertise gave us peace of mind, knowing our data and
                    systems are protected against modern threats. A truly invaluable partnership for our growing enterprise.”
                  </p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-x-4">
                  <img
                    className="h-12 w-12 rounded-full bg-gray-50"
                    alt="Photo of Emily White"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmOyAzBowU-ROtu2Tj_LGUQQhttnVc9GSjpybHajrg1e3p73FYSltB2JX-K5hW4IXH-e3lQwKfbtmNuhZ27VTdyuaTAHkRvjtOtSU2UKDxhGAaVY5FKgtvfrAd4V9pBRaOt8m9YMwOpdJsHJDhRDd2xAWW3tkt_J9apfQUyzT-aQNZgQhVEf7SiwGeG394yHlzUFGlcpUgi3rlDfO86kMT5c0NBiHGROPIZTa0vDA0yJ06-slOQv2OcNMXbFHuFuiazwevJKgrrao2"
                  />
                  <div>
                    <div className="font-semibold text-[#111318] dark:text-white">Emily White</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">CTO, SecureCorp Ltd.</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-primary text-base font-semibold tracking-wide uppercase">Partnership &amp; Trust</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-[#111318] dark:text-white sm:text-4xl">Trusted by Industry Leaders</p>
            <p className="mt-4 text-xl leading-8 text-gray-600 dark:text-gray-300">
              SamolTech Consult is proud to collaborate with esteemed clients globally.
            </p>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-center gap-x-8 gap-y-12">
              <div className="flex justify-center p-4">
                <img
                  className="h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  alt="Client logo 1"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmOyAzBowU-ROtu2Tj_LGUQQhttnVc9GSjpybHajrg1e3p73FYSltB2JX-K5hW4IXH-e3lQwKfbtmNuhZ27VTdyuaTAHkRvjtOtSU2UKDxhGAaVY5FKgtvfrAd4V9pBRaOt8m9YMwOpdJsHJDhRDd2xAWW3tkt_J9apfQUyzT-aQNZgQhVEf7SiwGeG394yHlzUFGlcpUgi3rlDfO86kMT5c0NBiHGROPIZTa0vDA0yJ06-slOQv2OcNMXbFHuFuiazwevJKgrrao2"
                />
              </div>
              <div className="flex justify-center p-4">
                <img
                  className="h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  alt="Client logo 2"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAthkSmRgtlaHUxoR4xzTatb5KCL9vzWjBhDswzHHIgMwJ_ECAojKbiMHN33mt7hbcFsbdYdbf7Pqdl3cnAr9gR7j5NnsxkpNWC9Mcp8rdiwcW9qcZig1t_3lVFA4kabZPbBg7irRaigzaOPUQnVbPqlNguc3Svo2Xu9IyZTSTDQnxPjZM__pNTaOiYZjjOkx5Kx4V-GwebxbcBA439EeeIWusU-BJI4O0Cnn9xeFAT7AiH3Cg5JvVdUqR-Bsp-dT6EcN4VWpxi-5dJ"
                />
              </div>
              <div className="flex justify-center p-4">
                <img
                  className="h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  alt="Client logo 3"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQURrm2xxcZrZkNVrQQ-9ksLN76k8hfbLHdBRdUJvIhRhLI0A60rvtRLKbr-njeGkhsZt_MZn1FIRHWPpOG-07dt5OqtAJMtzrt6s3QHQCFLHbnjvBkU28Fo7oBrCo9fpKnFDgtF2mKoHUmjRBQl2bIAUuYSkibkFQmMJROjKhaMaCUXU6yf7OOIGB9l2WttP5BHLJoCfXGFE3Q0f4UJPfKpYM7UaUxQ5J_S3tBvQV6VhPjDAC117qju_N2bvojkqA99P24JjT4S6A"
                />
              </div>
              <div className="flex justify-center p-4">
                <img
                  className="h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  alt="Client logo 4"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeyAf1UcVe54W8sfR4NUxV0C-FQyXgqfFyLRvW9ePuJOer8Z8uMJ9ogdFJjsbSb2gfK6g9Z7Bqa738E0u46iEvFhS-bQMuCqUSIknFf04CydSFYOQ-3fxQk2jnUsDNZanUHXUJ0HuEabIk8HsEWaWWfHd4QV877ZZrzGl-GKA7HecjicB7v-7m-kNbr2Hx_p5dTQrtQEFLWvTHT1KDo8fUX1U-utbYqSlv9kKPJPmEkXMc4DnwKUcwqsqyWvjS13xwHaCvovJFZ1jd"
                />
              </div>
              <div className="flex justify-center p-4">
                <img
                  className="h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  alt="Client logo 5"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAex2hz97Baa78SXAPyBRd_ILHrm_EpjamUU7YwIELk1aGRmf9tZqIg0KDJ-vpsi2R4rYHHzRhL_mFmMf51HpHY4U1iF3i5I_cFiZIAfb7Vb8Va4IBiU8qaJRkT9f3GVta9pyzwk-6KXe8HD05EoIOlMyBxpjX2zQCYms8xdjaQf5maIxElWhIGKxSgqbqSTAApqAl24k3J9e7bKXjpyQ8r3jROUN7EsVi06j3ng3xCHNuJW045RhdFktUoRn5NZAKFYuI96T0FMxPJ"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-24">
          <div className="text-center">
            <h2 className="text-[#111318] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-5 pt-5">
              Latest Insights &amp; News
            </h2>
            <p className="mt-2 text-base leading-8 text-gray-500 dark:text-gray-400">
              Stay updated with the latest trends in technology and software development.
            </p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3 sm:grid-cols-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article
              className="flex flex-col items-start justify-between bg-white dark:bg-background-dark rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="relative w-full">
                <img
                  className="aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  alt="Desk with a keyboard and a journal"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2vUa2piuMrY9IlKe5MNNirNeJ2VVTFh2TqDfsvt4MSnfVdspGI_4KWB37STVkShe-nbOneLXMXVL_qXkXNWy5jl-HepE8H6VLUpirNL71Y9fhHQWMwie2GoTjFM5n6RsumZV0gFl6Lj9OofDD55TIoQls1mgfp7dq_GdLD55YBl9X4CSGAKEGSoMi5zUh5veoXnpqcHmlcoTZ2-9J1o9nGB1Rb6s8_gAM8Mh8j2L0NqomK9NZ0tLsD2YPapuogzbIHBhn20E62UJ3"
                />
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10"></div>
              </div>
              <div className="max-w-xl mt-6">
                <div className="flex items-center gap-x-4 text-xs">
                  <time className="text-gray-500" dateTime="2023-10-26">Oct 26, 2023</time>
                  <Link className="relative z-10 rounded-full bg-primary/10 px-3 py-1.5 font-medium text-primary hover:bg-primary/20" href="#"
                  >Development</Link>

                </div>
                <div className="group relative">
                  <h3
                    className="mt-3 text-lg font-semibold leading-6 text-[#111318] dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300"
                  >
                    <Link href="#"><span className="absolute inset-0"></span>The Rise of Serverless Architecture</Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    Explore how serverless computing is changing the way we build and deploy applications, offering scalability and
                    cost-efficiency.
                  </p>
                </div>
              </div>
            </article>
            <article
              className="flex flex-col items-start justify-between bg-white dark:bg-background-dark rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="relative w-full">
                <img
                  className="aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  alt="Person typing on a laptop with code on screen"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDldPNp0mpdRIuhga28lRfHNvarNBI7IKvngjrI_vA7ehg4dzUsP6DNkteD0rWn_tgHOQB6ZsWzN9GfbfuAoiCC9p9Q5Hty3-nw50BPP7FmHBPbDk4L4OYIzQGzcd1lcDIuBMz2IOmnuO7KSRvVw5UL_VV0rXIqTXbAKw0SNrv6IYeKDpIQZItQAf-15J9OQletST8cZ7z1Krye05onWD81LVH2fDSWBiPKTIm8t80IY7zkAshL77yaQTzcXU8q-YZNGNimtQ0qkEf5"
                />
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10"></div>
              </div>
              <div className="max-w-xl mt-6">
                <div className="flex items-center gap-x-4 text-xs">
                  <time className="text-gray-500" dateTime="2023-10-24">Oct 24, 2023</time>
                  <Link className="relative z-10 rounded-full bg-primary/10 px-3 py-1.5 font-medium text-primary hover:bg-primary/20" href="#"
                  >Cybersecurity</Link>
                </div>
                <div className="group relative">
                  <h3
                    className="mt-3 text-lg font-semibold leading-6 text-[#111318] dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300"
                  >
                    <Link href="#"><span className="absolute inset-0"></span>5 Essential Cybersecurity Practices for 2024</Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    Protect your business from evolving threats with these fundamental cybersecurity measures that every organization
                    should implement.
                  </p>
                </div>
              </div>
            </article>
            <article
              className="flex flex-col items-start justify-between bg-white dark:bg-background-dark rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="relative w-full">
                <img
                  className="aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  alt="Team collaborating around a table with laptops"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdDoiM2UC9V2kTLwc7ZNoS_3zag5Jg-rb747tIlxRV6IKmzGkEsq1TRqg_JOkuDEZeZOE0X4r1M_dp7rHgOCxuqayw9vb04gMjdK5EaF4GrB6wqXi4HmoNNUgbpYR-r71O7aSQYKMws6l8t7gggu3kAtlUNw0P4Gltk6ofYTfrlow9kXHNu6u33QzndBtKPaZllU__6i6Dk49iNUqi-8QaXAoaXgULvqsiEYh4Sg9WG0tXTwo9XOXNWWl8MKQ7Svvu3kQzWpIFy2FO"
                />
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10"></div>
              </div>
              <div className="max-w-xl mt-6">
                <div className="flex items-center gap-x-4 text-xs">
                  <time className="text-gray-500" dateTime="2023-10-21">Oct 21, 2023</time>
                  <Link className="relative z-10 rounded-full bg-primary/10 px-3 py-1.5 font-medium text-primary hover:bg-primary/20" href="#"
                  >Cloud</Link>
                </div>
                <div className="group relative">
                  <h3
                    className="mt-3 text-lg font-semibold leading-6 text-[#111318] dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300"
                  >
                    <Link href="#"><span className="absolute inset-0"></span>Optimizing Cloud Costs Without Sacrificing Performance</Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    Learn effective strategies to manage and reduce your cloud infrastructure expenses while maintaining high
                    performance and reliability.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
