"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import styles from "./Stats.module.css";

const stats = [
  { label: "Projects", value: 250, suffix: "+" },
  { label: "Clients", value: 100, suffix: "+" },
  { label: "Countries", value: 15, suffix: "+" },
  { label: "Satisfaction", value: 99, suffix: "%" },
];

function Counter({ from = 0, to, suffix }: { from?: number, to: number, suffix: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const node = nodeRef.current;
      if (node) {
        const controls = animate(from, to, {
          duration: 2,
          ease: "easeOut",
          onUpdate(value) {
            node.textContent = Math.round(value) + suffix;
          },
        });
        return () => controls.stop();
      }
    }
  }, [from, to, inView, suffix]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            className={styles.statItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={styles.number}>
              <Counter to={stat.value} suffix={stat.suffix} />
            </div>
            <div className={styles.label}>{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
