import { ArrowRight, LucideIcon } from "lucide-react";
import { Box, Code, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image?: string;
  icon?: LucideIcon;
}

interface Blog7Props {
  tagline: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  posts?: Post[];
}

const defaultPosts: Post[] = [
    {
      id: "post-1",
      title: "Build websites in minutes with shadcn/ui",
      summary:
        "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
      label: "Tutorial",
      author: "Sarah Chen",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      icon: Code,
    },
    {
      id: "post-2",
      title: "Easily copy code to build your website",
      summary:
        "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
      label: "Development",
      author: "Marcus Rodriguez",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      icon: Box,
    },
    {
      id: "post-3",
      title: "The future of web design",
      summary:
        "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
      label: "Design",
      author: "Emma Thompson",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      icon: Sparkles,
    },
];

const Blog7 = ({
  tagline = "Latest Updates",
  heading = "Blog Posts",
  description = "Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.",
  buttonText = "View all articles",
  buttonUrl = "https://shadcnblocks.com",
  posts,
}: Blog7Props) => {
  const displayPosts = posts && posts.length > 0 ? posts : defaultPosts;
  
  return (
    <section className="py-24 sm:py-28 lg:py-32 bg-transparent">
      <div className="container mx-auto flex flex-col items-center gap-16 px-4 sm:px-6 lg:px-16">
        <div className="text-center max-w-3xl">
          <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
            {tagline}
          </Badge>
          <h2 className="mb-3 text-pretty text-3xl font-sans font-semibold tracking-tight md:mb-4 md:text-4xl lg:mb-6 lg:text-5xl text-white">
            {heading}
          </h2>
          <p className="mb-8 text-white/80 md:text-base lg:text-lg">
            {description}
          </p>
          <Button variant="link" className="w-full sm:w-auto text-primary hover:text-secondary" asChild>
            <a href={buttonUrl} target="_blank" rel="noreferrer" className="text-primary hover:text-secondary">
              {buttonText}
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 w-full">
          {displayPosts.map((post) => {
            const IconComponent = post.icon || Box;
            return (
              <div
                key={post.id}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white/5 backdrop-blur-sm border border-white/10 h-full hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                {/* Top Section: Dark Background with Icon */}
                <div className="bg-white/5 p-8 flex items-center justify-center aspect-[16/9] min-h-[180px] max-h-[180px] flex-shrink-0 border-b border-white/10">
                  <div className="w-16 h-16 flex items-center justify-center">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <IconComponent className="w-16 h-16 text-white" strokeWidth={1.5} fill="none" />
                    )}
                  </div>
                </div>
                
                {/* Bottom Section: Dark Background with Content */}
                <div className="bg-transparent p-6 flex flex-col flex-1 min-h-0 overflow-hidden">
                  <div className="mb-3 flex-shrink-0 overflow-hidden">
                    <h3 className="text-lg font-semibold md:text-xl text-white line-clamp-2 break-words">
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline block hover:text-primary transition-colors"
                      >
                        {post.title}
                      </a>
                    </h3>
                  </div>
                  <div className="mb-4 flex-1 min-h-0 overflow-hidden">
                    <p className="text-sm text-white/70 leading-relaxed line-clamp-3 break-words overflow-hidden">{post.summary}</p>
                  </div>
                  <div className="flex-shrink-0 mt-auto">
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center text-primary hover:text-secondary transition-colors text-sm font-medium whitespace-nowrap"
                    >
                      Read more
                      <ArrowRight className="ml-2 size-4 flex-shrink-0" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Blog7 };


