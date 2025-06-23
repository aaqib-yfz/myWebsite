"use client";

import Image from "next/image";
import { useState, useEffect, useRef, Fragment } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

function ClientOnlySVG() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <svg
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      className="absolute inset-0 z-10"
    >
      <polygon
        points="50,0 93,25 93,75 50,100 7,75 7,25"
        fill="none"
        stroke="#55E6A5"
        strokeWidth="6"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        style={{
          strokeDasharray: 50,
          strokeDashoffset: 0,
          animation: "flow-hexagon 8s ease-in-out infinite alternate",
        }}
      />
    </svg>
  );
}

const RoundedHexClipPath = () => (
  <svg width="0" height="0">
    <defs>
      <clipPath id="roundedHex" clipPathUnits="objectBoundingBox">
        <path
          d="M0.5,0.04
          C0.57,0.04,0.64,0.08,0.7,0.12
          L0.93,0.27
          C0.97,0.3,0.97,0.37,0.97,0.43
          L0.97,0.57
          C0.97,0.63,0.97,0.7,0.93,0.73
          L0.7,0.88
          C0.64,0.92,0.57,0.96,0.5,0.96
          C0.43,0.96,0.36,0.92,0.3,0.88
          L0.07,0.73
          C0.03,0.7,0.03,0.63,0.03,0.57
          L0.03,0.43
          C0.03,0.37,0.03,0.3,0.07,0.27
          L0.3,0.12
          C0.36,0.08,0.43,0.04,0.5,0.04Z"
        />
      </clipPath>
    </defs>
  </svg>
);

function ResumeSection() {
  const [activeTab, setActiveTab] = useState("Experience");
  const [skillsTab, setSkillsTab] = useState("Automation Testing Tools");

  const navItems = [
    { label: "Experience" },
    { label: "Education" },
    { label: "Skills" },
  ];

  return (
    <section
      id="resume"
      style={{ backgroundColor: "#09101A" }}
      className="w-full flex justify-center py-8 md:py-4 px-2 sm:px-4"
    >
      <div className="w-full max-w-4xl min-h-[250px] mx-auto">
        <h2
          className="text-base sm:text-lg font-semibold text-[#55E6A5] uppercase tracking-widest mb-4 text-center"
          style={{ letterSpacing: "0.2em" }}
        >
          MY RESUME
        </h2>
        {/* Tabs Row */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className={`px-4 sm:px-6 py-2 text-sm sm:text-lg font-semibold transition-all duration-200 uppercase tracking-widest ${
                activeTab === item.label
                  ? "text-[#55E6A5] border-b-2 border-[#55E6A5]"
                  : "text-white hover:text-[#55E6A5]"
              } bg-transparent`}
              style={{ outline: "none" }}
            >
              {item.label}
            </button>
          ))}
        </div>
        {/* Main Content */}
        <div className="min-h-[320px]">
          {activeTab === "Experience" && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                {/* Experience Card 1 */}
                <div className="bg-[#141C27] p-4 sm:p-8 rounded-xl flex flex-col gap-2">
                  <span className="text-[#55E6A5] font-semibold text-base sm:text-lg">
                    2024 - Present
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Freelance SQA Engineer
                  </h3>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-[#55E6A5] text-xl">•</span> Upwork
                  </div>
                </div>
                {/* Experience Card 2 */}
                <div className="bg-[#141C27] p-4 sm:p-8 rounded-xl flex flex-col gap-2">
                  <span className="text-[#55E6A5] font-semibold text-base sm:text-lg">
                    2023 - 2024
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    SQA Engineer
                  </h3>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-[#55E6A5] text-xl">•</span> Kunskappen
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "Education" && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                {/* Education Card 1 */}
                <div className="bg-[#141C27] p-4 sm:p-8 rounded-xl flex flex-col gap-2 max-w-xl">
                  <span className="text-[#55E6A5] font-semibold text-base sm:text-lg">
                    2020 - 2024
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    BS Computer Science
                  </h3>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-[#55E6A5] text-xl">•</span> University
                    of Peshawar
                  </div>
                </div>
                {/* Education Card 2 */}
                <div className="bg-[#141C27] p-4 sm:p-8 rounded-xl flex flex-col gap-2 max-w-xl">
                  <span className="text-[#55E6A5] font-semibold text-base sm:text-lg">
                    2017 - 2019
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Pre Engineering
                  </h3>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-[#55E6A5] text-xl">•</span> Hazara
                    Public College
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "Skills" && (
            <div>
              {/* Skills Tabs */}
              <div className="flex flex-wrap gap-4 sm:gap-8 mb-4 sm:mb-8 justify-center">
                {[
                  "Automation Testing Tools",
                  "Project Management Tools",
                  "Programming Languages",
                ].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSkillsTab(tab)}
                    className={`text-xs sm:text-sm font-semibold pb-2 transition-all duration-200 uppercase tracking-widest ${
                      skillsTab === tab
                        ? "text-[#55E6A5] border-b-2 border-[#55E6A5]"
                        : "text-white hover:text-[#55E6A5]"
                    }`}
                    style={{ outline: "none", background: "none" }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 justify-center md:ml-[155px]">
                {skillsTab === "Automation Testing Tools" && (
                  <>
                    {/* Cypress */}
                    <div className="bg-[#141C27] rounded-xl flex items-center justify-center h-40 relative group">
                      <Image
                        src="/cypress.png"
                        alt="Cypress"
                        width={64}
                        height={64}
                        style={{ objectFit: "contain" }}
                        priority
                        loading="eager"
                        decoding="sync"
                      />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-[#141C27] text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 border border-[#55E6A5]">
                        Cypress
                      </div>
                    </div>
                    {/* Playwright */}
                    <div className="bg-[#141C27] rounded-xl flex items-center justify-center h-40 relative group">
                      <Image
                        src="/playwright.png"
                        alt="Playwright"
                        width={64}
                        height={64}
                        style={{ objectFit: "contain" }}
                        priority
                        loading="eager"
                        decoding="sync"
                      />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-[#141C27] text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 border border-[#55E6A5]">
                        Playwright
                      </div>
                    </div>
                    {/* Selenium */}
                    <div className="bg-[#141C27] rounded-xl flex items-center justify-center h-40 relative group">
                      <Image
                        src="/selenium.png"
                        alt="Selenium"
                        width={64}
                        height={64}
                        style={{
                          filter: "brightness(0) invert(1)",
                          objectFit: "contain",
                        }}
                        priority
                        loading="eager"
                        decoding="sync"
                      />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-[#141C27] text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 border border-[#55E6A5]">
                        Selenium
                      </div>
                    </div>
                  </>
                )}
                {skillsTab === "Project Management Tools" && (
                  <>
                    {/* Jira */}
                    <div className="bg-[#141C27] rounded-xl flex items-center justify-center h-40 relative group">
                      <Image
                        src="/Jira.png"
                        alt="Jira"
                        width={64}
                        height={64}
                        style={{ objectFit: "contain" }}
                        priority
                        loading="eager"
                        decoding="sync"
                      />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-[#141C27] text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 border border-[#55E6A5]">
                        Jira
                      </div>
                    </div>
                    {/* Swit */}
                    <div className="bg-[#141C27] rounded-xl flex items-center justify-center h-40 relative group">
                      <Image
                        src="/swit.png"
                        alt="Swit"
                        width={64}
                        height={64}
                        style={{
                          filter: "brightness(0) invert(1)",
                          objectFit: "contain",
                        }}
                        priority
                        loading="eager"
                        decoding="sync"
                      />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-[#141C27] text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 border border-[#55E6A5]">
                        Swit
                      </div>
                    </div>
                    {/* Wrike */}
                    <div className="bg-[#141C27] rounded-xl flex items-center justify-center h-40 relative group">
                      <Image
                        src="/Wrike.png"
                        alt="Wrike"
                        width={64}
                        height={64}
                        style={{ objectFit: "contain" }}
                        priority
                        loading="eager"
                        decoding="sync"
                      />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-[#141C27] text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 border border-[#55E6A5]">
                        Wrike
                      </div>
                    </div>
                  </>
                )}
                {skillsTab === "Programming Languages" && (
                  <>
                    {/* JavaScript */}
                    <div className="bg-[#141C27] rounded-xl flex items-center justify-center h-40 relative group">
                      <Image
                        src="/js.png"
                        alt="JavaScript"
                        width={64}
                        height={64}
                        style={{ objectFit: "contain" }}
                        priority
                        loading="eager"
                        decoding="sync"
                      />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-[#141C27] text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 border border-[#55E6A5]">
                        JavaScript
                      </div>
                    </div>
                    {/* Java */}
                    <div className="bg-[#141C27] rounded-xl flex items-center justify-center h-40 relative group">
                      <Image
                        src="/java2.png"
                        alt="Java"
                        width={64}
                        height={64}
                        style={{ objectFit: "contain" }}
                        priority
                        loading="eager"
                        decoding="sync"
                      />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-[#141C27] text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 border border-[#55E6A5]">
                        Java
                      </div>
                    </div>
                    {/* TypeScript */}
                    <div className="bg-[#141C27] rounded-xl flex items-center justify-center h-40 relative group">
                      <Image
                        src="/ts.png"
                        alt="TypeScript"
                        width={64}
                        height={64}
                        style={{ objectFit: "contain" }}
                        priority
                        loading="eager"
                        decoding="sync"
                      />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-[#141C27] text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 border border-[#55E6A5]">
                        TypeScript
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const currentYear = new Date().getFullYear();

  // Form state
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Preloader state
  const [loading, setLoading] = useState(true);

  // Form handlers
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const serviceID = "service_b1a0euc";
    const templateID = "template_nompc0c";
    const userID = "TXq_yf4ZO836uIk0L";

    const templateParams = {
      customer_name: `${form.firstname} ${form.lastname}`,
      customer_email: form.email,
      customer_phone: form.phone,
      selected_service: form.service,
      message: form.message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, userID);
      setStatus("Email sent successfully!");
      setForm({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      console.log(error);
      setStatus("Failed to send email. Please try again.");
    }
  };

  useEffect(() => {
    const roles = ["ANALYST", "TESTER", "ENGINEER"];
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseDuration = 1500;

    const handleTyping = () => {
      const currentRole = roles[roleIndex % roles.length];

      if (isDeleting) {
        // Deleting
        setCurrentText(currentRole.substring(0, currentText.length - 1));
      } else {
        // Typing
        setCurrentText(currentRole.substring(0, currentText.length + 1));
      }

      // Transition to deleting or next word
      if (!isDeleting && currentText === currentRole) {
        // Pause at end of word, then start deleting
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && currentText === "") {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setRoleIndex(roleIndex + 1);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Fragment>
      {/* Preloader Overlay */}
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#09101A] transition-opacity duration-700 ${
          loading
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center">
          <svg
            className="animate-spin h-16 w-16 text-[#41C88E] mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="#41C88E"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="#41C88E"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
          <span className="text-[#41C88E] text-lg font-semibold tracking-widest">
            Loading...
          </span>
        </div>
      </div>
      <main
        className={`min-h-screen w-full transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* SVG for rounded hexagon clip-path */}
        <RoundedHexClipPath />
        {/* Hero Section */}
        <section
          id="hero"
          className="relative w-full h-auto min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden"
          style={{
            backgroundImage: `url(/banner.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Decorative Circle Top Left Removed */}

          <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between px-4 md:px-20 gap-8 md:gap-0">
            {/* Top: Hexagon Image (Mobile) / Right: Hexagon Image (Desktop) */}
            <div className="flex justify-center items-center order-1 md:order-2">
              <div className="relative w-[220px] h-[240px] sm:w-[280px] sm:h-[310px] md:w-[320px] md:h-[360px] lg:w-[400px] lg:h-[440px] flex items-center justify-center">
                {/* Hexagon SVG with image and animated border */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <clipPath id="hexClip">
                      <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" />
                    </clipPath>
                  </defs>
                  <image
                    href="/aaqib2.png"
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                    clipPath="url(#hexClip)"
                    preserveAspectRatio="xMidYMid slice"
                    loading="eager"
                    decoding="sync"
                  />
                  <polygon
                    points="50,0 93,25 93,75 50,100 7,75 7,25"
                    fill="none"
                    stroke="#41C88E"
                    strokeWidth="0.8"
                    className="animate-draw-border"
                    filter="drop-shadow(0 0 3px #41C88E)"
                  />
                </svg>
              </div>
            </div>

            {/* Bottom: Text Content (Mobile) / Left: Text Content (Desktop) */}
            <div className="flex-1 flex flex-col items-start order-2 md:order-1 mt-1 md:mt-0">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 leading-tight text-center md:text-left">
                HI, I&apos;M AAQIB!
              </h1>
              <h2 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight text-center md:text-left">
                SOFTWARE QA{" "}
                <span className="text-[#55E6A5]">{currentText}</span>
              </h2>
              <p className="text-base sm:text-lg md:text-lg lg:text-lg text-gray-300 mb-6 md:mb-8 lg:mb-10 max-w-xl text-justify">
                Passionate about delivering flawless digital experiences, I
                specialize in ensuring software quality through automation,
                rigorous testing practices, and continuous improvement. With a
                strong understanding of modern QA methodologies and tools, I
                thrive on identifying critical issues early, optimizing
                workflows, and championing quality throughout the development
                lifecycle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center md:items-start w-full">
                <a
                  href="/Resume - Muhammad Aaqib.pdf"
                  target="_blank"
                  className="bg-[#55E6A5] text-[#141C27] font-bold px-8 sm:px-12 md:px-10 lg:px-12 py-3 sm:py-4 md:py-3 lg:py-4 shadow-lg hover:bg-[#41c88e] transition flex items-center gap-2 text-base sm:text-lg md:text-lg lg:text-lg w-full sm:w-auto justify-center"
                >
                  Download CV
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="#141C27"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m0 0l-6-6m6 6l6-6"
                    />
                  </svg>
                </a>
                <div className="flex gap-4">
                  {/* GitHub */}
                  <a
                    href="https://github.com/aaqib-yfz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#41C88E] flex items-center justify-center transition hover:bg-[#41C88E]/10"
                  >
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="none"
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#41C88E"
                        d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.2 22 16.448 22 12.02 22 6.484 17.523 2 12 2z"
                      />
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/aaqib-qazi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#41C88E] flex items-center justify-center transition hover:bg-[#41C88E]/10"
                  >
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="none"
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#41C88E"
                        d="M19 0h-14C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zm-9 19H5V9h5v10zm-2.5-11.268c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2zm15.5 11.268h-5v-5.5c0-1.104-.896-2-2-2s-2 .896-2 2v5.5h-5V9h5v1.268c.627-.805 1.627-1.268 2.5-1.268 1.933 0 3.5 1.567 3.5 3.5v6.5z"
                      />
                    </svg>
                  </a>
                  {/* Upwork */}
                  <a
                    href="https://www.upwork.com/freelancers/~01d34367e5e0804404?viewMode=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#41C88E] flex items-center justify-center transition hover:bg-[#41C88E]/10"
                  >
                    <span className="text-[#41C88E] font-bold text-lg">Up</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="w-full bg-black pt-40 pb-20 px-4"
          data-aos="fade-up"
        >
          <div className="text-center mb-12">
            <h3 className="text-lg font-semibold text-[#55E6A5] uppercase tracking-widest mb-2">
              MY SERVICE
            </h3>
            <h2 className="text-4xl md:text-5xl font-semibold text-white">
              Testing code, delivering flawless <br /> user experiences
            </h2>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Service Card 1: API Testing */}
            <div className="border border-gray-700 p-8 rounded-md flex flex-col items-center relative overflow-hidden group transition-all duration-300">
              <div className="text-4xl font-extrabold mb-4">
                <span
                  className="text-transparent stroke-[#55E6A5] stroke-2"
                  style={{
                    WebkitTextStroke: "2px #55E6A5",
                    color: "transparent",
                  }}
                >
                  01
                </span>
              </div>
              <h4 className="text-xl font-bold text-white uppercase mb-4 tracking-wider">
                API Testing
              </h4>
              <p className="text-gray-400 group-hover:opacity-0 transition-opacity duration-300">
                End-to-end RESTful API validation using Postman and similar
                tools.
              </p>
              {/* Hover overlay content */}
              <div className="absolute inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-left">
                <h4 className="text-xl font-bold text-[#55E6A5] uppercase mb-2 tracking-wider">
                  API Testing
                </h4>
                <p className="text-gray-200 mb-2">
                  I create and execute API test plans to ensure robust backend
                  integrations and data flows.
                </p>
                <div className="mb-2">
                  <span className="font-semibold text-white">
                    Tools & Technologies:
                  </span>
                  <ul className="list-disc list-inside text-gray-300 ml-2">
                    <li>Postman</li>
                    <li>Insomnia</li>
                    <li>Swagger</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Service Card 2: Bug Reporting */}
            <div className="border border-gray-700 p-8 rounded-md flex flex-col items-center relative overflow-hidden group transition-all duration-300">
              <div className="text-4xl font-extrabold mb-4">
                <span
                  className="text-transparent stroke-[#55E6A5] stroke-2"
                  style={{
                    WebkitTextStroke: "2px #55E6A5",
                    color: "transparent",
                  }}
                >
                  02
                </span>
              </div>
              <h4 className="text-xl font-bold text-white uppercase mb-4 tracking-wider">
                Bug Reporting
              </h4>
              <p className="text-gray-400 group-hover:opacity-0 transition-opacity duration-300">
                Well-documented, reproducible defect reports accompanied by
                relevant logs and media to facilitate efficient debugging.
              </p>
              {/* Hover overlay content */}
              <div className="absolute inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-left">
                <h4 className="text-xl font-bold text-[#55E6A5] uppercase mb-2 tracking-wider">
                  Bug Reporting
                </h4>
                <p className="text-gray-200 mb-2">
                  I write clear, actionable bug reports with steps, logs, and
                  media to help devs fix issues quickly.
                </p>
                <div>
                  <span className="font-semibold text-white">
                    Tools & Technologies:
                  </span>
                  <ul className="list-disc list-inside text-gray-300 ml-2">
                    <li>Jira</li>
                    <li>Trello</li>
                    <li>Loom</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Service Card 3: Cross Browser Testing */}
            <div className="border border-gray-700 p-8 rounded-md flex flex-col items-center relative overflow-hidden group transition-all duration-300">
              <div className="text-4xl font-extrabold mb-4">
                <span
                  className="text-transparent stroke-[#55E6A5] stroke-2"
                  style={{
                    WebkitTextStroke: "2px #55E6A5",
                    color: "transparent",
                  }}
                >
                  03
                </span>
              </div>
              <h4 className="text-xl font-bold text-white uppercase mb-4 tracking-wider">
                Cross Browser Testing
              </h4>
              <p className="text-gray-400 group-hover:opacity-0 transition-opacity duration-300">
                Conduct cross-browser and cross-device testing to guarantee
                seamless functionality and visual consistency.
              </p>
              {/* Hover overlay content */}
              <div className="absolute inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-left">
                <h4 className="text-xl font-bold text-[#55E6A5] uppercase mb-2 tracking-wider">
                  Cross Browser Testing
                </h4>
                <p className="text-gray-200 mb-2">
                  I test apps on multiple browsers and devices to ensure a
                  consistent user experience everywhere.
                </p>
                <div>
                  <span className="font-semibold text-white">
                    Tools & Technologies:
                  </span>
                  <ul className="list-disc list-inside text-gray-300 ml-2">
                    <li>BrowserStack</li>
                    <li>Sauce Labs</li>
                    <li>Device Labs</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Service Card 4: CI/CD Integration */}
            <div className="border border-gray-700 p-8 rounded-md flex flex-col items-center relative overflow-hidden group transition-all duration-300">
              <div className="text-4xl font-extrabold mb-4">
                <span
                  className="text-transparent stroke-[#55E6A5] stroke-2"
                  style={{
                    WebkitTextStroke: "2px #55E6A5",
                    color: "transparent",
                  }}
                >
                  04
                </span>
              </div>
              <h4 className="text-xl font-bold text-white uppercase mb-4 tracking-wider">
                CI/CD Integration
              </h4>
              <p className="text-gray-400 group-hover:opacity-0 transition-opacity duration-300">
                Integrated automated testing within CI/CD pipelines to
                streamline deployments and catch issues early.
              </p>
              {/* Hover overlay content */}
              <div className="absolute inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-left">
                <h4 className="text-xl font-bold text-[#55E6A5] uppercase mb-2 tracking-wider">
                  CI/CD Integration
                </h4>
                <p className="text-gray-200 mb-2">
                  I integrate automated tests into CI/CD pipelines for fast,
                  reliable deployments and feedback.
                </p>
                <div>
                  <span className="font-semibold text-white">
                    Tools & Technologies:
                  </span>
                  <ul className="list-disc list-inside text-gray-300 ml-2">
                    <li>GitHub Actions</li>
                    <li>Jenkins</li>
                    <li>CircleCI</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Service Card 5: Manual Testing */}
            <div className="border border-gray-700 p-8 rounded-md flex flex-col items-center relative overflow-hidden group transition-all duration-300">
              <div className="text-4xl font-extrabold mb-4">
                <span
                  className="text-transparent stroke-[#55E6A5] stroke-2"
                  style={{
                    WebkitTextStroke: "2px #55E6A5",
                    color: "transparent",
                  }}
                >
                  05
                </span>
              </div>
              <h4 className="text-xl font-bold text-white uppercase mb-4 tracking-wider">
                Manual Testing
              </h4>
              <p className="text-gray-400 group-hover:opacity-0 transition-opacity duration-300">
                Thorough exploratory and functional testing to uncover edge
                cases and validate core functionality.
              </p>
              {/* Hover overlay content */}
              <div className="absolute inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-left">
                <h4 className="text-xl font-bold text-[#55E6A5] uppercase mb-2 tracking-wider">
                  Manual Testing
                </h4>
                <p className="text-gray-200 mb-2">
                  I perform thorough manual testing to uncover edge cases and
                  usability issues that automation may miss.
                </p>
                <div>
                  <span className="font-semibold text-white">
                    Tools & Technologies:
                  </span>
                  <ul className="list-disc list-inside text-gray-300 ml-2">
                    <li>Jira</li>
                    <li>TestRail</li>
                    <li>Notion</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Service Card 6: Test Automation */}
            <div className="border border-gray-700 p-8 rounded-md flex flex-col items-center relative overflow-hidden group transition-all duration-300">
              <div className="text-4xl font-extrabold mb-4">
                <span
                  className="text-transparent stroke-[#55E6A5] stroke-2"
                  style={{
                    WebkitTextStroke: "2px #55E6A5",
                    color: "transparent",
                  }}
                >
                  06
                </span>
              </div>
              <h4 className="text-xl font-bold text-white uppercase mb-4 tracking-wider">
                Test Automation
              </h4>
              <p className="text-gray-400 group-hover:opacity-0 transition-opacity duration-300">
                Automated full user workflows using E2E testing tools like
                Cypress, Playwright, and Appium across web and mobile platforms.
              </p>
              {/* Hover overlay content */}
              <div className="absolute inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-left">
                <h4 className="text-xl font-bold text-[#55E6A5] uppercase mb-2 tracking-wider">
                  Test Automation
                </h4>
                <p className="text-gray-200 mb-2">
                  I design and build scalable automated test suites that catch
                  regressions early, saving time and improving product quality.
                </p>
                <div>
                  <span className="font-semibold text-white">
                    Tools & Technologies:
                  </span>
                  <ul className="list-disc list-inside text-gray-300 ml-2">
                    <li>Cypress</li>
                    <li>Playwright</li>
                    <li>Selenium</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section
          id="about"
          className="w-full bg-black py-12 md:py-20 px-4"
          data-aos="fade-up"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6 md:gap-8 order-2 md:order-1">
              <h3 className="text-base md:text-lg font-semibold text-[#55E6A5] uppercase tracking-widest text-center md:text-left">
                ABOUT ME
              </h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-center md:text-left">
                Shaping innovation through quality and precision
              </h2>
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-12 md:w-16 border-t-2 border-gray-600 mt-3 hidden md:block"></div>
                <p className="text-sm md:text-base text-gray-400 text-justify">
                  I am a results driven QA Automation Engineer with one year of
                  experience in quality assurance and test automation. I
                  specialize in developing comprehensive test suites and
                  automation frameworks that proactively identify and mitigate
                  issues, ensuring the delivery of reliable and high performing
                  software solutions.
                </p>
              </div>
              <a
                href="/Resume - Muhammad Aaqib.pdf"
                target="_blank"
                className="bg-[#55E6A5] text-[#141C27] font-bold px-6 md:px-8 py-3 shadow-lg hover:bg-[#41c88e] transition flex items-center justify-center gap-2 text-base md:text-lg self-center md:self-start"
              >
                Download CV
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </a>
            </div>

            {/* Right Content */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] flex justify-center items-center order-1 md:order-2 mb-8 md:mb-0">
              <div
                className="relative w-[250px] h-[320px] sm:w-[300px] sm:h-[380px] md:w-[350px] md:h-[450px] md:left-[90px]"
                style={{ margin: "0 auto" }}
              >
                {/* L-Shape Accent */}
                <div className="absolute top-0 right-0 w-[95%] h-[95%] border-t-[8px] sm:border-t-[10px] md:border-t-[12px] border-r-[8px] sm:border-r-[10px] md:border-r-[12px] border-[#55E6A5] z-0"></div>

                {/* Image */}
                <div className="absolute top-6 sm:top-7 md:top-8 left-0 w-[90%] h-[90%] z-10">
                  <Image
                    src="/aaqib5.JPG"
                    alt="About me"
                    fill
                    className="rounded-lg object-cover"
                    priority
                    loading="eager"
                    decoding="sync"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <ResumeSection data-aos="fade-up" />

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full bg-black py-20 px-4"
          data-aos="fade-up"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-lg font-semibold text-[#55E6A5] uppercase tracking-widest mb-4">
                CONTACT ME
              </h3>
              <h2 className="text-4xl md:text-5xl font-semibold text-white">
                Let&apos;s work together
              </h2>
            </div>

            <div className="min-h-[80vh] w-full px-2 py-4 flex flex-col gap-4 bg-black md:px-12 md:py-8 md:flex-row md:items-start md:gap-8">
              {/* Left: Form Card */}
              <div
                className="flex-1 max-w-xl rounded-xl p-2 flex flex-col gap-2 shadow-lg md:p-8 md:gap-4"
                style={{ backgroundColor: "#09101A" }}
              >
                <p className="text-sm text-gray-300 mb-4 md:text-lg">
                  Need help with QA? Let&apos;s connect and ensure your product
                  is bug-free and ready to shine.
                </p>
                <form
                  className="flex flex-col gap-3 md:gap-4"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col gap-3 md:flex-row md:gap-4">
                    <input
                      type="text"
                      name="firstname"
                      placeholder="Firstname"
                      value={form.firstname}
                      onChange={handleChange}
                      className="text-white px-4 py-3 border border-[#55E6A5] focus:outline-none w-full md:w-auto"
                      style={{ backgroundColor: "#09101A" }}
                    />
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Lastname"
                      value={form.lastname}
                      onChange={handleChange}
                      className="text-white px-4 py-3 border border-[#55E6A5] focus:outline-none w-full md:w-auto"
                      style={{ backgroundColor: "#09101A" }}
                    />
                  </div>
                  <div className="flex flex-col gap-3 md:flex-row md:gap-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      value={form.email}
                      onChange={handleChange}
                      className="text-white px-4 py-3 border border-[#55E6A5] focus:outline-none w-full md:w-auto"
                      style={{ backgroundColor: "#09101A" }}
                    />
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone number"
                      value={form.phone}
                      onChange={handleChange}
                      className="text-white px-4 py-3 border border-[#55E6A5] focus:outline-none w-full md:w-auto"
                      style={{ backgroundColor: "#09101A" }}
                    />
                  </div>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="text-white px-4 py-3 border border-[#55E6A5] focus:outline-none w-full md:w-auto"
                    style={{ backgroundColor: "#09101A" }}
                  >
                    <option value="">Select a service</option>
                    <option>Test Automation</option>
                    <option>API Testing</option>
                    <option>Manual Testing</option>
                    <option>CI/CD Integration</option>
                    <option>Bug Reporting</option>
                    <option>Cross-Device Testing</option>
                  </select>
                  <textarea
                    name="message"
                    placeholder="Type your message here."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="text-white px-4 py-3 border border-[#55E6A5] focus:outline-none w-full md:w-auto"
                    style={{ backgroundColor: "#09101A" }}
                  />
                  <button
                    type="submit"
                    className="bg-[#55E6A5] text-[#141C27] font-bold py-3 px-8 shadow-lg hover:bg-[#41c88e] transition self-start flex items-center gap-2 text-lg mt-2"
                  >
                    Send Message
                  </button>
                  {status && (
                    <div className="text-sm mt-2 text-[#55E6A5]">{status}</div>
                  )}
                </form>
              </div>

              {/* Right: Contact Info */}
              <div className="flex flex-col gap-8 text-white mt-32">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#09101A] rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#55E6A5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Location</h4>
                    <p className="text-gray-400">Peshawar, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#09101A] rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#55E6A5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-gray-400">aaqibshaheer2001@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#09101A] rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#55E6A5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Phone</h4>
                    <p className="text-gray-400">(+92) 311-5506088</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-transparent text-gray-400 text-center py-6 mt-8 border-t border-[#22292f]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 px-4">
          <span className="text-sm md:text-base">
            &copy; {currentYear} Muhammad Aaqib. All rights reserved.
          </span>
          <span className="text-xs md:text-sm">
            Made with <span className="text-[#55E6A5]">Next.js</span> &amp;{" "}
            <span className="text-[#55E6A5]">Tailwind CSS</span>
          </span>
        </div>
      </footer>
    </Fragment>
  );
}
