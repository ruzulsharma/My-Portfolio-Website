import React from "react";

const RESUME_DOWNLOAD_LINK = "https://drive.google.com/file/d/1EDjRZ8kDLF0OZvHF_QCKYXXDkPjKQTQq/view?usp=sharing";
const Resume = () => {
  return (
    // main div
       <div className="max-w-4xl mx-auto space-y-12">
        {/* Download Button Section */}
        <div className="flex justify-end pt-4">
          <a
            href={RESUME_DOWNLOAD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-yellow-500 text-gray-900 font-bold text-sm rounded-full shadow-lg hover:bg-yellow-400 transform transition duration-150 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-yellow-300"
            // Adding a visual cue if the link is not updated
            onClick={(e) => { 
                if (RESUME_DOWNLOAD_LINK === '#') { 
                    e.preventDefault(); 
                    console.error("Please replace the RESUME_DOWNLOAD_LINK placeholder with your actual Google Drive URL.");
                } 
            }}
          >
            {/* Download Icon (Lucide icon equivalent) */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            <span>Download PDF</span>
          </a>
        </div>

    <div className="font-sans text-white space-y-12">
      {/* Education */}
      <section>
        <div className="max-w-fit">
          <h2 className="text-3xl font-bold text-white">Education</h2>
          <span className="block h-1 mt-1 mb-4 w-full bg-yellow-400"></span>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">
              B.Tech in Computer Science Engineering
            </h3>
            <p className="text-sm">
              GNIOT, AKTU — Greater Noida, India (July 2020 – July 2024)
            </p>
            <p className="mt-1">CGPA: 8.0</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section>
        <div className="max-w-fit">
          <h2 className="text-3xl font-bold text-white">Experience</h2>
          <span className="block h-1 mt-1 mb-4 w-full bg-yellow-400"></span>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">
              Backend Developer – Councelere ASM Global 
            </h3>
            <p className="text-sm">Gurugram, Remote | April 2024 – Present</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Worked as a Backend sub-ordinate and worked with Java springboot, Postman, MongoDB, hands on with various librabires like streams , Apache POI for excel, etc </li>
              <li>
                Tested APIs with Postman and developed real-time features
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              Full Stack Developer – SLOG SOLUTIONS 
            </h3>
            <p className="text-sm">Jun 2023  – Aug 2023</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                Built a book management system with CRUD features using JDBC, JPA, Hibernate
              </li>
              <li>Implemented responsive UI with HTML, CSS, and JavaScript(React)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <div className="max-w-fit">
          <h2 className="text-3xl font-bold text-white">Skills</h2>
          <span className="block h-1 mt-1 mb-4 w-full bg-yellow-400"></span>
        </div>
        <div className="flex flex-wrap gap-3">
          {[
            "JAVA 8",
            "Spring Boot",
            "Hibernate",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "JavaScript",
            "React",
            "Node.js",
            "MySQL",
            "MongoDB",
            "Firebase",
            "Oracle",
            "Git",
            "Postman",
            "Bootstrap",
            "VS Code", 
            "IntelliJ", 
            "AWS (Basic)"
          ].map((skill) => (
            <span
              key={skill}
              className="border border-[#3f3d3b] text-white text-sm font-medium px-5 py-2 rounded-full shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
     </div>

  );
};

export default Resume;
