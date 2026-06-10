import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  useEffect(() => {
    // ── 1. Section fade-up (universal) ──────────────
    gsap.fromTo('.gsap-fade-up',
      { opacity: 0, y: 36 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.gsap-fade-up',
          start: 'top 82%',
          toggleActions: 'play none none none'
        }
      }
    );

    // ── 2. Section headlines slide up ───────────────
    document.querySelectorAll('.gsap-headline').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 28, skewY: 1 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // ── 3. Section dividers draw in ─────────────────
    gsap.fromTo('.gsap-line',
      { scaleX: 0, transformOrigin: 'left center' },
      {
        scaleX: 1,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.gsap-line',
          start: 'top 88%'
        }
      }
    );

    // ── 4. Cards stagger in ─────────────────────────
    document.querySelectorAll('.gsap-card-group').forEach(group => {
      const cards = group.querySelectorAll('.gsap-card');
      if (cards.length > 0) {
        gsap.fromTo(cards,
          { opacity: 0, y: 32, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: group,
              start: 'top 78%'
            }
          }
        );
      }
    });

    // ── 5. Tool/list rows slide in ──────────────────
    document.querySelectorAll('.gsap-row').forEach((row, i) => {
      gsap.fromTo(row,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: 'power2.out',
          delay: i * 0.04,
          scrollTrigger: {
            trigger: row,
            start: 'top 85%'
          }
        }
      );
    });

    // ── 6. Number count-up ──────────────────────────
    document.querySelectorAll('.gsap-count').forEach(el => {
      const htmlEl = el as HTMLElement;
      const target = parseFloat(htmlEl.dataset.target || '0');
      const prefix = htmlEl.dataset.prefix || '';
      const suffix = htmlEl.dataset.suffix || '';
      const decimals = htmlEl.dataset.decimals ? parseInt(htmlEl.dataset.decimals) : 0;

      ScrollTrigger.create({
        trigger: htmlEl,
        start: 'top 82%',
        once: true,
        onEnter: () => {
          gsap.fromTo({ val: 0 }, { val: target }, {
            duration: 1.8,
            ease: 'power2.out',
            onUpdate: function () {
              const v = this.targets()[0].val;
              htmlEl.textContent = prefix +
                (decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString()) +
                suffix;
            }
          });
        }
      });
    });

    // ── 7. Image parallax ───────────────────────────
    document.querySelectorAll('.gsap-parallax').forEach(img => {
      const htmlImg = img as HTMLElement;
      if (htmlImg.parentElement) {
        gsap.to(htmlImg, {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: htmlImg.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      }
    });

    // ── 8. Section background color shift ───────────
    const painSec = document.querySelector('.pain-section');
    if (painSec) {
      ScrollTrigger.create({
        trigger: '.pain-section',
        start: 'top 60%',
        end: 'bottom 40%',
        onEnter: () => {
          gsap.to('.site-navbar', {
            backgroundColor: 'rgba(15,15,15,0.95)',
            duration: 0.4
          });
        },
        onLeave: () => {
          gsap.to('.site-navbar', {
            backgroundColor: 'rgba(250,249,249,0.92)',
            duration: 0.4
          });
        },
        onEnterBack: () => {
          gsap.to('.site-navbar', {
            backgroundColor: 'rgba(15,15,15,0.95)',
            duration: 0.4
          });
        },
        onLeaveBack: () => {
          gsap.to('.site-navbar', {
            backgroundColor: 'rgba(250,249,249,0.92)',
            duration: 0.4
          });
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
};
