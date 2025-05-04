"use strict";

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
document.addEventListener("DOMContentLoaded", function () {
  // menu mobile
  var buttonMenu = document.querySelector(".js-mobile-button");
  var blockMenu = document.querySelector(".menu-mobile");
  var buttonMenuClose = document.querySelector('.js-menu-close');
  var blockBody = document.querySelector("body");
  var openMenu = function openMenu() {
    blockMenu.classList.add("menu-mobile--active");
    blockBody.classList.add("body-overflow");
  };
  var closeMenu = function closeMenu() {
    blockMenu.classList.remove("menu-mobile--active");
    blockBody.classList.remove("body-overflow");
  };
  buttonMenu.addEventListener("click", function () {
    openMenu();
  });
  buttonMenuClose.addEventListener("click", function () {
    closeMenu();
  });

  // clone element for mob menu
  (function () {
    // Условие для viewport шириной 1279
    var mediaQuery = window.matchMedia("(max-width: 1279px)");
    function handleTabletChange(e) {
      // Проверить, что media query будет true
      if (e.matches) {
        var _document$querySelect;
        var introImg = ((_document$querySelect = document.querySelector('.intro__box')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.querySelector('.intro__img')) || '';
        var introDescription = document.querySelector('.intro__content').querySelector('.intro-description');
        introDescription.before(introImg);
      } else {
        var _document$querySelect2;
        var introImgContent = ((_document$querySelect2 = document.querySelector('.intro__content')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.querySelector('.intro__img')) || '';
        var introBox = document.querySelector('.intro__box');
        introBox.append(introImgContent);
      }
    }
    // Слушать события
    mediaQuery.addListener(handleTabletChange);

    // Начальная проверка
    handleTabletChange(mediaQuery);
  })();

  // clone element for mob menu
  (function () {
    // Условие для viewport шириной 1023
    var mediaQuery = window.matchMedia("(max-width: 1023px)");
    function handleTabletChange(e) {
      // Проверить, что media query будет true
      if (e.matches) {
        var _document$querySelect3;
        var menu = ((_document$querySelect3 = document.querySelector('.header')) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.querySelector('.nav')) || '';
        menu === null || menu === void 0 || menu.classList.remove('header__nav');
        var menuMobileNav = document.querySelector('.menu-mobile').querySelector('.menu-mobile__nav');
        menuMobileNav.append(menu);
      } else {
        var _document$querySelect4;
        document.querySelector(".menu-mobile").classList.remove("menu-mobile--active");
        document.querySelector("body").classList.remove("body-overflow");
        var menuMobileBody = ((_document$querySelect4 = document.querySelector('.menu-mobile')) === null || _document$querySelect4 === void 0 ? void 0 : _document$querySelect4.querySelector('.nav')) || '';
        menuMobileBody ? menuMobileBody === null || menuMobileBody === void 0 ? void 0 : menuMobileBody.classList.add('header__nav') : null;
        var headerLogo = document.querySelector('.header').querySelector('.logo');
        headerLogo.after(menuMobileBody);
      }
    }
    // Слушать события
    mediaQuery.addListener(handleTabletChange);

    // Начальная проверка
    handleTabletChange(mediaQuery);
  })();

  // tabs 
  var showTabCost = function showTabCost(elTabBtn) {
    var elTab = elTabBtn.closest('.tabs');
    if (elTabBtn.classList.contains('tabs-nav__item--active')) {
      return;
    }
    var targetId = elTabBtn.dataset.targetId;
    var elTabPane = elTab.querySelector(".tabs-content__box[data-id=\"".concat(targetId, "\"]"));
    if (elTabPane) {
      var elTabBtnActive = elTab.querySelector('.tabs-nav__item--active');
      elTabBtnActive.classList.remove('tabs-nav__item--active');
      var elTabPaneShow = elTab.querySelector('.tabs-content__box--active');
      elTabPaneShow.classList.remove('tabs-content__box--active');
      elTabBtn.classList.add('tabs-nav__item--active');
      elTabPane.classList.add('tabs-content__box--active');
    }
  };
  document.addEventListener('click', function (e) {
    if (e.target && !e.target.closest('.tabs-nav__item')) {
      return;
    }
    var elTabBtn = e.target.closest('.tabs-nav__item');
    showTabCost(elTabBtn);
  });

  // scroll
  var anchorlinks = document.querySelector('.nav').querySelectorAll('a[href^="#"]');
  var _iterator = _createForOfIteratorHelper(anchorlinks),
    _step;
  try {
    var _loop = function _loop() {
      var item = _step.value;
      // relitere 
      item.addEventListener('click', function (e) {
        var mobMenu = document.querySelector('.menu-mobile');
        if (mobMenu.classList.contains('menu-mobile--active')) {
          mobMenu.classList.remove('menu-mobile--active');
          document.querySelector("body").classList.remove("body-overflow");
        }
        var hashval = item.getAttribute('href');
        var target = document.querySelector(hashval);
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        history.pushState(null, null, hashval);
        e.preventDefault();
      });
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});