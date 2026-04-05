import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          AI-powered job search,{" "}
          <span className="text-blue-400">fairly compensated</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-6">
          Volume discounts encourage deep crawling — recruiters and job seekers win.
          AI recruiting agents pay per listing, with discounts as they crawl more.
        </p>
        <p className="text-gray-500 max-w-xl mx-auto mb-8">
          Job boards generate valuable structured data that AI agents consume at
          scale. HireCrawl ensures the platform earns from every page crawled,
          while volume discounts incentivize comprehensive searches.
        </p>
        <Link
          href="/jobs"
          className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors"
        >
          Browse 80 Jobs
        </Link>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-3">Pricing for AI Agents</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="flex flex-col gap-1">
            <span className="text-gray-400">Per job detail</span>
            <span className="font-mono text-blue-400">$0.001</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-400">After 10 pages</span>
            <span className="font-mono text-green-400">20% off</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-400">After 30 pages</span>
            <span className="font-mono text-green-400">40% off</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-400">After 60 pages</span>
            <span className="font-mono text-green-400">60% off</span>
          </div>
        </div>
      </div>
    </div>
  );
}
