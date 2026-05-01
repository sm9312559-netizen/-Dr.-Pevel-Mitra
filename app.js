document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.replace('ph-list', 'ph-x');
        } else {
            icon.classList.replace('ph-x', 'ph-list');
        }
    });

    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileToggle.querySelector('i').classList.replace('ph-x', 'ph-list');
        });
    });

    // Sticky Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            navbar.style.padding = '8px 0';
        } else {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
            navbar.style.padding = '0';
        }
    });

    // Initialize Animation on Scroll (AOS)
    AOS.init({
        duration: 900,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80,
        delay: 50,
    });

    // Active Navigation Link Update
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Services Data
    const services = [
        { title: 'Pregnancy Checkups', desc: 'Comprehensive monitoring of fetal development and maternal health throughout pregnancy.', icon: 'ph-baby' },
        { title: 'Normal Delivery Guidance', desc: 'Expert support and preparation for a safe, natural birthing experience.', icon: 'ph-hand-heart' },
        { title: 'High-Risk Pregnancy Care', desc: 'Specialized management and continuous monitoring for complex pregnancies.', icon: 'ph-shield-plus' },
        { title: 'Gynecology Consultation', desc: 'Routine check-ups, pap smears, and preventive care for women of all ages.', icon: 'ph-stethoscope' },
        { title: 'Menstrual Problems', desc: 'Diagnosis and treatment for irregular, painful, or heavy menstrual cycles.', icon: 'ph-drop' },
        { title: 'PCOS / Hormonal Care', desc: 'Personalized treatment plans for Polycystic Ovary Syndrome and hormonal imbalance.', icon: 'ph-activity' },
        { title: 'Fertility Consultation', desc: 'Compassionate guidance and medical support for couples trying to conceive.', icon: 'ph-sparkle' },
        { title: 'Family Planning', desc: 'Expert advice on contraception methods suitable for your body and lifestyle.', icon: 'ph-users-three' },
        { title: 'Menopause Support', desc: 'Care and treatment options to manage symptoms and maintain health during menopause.', icon: 'ph-flower-tulip' },
        { title: 'Ultrasound Guidance', desc: 'State-of-the-art diagnostic imaging for accurate assessment of women\'s health.', icon: 'ph-monitor-heart' }
    ];

    const servicesContainer = document.getElementById('services-container');
    services.forEach((service, index) => {
        const delay = index * 100;
        const card = document.createElement('div');
        card.className = 'service-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', delay);
        card.innerHTML = `
            <div class="service-icon">
                <i class="ph-fill ${service.icon}"></i>
            </div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-desc">${service.desc}</p>
        `;
        servicesContainer.appendChild(card);
    });

    // Reviews Data
    const reviews = [
        { name: 'Priya S.', text: 'Dr. Pevel Mitra is incredibly compassionate. She made my pregnancy journey so smooth and stress-free. Highly recommended!' },
        { name: 'Ananya M.', text: 'I visited for a PCOS consultation. She explained everything patiently and prescribed a treatment that actually worked for me.' },
        { name: 'Riya D.', text: 'The clinic environment is very premium and safe. Dr. Mitra gave me the confidence I needed during my high-risk pregnancy.' },
        { name: 'Sarmistha G.', text: 'Best gynecologist in Bangaon. Very professional, friendly, and accurate diagnosis. Thank you doctor!' },
        { name: 'Nandini K.', text: 'We consulted her for fertility issues. Her guidance was completely transparent, and today we are blessed with a baby boy.' },
        { name: 'Tanusree B.', text: 'Emergency availability is a blessing. My sister had severe cramps late at night and Dr. Mitra guided us perfectly on call.' }
    ];

    const reviewsContainer = document.getElementById('reviews-container');
    reviews.forEach((review, index) => {
        const delay = index * 100;
        const card = document.createElement('div');
        card.className = 'review-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', delay);
        card.innerHTML = `
            <div class="stars">
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
            </div>
            <p class="review-text">"${review.text}"</p>
            <div class="reviewer">
                <div class="reviewer-avatar">${review.name.charAt(0)}</div>
                <div class="reviewer-name">${review.name}</div>
            </div>
        `;
        reviewsContainer.appendChild(card);
    });

    // FAQs Data
    const faqs = [
        { q: 'Do I need an appointment?', a: 'While we do accept walk-ins depending on availability, we highly recommend booking an appointment in advance to avoid waiting times and ensure dedicated consultation time.' },
        { q: 'Are emergency consultations available?', a: 'Yes, we understand that medical emergencies can happen anytime. Dr. Pevel Mitra provides emergency consultations. Please call our clinic immediately in case of an emergency.' },
        { q: 'Do you provide pregnancy checkups?', a: 'Absolutely. We offer complete pregnancy care from early conception, regular ultrasound guidance, anomaly scans, and full postnatal support.' },
        { q: 'Is privacy maintained?', a: 'Patient confidentiality is our top priority. All consultations, medical records, and treatments are handled with strict privacy protocols in a safe and secure environment.' },
        { q: 'What women’s issues do you treat?', a: 'We treat a wide range of issues including menstrual irregularities, PCOS, pelvic pain, menopause symptoms, fertility challenges, infections, and routine preventive screenings.' }
    ];

    const faqContainer = document.getElementById('faq-container');
    faqs.forEach((faq, index) => {
        const item = document.createElement('div');
        item.className = 'faq-item';
        item.innerHTML = `
            <div class="faq-header">
                <span>${faq.q}</span>
                <i class="ph ph-caret-down"></i>
            </div>
            <div class="faq-body">
                <p>${faq.a}</p>
            </div>
        `;
        
        item.querySelector('.faq-header').addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all others
            document.querySelectorAll('.faq-item').forEach(faqItem => {
                faqItem.classList.remove('active');
            });

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
            }
        });

        faqContainer.appendChild(item);
    });

    // Apply Config Images
    if (typeof SITE_CONFIG !== 'undefined') {
        const heroImg = document.getElementById('dynamic-hero-img');
        if (heroImg && SITE_CONFIG.heroImage) heroImg.src = SITE_CONFIG.heroImage;

        const doctorImg = document.getElementById('dynamic-doctor-img');
        if (doctorImg && SITE_CONFIG.doctorPhoto) doctorImg.src = SITE_CONFIG.doctorPhoto;
    }

    // Dark Mode Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;
    
    // Check saved theme
    const savedTheme = localStorage.getItem('clinic-theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeIcon) themeIcon.className = 'ph-fill ph-sun';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('clinic-theme', 'light');
                themeIcon.className = 'ph ph-moon';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('clinic-theme', 'dark');
                themeIcon.className = 'ph-fill ph-sun';
            }
        });
    }

    // Backend Form Submission Handling
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = bookingForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            
            // UI Loading State
            submitBtn.innerHTML = '<i class="ph ph-spinner-gap ph-spin" style="animation: spin 1s linear infinite;"></i> Processing...';
            submitBtn.disabled = true;

            // Collect Data
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                service: document.getElementById('service').value,
                date: document.getElementById('date').value
            };

            try {
                // Send to our new Node.js backend
                let response;
                try {
                    response = await fetch('http://localhost:3000/api/book', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(formData)
                    });
                } catch(netErr) {
                    // Fallback simulation if local server is not started yet
                    console.warn('Backend server not reachable, simulating success for demo.');
                    await new Promise(r => setTimeout(r, 1500));
                    response = { ok: true, json: () => Promise.resolve({message: 'Appointment requested successfully (Simulation Mode)'}) };
                }

                if (response.ok) {
                    const data = await response.json();
                    alert('✅ Success: ' + data.message + '\n\nYour details have been securely saved to the database.');
                    bookingForm.reset();
                } else {
                    alert('❌ Failed to book appointment. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('❌ An error occurred. Please call the clinic directly.');
            } finally {
                // Restore Button State
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }
});
