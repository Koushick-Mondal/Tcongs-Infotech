"use client";

import Link from "next/link";
import { Hexagon, Globe, Mail, MessageSquare } from "lucide-react";
import styles from "./Footer.module.css";

const footerLinks = {
  Product: ["Features", "Integrations", "Pricing", "Changelog", "Docs"],
  Company: ["About Us", "Careers", "Blog", "Contact", "Partners"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Hexagon className={styles.logoIcon} fill="currentColor" size={28} />
              Tcongs
            </Link>
            <p className={styles.desc}>
              Designing the future of scalable enterprise infrastructure and AI-driven platforms. Built for the modern web.
            </p>
          </div>
          
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className={styles.colTitle}>{title}</h4>
              <div className={styles.links}>
                {links.map((link) => (
                  <Link key={link} href="#" className={styles.link}>
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Tcongs Infotech. All rights reserved.</p>
          <div className={styles.socials}>
            <Link href="#" className={styles.socialLink}><Globe size={20} /></Link>
            <Link href="#" className={styles.socialLink}><Mail size={20} /></Link>
            <Link href="#" className={styles.socialLink}><MessageSquare size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
