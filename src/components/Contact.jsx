import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xdapvaop");
  return (
    <section id="contact" className="contact bg-[#f8fafc] dark:bg-slate-900 py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl z-0"></div>

      <div className="w-[90%] mx-auto relative z-10">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="section-label">Get In Touch</span>
          <h1 className="gradient-text dark:!from-blue-400 dark:!to-blue-200" style={{ fontSize: "3rem", fontWeight: "900", marginBottom: "15px" }}>
            Let's Start a Conversation
          </h1>
          <p className="dark:text-slate-400 text-lg opacity-80" style={{ color: "#64748b", maxWidth: "600px", margin: "0 auto" }}>
            Whether you have a question, a project idea, or just want to say hello, my inbox is always open.
          </p>
        </div>

        <div className="contact-container mx-auto flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Contact Information Card */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="glass-card p-8 rounded-2xl h-full flex flex-col justify-between dark:!bg-slate-800/50">
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-[#0779e4] dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <h3 className="dark:text-white" style={{ fontWeight: "700", color: "#1e293b", marginBottom: "4px" }}>Location</h3>
                    <p className="dark:text-slate-400" style={{ color: "#64748b" }}>Osun State, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-[#0779e4] dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <h3 className="dark:text-white" style={{ fontWeight: "700", color: "#1e293b", marginBottom: "4px" }}>Email</h3>
                    <a
                      href="mailto:samuelayodeji027@gmail.com"
                      className="smooth-transition hover:text-[#0779e4] dark:text-slate-400 dark:hover:text-blue-400"
                      style={{ color: "#64748b", textDecoration: "none" }}
                    >
                      samuelayodeji027@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-[#0779e4] dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h3 className="dark:text-white" style={{ fontWeight: "700", color: "#1e293b", marginBottom: "4px" }}>Phone</h3>
                    <a
                      href="tel:+2348032077924"
                      className="smooth-transition hover:text-[#0779e4] dark:text-slate-400 dark:hover:text-blue-400"
                      style={{ color: "#64748b", textDecoration: "none" }}
                    >
                      +234 803 207 7924
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "40px" }}>
                <h3 className="dark:text-white" style={{ fontWeight: "700", color: "#1e293b", marginBottom: "15px" }}>Follow me</h3>
                <div className="flex gap-4">
                  {[
                    { name: "Facebook", url: "https://web.facebook.com/adedamolasamuel.ayodeji/" },
                    { name: "Twitter", url: "https://x.com/SamuelAyodeji28" },
                    { name: "Instagram", url: "https://www.instagram.com/adedamolasamuel.ayodeji" }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-100 dark:border-white/5 smooth-transition hover:border-[#0779e4] dark:hover:border-blue-400 hover:text-[#0779e4] dark:text-white shadow-sm"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="flex-[1.5]">
            <div className="glass-card p-8 rounded-2xl premium-shadow h-full dark:!bg-slate-800/50">
              {state.succeeded ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-10">
                  <div className="w-20 h-20 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <h2 className="dark:text-white" style={{ fontSize: "1.8rem", fontWeight: "800", color: "#0f172a" }}>Message Received!</h2>
                  <p className="dark:text-slate-400" style={{ color: "#64748b", maxWidth: "400px" }}>
                    Thanks for reaching out, Samuel! I'll review your message and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="mt-6 px-8 py-3 !bg-[#0779e4] text-white rounded-xl font-semibold shadow-lg shadow-blue-500/20 hover:bg-[#0566c5] transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex-1">
                      <label className="dark:text-slate-300" style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "#475569", marginBottom: "8px" }}>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/5 bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:border-[#0779e4] focus:ring-4 focus:ring-blue-50 dark:focus:ring-blue-900/20 transition-all outline-none"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>
                    <div className="flex-1">
                      <label className="dark:text-slate-300" style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "#475569", marginBottom: "8px" }}>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/5 bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:border-[#0779e4] focus:ring-4 focus:ring-blue-50 dark:focus:ring-blue-900/20 transition-all outline-none"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>
                  <div>
                    <label className="dark:text-slate-300" style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "#475569", marginBottom: "8px" }}>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/5 bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:border-[#0779e4] focus:ring-4 focus:ring-blue-50 dark:focus:ring-blue-900/20 transition-all outline-none"
                    />
                    <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>
                  <div>
                    <label className="dark:text-slate-300" style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "#475569", marginBottom: "8px" }}>Message</label>
                    <textarea
                      name="description"
                      placeholder="How can I help you today?"
                      rows={6}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/5 bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:border-[#0779e4] focus:ring-4 focus:ring-blue-50 dark:focus:ring-blue-900/20 transition-all outline-none resize-none"
                    />
                    <ValidationError prefix="Message" field="description" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full py-4 !bg-[#0779e4] text-white rounded-xl font-bold shadow-xl shadow-blue-500/20 hover:bg-[#0566c5] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    {state.submitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 overflow-hidden rounded-3xl premium-shadow glass-card p-3 dark:!bg-slate-800/30 dark:border-white/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126497.66962347066!2d4.480298696494794!3d7.784293140727144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103787e4c949b8fd%3A0x33c62c1600f59277!2sOsogbo%2C%20Osun!5e0!3m2!1sen!2sng!4v1746651350057!5m2!1sen!2sng"
            style={{
              border: 0,
              width: "100%",
              height: "450px",
              borderRadius: "20px",
              filter: "grayscale(1) invert(0.9) contrast(1.2)" 
            }}
            className="dark:invert dark:grayscale dark:contrast-125 transition-all"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
