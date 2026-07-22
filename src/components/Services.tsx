"use client";

import { motion } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { Laptop, Code2, ShoppingCart, TrendingUp, Paintbrush, Rocket, ArrowRight } from "lucide-react";
import styles from "./Services.module.css";

const services = [
  {
    category: "FOR BUSINESSES",
    title: "Web & App Development",
    icon: Laptop,
  },
  {
    category: "CUSTOM SOLUTIONS",
    title: "Software Development",
    icon: Code2,
  },
  {
    category: "ONLINE SELLERS",
    title: "E-commerce Solutions",
    icon: ShoppingCart,
  },
  {
    category: "GROWTH FOCUSED",
    title: "Digital Marketing",
    icon: TrendingUp,
  },
  {
    category: "CREATIVE DESIGN",
    title: "Branding & UI/UX",
    icon: Paintbrush,
  },
  {
    category: "SCALING BUSINESS",
    title: "Business Growth",
    icon: Rocket,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

function ServiceCard({ service }: { service: typeof services[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div 
      ref={cardRef}
      className={styles.card}
      variants={itemVariants}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.cardSpotlight} />
      <div className={styles.cardHoverBg} />
      <div className={styles.iconWrapper}>
        <service.icon size={28} />
      </div>
      
      <p className={styles.cardCategory}>{service.category}</p>
      <h3 className={styles.cardTitle}>{service.title}</h3>
      
      <div className={styles.arrowBtn}>
        Learn More <ArrowRight size={16} className={styles.arrowIcon} />
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className={styles.section} id="solutions">
      <div className={styles.header}>
        <motion.p 
          className={styles.preTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          WE ARE GREAT AT
        </motion.p>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
        >
          Digital Solutions & Development Services
        </motion.h2>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
        >
          Scalable solutions for modern businesses
        </motion.p>
      </div>

      <motion.div 
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </motion.div>
    </section>
  );
}
