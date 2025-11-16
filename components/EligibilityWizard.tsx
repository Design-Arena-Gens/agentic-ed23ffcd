"use client";

import { useMemo, useState } from "react";
import { jobs } from "@/data/jobs";
import { CandidateProfile, matchJobs } from "@/lib/eligibility";
import { JobCard } from "./JobCard";

export function EligibilityWizard() {
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState<CandidateProfile>({
    age: 21,
    education: "Graduate",
  });

  const results = useMemo(() => matchJobs(jobs, profile), [profile]);

  return (
    <div className="space-y-5">
      <div className="glass rounded-2xl p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-lg">Eligibility Checker</h2>
          <div className="text-sm text-slate-600">Step {step + 1} of 3</div>
        </div>

        {step === 0 && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <label className="space-y-1">
              <div className="text-sm text-slate-700">Age</div>
              <input
                type="number"
                min={16}
                max={50}
                value={profile.age}
                onChange={(e) => setProfile({ ...profile, age: Number(e.target.value) })}
                className="w-full rounded-lg border border-slate-200 px-3 py-2"
              />
            </label>
            <label className="space-y-1">
              <div className="text-sm text-slate-700">Education</div>
              <select
                className="w-full rounded-lg border border-slate-200 px-3 py-2"
                value={profile.education}
                onChange={(e) => setProfile({ ...profile, education: e.target.value as any })}
              >
                {(["10th", "12th", "Diploma", "Graduate", "Postgraduate"] as const).map((e) => (
                  <option key={e} value={e}>{e}</option>
                ))}
              </select>
            </label>
          </div>
        )}

        {step === 1 && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="space-y-1">
              <div className="text-sm text-slate-700">Preferred Category (optional)</div>
              <input
                value={profile.preferredCategory ?? ""}
                onChange={(e) => setProfile({ ...profile, preferredCategory: e.target.value || undefined })}
                placeholder="e.g., Banking, Railways, Police"
                className="w-full rounded-lg border border-slate-200 px-3 py-2"
              />
            </label>
            <label className="space-y-1">
              <div className="text-sm text-slate-700">Preferred Location (optional)</div>
              <input
                value={profile.preferredLocation ?? ""}
                onChange={(e) => setProfile({ ...profile, preferredLocation: e.target.value || undefined })}
                placeholder="e.g., Delhi, Uttar Pradesh, Pan India"
                className="w-full rounded-lg border border-slate-200 px-3 py-2"
              />
            </label>
          </div>
        )}

        {step === 2 && (
          <div className="mt-3 text-sm text-slate-700">
            Your profile will be matched to jobs using a simulated AI scoring that considers age, education, and preference alignment.
          </div>
        )}

        <div className="mt-4 flex items-center justify-between">
          <button
            className="px-3 py-2 text-sm rounded-lg border border-slate-200 hover:bg-slate-50"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
          >
            Back
          </button>
          <button
            className="btn-primary"
            onClick={() => setStep((s) => Math.min(2, s + 1))}
            disabled={step === 2}
          >
            Next
          </button>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Top Matches</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {results.slice(0, 6).map(({ job, score }) => (
            <JobCard key={job.id} job={job} score={score} />
          ))}
        </div>
      </div>
    </div>
  );
}
