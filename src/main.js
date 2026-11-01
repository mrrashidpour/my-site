const translations = {
    fa: {
        firstName: "محمدرضا",
        lastName: "رشیدپور",

        availability: "در حال ساختن و یادگیری مداوم",
        intro: "سلام، من",
        role: "توسعه‌دهنده بک‌اند و سازنده محصولات نرم‌افزاری",

        bio: "با Go و PHP/Laravel سیستم‌های بک‌اند و API می‌سازم؛ در کنار آن روی توسعه افزونه‌ها و ابزارهای WordPress کار می‌کنم و مسیرم را در DevOps، زیرساخت ابری و سیستم‌های توزیع‌شده ادامه می‌دهم.",

        ctaLinks: "شبکه‌ها و فعالیت‌ها",
        ctaGithub: "مشاهده GitHub",

        cardRole: "Backend Developer · WordPress Developer",
        focusTitle: "تمرکز حرفه‌ای",

        focus1: "طراحی و توسعه API",
        focus2: "ابزارها و افزونه‌های متن‌باز",
        focus3: "زیرساخت و استقرار نرم‌افزار",

        principleTitle: "رویکرد من",
        principle: "یادگیری عمیق، ساخت راه‌حل‌های کاربردی و به اشتراک‌گذاری ابزارهایی که کار توسعه‌دهندگان را ساده‌تر می‌کنند.",

        value1Title: "مهندسی بک‌اند",
        value1: "ساخت سرویس‌ها، APIها و منطق قابل نگهداری برای محصولات نرم‌افزاری.",

        value2Title: "اکوسیستم WordPress",
        value2: "توسعه افزونه، ابزار و راهکارهای سفارشی برای کسب‌وکارهای مبتنی بر وردپرس.",

        value3Title: "زیرساخت و یادگیری",
        value3: "علاقه‌مند به لینوکس، کانتینرها، CI/CD و معماری سیستم‌های مقیاس‌پذیر.",

        connectEyebrow: "FIND ME ONLINE",
        connectTitle: "در فضای آنلاین با من در ارتباط باشید",
        connectDesc: "برای دیدن پروژه‌ها، نوشته‌ها و ویدئوهایم یکی از مسیرها را انتخاب کنید.",

        githubDesc: "پروژه‌ها و کدهای من",
        linkedinDesc: "سوابق و ارتباط حرفه‌ای",
        wpDesc: "افزونه‌ها و مشارکت‌های وردپرس",
        instagramDesc: "روزمرگی‌ها و علایق",
        aparatDesc: "ویدئوهای فارسی",
        youtubeDesc: "ویدئوها و آموزش‌ها",
        virgoolDesc: "محتوا های متنی",

        closingEyebrow: "LET'S BUILD SOMETHING",
        closingTitle: "ایده‌ای برای ساختن دارید؟",
        closingText: "برای گفت‌وگوهای فنی، همکاری‌های متن‌باز و ارتباط حرفه‌ای، از طریق شبکه‌های بالا با من در تماس باشید.",
        closingCta: "ارتباط در LinkedIn ↗",

        footer: "ساخته‌شده با علاقه به مهندسی نرم‌افزار"
    },

    en: {
        firstName: "MohammadReza",
        lastName: "Rashidpour",

        availability: "Always building and learning",
        intro: "Hi, I'm",
        role: "Backend Developer & Software Product Builder",

        bio: "I build backend systems and APIs with Go and PHP/Laravel. I also develop WordPress plugins and tools, while growing my skills in DevOps, cloud infrastructure, and distributed systems.",

        ctaLinks: "Explore my profiles",
        ctaGithub: "View GitHub",

        cardRole: "Backend Developer · WordPress Developer",
        focusTitle: "WHAT I FOCUS ON",

        focus1: "API design & development",
        focus2: "Open-source tools & plugins",
        focus3: "Infrastructure & deployment",

        principleTitle: "My approach",
        principle: "Deep learning, practical engineering, and sharing tools that make developers' work easier.",

        value1Title: "Backend Engineering",
        value1: "Building services, APIs, and maintainable application logic.",

        value2Title: "WordPress Ecosystem",
        value2: "Creating plugins, tools, and custom solutions for WordPress-powered businesses.",

        value3Title: "Infrastructure & Growth",
        value3: "Exploring Linux, containers, CI/CD, and scalable system architecture.",

        connectEyebrow: "FIND ME ONLINE",
        connectTitle: "Connect with me online",
        connectDesc: "Explore my projects, professional profile, and video content.",

        githubDesc: "My projects and code",
        linkedinDesc: "Professional profile & network",
        wpDesc: "WordPress plugins & contributions",
        instagramDesc: "Personal updates & interests",
        aparatDesc: "Persian video content",
        youtubeDesc: "Videos and tutorials",
        virgoolDesc: "Textual content",

        closingEyebrow: "LET'S BUILD SOMETHING",
        closingTitle: "Have an idea worth building?",
        closingText: "Reach out through the profiles above for technical conversations, open-source collaboration, and professional connections.",
        closingCta: "Connect on LinkedIn ↗",

        footer: "Built with a passion for software engineering"
    }
};

const root = document.documentElement;

let lang = localStorage.getItem("profile-lang") || "fa";

/* Language */

function setLang(next) {
    lang = next;

    root.lang = lang;
    root.dir = lang === "fa" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        const translatedText = translations[lang][key];

        if (translatedText) {
            element.textContent = translatedText;
        }
    });

    document.getElementById("langBtn").textContent =
        lang === "fa" ? "EN" : "FA";

    document.title = lang === "fa"
        ? "محمدرضا رشیدپور | کارت معرفی"
        : "MohammadReza Rashidpour | Personal Card";

    document.querySelector('meta[name="description"]').content =
        lang === "fa"
            ? "محمدرضا رشیدپور؛ توسعه‌دهنده بک‌اند با Go و PHP/Laravel، توسعه‌دهنده ابزارها و افزونه‌های WordPress و علاقه‌مند به DevOps و سیستم‌های توزیع‌شده."
            : "MohammadReza Rashidpour — Backend Developer working with Go and PHP/Laravel, building WordPress tools and exploring DevOps and distributed systems.";

    localStorage.setItem("profile-lang", lang);
}

/* Theme */

function setTheme(theme) {
    root.dataset.theme = theme;

    const themeIcon = document.getElementById("themeIcon");

    themeIcon.innerHTML = theme === "dark"
        ? `
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>
        `
        : `
            <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/>
        `;

    document.querySelector('meta[name="theme-color"]').content =
        theme === "dark" ? "#090d18" : "#f4f7fc";

    localStorage.setItem("profile-theme", theme);
}

/* Event Listeners */

document.getElementById("langBtn").addEventListener("click", () => {
    setLang(lang === "fa" ? "en" : "fa");
});

document.getElementById("themeBtn").addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

/* Initial Setup */

setLang(lang);

const savedTheme = localStorage.getItem("profile-theme");

const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";

setTheme(savedTheme || preferredTheme);

document.getElementById("year").textContent = new Date().getFullYear();