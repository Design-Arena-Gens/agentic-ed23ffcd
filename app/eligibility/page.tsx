import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EligibilityWizard } from "@/components/EligibilityWizard";

export default function EligibilityPage() {
  return (
    <main>
      <Header />
      <section className="container-responsive py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Eligibility Matcher</h1>
        <p className="text-slate-600 mt-1">Enter your details to see matched jobs.</p>
        <div className="mt-4">
          <EligibilityWizard />
        </div>
      </section>
      <Footer />
    </main>
  );
}
