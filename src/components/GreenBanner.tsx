"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import styles from "./GreenBanner.module.css";
import ContactModal from "./ContactModal";

export default function GreenBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={styles.section}>
        <motion.div 
          className={styles.container}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.glowBg} />
          
          <div className={styles.content}>
            <h2 className={styles.title}>
              Build. Scale. Grow Your Digital Business.
            </h2>
            <p className={styles.subtitle}>
              At Tcongs Infotech, we deliver powerful web, app, and marketing solutions designed to help your business grow faster, scale smarter, and succeed globally.
            </p>
            
            <button className={styles.ctaBtn} onClick={() => setIsModalOpen(true)}>
              Start Your Project 🚀
            </button>
          </div>

          <div className={styles.visuals}>
            <div className={styles.mediaWrapper}>
              <div className={styles.mediaOverlay}>
                <span className={styles.mediaText}>are you there?</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
