"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { LogoCloud } from "@/components/ui/logo-cloud";

const instrumentSerifClassName = "font-heading";

export type AvatarList = {
  image: string;
};

type HeroSectionProps = {
  avatarList: AvatarList[];
};

function HeroSection({ avatarList }: HeroSectionProps) {
  return (
    <section>
      <div className="w-full h-full relative">
        <div className="relative w-full pt-16 md:pt-20 pb-16 md:pb-10 px-4 transform-gpu will-change-[transform,opacity]">
          <div className="container mx-auto relative z-10">
            <div className="flex flex-col max-w-5xl mx-auto gap-8">
              <div className="relative flex flex-col text-center items-center sm:gap-6 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-primary/10 border border-primary/20 text-primary text-xs font-semibold px-4 py-1.5 rounded-full"
                >
                  India's #1 Engineering Placement Platform
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="lg:text-8xl md:text-7xl text-5xl font-medium leading-tight md:leading-tight lg:leading-tight flex flex-col items-center gap-2"
                >
                  <div className="flex flex-wrap items-center justify-center gap-x-4">
                    <span>Master</span>
                    <ContainerTextFlip
                      words={["DSA", "JAVA", "Python", "React", "C++"]}
                      className="bg-orange-500/10 dark:bg-orange-500/20 shadow-none border-none py-1 px-4 rounded-2xl min-w-[3ch] h-fit"
                      textClassName="text-white lg:text-8xl md:text-7xl text-5xl"
                    />
                  </div>
                  <span
                    className={`${instrumentSerifClassName} tracking-tight`}
                  >
                    Land Your Dream Job
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                  className="text-lg font-normal max-w-3xl text-white dark:text-white"
                >
                  Industry-certified courses, proctored exams, live projects, and direct placement support at 500+ top companies — all in one elite platform.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-black dark:text-white"
                >
                  {["Placement Guarantee", "AI Mentor", "Live Projects", "Proctored Exams"].map((feature) => (
                    <div key={feature} className="flex items-center gap-1.5">
                      <div className="size-1.5 rounded-full bg-black dark:bg-white" />
                      {feature}
                    </div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
                className="flex flex-col gap-10 items-center"
              >
                <div className="flex items-center flex-col md:flex-row justify-center gap-6">
                  <Button className="relative text-base font-semibold rounded-full h-14 p-1 ps-8 pe-16 group transition-all duration-500 hover:ps-16 hover:pe-8 w-fit overflow-hidden cursor-pointer shadow-xl shadow-primary/20">
                    <span className="relative z-10 transition-all duration-500">
                      Start Learning Free
                    </span>
                    <span className="absolute right-1 w-12 h-12 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-52px)] group-hover:rotate-45">
                      <ArrowUpRight size={20} />
                    </span>
                  </Button>

                  <Button variant="outline" className="h-14 px-8 rounded-full text-base font-semibold border-2 hover:bg-muted transition-colors cursor-pointer">
                    Talk to Mentor
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-white/10 backdrop-blur-3xl bg-transparent p-8 rounded-3xl w-full max-w-4xl">
                  {[
                    { label: "Students", value: "15K+" },
                    { label: "Companies", value: "500+" },
                    { label: "Placement", value: "98%" },
                    { label: "Certifications", value: "50+" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex flex-col items-center gap-1">
                      <span className="text-3xl font-bold tracking-tight text-white">{stat.value}</span>
                      <span className="text-xs font-medium uppercase tracking-widest text-white/70">{stat.label}</span>
                    </div>
                  ))}
                </div>

                {/* Logo Cloud Section */}
                <div className="w-full mt-12 border-t border-white/5 pt-12">
                  <LogoCloud />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
