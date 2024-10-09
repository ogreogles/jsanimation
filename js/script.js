"use strict";
document.addEventListener("DOMContentLoaded", function () {
  var b = document.querySelector(".burger"),
    c = document.querySelector(".close"),
    m = (document.querySelector(".menu"), gsap.timeline({ paused: !0 }));
  m
    .fromTo(
      ".menu__top",
      { ease: "slow", y: -100, opacity: 0 },
      { opacity: 1, y: 0, duration: 0.4 }
    )
    .fromTo(
      ".close",
      { ease: "slow", opacity: 0 },
      { opacity: 1, duration: 0.3 }
    )
    .fromTo(
      ".menu",
      { display: "none", ease: "slow", opacity: 0 },
      { display: "block", opacity: 1, duration: 0.8 },
      "-=0.3"
    )
    .from(
      ".nav__list",
      { opacity: 0, ease: "slow", y: 60, duration: 0.6 },
      "-=0.5"
    )
    .from(
      ".menu__right",
      { opacity: 0, ease: "slow", y: 60, duration: 0.6 },
      "-=0.3"
    )
    .from(
      ".social",
      { opacity: 0, ease: "slow", y: 60, duration: 0.6 },
      "-=0.6"
    ),
    b.addEventListener("click", function () {
      m.play();
    }),
    c.addEventListener("click", function () {
      m.reverse();
    });
}),
  document.addEventListener("DOMContentLoaded", function () {
    gsap
      .timeline()
      .from(".hero__title", {
        opacity: 0, ease: "slow", y: 100, delay: 0.3, duration: 0.7, })
      .from(
        ".hero__btn",
        { opacity: 0, ease: "slow", y: 100, duration: 0.5 },
        "-=0.5"
      )
      .from(".hero__descr", { ease: "slow", opacity: 0, duration: 0.5 })
      .from(
        ".photos-wrap-one",
        { opacity: 0, ease: "slow", scale: 0.8, duration: 0.5 },
        "-=0.5"
      )
      .from(
        ".photos-wrap-two",
        { opacity: 0, ease: "slow", scale: 0.8, duration: 0.5 },
        "-=0.2"
      )
      .from(
        ".photos-wrap-three",
        { opacity: 0, ease: "slow", scale: 0.8, duration: 0.5 },
        "-=0.2"
      )
      .from(
        ".photos__author",
        { opacity: 0, ease: "slow", duration: 0.7 },
        "-=0.5"
      );
  });
