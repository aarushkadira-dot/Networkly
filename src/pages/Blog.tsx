import { Blog7 } from "@/components/ui/blog7";

export default function Blog() {
  return (
    <main className="min-h-screen bg-dark-navy pt-24 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-bright-teal to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -top-10 -right-20 w-96 h-96 bg-gradient-to-br from-royal-blue to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>
      <div className="relative z-10">
        <Blog7
          tagline="Latest from Networkly"
          heading="Insights, playbooks, and student stories"
          description="Deep dives, templates, and real student journeys to help you find internships, scholarships, research, and more—without spending hours hunting across the internet."
          buttonText="View all articles"
          buttonUrl="https://www.shadcnblocks.com"
        />
      </div>
    </main>
  );
}

