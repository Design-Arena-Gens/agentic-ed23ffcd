import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Header />
      <section className="container-responsive py-6 sm:py-10">
        <div className="glass rounded-2xl p-6">
          <h1 className="text-2xl sm:text-3xl font-bold">About Rojgar AI</h1>
          <p className="mt-2 text-slate-700">
            Rojgar AI is a mobile-first platform to help candidates discover and match to government jobs using eligibility-based scoring. We bring clarity, speed, and a delightful experience to your Sarkari job search.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h2 className="font-semibold">Owner Information</h2>
              <div className="mt-2 text-slate-700 space-y-1 text-sm">
                <div><span className="font-semibold">Product Name:</span> Rojgar AI</div>
                <div><span className="font-semibold">CEO & Founder:</span> Ravi Kr. Singh</div>
                <div><span className="font-semibold">Mobile:</span> +91-7255947629</div>
                <div><span className="font-semibold">Email:</span> theutkrishti@gmail.com</div>
              </div>
            </div>
            <div>
              <h2 className="font-semibold">Our Promise</h2>
              <ul className="mt-2 list-disc pl-5 text-slate-700 text-sm space-y-1">
                <li>Up-to-date listings and curated categories</li>
                <li>Eligibility-based matching logic to prioritize best-fit jobs</li>
                <li>Clear step-by-step application guidance</li>
                <li>Fast, modern, animation-rich experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
