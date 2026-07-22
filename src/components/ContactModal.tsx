"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Hexagon, UserCircle } from "lucide-react";
import styles from "./ContactModal.module.css";
import { useEffect } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className={styles.modal}
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={onClose}>
              <X size={18} />
            </button>
            
            <div className={styles.modalInner}>
              <div className={styles.header}>
                <div className={styles.logo}>
                  <Hexagon className={styles.logoIcon} fill="currentColor" size={24} />
                  Tcongs
                </div>
                <h2 className={styles.title}>Let&apos;s Talk</h2>
                <p className={styles.subtitle}>
                  Tell us a bit about your project and we&apos;ll reach out shortly.
                </p>
              </div>

              <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Full Name</label>
                  <div className={styles.inputWrapper}>
                    <input type="text" placeholder="Full Name*" className={styles.input} required />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Email Address</label>
                  <input type="email" placeholder="Email Address*" className={styles.input} required />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Phone Number</label>
                  <div className={styles.inputWrapper}>
                    <div className={styles.phonePrefix}>🇮🇳 <span>▾</span></div>
                    <input type="tel" placeholder="Phone Number*" className={`${styles.input} ${styles.phoneInput}`} required />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <input type="text" placeholder="Tell us about your project*" className={styles.input} required />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Human Verification: 2 + 5 =</label>
                  <input type="text" placeholder="Enter Sum*" className={styles.input} required />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Submit Inquiry
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
