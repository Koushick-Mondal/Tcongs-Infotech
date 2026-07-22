"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { Search, Map, Palette, Code, CheckCircle2, LucideIcon, LayoutTemplate } from "lucide-react";
import styles from "./Process.module.css";

const steps = [
  {
    title: "Discovery",
    subtitle: "Business & Market Analysis",
    description: "We understand your business goals, target audience, and competitors. This helps us define the right strategy to build a strong digital foundation.",
    icon: Search,
  },
  {
    title: "Planning",
    subtitle: "Strategy & Architecture",
    description: "We create detailed project plans, user flows, and system architecture to ensure smooth development and clear execution.",
    icon: Map,
  },
  {
    title: "Design",
    subtitle: "UI/UX & Branding",
    description: "Our team designs modern, user-friendly interfaces that enhance user experience and reflect your brand identity.",
    icon: Palette,
  },
  {
    title: "Development",
    subtitle: "Web & App Development",
    description: "We build fast, scalable, and secure websites and applications using modern technologies tailored to your business needs.",
    icon: Code,
  },
  {
    title: "Testing",
    subtitle: "Quality Assurance",
    description: "We test every feature to ensure performance, security, and usability across all devices before launch.",
    icon: CheckCircle2,
  },
];

function StepItem({ 
  step, 
  index, 
  total, 
  scrollYProgress 
}: { 
  step: { title: string, subtitle: string, description: string, icon: LucideIcon }, 
  index: number, 
  total: number, 
  scrollYProgress: MotionValue<number> 
}) {
  const borderColor = useTransform(
    scrollYProgress, 
    [(index - 0.5) / total, index / total], 
    ["rgba(255, 255, 255, 0.2)", "#FF1E56"]
  );
  const backgroundColor = useTransform(
    scrollYProgress, 
    [(index - 0.5) / total, index / total], 
    ["#0B0F19", "#FF1E56"]
  );

  return (
    <motion.div 
      className={styles.step}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <motion.div 
        className={styles.stepDot}
        style={{ borderColor, backgroundColor }}
      />
      
      <div className={styles.stepNum}>0{index + 1}</div>
      <div className={styles.stepContent}>
        <h3 className={styles.stepTitle}>
          {step.title}
        </h3>
        <p className={styles.stepSubtitle}>{step.subtitle}</p>
        <p className={styles.stepDesc}>{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className={styles.section} id="process">
      <div className={styles.header}>
        <p className={styles.preTitle}>OUR PROCESS, YOUR GROWTH</p>
        <h2 className={styles.title}>From Idea to Scalable Digital Solution</h2>
        <p className={styles.headerDesc}>At Tcongs Infotech, we follow a proven process to transform your ideas into high-performing digital products. From strategy to execution, we focus on delivering scalable and result-driven solutions.</p>
      </div>

      <div className={styles.container}>
        <div className={styles.timeline} ref={timelineRef}>
          <div className={styles.lineBg} />
          <motion.div 
            className={styles.lineFill} 
            style={{ scaleY }} 
          />

          {steps.map((step, index) => (
            <StepItem 
              key={index}
              step={step}
              index={index}
              total={steps.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        <div className={styles.visuals}>
          <div className={styles.stickyBox}>
            <div className={styles.illustration}>
              <motion.div 
                className={`${styles.pulseCircle} animate-pulse-glow`}
              />
              <LayoutTemplate size={64} color="var(--text-primary)" opacity={0.8} />
              <div className={styles.wireframeMockup}>
                <div className={styles.wmHeader}></div>
                <div className={styles.wmBody}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
