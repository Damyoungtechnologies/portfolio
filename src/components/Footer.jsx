import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-slate-900 dark:bg-black pt-20 pb-10 text-slate-300 border-t border-transparent dark:border-white/5 transition-colors"
    >
      <div className="container w-[90%] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 sm:gap-12 mb-16">
          {/* Brand Identity */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 bg-[#0779e4] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
                D
              </div>
              <h2 className="text-2xl font-extrabold text-white tracking-tight">
                Damyoung
              </h2>
            </div>
            <p className="text-slate-400 dark:text-slate-500 leading-relaxed max-w-xs">
              Pioneering digital solutions at the intersection of Science, Tech,
              and Leadership.
            </p>
            <div className="flex gap-4">
              {[
                {
                  name: "Facebook",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                  url: "https://www.facebook.com/adedamolasamuel.ayodeji?mibextid=ZbWKwL",
                },
                {
                  name: "X",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                    </svg>
                  ),
                  url: "https://x.com/SamuelAyodeji28",
                },
                {
                  name: "Instagram",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  ),
                  url: "https://www.instagram.com/damyoung027?igsh=MWh3a2JuaWg5MjZxdQ==",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-800 dark:bg-slate-900 text-slate-400 hover:bg-[#0779e4] hover:text-white transition-all transform hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#0779e4] rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-4">
              {["Home", "About", "Services", "Portfolio", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-slate-400 dark:text-slate-500 hover:text-[#0779e4] flex items-center gap-2 transition-colors group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-[#0779e4]"></span>
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Services Portfolio */}
          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-8 relative inline-block">
              Expertise
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#0779e4] rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                "Web Development",
                "Cyber Security",
                "Data Science",
                "Scratch Programming",
                "Software Engineering",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-slate-400 dark:text-slate-500 hover:text-[#0779e4] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-8 relative inline-block">
              Have a Query?
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#0779e4] rounded-full"></span>
            </h3>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="text-[#0779e4] mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <p className="text-slate-400 dark:text-slate-500">
                  Osun State, Nigeria
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-[#0779e4] mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <p className="text-slate-400 dark:text-slate-500">
                  +234 803 207 7924
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-[#0779e4] mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <p className="text-slate-400 dark:text-slate-500 break-all">
                  samuelayodeji027@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 dark:border-white/5 items-center gap-4 text-sm text-slate-500">
          <p className="text-center">
            © {new Date().getFullYear()} Damyoung Technologies. All rights
            reserved.
          </p>
          {/* <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
