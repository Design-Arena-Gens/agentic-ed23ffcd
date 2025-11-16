"use client";

import { Job } from "@/data/jobs";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, School } from "lucide-react";

export function JobCard({ job, score }: { job: Job; score?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="glass rounded-xl p-4 sm:p-5 space-y-3"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-slate-900 leading-snug">{job.title}</h3>
          <p className="text-sm text-slate-600">{job.department}</p>
        </div>
        {typeof score === "number" && (
          <div className="text-right">
            <div className="badge">Match: {score}%</div>
          </div>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
        <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
        <span className="inline-flex items-center gap-1"><School className="h-4 w-4" /> {job.education}</span>
        <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" /> Apply by {new Date(job.lastDate).toLocaleDateString()}</span>
      </div>
      <p className="text-sm text-slate-600 line-clamp-2">{job.description}</p>
      <div className="flex flex-wrap gap-2">
        {job.tags.slice(0, 3).map((t) => (
          <span key={t} className="badge">{t}</span>
        ))}
      </div>
      <div className="pt-1">
        <Link
          href={`/jobs/${job.id}`}
          className="inline-flex items-center gap-2 text-brand-700 font-medium"
        >
          View details <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}
