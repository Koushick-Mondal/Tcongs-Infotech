"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowRight, Zap, Code2 } from "lucide-react";
import styles from "./Hero.module.css";
import { useRef } from "react";
import TextReveal from "./TextReveal";
import Magnetic from "./Magnetic";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section className={styles.hero} ref={containerRef}>
      <div className={styles.backgroundGlow} />
      
      <motion.div 
        className={styles.content}
        style={{ y: y1, opacity }}
      >
        <motion.div 
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Sparkles className={styles.badgeIcon} size={16} />
          <span>Trusted by businesses worldwide to build scalable digital solutions</span>
        </motion.div>

        <h1 className={styles.title}>
          <TextReveal text="SMART DIGITAL" delay={0.2} /> <br />
          <TextReveal text="SOLUTIONS FOR" delay={0.4} />{" "}
          <TextReveal text="MODERN BUSINESSES" delay={0.6} className="text-gradient" />
        </h1>

        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          We Help Brands Grow With Web, Apps & Marketing Solutions Across The Globe.
        </motion.p>

        <motion.div 
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Magnetic strength={0.3}>
            <button className={styles.secondaryBtn}>
              Schedule Meeting
            </button>
          </Magnetic>
          <Magnetic strength={0.3}>
            <button className={styles.secondaryBtn}>
              Services
            </button>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.div 
        className={styles.visuals}
        style={{ y: y2, scale }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.4 }}
      >
        <motion.div 
          className={styles.dashboardWrapper}
          style={{ rotateX }}
        >
          <div className={styles.dashboardMockup}>
            <div className={styles.mockupHeader}>
              <div className={styles.mockupDot} style={{ background: '#FF5F56' }} />
              <div className={styles.mockupDot} style={{ background: '#FFBD2E' }} />
              <div className={styles.mockupDot} style={{ background: '#27C93F' }} />
            </div>
            <div className={styles.mockupBody}>
              <div className={styles.mockupSidebar}>
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className={styles.mockupSidebarItem} style={{ opacity: 1 - i * 0.15 }} />
                ))}
              </div>
              <div className={styles.mockupMain}>
                <div className={styles.mockupChart} />
                <div className={styles.mockupCards}>
                  {[1, 2, 3].map(i => (
                    <div key={i} className={styles.mockupCard} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            className={`${styles.floatingCard} ${styles.floatingCard1} animate-float`}
          >
            <div className={styles.floatingCardIcon}>
              <Zap size={24} />
            </div>
            <div className={styles.floatingCardText}>
              <span className={styles.fcTitle}>Ultra Fast</span>
              <span className={styles.fcDesc}>99.9% Uptime SLA</span>
            </div>
          </motion.div>

          <motion.div 
            className={`${styles.floatingCard} ${styles.floatingCard2} animate-float`}
            style={{ animationDelay: "2s" }}
          >
            <div className={styles.floatingCardIcon}>
              <Code2 size={24} />
            </div>
            <div className={styles.floatingCardText}>
              <span className={styles.fcTitle}>Modern Stack</span>
              <span className={styles.fcDesc}>React, Next.js, Node</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
