import Link from "next/link";

export default function Page() {
	return (
		<main className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 md:px-8">
            {/* HeroSection */}
            <div className="@container w-full">
              <div className="flex flex-col items-center gap-6 px-4 py-10 text-center @[480px]:gap-8 @[864px]:py-20">
                <div className="flex flex-col gap-4">
                  <h1
                    className="text-blue-deep dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[864px]:text-6xl"
                  >
                    Innovative Digital Solutions to Power Your Business
                  </h1>
                  <h2 className="text-grey-dark dark:text-gray-300 text-base font-normal leading-normal @[480px]:text-lg max-w-3xl mx-auto">
                    From custom web applications to robust cybersecurity, we build the technology that drives your success.
                  </h2>
                </div>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-blue-deep text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-blue-deep/90"
                >
                  <span className="truncate">Let's Build Your Project</span>
                </button>
              </div>
            </div>
            {/* Chips / Service Navigation */}
            <div className="flex flex-wrap items-center justify-center gap-3 p-3 overflow-x-auto">
              <a
                className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-grey-light px-4 text-grey-dark transition-colors hover:bg-violet-creative/20 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-violet-creative/30"
                href="#web-dev"
              >
                <p className="text-sm font-medium leading-normal">Web Dev</p>
              </a>
              <a
                className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-grey-light px-4 text-grey-dark transition-colors hover:bg-violet-creative/20 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-violet-creative/30"
                href="#mobile-apps"
              >
                <p className="text-sm font-medium leading-normal">Mobile Apps</p>
              </a>
              <a
                className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-grey-light px-4 text-grey-dark transition-colors hover:bg-violet-creative/20 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-violet-creative/30"
                href="#cloud-devops"
              >
                <p className="text-sm font-medium leading-normal">Cloud &amp; DevOps</p>
              </a>
              <a
                className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-grey-light px-4 text-grey-dark transition-colors hover:bg-violet-creative/20 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-violet-creative/30"
                href="#cybersecurity"
              >
                <p className="text-sm font-medium leading-normal">Cybersecurity</p>
              </a>
              <a
                className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-grey-light px-4 text-grey-dark transition-colors hover:bg-violet-creative/20 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-violet-creative/30"
                href="#it-consultancy"
              >
                <p className="text-sm font-medium leading-normal">IT Consultancy</p>
              </a>
            </div>
            {/* Services Sections */}
            <div className="flex flex-col gap-16">
              {/* Service Card: Website Development */}
              <div className="flex scroll-mt-24 flex-col gap-8 md:flex-row md:items-center" id="web-dev">
                <div className="flex w-full flex-col gap-4 md:w-1/2">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex size-12 items-center justify-center rounded-xl bg-violet-creative/10 text-violet-creative dark:bg-violet-creative/20"
                    >
                      <span className="material-symbols-outlined text-3xl">code</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-deep dark:text-white">Website Development</h3>
                  </div>
                  <p className="text-grey-dark dark:text-gray-300">
                    Creating responsive, high-performance websites and web apps focused on user experience, SEO, and scalability to elevate
                    your online presence.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> Scalable Architecture
                    </li>
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> SEO Optimized
                    </li>
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> Enhanced User Experience
                    </li>
                  </ul>
                  <Link
                    className="mt-2 font-semibold text-blue-deep transition-colors hover:text-violet-creative dark:text-violet-creative dark:hover:text-violet-creative/80"
                    href="/contact.html"
                    >Get a Quote →</Link>
                </div>
                <div
                  className="w-full rounded-xl bg-center bg-no-repeat aspect-video bg-cover md:w-1/2"
                  data-alt="Abstract gradient representing web development"
                  style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBwAxhcQhJRFhRCPvOsjjTYXLhqBKQt9kXvtubn6lxjDhwBnG6Z4UrYnuZ2ZO06gNkR0q1-NIaPtG5bmw_FPY-yy4_mBdDkth6bpyZ__qK9JTPRa5nvMdEiHfxB3LkYofdy1Zus6w_G7uPUc-NqGtewKLTgY2xRiYIClPDj1HTDHJheDe-DBhLsk2slgNxOni-QjOwpOlGnfyi7pdPlCSgRyX3jXO1cjGjlalkP0-ZFXUY6vXsUUw8_gBDgx22AZ-Yv7SS9J0tkIyOc')"}}
                  ></div>
              </div>
              {/* Service Card: Mobile App Development */}
              <div className="flex scroll-mt-24 flex-col gap-8 md:flex-row-reverse md:items-center" id="mobile-apps">
                <div className="flex w-full flex-col gap-4 md:w-1/2">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex size-12 items-center justify-center rounded-xl bg-violet-creative/10 text-violet-creative dark:bg-violet-creative/20"
                    >
                      <span className="material-symbols-outlined text-3xl">phone_iphone</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-deep dark:text-white">Mobile App Development</h3>
                  </div>
                  <p className="text-grey-dark dark:text-gray-300">
                    Building engaging native and cross-platform mobile applications to expand your market reach and foster deeper user
                    engagement on any device.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> Wider Market Reach
                    </li>
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> Native &amp; Cross-Platform
                    </li>
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> High User Engagement
                    </li>
                  </ul>
                  <a
                    className="mt-2 font-semibold text-blue-deep transition-colors hover:text-violet-creative dark:text-violet-creative dark:hover:text-violet-creative/80"
                    href="/contact.html"
                    >Get a Quote →</a
                  >
                </div>
                <div
                  className="w-full rounded-xl bg-center bg-no-repeat aspect-video bg-cover md:w-1/2"
                  data-alt="Abstract pattern representing mobile apps"
                  style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkxdqNf81rwR5oHI5FpwKyNCftJBtvEh-uZFr-W4iMxve38IAJT6B3EtQQbyMuGU0DP7RWfaEcUOgx5px8Toan4fKaVkgsy2_vicluxRBfv_vbxrlRwYiB_LHKVudM8kUVLrSEYPanZObxC5vf_DQLf1C1n3OSlLWQykfcpakXBUTlVlJ_HpWJYKTfdrN_800O-bS7cVbFvqf10C8vbChEfQX8LEr8dQgwMyL4LX6PebpZPAQK-Qrarsbb1CQdTOqNUNDjyBaQlo56')"}}
                ></div>
              </div>
              {/* Service Card: Cloud & DevOps */}
              <div className="flex scroll-mt-24 flex-col gap-8 md:flex-row md:items-center" id="cloud-devops">
                <div className="flex w-full flex-col gap-4 md:w-1/2">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex size-12 items-center justify-center rounded-xl bg-violet-creative/10 text-violet-creative dark:bg-violet-creative/20"
                    >
                      <span className="material-symbols-outlined text-3xl">cloud_upload</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-deep dark:text-white">Cloud &amp; DevOps Engineering</h3>
                  </div>
                  <p className="text-grey-dark dark:text-gray-300">
                    Optimizing your infrastructure with CI/CD, automation, and cloud solutions for unparalleled efficiency, scalability, and
                    operational reliability.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> Improved Efficiency
                    </li>
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> Infinite Scalability
                    </li>
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> Guaranteed Reliability
                    </li>
                  </ul>
                  <a
                    className="mt-2 font-semibold text-blue-deep transition-colors hover:text-violet-creative dark:text-violet-creative dark:hover:text-violet-creative/80"
                    href="/contact.html"
                    >Get a Quote →</a
                  >
                </div>
                <div
                  className="w-full rounded-xl bg-center bg-no-repeat aspect-video bg-cover md:w-1/2"
                  data-alt="Geometric shapes representing cloud infrastructure"
                  style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDCkJJTN1d5P7V5rn49pTrFtTMjoD4zjc-FR77GI6H42slwWEFqnI8pfvIHcvGcd5lNJpL2sGyVta_gXp4lZ_KR5FzLf_wnYammyCfgNdR77C8gzYrd-3_J3yOJdXUU4aV1JagNTscuMqqxeNr7zysPyeovt2RWGI4WRCUbIJRbPlgRhQXZE6BunGwnJNHtz9Xvjmpy2oiwkyr3LHRK7YyKcx-TIUj5MLG33JYM9H390yiEcSZOo7mmEUBwu0LRyDEfKHr3apm9DD9E')"}}
                ></div>
              </div>
              {/* Service Card: Cybersecurity */}
              <div className="flex scroll-mt-24 flex-col gap-8 md:flex-row-reverse md:items-center" id="cybersecurity">
                <div className="flex w-full flex-col gap-4 md:w-1/2">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex size-12 items-center justify-center rounded-xl bg-violet-creative/10 text-violet-creative dark:bg-violet-creative/20"
                    >
                      <span className="material-symbols-outlined text-3xl">shield_lock</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-deep dark:text-white">Cybersecurity</h3>
                  </div>
                  <p className="text-grey-dark dark:text-gray-300">
                    Protecting your digital assets with advanced security protocols, threat intelligence, and compliance management to
                    mitigate risks and ensure data integrity.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> Proactive Risk Mitigation
                    </li>
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> Robust Data Integrity
                    </li>
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> Compliance Assurance
                    </li>
                  </ul>
                  <a
                    className="mt-2 font-semibold text-blue-deep transition-colors hover:text-violet-creative dark:text-violet-creative dark:hover:text-violet-creative/80"
                    href="/contact.html"
                    >Get a Quote →</a
                  >
                </div>
                <div
                  className="w-full rounded-xl bg-center bg-no-repeat aspect-video bg-cover md:w-1/2"
                  data-alt="Digital shield graphic for cybersecurity"
                  style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAN4WwNf7sZWMiG0piGoeRk8p4zwG1uufyhRziGdZmNRM2cn3ZKgM6jUhmE9BdtNNuSlP346j2SmPa1ra-_IQJ4A10-LEnDnaNPZt87-VqYfQJpJQsMwlRIRvjrvMgaLSu43niYG2wOmRpajqO1iYh_CaryMbhZzQknekVR5FjpRv_bI3x3GzyYJLEUTcrZVQIu6pSbRD-G358djgs9aca0piCqmqmNzuRvBXiuDG9ky8HeSbb5eTMbSZHGVaGhyciPOgaPmhvwqKhl')"}}
                ></div>
              </div>
              {/* Service Card: IT Consultancy */}
              <div className="flex scroll-mt-24 flex-col gap-8 md:flex-row md:items-center" id="it-consultancy">
                <div className="flex w-full flex-col gap-4 md:w-1/2">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex size-12 items-center justify-center rounded-xl bg-violet-creative/10 text-violet-creative dark:bg-violet-creative/20"
                    >
                      <span className="material-symbols-outlined text-3xl">lightbulb</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-deep dark:text-white">IT Consultancy</h3>
                  </div>
                  <p className="text-grey-dark dark:text-gray-300">
                    Providing strategic technology planning and expert guidance to steer your digital transformation, optimize your return
                    on investment, and align IT with business goals.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> Guided Digital Transformation
                    </li>
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> Optimized ROI
                    </li>
                    <li className="flex items-center gap-2 text-grey-dark dark:text-gray-300">
                      <span className="material-symbols-outlined text-violet-creative text-xl">check_circle</span> Strategic Technology Planning
                    </li>
                  </ul>
                  <a
                    className="mt-2 font-semibold text-blue-deep transition-colors hover:text-violet-creative dark:text-violet-creative dark:hover:text-violet-creative/80"
                    href="/contact.html"
                    >Get a Quote →</a
                  >
                </div>
                <div
                  className="w-full rounded-xl bg-center bg-no-repeat aspect-video bg-cover md:w-1/2"
                  data-alt="Abstract visual representing strategic planning"
                  style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzebG0pEDgXw9CxxUveErf2n7PdUFjUehzGPMK3Ee64GxfgsPP4prCPdsFXBc5Ch46g6_1WnD0b51beGfsWn3atofSMjrPpvzDqcKXvV0_nbBLKW12-H5e5IHBajN7uSVJ_-GcZJfKdFiwtFBuN-66E0-jI8JdfqGvRwvUogtZKZMj8Birzr6sXf_Jzrsumb-0KUwlk5i-snduQCBDNrtGZrgm5TS32n5to6VhWrIas2W5kZORfdL1k3TiaZZ10cQZDEmwMwHcM1Zq')"}}
                ></div>
              </div>
            </div>
            {/* Central CTA Block */}
            <div className="@container w-full bg-grey-light dark:bg-gray-900 rounded-xl">
              <div
                className="flex flex-col items-center justify-center gap-6 px-4 py-10 text-center @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20"
              >
                <div className="flex flex-col gap-2">
                  <h1
                    className="text-blue-deep dark:text-white text-3xl font-bold leading-tight tracking-tight @[480px]:text-4xl @[480px]:font-black @[480px]:tracking-[-0.033em]"
                  >
                    Have an Idea? Let&apros;s Make it a Reality.
                  </h1>
                  <p className="text-grey-dark dark:text-gray-300 text-base font-normal leading-normal max-w-xl">
                    Our team is ready to partner with you to transform your vision into powerful, effective technology.
                  </p>
                </div>
                <a
                  href="/contact.html"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-violet-creative text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-violet-creative/90"
                >
                  <span className="truncate">Schedule a Free Consultation</span>
                </a>
              </div>
            </div>
            {/* FAQ Accordion */}
            <div className="mx-auto w-full max-w-3xl space-y-8 px-4 py-10">
              <h2 className="text-center text-3xl font-bold text-blue-deep dark:text-white">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details className="group rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-grey-dark dark:text-gray-200">
                    What is your development process like?
                    <span className="transition group-open:rotate-180 text-violet-creative">
                      <span className="material-symbols-outlined">expand_more</span>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-grey-dark dark:text-gray-400">
                    Our process is collaborative and transparent. We start with a discovery phase to understand your needs, followed by
                    design, development, testing, and deployment. We use agile methodologies to ensure flexibility and continuous feedback.
                  </p>
                </details>
                <details className="group rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-grey-dark dark:text-gray-200">
                    How long does a typical project take?
                    <span className="transition group-open:rotate-180 text-violet-creative">
                      <span className="material-symbols-outlined">expand_more</span>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-grey-dark dark:text-gray-400">
                    Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while a complex mobile app
                    could take 3-6 months. We provide a detailed timeline after the initial consultation.
                  </p>
                </details>
                <details className="group rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-grey-dark dark:text-gray-200">
                    What technologies do you specialize in?
                    <span className="transition group-open:rotate-180 text-violet-creative">
                      <span className="material-symbols-outlined">expand_more</span>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-grey-dark dark:text-gray-400">
                    We are proficient in a wide range of modern technologies, including React, Node.js, Python, Swift for iOS, Kotlin for
                    Android, and major cloud platforms like AWS and Azure. We select the best stack for your project&apros;s specific needs.
                  </p>
                </details>
                <details className="group rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-grey-dark dark:text-gray-200">
                    Do you provide ongoing support and maintenance?
                    <span className="transition group-open:rotate-180 text-violet-creative">
                      <span className="material-symbols-outlined">expand_more</span>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-grey-dark dark:text-gray-400">
                    Yes, we offer flexible support and maintenance packages to ensure your application remains secure, updated, and performs
                    optimally long after launch.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </main>
	);
};