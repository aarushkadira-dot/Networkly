"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Award, Target, Rocket, CheckCircle2, Building2, FileCheck, Users, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface GrowthFeature {
  icon: React.ElementType;
  title: string;
  description: string;
  visual: React.ReactNode;
}

const growthFeatures: GrowthFeature[] = [
  {
    icon: Target,
    title: "Track your achievements",
    description: "Build a verified profile that showcases your real impact. Networkly AI helps create a personalized roadmap to get into T20s and other top colleges.",
    visual: (
      <div className="w-full bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
            <div className="h-3 bg-gray-100 rounded w-24"></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <div className="flex-1">
              <div className="h-3 bg-green-200 rounded w-full mb-1"></div>
              <div className="h-2 bg-green-100 rounded w-2/3"></div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <div className="flex-1">
              <div className="h-3 bg-green-200 rounded w-full mb-1"></div>
              <div className="h-2 bg-green-100 rounded w-2/3"></div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="w-5 h-5 border-2 border-blue-600 rounded"></div>
            <div className="flex-1">
              <div className="h-3 bg-blue-200 rounded w-full mb-1"></div>
              <div className="h-2 bg-blue-100 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Users,
    title: "DECA, FBLA, HOSA, and more",
    description: "Excel in competitive organizations with flashcards, practice tests, and roleplay scenarios. Get mentorship from national winners. For HOSA, connect with healthcare professionals for real-time experience.",
    visual: (
      <div className="w-full bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="h-4 bg-gray-300 rounded w-32"></div>
        </div>
        <div className="space-y-3">
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="h-3 bg-blue-200 rounded w-full mb-1"></div>
                <div className="h-2 bg-blue-100 rounded w-2/3"></div>
              </div>
            </div>
          </div>
          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="h-3 bg-green-200 rounded w-full mb-1"></div>
                <div className="h-2 bg-green-100 rounded w-2/3"></div>
              </div>
            </div>
          </div>
          <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="h-3 bg-purple-200 rounded w-full mb-1"></div>
                <div className="h-2 bg-purple-100 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: BookOpen,
    title: "Level up your academic portfolio",
    description: "Track courses, projects, and academic achievements. Record professors, input PDF notes, and create personalized courses that adapt to your learning style.",
    visual: (
      <div className="w-full bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-gray-600" />
          <div className="h-4 bg-gray-300 rounded w-32"></div>
        </div>
        <div className="space-y-3">
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center">
                <FileCheck className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="h-3 bg-blue-200 rounded w-full mb-1"></div>
                <div className="h-2 bg-blue-100 rounded w-2/3"></div>
              </div>
            </div>
          </div>
          <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="h-3 bg-indigo-200 rounded w-full mb-1"></div>
                <div className="h-2 bg-indigo-100 rounded w-2/3"></div>
              </div>
            </div>
          </div>
          <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                <Rocket className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="h-3 bg-purple-200 rounded w-full mb-1"></div>
                <div className="h-2 bg-purple-100 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

function FeatureStepsAnimation({ 
  features, 
  autoPlayInterval = 4000 
}: { 
  features: GrowthFeature[];
  autoPlayInterval?: number;
}) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval]);

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16">
      {/* Left side - Animated visual */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg order-1">
        <AnimatePresence mode="wait">
          {features.map(
            (feature, index) =>
              index === currentFeature && (
                <motion.div
                  key={index}
                  className="absolute inset-0 rounded-lg overflow-hidden"
                  initial={{ y: 100, opacity: 0, rotateX: -20 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: -100, opacity: 0, rotateX: 20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="w-full h-full flex items-center justify-center p-4">
                    {feature.visual}
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>

      {/* Right side - Feature steps */}
      <div className="space-y-8 order-2">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              className="flex items-center gap-6 md:gap-8 cursor-pointer"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
              transition={{ duration: 0.5 }}
              onClick={() => {
                setCurrentFeature(index);
                setProgress(0);
              }}
            >
              <motion.div
                className={cn(
                  "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 flex-shrink-0",
                  index === currentFeature
                    ? "bg-gradient-to-br from-blue-500 to-purple-500 border-blue-400 text-white scale-110"
                    : index < currentFeature
                    ? "bg-white/10 border-white/30 text-white/70"
                    : "bg-white/5 border-white/20",
                )}
              >
                {index <= currentFeature && (
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                )}
              </motion.div>

              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function StatsGrowthSection() {
  return (
    <section className="py-24 md:py-32 bg-dark-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 border border-white/20 mb-6">
              Built for growth
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white mb-6 whitespace-nowrap">
              Get Stacked in Every Way Possible
            </h2>
          </motion.div>
        </div>

        {/* Features with Animation */}
        <FeatureStepsAnimation features={growthFeatures} />
      </div>
    </section>
  );
}


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Award, Target, Rocket, CheckCircle2, Building2, FileCheck, Users, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface GrowthFeature {
  icon: React.ElementType;
  title: string;
  description: string;
  visual: React.ReactNode;
}

const growthFeatures: GrowthFeature[] = [
  {
    icon: Target,
    title: "Track your achievements",
    description: "Build a verified profile that showcases your real impact. Networkly AI helps create a personalized roadmap to get into T20s and other top colleges.",
    visual: (
      <div className="w-full bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
            <div className="h-3 bg-gray-100 rounded w-24"></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <div className="flex-1">
              <div className="h-3 bg-green-200 rounded w-full mb-1"></div>
              <div className="h-2 bg-green-100 rounded w-2/3"></div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <div className="flex-1">
              <div className="h-3 bg-green-200 rounded w-full mb-1"></div>
              <div className="h-2 bg-green-100 rounded w-2/3"></div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="w-5 h-5 border-2 border-blue-600 rounded"></div>
            <div className="flex-1">
              <div className="h-3 bg-blue-200 rounded w-full mb-1"></div>
              <div className="h-2 bg-blue-100 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Users,
    title: "DECA, FBLA, HOSA, and more",
    description: "Excel in competitive organizations with flashcards, practice tests, and roleplay scenarios. Get mentorship from national winners. For HOSA, connect with healthcare professionals for real-time experience.",
    visual: (
      <div className="w-full bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="h-4 bg-gray-300 rounded w-32"></div>
        </div>
        <div className="space-y-3">
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="h-3 bg-blue-200 rounded w-full mb-1"></div>
                <div className="h-2 bg-blue-100 rounded w-2/3"></div>
              </div>
            </div>
          </div>
          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="h-3 bg-green-200 rounded w-full mb-1"></div>
                <div className="h-2 bg-green-100 rounded w-2/3"></div>
              </div>
            </div>
          </div>
          <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="h-3 bg-purple-200 rounded w-full mb-1"></div>
                <div className="h-2 bg-purple-100 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: BookOpen,
    title: "Level up your academic portfolio",
    description: "Track courses, projects, and academic achievements. Record professors, input PDF notes, and create personalized courses that adapt to your learning style.",
    visual: (
      <div className="w-full bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-gray-600" />
          <div className="h-4 bg-gray-300 rounded w-32"></div>
        </div>
        <div className="space-y-3">
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center">
                <FileCheck className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="h-3 bg-blue-200 rounded w-full mb-1"></div>
                <div className="h-2 bg-blue-100 rounded w-2/3"></div>
              </div>
            </div>
          </div>
          <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="h-3 bg-indigo-200 rounded w-full mb-1"></div>
                <div className="h-2 bg-indigo-100 rounded w-2/3"></div>
              </div>
            </div>
          </div>
          <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                <Rocket className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="h-3 bg-purple-200 rounded w-full mb-1"></div>
                <div className="h-2 bg-purple-100 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

function FeatureStepsAnimation({ 
  features, 
  autoPlayInterval = 4000 
}: { 
  features: GrowthFeature[];
  autoPlayInterval?: number;
}) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval]);

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16">
      {/* Left side - Animated visual */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg order-1">
        <AnimatePresence mode="wait">
          {features.map(
            (feature, index) =>
              index === currentFeature && (
                <motion.div
                  key={index}
                  className="absolute inset-0 rounded-lg overflow-hidden"
                  initial={{ y: 100, opacity: 0, rotateX: -20 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: -100, opacity: 0, rotateX: 20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="w-full h-full flex items-center justify-center p-4">
                    {feature.visual}
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>

      {/* Right side - Feature steps */}
      <div className="space-y-8 order-2">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              className="flex items-center gap-6 md:gap-8 cursor-pointer"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
              transition={{ duration: 0.5 }}
              onClick={() => {
                setCurrentFeature(index);
                setProgress(0);
              }}
            >
              <motion.div
                className={cn(
                  "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 flex-shrink-0",
                  index === currentFeature
                    ? "bg-gradient-to-br from-blue-500 to-purple-500 border-blue-400 text-white scale-110"
                    : index < currentFeature
                    ? "bg-white/10 border-white/30 text-white/70"
                    : "bg-white/5 border-white/20",
                )}
              >
                {index <= currentFeature && (
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                )}
              </motion.div>

              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function StatsGrowthSection() {
  return (
    <section className="py-24 md:py-32 bg-dark-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 border border-white/20 mb-6">
              Built for growth
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white mb-6 whitespace-nowrap">
              Get Stacked in Every Way Possible
            </h2>
          </motion.div>
        </div>

        {/* Features with Animation */}
        <FeatureStepsAnimation features={growthFeatures} />
      </div>
    </section>
  );
}
