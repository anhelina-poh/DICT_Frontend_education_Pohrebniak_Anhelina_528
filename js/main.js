document.addEventListener('DOMContentLoaded', () => {
    // 1. Тема оформлення
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('.theme-icon') : null;
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        if (!themeIcon) return;
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    // noinspection SpellCheckingInspection
    // 2. Повний словник перекладу на обидві мови
    const translations = {
        uk: {
            nav_specialties: "СПЕЦІАЛЬНОСТІ",
            nav_curriculum: "ОСВІТНЯ ПРОГРАМА",
            nav_science: "НАУКА",
            nav_news: "НОВИНИ",
            nav_admission: "ВСТУП 2025",
            banner_title: "Створюй майбутнє. Тут і зараз!",
            banner_desc: "Вибери не просто освіту — обери шлях до свого технологічного майбутнього! Кафедра ІКТ ХАІ — це місце, де ідеї стають реальністю, а знання відкривають двері до кар’єри мрії. Почни свій шлях вже сьогодні!",
            banner_btn: "ХОЧУ ПОСТУПИТИ",
            specialties_title: "Наші спеціальності",
            specialties_desc: "Ми спеціалізуємось на підготовці фахівців в області мережевих, програмних та інформаційних технологій за двома ключовими напрямками:",
            spec_126: "«Інформаційні системи й технології»",
            spec_172: "«Електронні комунікації та радіотехніка»",
            curriculum_title: "Освітня програма спеціальності «Інжиніринг і програмування інфокомунікаційних систем»",
            curriculum_year: "1 Курс",
            th_sem1: "1 семестр",
            th_credits1: "Кредити",
            th_sem2: "2 семестр",
            th_credits2: "Кредити",
            course_1: "Мовні компетентності (іноземна мова)",
            course_2: "Іноземна мова",
            course_3: "Українські студії",
            course_4: "«Формування системного наукового світогляду» (за вибором)",
            course_5: "Правова компетентність (на вибір)",
            course_6: "Основи теорії кіл",
            course_7: "Вища математика",
            course_8: "Дискретна математика",
            course_9: "Фізика",
            course_10: "Основи інфокомунікацій",
            course_11: "Алгоритми й структури даних",
            course_12: "Програмування на Python",
            course_13: "Навчальна практика",
            curr_desc_1: "Перший предмет \"Основи інфокомунікацій\" розповість про цілі навчання освітньої програми, сучасні тенденції в інфокомунікаціях, інформаційних технологіях та перспективи вашого розвитку. Як і в усьому ХАІ, студент формує свою власну навчальну траєкторію вже на 1 курсі за допомогою дисциплін за вибором: \"Іноземна мова\", \"Українські студії\", \"Гуманітарна або економічна дисципліна за вибором\", \"Правова компетентність за вибором\". Вони розвивають так звані \"м'які навички\" (Soft Skills) і полегшують подальше навчання.",
            curr_desc_2: "Фундаментальні курси \"Вища математика\", \"Дискретна математика\", \"Фізика\" формують основу для вивчення прикладних дисциплін. \"Основи теорії кіл\" знайомлять з апаратною електронікою. В \"Основах програмування\" фундаментально вивчається мова Python, IDE та Git. Курс \"Алгоритми й структури даних\" розвиває інженерне мислення, а \"Навчальна практика\" присвячена операційним системам сімейства Linux.",
            numbers_title: "Якщо в числах",
            stat_1: "Досвідчених викладачів",
            stat_2: "Навчальних дисциплін",
            stat_3: "Талановитих випускників",
            stat_4: "Унікального досвіду",
            feedback_text: "\"Освіта на кафедрі ІКТ дає не лише сучасну технічну базу, але й гнучкість мислення, необхідну для роботи у провідних міжнародних IT-компаніях.\"",
            feedback_author: "Олексій Коваленко",
            feedback_role: "Senior Network Engineer, EPAM Systems",
            audio_title: "Аудіовідгук випускника кафедри:",
            science_title: "Наука та інновації",
            science_subtitle: "Від аудиторії — до реального проєкту.",
            science_desc: "Наші студенти не просто вивчають теорію — вони беруть участь у реальних проєктах, розробляють ІТ-рішення, створюють стартапи та співпрацюють з компаніями-партнерами. На кафедрі діють наукові лабораторії та ініціативи, де кожен знаходить свій вектор розвитку.",
            science_btn: "ДІЗНАТИСЬ БІЛЬШЕ",
            partners_title: "Нам довіряють",
            admission_title: "Вступ 2025",
            form_name: "Ваше ім'я та прізвище",
            form_phone: "Контактний телефон",
            form_email: "Електронна пошта",
            form_city: "Місто / село",
            form_math: "Бал НМТ: Математика",
            form_ua: "Бал НМТ: Українська мова",
            form_hist: "Бал НМТ: Історія України",
            form_fourth: "Четвертий предмет з НМТ і бал",
            form_interests: "Які напрями вас найбільше цікавлять?",
            form_btn: "НАДІСЛАТИ ЗАЯВКУ",
            news_title: "Новини",
            news_item: "Відбулась зустріч студентів факультету радіоелектроніки та інфокомунікацій з представниками провідних IT-компаній регіону.",
            news_date: "07 січня 2026",
            news_btn: "БІЛЬШЕ НОВИН",
            footer_addr: "61070, Харківська область, Харків, вул. Вадима Манька, 17<br>НАУ ім. М.Є. Жуковського \"ХАІ\"<br>Кафедра інформаційно-комунікаційних технологій №504"
        },
        en: {
            nav_specialties: "SPECIALTIES",
            nav_curriculum: "CURRICULUM",
            nav_science: "SCIENCE",
            nav_news: "NEWS",
            nav_admission: "ADMISSION 2025",
            banner_title: "Shape the Future. Here and Now!",
            banner_desc: "Choose more than just an education — choose the pathway to your tech future! The Department of ICT at KhAI is where ideas become reality and knowledge opens doors to your dream career. Start today!",
            banner_btn: "APPLY NOW",
            specialties_title: "Our Specialties",
            specialties_desc: "We specialize in training experts in networking, software engineering, and information technologies in two key fields:",
            spec_126: "«Information Systems and Technologies»",
            spec_172: "«Electronic Communications and Radio Engineering»",
            curriculum_title: "Curriculum for Specialty «Engineering and Software of Infocommunication Systems»",
            curriculum_year: "Year 1",
            th_sem1: "Semester 1",
            th_credits1: "Credits",
            th_sem2: "Semester 2",
            th_credits2: "Credits",
            course_1: "Language Competences (Foreign Language)",
            course_2: "Foreign Language",
            course_3: "Ukrainian Studies",
            course_4: "Formation of Scientific Worldview (Elective)",
            course_5: "Legal Competence (Elective)",
            course_6: "Circuit Theory Fundamentals",
            course_7: "Higher Mathematics",
            course_8: "Discrete Mathematics",
            course_9: "Physics",
            course_10: "Fundamentals of Infocommunications",
            course_11: "Algorithms and Data Structures",
            course_12: "Python Programming",
            course_13: "Practical Training",
            curr_desc_1: "The course \"Fundamentals of Infocommunications\" introduces educational goals, modern ICT trends, and future career prospects. Students shape their individual educational paths from Year 1 through elective courses, developing essential soft skills.",
            curr_desc_2: "Fundamental courses in Higher Mathematics, Discrete Mathematics, and Physics build the engineering basis. Python is studied in depth along with Git and modern IDEs. Linux training prepares students for building real-world enterprise infrastructure.",
            numbers_title: "Key Figures",
            stat_1: "Experienced Lecturers",
            stat_2: "Academic Courses",
            stat_3: "Successful Alumni",
            stat_4: "Unique Experience",
            feedback_text: "\"Education at the Department of ICT provides not only modern technical background, but also the flexibility of thought required in top international IT enterprises.\"",
            feedback_author: "Oleksii Kovalenko",
            feedback_role: "Senior Network Engineer, EPAM Systems",
            audio_title: "Graduate Audio Feedback:",
            science_title: "Science and Innovations",
            science_subtitle: "From classroom to real-world projects.",
            science_desc: "Our students take part in real projects, build IT solutions, launch startups, and collaborate with tech partners. Department research labs provide a launchpad for professional growth.",
            science_btn: "LEARN MORE",
            partners_title: "Trusted by",
            admission_title: "Admission 2025",
            form_name: "Your Full Name",
            form_phone: "Contact Phone",
            form_email: "Email Address",
            form_city: "City / Town",
            form_math: "NMT Score: Mathematics",
            form_ua: "NMT Score: Ukrainian Language",
            form_hist: "NMT Score: History of Ukraine",
            form_fourth: "Fourth Subject & Score",
            form_interests: "Which IT fields interest you the most?",
            form_btn: "SUBMIT APPLICATION",
            news_title: "News",
            news_item: "Meeting between students of the Radio Electronics and Infocommunications faculty and leading IT industry leaders.",
            news_date: "07 January 2026",
            news_btn: "MORE NEWS",
            footer_addr: "61070, Kharkiv Oblast, Kharkiv, Vadym Manko St., 17<br>National Aerospace University \"KhAI\"<br>Department of Information and Communication Technologies №504"
        }
    };

    // 3. Інтерактивний тумблер-пігулка
    const langToggleBtn = document.getElementById('lang-toggle-btn');
    const uaLabel = langToggleBtn ? langToggleBtn.querySelector('.lang-label.ua') : null;
    const enLabel = langToggleBtn ? langToggleBtn.querySelector('.lang-label.en') : null;

    let currentLang = localStorage.getItem('site_lang') || 'uk';
    applyLanguage(currentLang);

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'uk' ? 'en' : 'uk';
            applyLanguage(currentLang);
            localStorage.setItem('site_lang', currentLang);
        });
    }

    function applyLanguage(lang) {
        htmlElement.setAttribute('lang', lang);

        if (langToggleBtn) {
            if (lang === 'uk') {
                langToggleBtn.classList.remove('is-en');
                if (uaLabel) uaLabel.classList.add('active');
                if (enLabel) enLabel.classList.remove('active');
            } else {
                langToggleBtn.classList.add('is-en');
                if (uaLabel) uaLabel.classList.remove('active');
                if (enLabel) enLabel.classList.add('active');
            }
        }

        const translatableElements = document.querySelectorAll('[data-i18n]');
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (translations[lang][key].includes('<br>')) {
                    el.innerHTML = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
    }
});