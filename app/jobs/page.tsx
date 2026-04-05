"use client";

import Link from "next/link";
import { useState } from "react";
import jobs from "../../data/jobs.json";

const categories = ["All", "Engineering", "Design", "Product", "Marketing", "Data Science", "DevOps"];

function formatSalary(min: number, max: number): string {
  return `$${(min / 1000).toFixed(0)}k – $${(max / 1000).toFixed(0)}k`;
}

export default function JobsPage() {
  const [category, setCategory] = useState("All");
  const filtered = category === "All" ? jobs : jobs.filter((j) => j.category === category);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">All Jobs</h1>
        <p className="text-gray-400 text-sm">
          {jobs.length} positions. Free to browse — AI agents pay $0.001 per job detail.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
              category === cat
                ? "bg-blue-500 text-white"
                : "bg-gray-800 text-gray-400 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {filtered.map((job) => (
          <Link
            key={job.id}
            href={`/jobs/${job.id}`}
            className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-gray-600 transition-colors"
          >
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate">{job.title}</div>
              <div className="text-sm text-gray-400">{job.company}</div>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-gray-400">{job.location}</span>
              {job.remote && (
                <span className="px-2 py-0.5 rounded-full bg-green-400/10 text-green-400">
                  Remote
                </span>
              )}
              <span className="px-2 py-0.5 rounded-full bg-blue-400/10 text-blue-400">
                {job.category}
              </span>
              <span className="font-mono text-gray-300">
                {formatSalary(job.salaryMin, job.salaryMax)}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <p className="mt-6 text-xs text-gray-600 text-center">
        Showing {filtered.length} of {jobs.length} jobs
      </p>
    </div>
  );
}
