// ===================================
// Portfolio Website - Interactive Features
// ===================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    initRoleToggle();
    initProjectModals();
    initContactForm();
    initScrollAnimations();
    initMobileMenu();
});

// ===================================
// Navigation
// ===================================
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active link on scroll
    window.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===================================
// Role Toggle (Backend ⟷ QA)
// ===================================
function initRoleToggle() {
    const roleButtons = document.querySelectorAll('.role-btn');
    const roleToggle = document.querySelector('.role-toggle');
    const backendDesc = document.querySelector('.backend-desc');
    const qaDesc = document.querySelector('.qa-desc');
    const backendCard = document.querySelector('.backend-card');
    const qaCard = document.querySelector('.qa-card');
    const projectCards = document.querySelectorAll('.project-card');

    roleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const role = this.getAttribute('data-role');

            // Update active button
            roleButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Update toggle slider
            roleToggle.setAttribute('data-active', role);

            // Update descriptions
            if (role === 'backend') {
                backendDesc.classList.add('active');
                qaDesc.classList.remove('active');
                backendCard.classList.add('active');
                qaCard.classList.remove('active');
            } else {
                qaDesc.classList.add('active');
                backendDesc.classList.remove('active');
                qaCard.classList.add('active');
                backendCard.classList.remove('active');
            }

            // Highlight relevant projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (category === role || card.classList.contains('hero-project')) {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                } else {
                    card.style.opacity = '0.6';
                    card.style.transform = 'scale(0.95)';
                }
            });
        });
    });
}

// ===================================
// Project Modals
// ===================================
function initProjectModals() {
    const expandButtons = document.querySelectorAll('.btn-expand');
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.querySelector('.modal-close');

    const projectDetails = {
        automation: {
            title: 'Automation-Methods',
            subtitle: 'Enterprise-Grade Test Automation Framework',
            description: `
                <p>Automation-Methods is a comprehensive test automation framework that provides a powerful abstraction layer over Selenium and Playwright. 
                This project was designed to solve common pain points in test automation: flaky tests, difficult maintenance, and slow development cycles.</p>
                
                <h4>Key Features</h4>
                <ul>
                    <li><strong>Abstraction Layer:</strong> Custom wrapper methods that simplify common testing operations and reduce code duplication</li>
                    <li><strong>Gherkin BDD Integration:</strong> Write tests in natural language using Gherkin syntax for better collaboration with non-technical stakeholders</li>
                    <li><strong>JSON Test Data:</strong> Externalize test data into JSON files for easy maintenance and data-driven testing</li>
                    <li><strong>Multi-Browser Support:</strong> Seamlessly switch between Selenium and Playwright backends</li>
                    <li><strong>Utility Methods:</strong> Comprehensive suite of helper methods for common testing scenarios</li>
                </ul>
                
                <h4>Technical Architecture</h4>
                <p>The framework follows a layered architecture:</p>
                <ul>
                    <li><strong>Test Layer:</strong> Gherkin feature files and step definitions</li>
                    <li><strong>Abstraction Layer:</strong> Custom methods wrapping Selenium/Playwright APIs</li>
                    <li><strong>Driver Layer:</strong> WebDriver management and configuration</li>
                    <li><strong>Data Layer:</strong> JSON-based test data management</li>
                </ul>
                
                <h4>Impact</h4>
                <ul>
                    <li>Reduced test flakiness through robust wait strategies</li>
                    <li>Accelerated test development with reusable components</li>
                    <li>Improved test maintainability with clear separation of concerns</li>
                    <li>Enhanced collaboration through BDD approach</li>
                </ul>
            `,
            tech: ['Python', 'Selenium', 'Playwright', 'Gherkin', 'Pytest', 'JSON'],
            github: 'https://github.com/orielmalik/Automation-Methods',
            demo: null
        },
        mista: {
            title: 'MISTA',
            subtitle: 'Mission Statement - B2C Expert Matching Platform',
            description: `
                <p>MISTA (Mission Statement) is a backend-driven B2C platform designed to bridge the gap between 
                end users and professional service providers across all industries. The platform intelligently 
                matches users with the right expert and guides them step-by-step through personalized task flows.</p>
                
                <h4>Core Features</h4>
                <ul>
                    <li><strong>Intelligent Expert Matching:</strong> Algorithm-driven matching across multiple industries</li>
                    <li><strong>Guided Task Flows:</strong> Step-by-step personalized workflows for goal achievement</li>
                    <li><strong>Scalable Architecture:</strong> Backend infrastructure supporting multi-industry use cases</li>
                    <li><strong>Secure Platform:</strong> User-centric security and data protection</li>
                </ul>
                
                <h4>Technical Implementation</h4>
                <ul>
                    <li>Java-based backend with Gradle build system</li>
                    <li>Docker containerization for deployment flexibility</li>
                    <li>API-driven design for frontend integration</li>
                    <li>Scalable B2C platform foundations</li>
                </ul>
                
                <h4>Impact</h4>
                <ul>
                    <li>Connects users with professional operators efficiently</li>
                    <li>Reduces time to goal achievement through guided workflows</li>
                    <li>Provides confidence through expert matching</li>
                    <li>Supports multiple industries with flexible architecture</li>
                </ul>
            `,
            tech: ['Java', 'Gradle', 'Docker', 'Backend Architecture', 'B2C Platform'],
            github: 'https://github.com/orielmalik/MISTA',
            demo: null
        },
        zta: {
            title: 'ZTA',
            subtitle: 'Zero Trust Architecture Implementation',
            description: `
                <p>A comprehensive research and implementation project exploring Zero Trust Architecture (ZTA) 
                principles. This project demonstrates modern security practices including security automation, 
                robust authentication & authorization, encryption, and microsegmentation.</p>
                
                <h4>Key Components</h4>
                <ul>
                    <li><strong>Security Automation:</strong> Automated security policy enforcement and monitoring</li>
                    <li><strong>Authentication & Authorization:</strong> Multi-factor and role-based access control systems</li>
                    <li><strong>Encryption:</strong> End-to-end data protection and secure communication channels</li>
                    <li><strong>Microsegmentation:</strong> Network isolation and segmentation strategies for enhanced security</li>
                </ul>
                
                <h4>Zero Trust Principles</h4>
                <ul>
                    <li>Never trust, always verify - continuous authentication</li>
                    <li>Least privilege access - minimal permissions by default</li>
                    <li>Assume breach - design for containment and recovery</li>
                    <li>Verify explicitly - authenticate and authorize based on all available data points</li>
                </ul>
                
                <h4>Technologies</h4>
                <ul>
                    <li>Python for security automation scripts and policy enforcement</li>
                    <li>Docker for isolated secure environments and containerization</li>
                    <li>Zero Trust security frameworks and best practices</li>
                    <li>Multi-language implementation for flexibility and integration</li>
                </ul>
            `,
            tech: ['Python', 'Docker', 'Security Automation', 'Zero Trust', 'Authentication', 'Microsegmentation'],
            github: 'https://github.com/orielmalik/ZTA',
            demo: null
        },
        people: {
            title: 'People & Business Unit Microservice Suite',
            subtitle: 'Advanced Backend Architecture for Hierarchical Organizational Data Management',
            description: `
                <p>This project suite represents a comprehensive exploration of microservices design for managing people and business units 
                in a real-world enterprise context. The core domain revolves around structured organizational hierarchies: business units, 
                departments, sub-departments, employees with varying ranks/levels, and relationships that must remain intact during operations 
                like additions, updates, and queries.</p>
                
                <h4>Core Repository: PeopleMicroService</h4>
                <ul>
                    <li><strong>Repository:</strong> <a href="https://github.com/orielmalik/PeopleMicroService" target="_blank">orielmalik/PeopleMicroService</a></li>
                    <li><strong>Primary Stack:</strong> Java + Spring Boot microservice with RESTful endpoints</li>
                    <li><strong>Build System:</strong> Gradle</li>
                    <li><strong>Testing:</strong> Extensive JUnit coverage across unit and integration tests</li>
                    <li><strong>Containerization:</strong> Docker Compose for local development and deployment</li>
                </ul>
                
                <h4>Multi-Branch Development Strategy</h4>
                <p>The repository features several dedicated branches, each demonstrating deliberate architectural choices and technology explorations:</p>
                <ul>
                    <li><strong>Traditional Relational Persistence:</strong> Branches using <strong>JPA + Hibernate</strong> for robust entity mapping, 
                    transactions, and SQL-based querying—ideal for structured, ACID-compliant enterprise data</li>
                    <li><strong>Reactive Architecture:</strong> Branches showcasing <strong>Spring WebFlux + MongoDB</strong> for high-throughput, 
                    event-driven scenarios—emphasizing scalability and responsiveness in modern distributed systems</li>
                    <li><strong>Kotlin Enhancements:</strong> Additional branches incorporating <strong>Kotlin</strong> for more concise, safe, and 
                    expressive code while maintaining full Java interoperability</li>
                </ul>
                <p>This branching approach allows clean comparison of paradigms (blocking vs reactive, SQL vs NoSQL, Java vs Kotlin) on the exact 
                same business domain—a practical way to evaluate trade-offs for different production requirements.</p>
                
                <h4>Complementary GraphQL Implementation</h4>
                <ul>
                    <li><strong>Repository:</strong> <a href="https://github.com/orielmalik/graphqljava/tree/Master" target="_blank">orielmalik/graphqljava (Master branch)</a></li>
                    <li><strong>Same Domain Re-engineered:</strong> GraphQL Java + Spring Boot</li>
                    <li><strong>Key Advantage:</strong> GraphQL's flexible, client-driven querying shines in hierarchical data scenarios. For example, 
                    adding an employee to a sub-department is handled efficiently without over-fetching or breaking the overall organizational hierarchy</li>
                    <li><strong>Schema-First Design:</strong> Ensures strong typing, introspection, and reduced versioning issues compared to traditional REST/OpenAPI</li>
                </ul>
                
                <h4>Technical & Architectural Highlights</h4>
                <ul>
                    <li><strong>Unified Domain Logic:</strong> Full CRUD, hierarchical integrity enforcement, data validation, security considerations</li>
                    <li><strong>Paradigm Comparison:</strong> REST/OpenAPI (resource-oriented) vs GraphQL (query-oriented)—highlighting when each excels</li>
                    <li><strong>Modern Practices:</strong> Test-driven development (JUnit), containerization (Docker), modular code structure, clean separation of concerns</li>
                    <li><strong>Business Value:</strong> Equips backend systems to handle real organizational structures (multi-level departments, employee ranks/roles) 
                    with maintainability and performance in mind</li>
                </ul>
                
                <h4>Impact & Purpose</h4>
                <p>This suite reflects deep, hands-on commitment to backend excellence and architectural versatility—positioning for immediate contribution 
                to high-tech software engineering roles focused on scalable services, APIs, and data modeling. The work demonstrates production-grade thinking 
                and readiness to secure a strong foothold (דריסת רגל) in Israeli hi-tech backend development.</p>
                
                <h4>Repository Links</h4>
                <ul>
                    <li><a href="https://github.com/orielmalik/PeopleMicroService" target="_blank">PeopleMicroService (Main Repo)</a></li>
                    <li><a href="https://github.com/orielmalik/graphqljava/tree/Master" target="_blank">GraphQL Java Implementation</a></li>
                    <li><a href="https://github.com/orielmalik?tab=repositories&q=PEOPL&type=&language=&sort=" target="_blank">All Related Repositories</a></li>
                </ul>
            `,
            tech: ['Spring Boot', 'Java', 'GraphQL', 'JPA/Hibernate', 'MongoDB', 'Spring WebFlux', 'Kotlin', 'Docker', 'Gradle', 'JUnit'],
            github: 'https://github.com/orielmalik/PeopleMicroService',
            github2: 'https://github.com/orielmalik/graphqljava/tree/Master',
            demo: null
        },
        android: {
            title: 'Mission Statement',
            subtitle: 'Native Android App with Firebase & Natural Language Processing',
            description: `
                <p>Mission Statement is a native Android application developed using Java in Android Studio. The application 
                demonstrates modern Android development practices including Firebase cloud integration, advanced natural language 
                processing, data security, and sophisticated UI patterns.</p>
                
                <h4>Key Features</h4>
                <ul>
                    <li><strong>Data Security with AES:</strong> All sensitive data is encrypted using the Advanced Encryption 
                    Standard (AES) algorithm, providing robust security for user information</li>
                    <li><strong>Location Services:</strong> Implements location permission management to provide location-based 
                    services within the app</li>
                    <li><strong>HANLP Integration:</strong> Utilizes HANLP (Han Language Processing) for natural language processing 
                    tasks including tokenization, part-of-speech tagging, and named entity recognition</li>
                </ul>
                
                <h4>Firebase Integration</h4>
                <ul>
                    <li><strong>Firebase Storage:</strong> Enables secure cloud storage for user-generated content such as images</li>
                    <li><strong>Firebase Realtime Database:</strong> Provides real-time data synchronization ensuring the app's 
                    data is always up-to-date across all devices</li>
                </ul>
                
                <h4>User Interface Components</h4>
                <ul>
                    <li><strong>ViewPager:</strong> Allows users to swipe between different fragments for smooth navigation</li>
                    <li><strong>RecyclerView:</strong> Efficiently displays large datasets by recycling views for optimal performance</li>
                    <li><strong>GridView:</strong> Displays items in a responsive grid layout</li>
                    <li><strong>Fragments:</strong> Creates dynamic and flexible UI designs with modular components</li>
                </ul>
                
                <h4>Technical Stack</h4>
                <ul>
                    <li>Java for native Android development</li>
                    <li>Android Studio IDE</li>
                    <li>Firebase (Storage + Realtime Database)</li>
                    <li>HANLP for natural language processing</li>
                    <li>AES encryption for data security</li>
                    <li>Modern Android UI components (ViewPager, RecyclerView, GridView, Fragments)</li>
                </ul>
                
                <h4>Impact</h4>
                <p>This project demonstrates proficiency in native Android development, cloud integration, security best practices, 
                and modern UI/UX patterns—skills essential for mobile development roles in hi-tech companies.</p>
            `,
            tech: ['Java', 'Android', 'Firebase', 'HANLP', 'AES Encryption', 'RecyclerView', 'ViewPager'],
            github: 'https://github.com/orielmalik/Mission_Statement',
            demo: null
        },
        flaskorm: {
            title: 'FlaskOrm',
            subtitle: 'ORM vs SQL Security Study',
            description: `
                <p>FlaskOrm is a comparative research project analyzing the differences between ORM (SQLAlchemy) and direct SQL 
                command usage within a Flask application. The project focuses on three key areas: performance, usability, and security.</p>
                
                <h4>Research Focus</h4>
                <ul>
                    <li><strong>Performance Benchmarking:</strong> Comparing query execution times between ORM and raw SQL</li>
                    <li><strong>Security Analysis:</strong> Evaluating SQL injection prevention and XSS mitigation strategies</li>
                    <li><strong>Usability Study:</strong> Assessing developer experience and code maintainability</li>
                </ul>
                
                <h4>Key Findings</h4>
                <ul>
                    <li>ORM provides better protection against SQL injection by default</li>
                    <li>Raw SQL offers performance benefits for complex queries</li>
                    <li>ORM improves code readability and maintainability</li>
                    <li>Proper parameterization is crucial for both approaches</li>
                </ul>
                
                <h4>Technologies Used</h4>
                <ul>
                    <li>Flask web framework</li>
                    <li>SQLAlchemy ORM</li>
                    <li>PyMySQL for direct SQL access</li>
                    <li>Security testing tools</li>
                </ul>
            `,
            tech: ['Python', 'Flask', 'SQLAlchemy', 'PyMySQL', 'Security'],
            github: 'https://github.com/orielmalik/FlaskOrm',
            demo: null
        }
    };

    expandButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();
            const projectKey = this.getAttribute('data-project');
            const project = projectDetails[projectKey];

            if (project) {
                modalBody.innerHTML = `
                    <h2>${project.title}</h2>
                    <p class="project-subtitle">${project.subtitle}</p>
                    <div class="modal-description">
                        ${project.description}
                    </div>
                    <div class="project-tech">
                        ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links" style="margin-top: 2rem;">
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
                        ${project.demo ? `
                            <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link">
                                <i class="fas fa-external-link-alt"></i>
                                Live Demo
                            </a>
                        ` : ''}
                    </div>
                `;

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
// Contact Form
// ===================================
function initContactForm() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Create mailto link
        const mailtoLink = `mailto:oriel.malik@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;

        window.location.href = mailtoLink;

        // Reset form
        form.reset();

        // Show success message
        alert('Thank you for your message! Your email client will open to send the message.');
    });
}

// ===================================
// Scroll Animations
// ===================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                // Animate skill bars
                if (entry.target.classList.contains('skill-item')) {
                    const progressBar = entry.target.querySelector('.skill-progress');
                    if (progressBar) {
                        const width = progressBar.style.width;
                        progressBar.style.width = '0';
                        setTimeout(() => {
                            progressBar.style.width = width;
                        }, 100);
                    }
                }
            }
        });
    }, observerOptions);

    // Observe elements
    const animatedElements = document.querySelectorAll('.project-card, .skill-item, .timeline-item, .about-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===================================
// Mobile Menu
// ===================================
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// ===================================
// Utility Functions
// ===================================

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll-to-top button
window.addEventListener('scroll', function () {
    const scrollBtn = document.getElementById('scroll-top');
    if (scrollBtn) {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    }
});

// Typing effect for hero title (optional enhancement)
function typingEffect(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Console easter egg
console.log('%c👋 Hello, fellow developer!', 'font-size: 20px; font-weight: bold; color: #64FFDA;');
console.log('%cLooking at the code? I like your style!', 'font-size: 14px; color: #8892B0;');
console.log('%cFeel free to reach out: oriel.malik@gmail.com', 'font-size: 14px; color: #FF6B9D;');
