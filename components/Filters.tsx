"use client";

import { useMemo, useState } from "react";
import { jobs as allJobs, Job } from "@/data/jobs";
import { JobCard } from "./JobCard";
import { Search } from "lucide-react";

export function JobsBrowser({ initialJobs }: { initialJobs?: Job[] }) {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [education, setEducation] = useState<string>("");

  const jobs = initialJobs ?? allJobs;

  const categories = useMemo(
    () => Array.from(new Set(jobs.map((j) => j.category))).sort(),
    [jobs]
  );
  const locations = useMemo(
    () => Array.from(new Set(jobs.map((j) => j.location))).sort(),
    [jobs]
  );
  const educations = useMemo(
    () => Array.from(new Set(jobs.map((j) => j.education))).sort(),
    [jobs]
  );

  const filtered = useMemo(() => {
    return jobs.filter((j) => {
      if (q) {
        const s = (j.title + j.department + j.tags.join(" ")).toLowerCase();
        if (!s.includes(q.toLowerCase())) return false;
      }
      if (category && j.category !== category) return false;
      if (location && j.location !== location) return false;
      if (education && j.education !== education) return false;
      return true;
    });
  }, [jobs, q, category, location, education]);

  return (
    <div className="space-y-4">
      <div className="glass rounded-xl p-3 sm:p-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
        <div className="col-span-2 sm:col-span-2">
          <div className="relative">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full rounded-lg border border-slate-200 pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-200"
              placeholder="Search jobs, banks, SSC..."
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          </div>
        </div>
        <select
          className="rounded-lg border border-slate-200 px-3 py-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <select
          className="rounded-lg border border-slate-200 px-3 py-2"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          {locations.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <select
          className="rounded-lg border border-slate-200 px-3 py-2 col-span-2 sm:col-span-1"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        >
          <option value="">All Education</option>
          {educations.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
        {filtered.length === 0 && (
          <div className="text-center text-slate-600 py-10">
            No jobs found. Try adjusting filters.
          </div>
        )}
      </div>
    </div>
  );
}
