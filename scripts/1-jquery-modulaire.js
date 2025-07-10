/*
Une exemple de version modulaire, claire et maintenable de code jQuery. 
On sépare les responsabilités dans des objets/fonctions bien nommés, ce qui facilite la lecture, la maintenance, et la réutilisation.
*/

jQuery.noConflict();
(function ($) {
  const App = {
    init: function () {
      this.cacheDom();
      this.bindEvents();
      this.handleResize();
      this.initAOS();
    },

    cacheDom: function () {
      this.$window = $(window);
      this.$body = $('body');
      this.$burgerMenu = $('.burger-menu');
      this.$headerMenu = $('.header-menu');
      this.$socialButtons = $('.social-button');
      this.$backToTop = $('.back_to_top');
      this.$contactForm = $('#contact-form');
      this.$menuLinks = $('.menu-pple > li > a[href^="#"], .menu-second > li > a[href^="#"]');
    },

    bindEvents: function () {
      this.$burgerMenu.on("click", this.toggleMenu.bind(this));
      this.$socialButtons.on("click", this.toggleSocial.bind(this));
      this.$backToTop.on("click", this.scrollToTop.bind(this));
      this.$contactForm.on("submit", this.submitForm.bind(this));
      this.$window.on('load resize orientationchange', this.handleResize.bind(this));
      this.$window.on('scroll', this.handleScroll.bind(this));
    },

    toggleMenu: function () {
      this.$body.toggleClass('pos-fixed');
      this.$burgerMenu.toggleClass('change');
      this.$headerMenu.toggleClass('menu-show');
    },

    toggleSocial: function (e) {
      const $btn = $(e.currentTarget);
      $btn.children('.social-button--close').toggleClass('social-button--close-hidden');
      $btn.children('.social-button--open').toggleClass('social-button--open-hidden');
      $btn.siblings('.social-list').toggleClass('social-list--visible');
    },

    scrollToTop: function () {
      $('html, body').animate({ scrollTop: 0 }, 500);
    },

    submitForm: function (e) {
      e.preventDefault();
      const formData = this.$contactForm.serialize();

      $('.msg-encours').show();
      $('.msg-error, .msg-success').hide();
      $('.error-nom, .error-email, .error-objet, .error-message').removeClass('error');

      $.ajax({
        type: 'POST',
        url: 'send_email.php',
        data: formData,
        success: this.handleFormResponse.bind(this),
        error: this.handleFormError
      });
    },

    handleFormResponse: function (response) {
      const data = JSON.parse(response);
      $('.msg-encours').hide();

      if (data.error) {
        $('.msg-error').show().html("Erreur lors de l'envoi du message.");
      }
      if (data.success) {
        $('.msg-success').show().html("Votre message a été envoyé avec succès.");
        $('#nom, #email, #objet, #message').val('');
      }
      this.showFieldErrors(data.error_message);
    },

    handleFormError: function (xhr) {
      console.error(xhr.responseText);
      $('.msg-error').show().html("Une erreur s'est produite lors de l'envoi du message.");
    },

    showFieldErrors: function (errors) {
      if (!errors) return;
      for (const key in errors) {
        if (errors[key].length > 0) {
          $(`.error-${key}`).addClass('error').html(errors[key]);
        }
      }
    },

    handleResize: function () {
      const dist = 80;
      this.$menuLinks.off('click'); // évite les doublons

      this.$menuLinks.on('click', (e) => {
        e.preventDefault();
        const target = $(e.currentTarget).attr('href');
        const offset = $(target).offset().top - dist;

        $('html, body').animate({ scrollTop: offset }, 1000);
        if (this.$window.width() <= 767) {
          this.$burgerMenu.trigger('click');
        }
      });
    },

    _skillsOnce: true,

    handleScroll: function () {
      const scrollTop = this.$window.scrollTop();
      this.$backToTop.toggleClass("show", scrollTop > 500);

      if ($('#skills-listing').visible() && this._skillsOnce) {
        this.animateSkills();
        this._skillsOnce = false;
      }
    },

    animateSkills: function () {
      $('.skills-item').each(function () {
        const $statut = $(this).find('.skills-item-statut');
        const $progressbar = $(this).find('.skills-item-progressbar-inner');
        const percentage = parseInt($statut.attr('data-percentage'), 10);
        const $text = $(this).find('.percentage');

        $statut.css({ visibility: 'visible', opacity: '1', left: `${percentage}%` });
        $progressbar.css({ width: `${percentage}%` });

        $({ val: 0 }).animate({ val: percentage }, {
          duration: 3000,
          easing: 'swing',
          step: function () {
            $text.text(Math.round(this.val).toLocaleString('en-US'));
          },
          complete: function () {
            $text.text(percentage.toLocaleString('en-US'));
          }
        });
      });
    },

    initAOS: function () {
      AOS.init({ duration: 800 });
    }
  };

  $(function () {
    App.init();
  });

})(jQuery);
