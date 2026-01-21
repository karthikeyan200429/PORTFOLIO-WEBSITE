import React from 'react';
import { DownloadIcon } from './Icons';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-brand-teal-400 mb-3">{title}</h3>
    <div className="space-y-4 text-gray-300 leading-relaxed">{children}</div>
  </div>
);

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="inline-block bg-gray-700 text-brand-teal-300 rounded-full px-4 py-1 text-sm font-medium">
        {children}
    </span>
);

export const ResumePanel: React.FC = () => (
        <div className="space-y-6">
            <p className="text-base text-gray-400 text-center">You can view my resume below or download a copy for reference.</p>
            <div
                className="w-full max-w-xs sm:max-w-3xl mx-auto rounded-md sm:rounded-lg overflow-y-auto scrollbar-thin scrollbar-thumb-brand-teal-400 scrollbar-track-gray-800"
                style={{height: '700px'}}
            >
                <iframe
                    src="/Karthikeyan[resume].pdf#toolbar=0"
                    title="Resume PDF"
                    className="w-full h-full"
                    style={{border: 'none'}}
                />
            </div>
            <p className="text-sm text-gray-500 text-center mt-2">Updated: January 2026</p>
            <p>Download my resume to get a comprehensive overview of my skills, experience, and projects. Please feel free to reach out if you have any questions.</p>
            <a 
                href="/Karthikeyan[resume].pdf"
                download
                className="inline-flex items-center gap-3 px-6 py-3 font-semibold text-white bg-brand-teal-700 rounded-lg shadow-md hover:bg-brand-teal-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-teal-500 focus:ring-opacity-50"
            >
                <div className="w-6 h-6"><DownloadIcon /></div>
                Download Resume (PDF)
            </a>
        </div>
);

export const SkillsPanel: React.FC = () => (
    <div>
        <Section title="Programming Languages">
            <div className="flex flex-wrap gap-2 items-center">
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-5 h-5"/><span>Java</span></span></Pill>
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-5 h-5"/><span>Python</span></span></Pill>
            </div>
        </Section>
        <Section title="Web & App Development">
            <div className="flex flex-wrap gap-2 items-center">
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-5 h-5"/><span>HTML</span></span></Pill>
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-5 h-5"/><span>CSS</span></span></Pill>
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-5 h-5"/><span>JavaScript</span></span></Pill>
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" className="w-5 h-5"/><span>React.js</span></span></Pill>
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" className="w-5 h-5"/><span>Flutter</span></span></Pill>
            </div>
        </Section>
        <Section title="Frameworks, Backend & Databases">
            <div className="flex flex-wrap gap-2 items-center">
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" className="w-5 h-5"/><span>Spring Boot</span></span></Pill>
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" alt="Maven" className="w-5 h-5"/><span>Maven</span></span></Pill>
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" className="w-5 h-5"/><span>Flask</span></span></Pill>
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="SQLite" className="w-5 h-5"/><span>SQLite</span></span></Pill>
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-5 h-5"/><span>MongoDB</span></span></Pill>
            </div>
        </Section>
        <Section title="AI / ML & Computer Vision">
            <div className="flex flex-wrap gap-2 items-center">
                <Pill>Machine Learning</Pill>
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" alt="OpenCV" className="w-5 h-5"/><span>OpenCV</span></span></Pill>
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="w-5 h-5"/><span>TensorFlow</span></span></Pill>
                <Pill>Roboflow</Pill>
                <Pill>Speech Recognition</Pill>
                <Pill>Text-to-Speech</Pill>
            </div>
        </Section>
        <Section title="Software Tools">
            <div className="flex flex-wrap gap-2 items-center">
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-5 h-5"/><span>Git</span></span></Pill>
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-5 h-5"/><span>GitHub</span></span></Pill>
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" className="w-5 h-5"/><span>VS Code</span></span></Pill>
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" alt="PyCharm" className="w-5 h-5"/><span>PyCharm</span></span></Pill>
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" alt="IntelliJ IDEA" className="w-5 h-5"/><span>IntelliJ IDEA</span></span></Pill>
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecolab/googlecolab-original.svg" alt="Google Colab" className="w-5 h-5"/><span>Google Colab</span></span></Pill>
            </div>
        </Section>
        <Section title="Core Computer Science">
            <div className="flex flex-wrap gap-2 items-center">
                <Pill>Data Structures & Algorithms</Pill>
                <Pill>Object-Oriented Programming</Pill>
            </div>
        </Section>
        <Section title="Other Skills">
            <div className="flex flex-wrap gap-2 items-center">
                <Pill>Prompt Engineering</Pill>
                <Pill><span className="flex items-center gap-2"><img src="https://img.icons8.com/color/48/000000/ms-word.png" alt="MS Word" className="w-5 h-5"/><span>MS Word</span></span></Pill>
                <Pill><span className="flex items-center gap-2"><img src="https://img.icons8.com/color/48/000000/ms-excel.png" alt="Excel" className="w-5 h-5"/><span>Excel</span></span></Pill>
                <Pill><span className="flex items-center gap-2"><img src="https://img.icons8.com/color/48/000000/ms-powerpoint.png" alt="PowerPoint" className="w-5 h-5"/><span>PowerPoint</span></span></Pill>
            </div>
        </Section>
    </div>
);

export const ProjectsPanel: React.FC = () => (
    <div className="space-y-6">
        <Section title="1. AI-Driven Banking Security System (Attack vs Defense Simulation)">
            <p>Designed and developed an AI-driven security simulation system to model cyber-attack scenarios and defensive responses. The application enables real-time system monitoring, intrusion detection logic, and visualization of attack-versus-defense behavior.</p>
            <div className="mt-3">
                <h4 className="text-lg font-medium text-brand-teal-300 mb-2">Key Highlights:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Simulated cyber-attack and defense scenarios</li>
                    <li>Implemented intrusion detection and response logic</li>
                    <li>Real-time system status monitoring dashboard</li>
                    <li>Modular security simulation architecture</li>
                </ul>
            </div>
            <div className="mt-3">
                <h4 className="text-lg font-medium text-brand-teal-300 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                    <Pill>Python</Pill>
                    <Pill>Flask</Pill>
                </div>
            </div>
        </Section>
        <Section title="2. AI-Powered OCR System for Handwritten Historical Documents">
            <p>Built an AI-powered OCR pipeline to digitize and extract handwritten text from scanned historical documents using computer vision and deep learning techniques.</p>
            <div className="mt-3">
                <h4 className="text-lg font-medium text-brand-teal-300 mb-2">Key Highlights:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Image preprocessing for noise reduction and clarity</li>
                    <li>Handwritten text recognition using deep learning</li>
                    <li>Automated text extraction from scanned documents</li>
                    <li>Designed for digitization of archival records</li>
                </ul>
            </div>
            <div className="mt-3">
                <h4 className="text-lg font-medium text-brand-teal-300 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                    <Pill>Python</Pill>
                    <Pill>OpenCV</Pill>
                    <Pill>Deep Learning</Pill>
                </div>
            </div>
        </Section>
        <Section title="3. Robot Voice Assistant">
            <p>Developed a modular AI-powered voice assistant capable of real-time speech interaction, intent processing, and command execution using a scalable skill-based architecture.</p>
            <div className="mt-3">
                <h4 className="text-lg font-medium text-brand-teal-300 mb-2">Key Highlights:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Speech-to-text and text-to-speech processing</li>
                    <li>Intent handling and command routing engine</li>
                    <li>Skill-based modular architecture</li>
                    <li>Supports system automation and hardware integration</li>
                </ul>
            </div>
            <div className="mt-3">
                <h4 className="text-lg font-medium text-brand-teal-300 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                    <Pill>Python</Pill>
                    <Pill>Speech Recognition</Pill>
                    <Pill>Text-to-Speech</Pill>
                </div>
            </div>
        </Section>
        <Section title="4. Real-Time Face Recognition System">
            <p>Developed a real-time face recognition system with automated face data collection, dataset generation, model training, and live identity recognition using continuous camera input.</p>
            <div className="mt-3">
                <h4 className="text-lg font-medium text-brand-teal-300 mb-2">Key Highlights:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Automated facial data collection pipeline</li>
                    <li>Dataset generation and model training</li>
                    <li>Real-time multi-person face recognition</li>
                    <li>Live camera-based identity detection</li>
                </ul>
            </div>
            <div className="mt-3">
                <h4 className="text-lg font-medium text-brand-teal-300 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                    <Pill>Python</Pill>
                    <Pill>OpenCV</Pill>
                    <Pill>Computer Vision</Pill>
                </div>
            </div>
        </Section>
        <Section title="5. AI Sentiment & Grammar Analyzer">
            <p>Built an NLP-driven text analysis application to perform sentence-level sentiment classification and grammar correction using transformer-based models with a web interface.</p>
            <div className="mt-3">
                <h4 className="text-lg font-medium text-brand-teal-300 mb-2">Key Highlights:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Sentiment analysis using DistilBERT</li>
                    <li>Grammar correction using T5 model</li>
                    <li>Sentence-level text analysis</li>
                    <li>Web-based interface with visual outputs</li>
                </ul>
            </div>
            <div className="mt-3">
                <h4 className="text-lg font-medium text-brand-teal-300 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                    <Pill>Python</Pill>
                    <Pill>DistilBERT</Pill>
                    <Pill>T5</Pill>
                    <Pill>Flask</Pill>
                </div>
            </div>
        </Section>
        <Section title="6. Hand Sign Recognition System">
            <p>Designed and deployed a real-time hand sign recognition system using computer vision techniques, optimized for low-latency gesture detection on edge devices.</p>
            <div className="mt-3">
                <h4 className="text-lg font-medium text-brand-teal-300 mb-2">Key Highlights:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Real-time hand gesture detection</li>
                    <li>Gesture classification using image processing</li>
                    <li>Optimized for edge device performance</li>
                    <li>Camera-driven interaction system</li>
                </ul>
            </div>
            <div className="mt-3">
                <h4 className="text-lg font-medium text-brand-teal-300 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                    <Pill>Python</Pill>
                    <Pill>OpenCV</Pill>
                </div>
            </div>
        </Section>
        <Section title="7. Employee Management System">
            <p>Designed and implemented a scalable enterprise-level employee management system with a modular backend and responsive frontend to streamline administrative workflows.</p>
            <div className="mt-3">
                <h4 className="text-lg font-medium text-brand-teal-300 mb-2">Key Highlights:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Secure CRUD operations for employee data</li>
                    <li>Business logic validation and data integrity</li>
                    <li>Modular Spring Boot backend architecture</li>
                    <li>Responsive HTML/CSS frontend design</li>
                </ul>
            </div>
            <div className="mt-3">
                <h4 className="text-lg font-medium text-brand-teal-300 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                    <Pill>Java</Pill>
                    <Pill>Spring Boot</Pill>
                    <Pill>Maven</Pill>
                    <Pill>HTML</Pill>
                    <Pill>CSS</Pill>
                </div>
            </div>
        </Section>
        <Section title="8. Diabetes Prediction System">
            <p>Developed a machine learning–based healthcare analytics application to predict diabetes risk using user-provided health parameters with real-time results.</p>
            <div className="mt-3">
                <h4 className="text-lg font-medium text-brand-teal-300 mb-2">Key Highlights:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>ML-based health risk prediction model</li>
                    <li>Real-time user input processing</li>
                    <li>Integrated predictive logic with web interface</li>
                    <li>Responsive frontend for user interaction</li>
                </ul>
            </div>
            <div className="mt-3">
                <h4 className="text-lg font-medium text-brand-teal-300 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                    <Pill>Java</Pill>
                    <Pill>Machine Learning</Pill>
                    <Pill>React.js</Pill>
                    <Pill>Node.js</Pill>
                </div>
            </div>
        </Section>
        <Section title="9. Migrant Care System">
            <p>Developed a full-stack web platform to support migrant worker safety, identification, and verification through secure data handling mechanisms.</p>
            <div className="mt-3">
                <h4 className="text-lg font-medium text-brand-teal-300 mb-2">Key Highlights:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Secure worker data collection and storage</li>
                    <li>Worker identification and verification workflows</li>
                    <li>Administrative tracking and monitoring support</li>
                    <li>Scalable full-stack architecture</li>
                </ul>
            </div>
            <div className="mt-3">
                <h4 className="text-lg font-medium text-brand-teal-300 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                    <Pill>Java</Pill>
                    <Pill>Full-Stack Web Technologies</Pill>
                </div>
            </div>
        </Section>
        <Section title="10. Bus Ticket Management System">
            <p>Developed a Java-based application for ticket booking, passenger management, and route handling using object-oriented programming principles.</p>
            <div className="mt-3">
                <h4 className="text-lg font-medium text-brand-teal-300 mb-2">Key Highlights:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Ticket booking and reservation management</li>
                    <li>Passenger and route data handling</li>
                    <li>Modular OOP-based system design</li>
                    <li>Efficient and maintainable code structure</li>
                </ul>
            </div>
            <div className="mt-3">
                <h4 className="text-lg font-medium text-brand-teal-300 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                    <Pill>Java</Pill>
                    <Pill>Object-Oriented Programming</Pill>
                </div>
            </div>
        </Section>
    </div>
);

export const ExperiencePanel: React.FC = () => (
    <div className="space-y-6">
        <Section title="Internship Experience">
            <div className="space-y-4">
                <div>
                    <h4 className="font-bold text-white">Web Development Intern – Trio's Technology</h4>
                    <p className="text-gray-400">During this internship, I worked on designing and developing responsive web interfaces using HTML, CSS, and JavaScript. My responsibilities included improving UI performance, ensuring consistent behavior across different browsers and devices, and integrating frontend components with existing application structures. I actively participated in debugging and testing processes to identify and resolve UI-related issues, gaining hands-on experience in frontend development best practices and collaborative development workflows.</p>
                </div>
                <div>
                    <h4 className="font-bold text-white">Software Developer Intern – Make Clouds</h4>
                    <p className="text-gray-400">As a Software Developer Intern, I am involved in real-time application development and feature implementation for ongoing projects. My role includes contributing to backend logic, assisting in system workflow design, and supporting the development of scalable application components. I collaborate closely with cross-functional teams to understand requirements, implement solutions, and ensure smooth integration across system modules, gaining practical exposure to industry-level software development processes.</p>
                </div>
            </div>
        </Section>
    </div>
);

export const ContactPanel: React.FC = () => (
    <div className="space-y-6">
        <div>
            <h3 className="text-xl font-semibold text-brand-teal-400 mb-3">Get in Touch</h3>
            <p className="mb-2"><strong>📞 Phone:</strong> <a href="tel:+916380802715" className="hover:text-brand-teal-300">+91 63808 02715</a></p>
            <p><strong><span style={{display:'inline-block',verticalAlign:'middle',marginRight:'4px'}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg></span> Email:</strong> <a href="mailto:karthikeyan.p.10b@gmail.com" className="hover:text-brand-teal-300">karthikeyan.p.10b@gmail.com</a></p>
        </div>
    </div>
);