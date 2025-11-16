import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { jobs } from "@/data/jobs";
import { notFound } from "next/navigation";
import { Calendar, MapPin, School, IndianRupee, CheckCircle } from "lucide-react";

export function generateStaticParams() {
  return jobs.map((j) => ({ id: j.id }));
}

export default function JobDetail({ params }: { params: { id: string } }) {
  const job = jobs.find((j) => j.id === params.id);
  if (!job) return notFound();

  return (
    <main>
      <Header />
      <section className="container-responsive py-6 sm:py-8">
        <div className="glass rounded-2xl p-5 sm:p-6">
          <h1 className="text-2xl sm:text-3xl font-bold">{job.title}</h1>
          <p className="text-slate-600">{job.department}</p>

          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-slate-700">
            <div className="inline-flex items-center gap-2"><MapPin className="h-4 w-4"/> {job.location}</div>
            <div className="inline-flex items-center gap-2"><School className="h-4 w-4"/> {job.education}</div>
            <div className="inline-flex items-center gap-2"><IndianRupee className="h-4 w-4"/> {job.salaryRange}</div>
            <div className="inline-flex items-center gap-2"><Calendar className="h-4 w-4"/> Apply by {new Date(job.lastDate).toLocaleDateString()}</div>
          </div>

          <p className="mt-4 text-slate-700 leading-relaxed">{job.description}</p>

          <div className="mt-6">
            <h2 className="font-semibold text-lg">How to Apply</h2>
            <ol className="mt-2 space-y-2">
              {job.steps.map((s, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-brand-600 mt-0.5"/>
                  <span className="text-slate-700">{s}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {job.tags.map((t) => (
              <span key={t} className="badge">{t}</span>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
