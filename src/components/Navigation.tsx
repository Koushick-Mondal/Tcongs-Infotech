"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Hexagon, ChevronDown, Rocket } from "lucide-react";
import styles from "./Navigation.module.css";
import ContactModal from "./ContactModal";

import Magnetic from "./Magnetic";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Company", href: "#company" },
  { name: "Solution", href: "#solutions", hasDropdown: true },
  { name: "Connect", href: "#connect" },
];

export default function Navigation() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${isScrolled ? styles.glass : ""}`}
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <Hexagon className={styles.logoIcon} fill="currentColor" size={28} />
            Tcongs
          </Link>

          <div className={styles.links}>
            {NAV_LINKS.map((link) => (
              <Magnetic key={link.name} strength={0.2}>
                <Link
                  href={link.href}
                  className={styles.link}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  onClick={link.name === "Connect" ? (e) => {
                    e.preventDefault();
                    setIsModalOpen(true);
                  } : undefined}
                >
                  {link.name} {link.hasDropdown && <ChevronDown size={14} className={styles.dropdownIcon} />}
                  {hoveredLink === link.name && (
                    <motion.div
                      layoutId="nav-underline"
                      className={styles.underline}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </Link>
              </Magnetic>
            ))}
          </div>

          <Magnetic strength={0.4}>
            <button className={styles.ctaLaunch} onClick={() => setIsModalOpen(true)}>
              Launch Your Idea 🚀
            </button>
          </Magnetic>
        </div>
      </motion.nav>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
