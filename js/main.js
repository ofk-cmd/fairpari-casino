(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.querySelector(".nav-mobile");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      mobileNav.classList.toggle("is-open", !open);
    });
    mobileNav.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        mobileNav.classList.remove("is-open");
      });
    });
  }

  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item, index) {
    var btn = item.querySelector(".faq-item__question");
    if (!btn) return;
    if (index === 0) {
      item.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
    } else {
      btn.setAttribute("aria-expanded", "false");
    }
    btn.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");
      faqItems.forEach(function (other) {
        other.classList.remove("is-open");
        var otherBtn = other.querySelector(".faq-item__question");
        if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  var backTop = document.querySelector(".back-to-top");
  if (backTop) {
    window.addEventListener("scroll", function () {
      backTop.classList.toggle("is-visible", window.scrollY > 600);
    }, { passive: true });
    backTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  var progress = document.querySelector(".scroll-progress");
  if (progress) {
    window.addEventListener("scroll", function () {
      var doc = document.documentElement;
      var pct = (window.scrollY / Math.max(doc.scrollHeight - doc.clientHeight, 1)) * 100;
      progress.style.width = pct + "%";
    }, { passive: true });
  }

  if ("IntersectionObserver" in window) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(
      ".section, .hub-card, .promo-block, .related-link, .winner-card, .seo-block--rich"
    ).forEach(function (el) {
      el.classList.add("reveal-on-scroll");
      revealObs.observe(el);
    });
  }

  var stickyCta = document.getElementById("sticky-cta");
  if (stickyCta) {
    var stickyKey = "casino_sticky_dismissed";
    if (sessionStorage.getItem(stickyKey) === "1") {
      stickyCta.classList.add("is-hidden");
    } else {
      document.body.classList.add("has-sticky-cta");
    }
    var closeBtn = stickyCta.querySelector(".sticky-cta__close");
    function dismissSticky(event) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      stickyCta.classList.add("is-hidden");
      document.body.classList.remove("has-sticky-cta");
      try {
        sessionStorage.setItem(stickyKey, "1");
      } catch (e) {}
    }
    if (closeBtn) {
      closeBtn.addEventListener("click", dismissSticky);
      closeBtn.addEventListener("touchend", dismissSticky, { passive: false });
    }
  }

  document.querySelectorAll("[data-carousel]").forEach(function (root) {
    var slides = root.querySelectorAll(".promo-slide");
    if (!slides.length) return;
    var dots = root.querySelectorAll(".promo-carousel__dot");
    var prev = root.querySelector(".promo-carousel__nav--prev");
    var next = root.querySelector(".promo-carousel__nav--next");
    var index = 0;
    var timer;
    function show(i) {
      index = (i + slides.length) % slides.length;
      slides.forEach(function (s, n) {
        s.classList.toggle("is-active", n === index);
      });
      dots.forEach(function (d, n) {
        d.classList.toggle("is-active", n === index);
      });
    }
    function restart() {
      clearInterval(timer);
      timer = setInterval(function () {
        show(index + 1);
      }, 6000);
    }
    if (prev) prev.addEventListener("click", function () { show(index - 1); restart(); });
    if (next) next.addEventListener("click", function () { show(index + 1); restart(); });
    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        var n = parseInt(dot.getAttribute("data-goto"), 10);
        if (!isNaN(n)) { show(n); restart(); }
      });
    });
    show(0);
    restart();
  });

  document.querySelectorAll("[data-bonus-calc]").forEach(function (root) {
    var range = root.querySelector(".bonus-calc__range");
    var depOut = root.querySelector(".bonus-calc__dep");
    var bonusOut = root.querySelector(".bonus-calc__out");
    if (!range || !depOut || !bonusOut) return;
    function fmt(n) {
      return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    function update() {
      var dep = parseInt(range.value, 10) || 0;
      depOut.textContent = fmt(dep) + " UZS";
      var bonus = Math.round(dep * 0.3);
      var fs = Math.min(150, Math.max(5, Math.round(dep / 50000)));
      bonusOut.textContent = fmt(bonus) + " UZS + " + fs + " FS";
    }
    range.addEventListener("input", update);
    update();
  });

  var promoCodeEl = document.getElementById("site-promo-code");
  var promoBadge = document.querySelector("[data-promo-badge]");
  if (promoCodeEl && promoBadge) {
    promoBadge.textContent = promoCodeEl.textContent.trim();
  }

  document.querySelectorAll(".js-copy-promo").forEach(function (btn) {
    var defaultLabel = btn.textContent;
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      var targetId = btn.getAttribute("data-copy-target");
      var codeEl = targetId ? document.getElementById(targetId) : null;
      var code = codeEl ? codeEl.textContent.trim() : "";
      if (!code) return;
      function onCopied() {
        btn.classList.add("is-copied");
        btn.textContent = "Nusxalandi!";
        window.setTimeout(function () {
          btn.classList.remove("is-copied");
          btn.textContent = defaultLabel;
        }, 1800);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).then(onCopied).catch(function () {
          window.prompt("Promo kodni nusxalang:", code);
        });
      } else {
        window.prompt("Promo kodni nusxalang:", code);
      }
    });
  });
})();
