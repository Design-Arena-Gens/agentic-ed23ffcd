import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JobsBrowser } from "@/components/Filters";
import { jobs } from "@/data/jobs";

export default function JobsPage() {
  return (
    <main>
      <Header />
      <section className="container-responsive py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Browse Jobs</h1>
        <p className="text-slate-600 mt-1">Filter by category, location, and education.</p>
        <div className="mt-4">
          <JobsBrowser initialJobs={jobs} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
