const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => observer.observe(item));

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
  cursor.style.opacity = "1";
});

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseenter", () => cursor.classList.add("active"));
  link.addEventListener("mouseleave", () => cursor.classList.remove("active"));
});

const heroName = document.querySelector("[data-parallax]");

window.addEventListener("scroll", () => {
  const y = Math.min(window.scrollY * 0.12, 80);
  heroName.style.transform = `translateY(${y}px)`;
});
