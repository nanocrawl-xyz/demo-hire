import Link from "next/link";
import { notFound } from "next/navigation";
import jobs from "../../../data/jobs.json";

export function generateStaticParams() {
  return jobs.map((j) => ({ id: j.id }));
}

function formatSalary(min: number, max: number): string {
  return `$${min.toLocaleString()} – $${max.toLocaleString()}`;
}

export default async function JobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <Link
        href="/jobs"
        className="text-sm text-gray-500 hover:text-gray-300 mb-6 inline-block"
      >
        &larr; All Jobs
      </Link>

      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-blue-400/10 text-blue-400">
            {job.category}
          </span>
          {job.remote && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-green-400/10 text-green-400">
              Remote
            </span>
          )}
        </div>
        <h1 className="text-3xl font-bold mb-1">{job.title}</h1>
        <p className="text-lg text-gray-400">{job.company} &middot; {job.location}</p>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-gray-500">Salary Range</div>
            <div className="text-xl font-bold text-blue-400">
              {formatSalary(job.salaryMin, job.salaryMax)}
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Posted</div>
            <div className="text-lg">{job.postedDate}</div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">About the Role</h2>
        <p className="text-gray-300 leading-relaxed">{job.description}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Requirements</h2>
        <ul className="space-y-2">
          {job.requirements.map((req, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-blue-400 mt-0.5">-</span>
              {req}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Benefits</h2>
        <ul className="space-y-2">
          {job.benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-green-400 mt-0.5">+</span>
              {b}
            </li>
          ))}
        </ul>
      </div>

      <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors">
        Apply Now
      </button>
    </div>
  );
}
