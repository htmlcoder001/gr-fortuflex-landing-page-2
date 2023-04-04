'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const WebT = {};

  WebT.settings = {
    modal_active_class: '--modal-show',
  };

  WebT.elements = {
    scroll_links: document.querySelectorAll('a[href^="#"]'),
    modal_toggle: document.querySelectorAll('[data-modal-toggle]'),
    modal_box: document.querySelectorAll('[data-modal]'),
    overlay: document.querySelector('.theme-overlay'),
    close_modal: document.querySelectorAll('[data-modal-close]'),
  };

  /** Close all modals **/
  const closeModals = () => {
    // close all modals
    for (let i=0; i < WebT.elements.modal_box.length; i++) {
      WebT.elements.modal_box[i].classList.remove(WebT.settings.modal_active_class);
    }
    // remove active classes from modal toggle buttons
    for (let i=0; i < WebT.elements.modal_toggle.length; i++) {
      WebT.elements.modal_toggle[i].classList.remove(WebT.settings.modal_active_class);
    }
    // close overlay
    WebT.elements.overlay.classList.remove(WebT.settings.modal_active_class);
    // clear form service type
    if (typeof(WebT.elements.services_type_value) !== 'undefined' && WebT.elements.services_type_value !== null) {
      WebT.elements.services_type_value.value = '';
    }

  }

  /** Anchor smooth scroll **/
  (() => {
    WebT.elements.scroll_links.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const offset = -30,
          element = document.querySelector(this.getAttribute('href')),
          target = element.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({top: target, behavior: 'smooth'});
      });
    });
  })();

  /** Carousel **/
  (() => {
    let carousel =  '#carousel';
    let swiper = new Swiper(carousel, {
      spaceBetween: 40,
      slidesPerView: 4,
      roundLengths: true,
      navigation: {
        nextEl: '.--carousel-next',
        prevEl: '.--carousel-prev'
      },
      breakpoints: {
        1180: {
          slidesPerView: 4
        },
        768: {
          slidesPerView: 3,
        },
        575: {
          slidesPerView: 3,
          spaceBetween: 20,
          centeredSlides: true
        },
        480: {
          slidesPerView: 2,
          centeredSlides: true,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 12,
          centeredSlides: true,
        },
        /*1181: {
          slidesPerView: 4
        },
        1180: {
          slidesPerView: 3
        },
        1020: {
          slidesPerView: 2
        },
        700: {
          slidesPerView: 1
        }*/
      }
    });

  })();

  /** Modals **/
  (() => {
    // Add click event to close modals
    for (let i=0; i < WebT.elements.close_modal.length; i++) {
      WebT.elements.close_modal[i].addEventListener('click', () => {
        closeModals();
      });
    }
    // Add click event to open target modal
    for (let i=0; i < WebT.elements.modal_toggle.length; i++) {
      WebT.elements.modal_toggle[i].addEventListener('click', () => {
        let this_toggle = WebT.elements.modal_toggle[i],
          target_modal = this_toggle.getAttribute('data-modal-toggle');
        // if nav modal opened
        if (target_modal === 'nav' && this_toggle.classList.contains(WebT.settings.modal_active_class)) {
          closeModals();
          WebT.elements.modal_toggle[i].classList.remove(WebT.settings.modal_active_class);
        } else {
          closeModals();
          document.querySelector(`[data-modal='${target_modal}']`).classList.add(WebT.settings.modal_active_class);
          WebT.elements.overlay.classList.add(WebT.settings.modal_active_class);
          WebT.elements.modal_toggle[i].classList.add(WebT.settings.modal_active_class);
        }
      });
    }
  })();

});