"use client";

import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import contactStyles from "../css/contact.module.css";
import { useState } from "react";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    emailjs.init("BqXAyqQ9Ef66CbR5c"); // Initialise une seule fois
  }, []);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    try {
      const result = await emailjs.sendForm(
        "service_ig1djyl",
        "template_r81lgys",
        form.current
      );

      console.log("SUCCESS:", result.text);
      alert("✅ Message sent successfully!");
      form.current.reset();

    } catch (error) {
      console.error("FAILED:", error);
      alert("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <div className={contactStyles.contactForm}>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
        />

        <textarea
          name="message"
          rows={6}
          placeholder="Your Message..."
          required
        />

        <button type="submit" className={contactStyles.sendBtn}>
          Send Message
        </button>
      </form>
    </div>
  );
}