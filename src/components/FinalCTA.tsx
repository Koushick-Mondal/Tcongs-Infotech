"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <motion.div 
        className={styles.card}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.glowBg} />
        
        <div className={styles.content}>
          <h2 className={styles.title}>
            Ready to Build Your Next Product?
          </h2>
          <p className={styles.subtitle}>
            Join the most innovative companies building scalable, secure, and beautiful software on our premium infrastructure.
          </p>
          
          <button className={styles.ctaBtn}>
            Book Free Consultation <ArrowRight size={20} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
