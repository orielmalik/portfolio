// ===================================
// Enhanced Portfolio - Interactive Features
// ===================================

document.addEventListener('DOMContentLoaded', function () {
    initProjectModals();
    initResponsiveNav();
});

// ===================================
// Project Modals with Video Embeds
// ===================================
function initProjectModals() {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.querySelector('.modal-close');

    const projectDetails = {
        automation: {
            title: 'Automation Methods',
            subtitle: 'Enterprise-Grade Test Automation Framework',
            problem: 'QA Tool Fragmentation & Selenium-to-Playwright Migration',
            description: `
                <p>Automation Methods is a comprehensive test automation framework designed to solve one of the biggest challenges in enterprise QA: migrating from Selenium to Playwright while maintaining 100+ existing E2E tests without complete rewrites.</p>
                
                <h4>The Challenge</h4>
                <p>Large organizations face massive technical debt when test automation tools evolve. Rewriting hundreds of tests is costly, time-consuming, and risks introducing bugs. Test flakiness and slow execution plague legacy frameworks.</p>
                
                <h4>The Solution</h4>
                <p>Built a modular abstraction layer that wraps both Selenium WebDriver and Playwright APIs with unified methods. Teams can gradually migrate tests one-by-one while maintaining full backward compatibility.</p>
                
                <h4>Key Features</h4>
                <ul>
                    <li><strong>Abstraction Layer:</strong> Custom wrapper methods simplifying common testing operations, reducing code duplication by 60%</li>
                    <li><strong>Gherkin BDD Integration:</strong> Natural language test definitions for stakeholder collaboration</li>
                    <li><strong>JSON Parameterization:</strong> External test data management enabling data-driven testing at scale</li>
                    <li><strong>Multi-Browser Support:</strong> Seamless switching between Selenium and Playwright backends</li>
                    <li><strong>Reusable Component Library:</strong> Pre-built test utilities for common web interactions</li>
                </ul>
                
                <h4>Technical Architecture</h4>
                <ul>
                    <li><strong>Test Layer:</strong> Gherkin feature files and step definitions</li>
                    <li><strong>Abstraction Layer:</strong> Unified API wrapping Selenium/Playwright</li>
                    <li><strong>Driver Layer:</strong> WebDriver management and configuration</li>
                    <li><strong>Data Layer:</strong> JSON-based parameterization system</li>
                </ul>
                
                <h4>Measurable Impact</h4>
                <ul>
                    <li>✅ Reduced test flakiness by 40% through robust wait strategies</li>
                    <li>✅ Accelerated test development with 60% code reuse</li>
                    <li>✅ Enabled parallel test execution reducing CI/CD pipeline time</li>
                    <li>✅ Improved maintainability with clear separation of concerns</li>
                </ul>
            `,
            tech: ['Python', 'Selenium WebDriver', 'Playwright', 'Pytest', 'Gherkin BDD', 'JSON', 'unittest'],
            github: 'https://github.com/orielmalik/Automation-Methods',
            youtube: null
        },
        people: {
            title: 'People & Business Unit Microservice Suite',
            subtitle: 'Advanced Backend Architecture for Hierarchical Organizational Data',
            problem: 'Managing Complex Organizational Hierarchies at Enterprise Scale',
            description: `
                <p>This comprehensive microservices project suite represents production-ready backend solutions for managing people and business units in real-world enterprise contexts. The domain involves structured organizational hierarchies: business units → departments → sub-departments → employees with varying ranks/levels.</p>
                
                <h4>The Business Challenge</h4>
                <p>Enterprise HR and organizational management systems must handle deeply nested hierarchies while maintaining data integrity during operations like additions, updates, promotions, and queries. Performance at scale and flexibility for different access patterns are critical.</p>
                
                <h4>Multi-Branch Architecture Exploration</h4>
                <p>Rather than choosing a single technology stack, this project implements the <strong>identical business domain</strong> across multiple branches, each demonstrating different architectural paradigms:</p>
                
                <ul>
                    <li><strong>JPA/Hibernate Branch:</strong> Traditional relational persistence with robust entity mapping, ACID transactions, and SQL-based querying—ideal for structured enterprise data</li>
                    <li><strong>Reactive MongoDB Branch:</strong> Spring WebFlux + Reactive MongoDB for high-throughput, event-driven scenarios emphasizing scalability and non-blocking operations</li>
                    <li><strong>Kotlin Enhancement Branch:</strong> Same architectures rewritten in Kotlin for more concise, type-safe, and expressive code with full Java interoperability</li>
                    <li><strong>GraphQL Implementation:</strong> Separate repository showcasing GraphQL Java + Spring Boot for flexible, client-driven querying without over-fetching</li>
                </ul>
                
                <h4>Technical Stack Comparison</h4>
                
                <strong>Core Repository: PeopleMicroService</strong>
                <ul>
                    <li>Java + Spring Boot with RESTful OpenAPI endpoints</li>
                    <li>Gradle build system with multi-module support</li>
                    <li>Extensive JUnit test coverage (unit + integration)</li>
                    <li>Docker Compose for local development and deployment</li>
                    <li>PostgreSQL (JPA) vs Reactive MongoDB (WebFlux) branches</li>
                </ul>
                
                <strong>GraphQL Implementation Repository</strong>
                <ul>
                    <li>GraphQL Java + Spring Boot on same organizational domain</li>
                    <li>Schema-first design with introspection and strong typing</li>
                    <li>Efficient hierarchical queries (add employee to sub-department without over-fetching)</li>
                    <li>Demonstrates paradigm comparison: REST/OpenAPI vs GraphQL</li>
                </ul>
                
                <h4>Video Demonstrations</h4>
                <p>Watch comprehensive walkthroughs demonstrating the architecture in action:</p>
                
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/Wa0Oj1JCooU" 
                            title="GraphQL Implementation Demo" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen 
                            loading="lazy"></iframe>
                </div>
                
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/R4s7NfuQLvM" 
                            title="Microservices Architecture Walkthrough" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen 
                            loading="lazy"></iframe>
                </div>
                
                <h4>Why This Approach Matters</h4>
                <p>By implementing the <strong>same business logic</strong> across paradigms (blocking vs reactive, SQL vs NoSQL, Java vs Kotlin, REST vs GraphQL), this project provides:</p>
                <ul>
                    <li>🎯 Clear comparison of architectural trade-offs for production decisions</li>
                    <li>🎯 Proof of understanding multiple modern backend patterns</li>
                    <li>🎯 Demonstration of technology-agnostic problem-solving</li>
                    <li>🎯 Evidence of production-grade thinking for Israeli hi-tech roles</li>
                </ul>
                
                <h4>Business Value Delivered</h4>
                <ul>
                    <li>Scalable backend systems for real organizational structures</li>
                    <li>Maintainable architecture with clean separation of concerns</li>
                    <li>Performance optimization for different access patterns</li>
                    <li>Technology flexibility based on actual business requirements</li>
                </ul>
            `,
            tech: ['Spring Boot', 'Java', 'Kotlin', 'GraphQL', 'JPA/Hibernate', 'Spring WebFlux', 'Reactive MongoDB', 'PostgreSQL', 'Docker Compose', 'RSocket', 'OpenAPI', 'Gradle', 'JUnit'],
            github: 'https://github.com/orielmalik/PeopleMicroService',
            github2: 'https://github.com/orielmalik/graphqljava/tree/Master',
            youtube: ['Wa0Oj1JCooU', 'R4s7NfuQLvM']
        },
        zta: {
            title: 'Zero Trust Architecture',
            subtitle: 'Security Research & Enterprise ZTA Implementation',
            problem: 'Implicit Trust Vulnerabilities in Traditional Network Security',
            description: `
                <p>A comprehensive research and implementation project exploring Zero Trust Architecture (ZTA) principles—the modern security model adopted by enterprises worldwide to combat insider threats and lateral movement attacks.</p>
                
                <h4>The Security Problem</h4>
                <p>Traditional perimeter-based security assumes everything inside the network can be trusted. This creates catastrophic risks when attackers breach the perimeter or malicious insiders exist. Zero Trust challenges this with "never trust, always verify."</p>
                
                <h4>Research & Implementation Approach</h4>
                <p>Built a simulated Zero Trust environment using 0-cost infrastructure to research and validate enterprise security patterns:</p>
                
                <ul>
                    <li><strong>Security Automation:</strong> Python scripts for automated policy enforcement and continuous monitoring</li>
                    <li><strong>JWT Authentication:</strong> Stateless authentication tokens for service-to-service communication</li>
                    <li><strong>Docker Microsegmentation:</strong> Network isolation strategies using containerization</li>
                    <li><strong>Secured Kafka TCP:</strong> Encrypted messaging layer for inter-service communication</li>
                </ul>
                
                <h4>Zero Trust Core Principles Implemented</h4>
                
                <strong>1. Never Trust, Always Verify</strong>
                <ul>
                    <li>Continuous authentication for every request</li>
                    <li>No implicit trust based on network location</li>
                    <li>Session validation and token expiration</li>
                </ul>
                
                <strong>2. Least Privilege Access</strong>
                <ul>
                    <li>Minimal permissions by default</li>
                    <li>Role-based access control (RBAC)</li>
                    <li>Time-limited elevated privileges</li>
                </ul>
                
                <strong>3. Assume Breach</strong>
                <ul>
                    <li>Design for containment and recovery</li>
                    <li>Network segmentation limiting lateral movement</li>
                    <li>Audit logging for forensic analysis</li>
                </ul>
                
                <strong>4. Verify Explicitly</strong>
                <ul>
                    <li>Authenticate based on all available data points</li>
                    <li>Device health, location, behavior analytics</li>
                    <li>Multi-factor considerations</li>
                </ul>
                
                <h4>Technical Implementation</h4>
                <ul>
                    <li><strong>Python:</strong> Security automation scripts and policy enforcement engines</li>
                    <li><strong>Docker:</strong> Isolated secure environments and microsegmentation</li>
                    <li><strong>Kafka:</strong> Secured TCP communication with encryption</li>
                    <li><strong>JWT:</strong> Stateless authentication and authorization</li>
                </ul>
                
                <h4>Learning Outcomes</h4>
                <p>This project demonstrates understanding of:</p>
                <ul>
                    <li>Enterprise security architectures and modern threat models</li>
                    <li>Cryptographic protocols and secure communication</li>
                    <li>Network segmentation and isolation strategies</li>
                    <li>Security automation and policy-as-code</li>
                    <li>Research methodology for evaluating security patterns</li>
                </ul>
            `,
            tech: ['Python', 'Docker', 'Kafka', 'JWT', 'Zero Trust', 'Security Automation', 'Microsegmentation', 'Cryptography', 'Network Security'],
            github: 'https://github.com/orielmalik/ZTA',
            youtube: null
        },
        mista: {
            title: 'MISTA Platform',
            subtitle: 'B2C Expert Matching Platform - Mission Statement',
            problem: 'Fragmented Access to Professional Experts Across Industries',
            description: `
                <p>MISTA (Mission Statement) is a backend-driven B2C platform designed to bridge the gap between end users and professional service providers across all industries. The platform intelligently matches users with the right expert and guides them step-by-step through personalized task flows.</p>
                
                <h4>The Market Problem</h4>
                <p>Users seeking professional help (legal, financial, medical, career, etc.) face fragmented access to experts. Finding the right professional, understanding the process, and achieving goals requires extensive research and trial-and-error.</p>
                
                <h4>Platform Solution</h4>
                <p>Built a scalable B2C platform with intelligent matching algorithms and guided workflow systems:</p>
                
                <ul>
                    <li><strong>Intelligent Expert Matching:</strong> Algorithm-driven matching based on user needs, expert specializations, and success metrics</li>
                    <li><strong>Guided Task Flows:</strong> Step-by-step personalized workflows ensuring users complete their goals efficiently</li>
                    <li><strong>Multi-Industry Support:</strong> Flexible architecture supporting diverse professional services</li>
                    <li><strong>Scalable Backend:</strong> Java/Spring Boot infrastructure designed for growth</li>
                </ul>
                
                <h4>Technical Architecture</h4>
                
                <strong>Backend Infrastructure</strong>
                <ul>
                    <li>Java + Spring Boot for robust business logic</li>
                    <li>Gradle build system for dependency management</li>
                    <li>RESTful API design for frontend integration</li>
                    <li>Docker containerization for deployment flexibility</li>
                </ul>
                
                <strong>Key Components</strong>
                <ul>
                    <li><strong>Matching Engine:</strong> Algorithm considering expertise, availability, ratings, and user preferences</li>
                    <li><strong>Workflow System:</strong> Dynamic task flow generation based on user goals and expert methodologies</li>
                    <li><strong>Data Models:</strong> Flexible schemas supporting multiple industries and service types</li>
                    <li><strong>API Layer:</strong> Clean separation between business logic and presentation</li>
                </ul>
                
                <h4>Business Impact</h4>
                <ul>
                    <li>Connects users with relevant professional operators efficiently</li>
                    <li>Reduces time-to-goal achievement through structured guidance</li>
                    <li>Provides confidence through verified expert matching</li>
                    <li>Supports scalable multi-industry expansion</li>
                </ul>
                
                <h4>Technical Skills Demonstrated</h4>
                <ul>
                    <li>B2C platform architecture and scalability considerations</li>
                    <li>Algorithm design for matching and recommendation systems</li>
                    <li>Workflow engine implementation</li>
                    <li>Java backend development with Spring Boot</li>
                    <li>API-first design principles</li>
                </ul>
            `,
            tech: ['Java', 'Spring Boot', 'Gradle', 'Docker', 'REST API', 'Backend Architecture', 'Algorithm Design', 'B2C Platform'],
            github: 'https://github.com/orielmalik/MISTA',
            youtube: null
        },
        countries: {
            title: 'Countries Explorer API',
            subtitle: 'Type-Safe Node.js & TypeScript Backend',
            problem: 'Unreliable Geo-Data Serving with Type-Safety Issues',
            description: `
                <p>Countries Explorer is a sophisticated backend infrastructure built to serve global geographical and population data with complete type-safety. This project represents a deliberate learning journey: self-teaching TypeScript to build production-quality APIs.</p>
                
                <h4>The Learning Challenge</h4>
                <p>While experienced in Java and Python, modern web development increasingly demands TypeScript proficiency. Rather than taking courses, this project involved learning TypeScript by building a real API from scratch.</p>
                
                <h4>Technical Implementation</h4>
                
                <strong>Type-Safety First</strong>
                <ul>
                    <li><strong>Comprehensive Interfaces:</strong> Every data structure defined with TypeScript interfaces</li>
                    <li><strong>Compile-Time Validation:</strong> Catch errors before runtime through strict typing</li>
                    <li><strong>IDE Autocomplete:</strong> Rich development experience with full IntelliSense</li>
                </ul>
                
                <strong>API Design</strong>
                <ul>
                    <li><strong>RESTful Architecture:</strong> Clean, intuitive endpoints for country data, populations, borders</li>
                    <li><strong>Prisma ORM:</strong> Modern database toolkit for type-safe database access</li>
                    <li><strong>Express Framework:</strong> Scalable and efficient Node.js routing</li>
                    <li><strong>Async/Await Patterns:</strong> Modern asynchronous programming throughout</li>
                </ul>
                
                <h4>Key Features</h4>
                <ul>
                    <li>Complete geographical dataset with country information</li>
                    <li>Population statistics and historical data</li>
                    <li>Border relationships and neighboring countries</li>
                    <li>Type-safe query parameters and response formatting</li>
                    <li>Structured error handling with proper HTTP status codes</li>
                </ul>
                
                <h4>Technologies Mastered</h4>
                <ul>
                    <li><strong>TypeScript:</strong> Interfaces, types, generics, decorators</li>
                    <li><strong>Node.js:</strong> Event loop, streams, async patterns</li>
                    <li><strong>Express:</strong> Middleware, routing, error handling</li>
                    <li><strong>Prisma ORM:</strong> Schema design, migrations, type generation</li>
                    <li><strong>REST APIs:</strong> Resource design, HTTP methods, status codes</li>
                </ul>
                
                <h4>Why This Matters</h4>
                <p>This project demonstrates:</p>
                <ul>
                    <li>✅ Self-directed learning and rapid technology adoption</li>
                    <li>✅ Commitment to modern best practices (type-safety, async/await)</li>
                    <li>✅ Full-stack versatility beyond primary languages</li>
                    <li>✅ Production-ready code quality from self-taught material</li>
                </ul>
            `,
            tech: ['TypeScript', 'Node.js', 'Express', 'Prisma ORM', 'REST API', 'Async/Await', 'JSON', 'PostgreSQL'],
            github: 'https://github.com/orielmalik/countries',
            youtube: null
        },
        android: {
            title: 'Mission Statement',
            subtitle: 'Native Android App with Firebase & NLP',
            problem: 'Secure Mobile Education Matching with Data Privacy',
            description: `
                <p>Mission Statement is a native Android application developed for education and institution matching in Israel. The app demonstrates modern Android development practices including Firebase cloud integration, advanced natural language processing, data security, and sophisticated UI patterns.</p>
                
                <h4>The Mobile Challenge</h4>
                <p>Building a B2B education matching app requires handling sensitive personal data, providing smooth user experiences across device types, and integrating cloud services—all while maintaining security and performance.</p>
                
                <h4>Key Features</h4>
                
                <strong>Security Implementation</strong>
                <ul>
                    <li><strong>AES Encryption:</strong> All sensitive user data encrypted using Advanced Encryption Standard</li>
                    <li><strong>Location Services:</strong> Permission management for location-based matching</li>
                    <li><strong>Secure Storage:</strong> Local data protection with encryption at rest</li>
                </ul>
                
                <strong>Natural Language Processing</strong>
                <ul>
                    <li><strong>HANLP Integration:</strong> Han Language Processing library for text analysis</li>
                    <li><strong>Tokenization:</strong> Breaking text into meaningful units</li>
                    <li><strong>Part-of-Speech Tagging:</strong> Grammatical analysis for better matching</li>
                    <li><strong>Named Entity Recognition:</strong> Identifying institutions, programs, locations</li>
                </ul>
                
                <strong>Firebase Cloud Integration</strong>
                <ul>
                    <li><strong>Firebase Storage:</strong> Secure cloud storage for user-generated content and images</li>
                    <li><strong>Realtime Database:</strong> Real-time data synchronization ensuring consistency across all devices</li>
                    <li><strong>Cloud Messaging:</strong> Push notifications for matching updates</li>
                </ul>
                
                <h4>User Interface Components</h4>
                
                <strong>Modern Android UI Patterns</strong>
                <ul>
                    <li><strong>ViewPager:</strong> Swipeable screens for smooth navigation between fragments</li>
                    <li><strong>RecyclerView:</strong> Efficient list rendering with view recycling for optimal performance</li>
                    <li><strong>GridView:</strong> Responsive grid layouts for institution browsing</li>
                    <li><strong>Fragments:</strong> Modular UI components for dynamic, flexible designs</li>
                    <li><strong>Material Design:</strong> Following Android design guidelines</li>
                </ul>
                
                <h4>Technical Stack</h4>
                <ul>
                    <li>Java for native Android development</li>
                    <li>Android Studio as primary IDE</li>
                    <li>Firebase (Storage + Realtime Database + Auth)</li>
                    <li>HANLP for natural language processing</li>
                    <li>AES encryption library for data security</li>
                    <li>Android Location Services API</li>
                </ul>
                
                <h4>Skills Demonstrated</h4>
                <ul>
                    <li>Native Android development (Java)</li>
                    <li>Firebase cloud platform integration</li>
                    <li>Mobile security best practices</li>
                    <li>Natural language processing implementation</li>
                    <li>Modern Android UI/UX patterns</li>
                    <li>Asynchronous programming in mobile context</li>
                </ul>
            `,
            tech: ['Java', 'Android', 'Android Studio', 'Firebase Storage', 'Firebase Realtime Database', 'HANLP', 'AES Encryption', 'RecyclerView', 'ViewPager', 'Fragments', 'Material Design'],
            github: 'https://github.com/orielmalik/Mission_Statement',
            youtube: null
        }
    };

    // Make projectDetails globally accessible
    window.projectDetails = projectDetails;

    // Open modal when project card is clicked
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function () {
            const projectKey = this.getAttribute('data-project');
            const project = projectDetails[projectKey];

            if (project) {
                // Build modal content
                let modalContent = `
                    <div class="modal-problem-banner" style="color: #c5a028; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 0.5rem; font-weight: 700;">
                        Problem Solved: ${project.problem}
                    </div>
                    <h2>${project.title}</h2>
                    <p class="project-subtitle">${project.subtitle}</p>
                    <div class="modal-description">
                        ${project.description}
                    </div>
                    <div class="project-tech">
                        ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
                            <i class="fab fa-github"></i>
                            ${project.github2 ? 'Main Repository' : 'View on GitHub'}
                        </a>
                        ${project.github2 ? `
                            <a href="${project.github2}" target="_blank" rel="noopener noreferrer" class="project-link">
                                <i class="fab fa-github"></i>
                                GraphQL Implementation
                            </a>
                        ` : ''}
                        ${project.youtube ? `
                            <a href="https://www.youtube.com/@malikCode-w1s" target="_blank" rel="noopener noreferrer" class="project-link">
                                <i class="fab fa-youtube"></i>
                                More on YouTube
                            </a>
                        ` : ''}
                    </div>
                `;

                modalBody.innerHTML = modalContent;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// ===================================
// Responsive Navigation
// ===================================
function initResponsiveNav() {
    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===================================
// Console Easter Egg
// ===================================
console.log('%c👋 Hello, fellow developer!', 'font-size: 20px; font-weight: bold; color: #c5a028;');
console.log('%cLooking at the code? I appreciate your thoroughness!', 'font-size: 14px; color: #94a3b8;');
console.log('%cLet\'s build something together: oriel.malik@gmail.com', 'font-size: 14px; color: #c5a028;');
console.log('%cYouTube: @malikCode-w1s | GitHub: orielmalik', 'font-size: 12px; color: #94a3b8;');
