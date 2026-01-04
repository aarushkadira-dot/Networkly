import { Blog7 } from "@/components/ui/blog7";

const demoData = {
  tagline: "Latest Updates",
  heading: "From the Networkly blog",
  description:
    "Stories, playbooks, and updates on how students are finding internships, scholarships, research, and more with Networkly.",
  buttonText: "Explore all posts",
  buttonUrl: "https://www.shadcnblocks.com",
  posts: [
    {
      id: "post-1",
      title: "How students are landing internships earlier",
      summary:
        "See how high school and college students are using Networkly to discover and track competitive internships months before deadlines hit.",
      label: "Student Stories",
      author: "Jane Doe",
      published: "1 Jan 2024",
      url: "https://www.shadcnblocks.com",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "post-2",
      title: "Building a standout opportunities profile",
      summary:
        "A practical guide to turning your activities, awards, and interests into a profile that unlocks better matches and mentor support.",
      label: "Guides",
      author: "Jane Doe",
      published: "1 Jan 2024",
      url: "https://www.shadcnblocks.com",
      image:
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "post-3",
      title: "What colleges really look for in activities",
      summary:
        "We break down how admissions teams think about impact, consistency, and leadership across your extracurriculars.",
      label: "Insights",
      author: "Jane Doe",
      published: "1 Jan 2024",
      url: "https://www.shadcnblocks.com",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    },
  ],
};

function Blog7Demo() {
  return <Blog7 {...demoData} />;
}

export { Blog7Demo };





