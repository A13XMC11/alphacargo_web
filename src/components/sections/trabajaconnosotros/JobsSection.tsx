"use client";

import { useState } from "react";
import JobCard from "./JobCard";
import ApplicationForm from "./ApplicationForm";
import type { JobListing } from "@/content/jobs";

interface JobsSectionProps {
  jobs: JobListing[];
}

export default function JobsSection({ jobs }: JobsSectionProps) {
  const [selectedJobId, setSelectedJobId] = useState("");

  function handleApply(jobId: string) {
    setSelectedJobId(jobId);
    setTimeout(() => {
      document
        .getElementById("formulario-postulacion")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  return (
    <div className="flex flex-col gap-16">
      {/* Job listings */}
      <div className="flex flex-col gap-4">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} onApply={handleApply} />
        ))}
      </div>

      {/* Application form */}
      <ApplicationForm jobs={jobs} initialJobId={selectedJobId} />
    </div>
  );
}
