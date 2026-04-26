'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', facility: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-2">
          Get Started with Medinous HIS
        </h2>
        <p className="text-center text-slate-500 mb-12">
          Contact us today to schedule a demo and learn how we can transform your healthcare facility.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-1">Email Us</h3>
              <p className="text-slate-500 text-sm mb-2">Send us a message anytime</p>
              <a href="mailto:info@nudimeslimited.com" className="text-teal-600 hover:underline">
                info@nudimeslimited.com
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-1">Call Us</h3>
              <p className="text-slate-500 text-sm mb-2">Mon-Fri, 8AM-6PM EAT</p>
              <a href="tel:+254XXXXXXXXX" className="text-teal-600 hover:underline">
                +254 XXX XXX XXX
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-1">Request a Demo</h3>
              <p className="text-slate-500 text-sm">Fill out the form and we'll get back to you within 24 hours</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-teal-600 mb-2">Thank you!</h3>
                <p className="text-slate-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Healthcare Facility</label>
                  <input type="text" name="facility" value={formData.facility} onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea name="message" rows={4} value={formData.message} onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 resize-y" />
                </div>
                <button type="submit" className="w-full py-3 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}