/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/reset.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/reset.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
*,
*::before,
*::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
input,
button,
textarea,
select {
  font: inherit;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
#root,
#__next {
  isolation: isolate;
}
`, "",{"version":3,"sources":["webpack://./src/assets/css/reset.css"],"names":[],"mappings":"AAAA;;;CAGC;AACD;;;EAGE,sBAAsB;AACxB;AACA;EACE,SAAS;AACX;AACA;EACE,gBAAgB;EAChB,mCAAmC;AACrC;AACA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;AACA;;;;EAIE,aAAa;AACf;AACA;;;;;;;EAOE,yBAAyB;AAC3B;AACA;;EAEE,kBAAkB;AACpB","sourcesContent":["/*\r\n  Josh's Custom CSS Reset\r\n  https://www.joshwcomeau.com/css/custom-css-reset/\r\n*/\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n* {\r\n  margin: 0;\r\n}\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n#root,\r\n#__next {\r\n  isolation: isolate;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* html {
  background-image: url('../images/gummy-bear-background.jpg');
  background-size: cover;
} */

:root {
  --heading-font: 'Montserrat', sans-serif;
  --normal-font: 'Open Sans', sans-serif;
  --font-color: rgb(17, 17, 17);
  --bg-color-dark: rgb(246, 246, 248);
  --bg-color-light: rgb(255, 255, 255);
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--font-color);
}

#content {
  width: min(100%, 1440px);
  /* background-color: beige; */
  /* background-color: rgba(255, 183, 76, 0.5); */
  /* filter: blur(10px); */
  backdrop-filter: blur(8px);
  /* height: 100vh; */
  /* padding: 2rem; */
  box-shadow: 0px 0px 20px 12px rgba(0, 0, 0, 0.2);
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 2rem;
}

h1,
h2,
h3 {
  font-family: var(--heading-font);
}

header h1 {
  font-weight: 600;
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  /* width: 50%; */
}

nav ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: space-around;
    margin-right: 22px; */
}

nav li {
  font-family: var(--heading-font);
  font-weight: 600;
  /* display: flex;
    flex-direction: row; */
  cursor: pointer;
  list-style-type: none;
  /* margin-right: 22px; */
  /* transition-duration: 200ms; */
  transition: all 0.3s ease-out;
  text-decoration: underline;
}

nav li:not(:last-of-type) {
  margin-right: 1.5rem;
}

nav li:hover {
  /* color: white; */
  scale: 1.08;
  /* transform: translateY(-4px); */
  /* text-shadow: 0px 6px 0px rgba(0, 0, 0, 0.2); */
  /* text-decoration: underline; */
  text-decoration-color: rgb(210, 134, 72);
}

main {
  padding: 6rem 2rem 0;
  background-color: var(--bg-color-dark);
}

.home-main,
.menu-main,
.contact-main {
  display: flex;
  height: 100vh;
  /* gap: 2rem; */
}

.home-main {
  gap: 2rem;
}

.menu-main {
  justify-content: center;
  gap: 8rem;
}

.contact-main {
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  gap: 6rem;
}

.main-dish-container,
.drink-container {
  width: min(600px, 100%);
}

.image-container {
  /* max-width: 50%; */
  width: clamp(300px, 50%, 500px);
  /* width: min(180px, 100%); */
}

.intro-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1,
.intro-heading {
  font-size: 3rem;
  font-family: var(--heading-font);
  font-weight: 400;
  line-height: 1.1;
  word-wrap: break-word;
}

.intro-message {
  margin: 3rem 0;
  font-family: var(--normal-font);
  line-height: 1.5;
}

.intro-heading,
.intro-message {
  /* font-family: ; */
  max-width: 45ch;
  width: min(45ch, 100%);
  text-align: center;
}

/* .intro-heading {
  max-width: 70%;
} */

/* main section {
  max-width: 50ch;
} */

.intro-container a {
  background-color: var(--font-color);
  border-radius: 30px;
  color: var(--bg-color-light);
  padding: 1rem 3rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease-out;
  font-family: var(--normal-font);
  font-weight: 600;
}
.intro-container a:hover {
  background-color: var(--bg-color-dark);
  outline: solid 2px var(--font-color);
  color: var(--font-color);
  cursor: pointer;
  /* padding: calc(1rem - 1px) calc(3rem - 1px); */
  /* border-radius: 30px;
  padding: 1rem 3rem;
  font-family: var(--normal-font);
  font-weight: 600; */
}

.menu-main h2 {
  font-family: var(--heading-font);
}

.menu-item {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: var(--bg-color-light);
  border: 5px ridge rgba(0, 0, 0, 0.1);
  /* box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.2); */
  cursor: pointer;
  margin: 3rem 0;
  max-height: 90px;
  padding: 1rem;
  transition: all 0.3s ease-out;
  /* outline: solid red 1px; */
  overflow: hidden;
  /* display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden; */
}

.menu-item:first-of-type {
  margin-top: 1.5rem;
}

/* .menu-item::after {
  content: '▼';
  position: absolute;
  right: 1rem;
  bottom: 3px;
} */

.menu-item:hover {
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.2);
}

.menu-item::after {
  content: '▼';
  position: absolute;
  right: 1rem;
  bottom: 3px;
  transition: all 0.3s linear;
  /* transform: rotate(90deg); */
}

.menu-item.expand {
  /* background-color: lime; */
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.2);
  max-height: 250px;
  /* transition: all 0.3s ease-out; */
}

.menu-item.expand::after {
  /* content: '▲'; */
  transform: rotate(180deg);
  /* transition: all 1.3s linear; */
  position: absolute;
  right: 1rem;
  bottom: 3px;
}

.info-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-family: var(--heading-font);
  font-weight: 700;
}

.menu-item .desc {
  font-family: var(--normal-font);
  font-style: italic;
  line-height: 25px;
  padding-right: 16px;
}

form {
  font-family: var(--normal-font);
  width: min(80%, 600px);
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

fieldset {
  display: flex;
  /* flex-wrap: wrap; */
  border: 0;
  padding: 0;
  gap: 2rem;
}

fieldset > div {
  width: 50%;
}

/* legend {
  overflow:hidden;
  height:0;
  width:0;
} */

input {
  border: solid 1px rgb(179, 179, 179);
  border-radius: 30px;
  padding: 10px 12px;
  /* outline: solid 1px; */
  width: 100%;
}

input:focus {
  outline: solid 1px;
}

button {
  color: rgb(255, 255, 255);
  background-color: var(--font-color);
  border: none;
  border-radius: 30px;
  font-family: var(--normal-font);
  font-weight: 600;
  font-size: 1.125rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 10px;
  width: 100%;
}

button:hover {
  background-color: rgba(17, 17, 17, 0.8);
  cursor: pointer;
}

.contact-info-container {
  display: flex;
  gap: 2rem;
}

.contact-info-container div {
  text-align: center;
  flex: 1;
  font-family: var(--normal-font);
  /* font-size: 1.125rem; */
  line-height: 1.6;
  /* width: 100%; */
}

.contact-info-container h3 {
  font-size: 1.5rem;
}

.contact-info-container p:first-of-type {
  margin-top: 1rem;
}

@media only screen and (max-width: 768px) {
  .home-main {
    flex-wrap: wrap;
    justify-content: center;
    align-content: start;
  }

  .image-container {
    /* max-width: 60%; */
    order: 2;
  }

  .menu-main {
    flex-wrap: wrap;
  }

  .contact-info-container {
    flex-wrap: wrap;
  }

  .contact-info-container div {
    min-width: calc(100% / 3);
  }

  fieldset {
    flex-wrap: wrap;
  }

  fieldset > div {
    width: 100%;
  }
}

@media only screen and (max-width: 425px) {
  /* .home-main {
    flex-wrap: wrap;
    justify-content: center;
    align-content: start;
  } */

  header h1 {
    font-size: 11vw;
  }

  .image-container {
    /* max-width: 100%; */
    /* order: 2; */
  }

  .contact-info-container {
    flex-wrap: wrap;
  }

  .contact-info-container div {
    min-width: 100%;
  }

  form {
    width: 100%;
  }

  /* .contact-info-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  } */
}
`, "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"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","sourcesContent":["/* html {\r\n  background-image: url('../images/gummy-bear-background.jpg');\r\n  background-size: cover;\r\n} */\r\n\r\n:root {\r\n  --heading-font: 'Montserrat', sans-serif;\r\n  --normal-font: 'Open Sans', sans-serif;\r\n  --font-color: rgb(17, 17, 17);\r\n  --bg-color-dark: rgb(246, 246, 248);\r\n  --bg-color-light: rgb(255, 255, 255);\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  color: var(--font-color);\r\n}\r\n\r\n#content {\r\n  width: min(100%, 1440px);\r\n  /* background-color: beige; */\r\n  /* background-color: rgba(255, 183, 76, 0.5); */\r\n  /* filter: blur(10px); */\r\n  backdrop-filter: blur(8px);\r\n  /* height: 100vh; */\r\n  /* padding: 2rem; */\r\n  box-shadow: 0px 0px 20px 12px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  margin-bottom: 2rem;\r\n  padding: 2rem;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3 {\r\n  font-family: var(--heading-font);\r\n}\r\n\r\nheader h1 {\r\n  font-weight: 600;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: end;\r\n  /* width: 50%; */\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  /* justify-content: space-around;\r\n    margin-right: 22px; */\r\n}\r\n\r\nnav li {\r\n  font-family: var(--heading-font);\r\n  font-weight: 600;\r\n  /* display: flex;\r\n    flex-direction: row; */\r\n  cursor: pointer;\r\n  list-style-type: none;\r\n  /* margin-right: 22px; */\r\n  /* transition-duration: 200ms; */\r\n  transition: all 0.3s ease-out;\r\n  text-decoration: underline;\r\n}\r\n\r\nnav li:not(:last-of-type) {\r\n  margin-right: 1.5rem;\r\n}\r\n\r\nnav li:hover {\r\n  /* color: white; */\r\n  scale: 1.08;\r\n  /* transform: translateY(-4px); */\r\n  /* text-shadow: 0px 6px 0px rgba(0, 0, 0, 0.2); */\r\n  /* text-decoration: underline; */\r\n  text-decoration-color: rgb(210, 134, 72);\r\n}\r\n\r\nmain {\r\n  padding: 6rem 2rem 0;\r\n  background-color: var(--bg-color-dark);\r\n}\r\n\r\n.home-main,\r\n.menu-main,\r\n.contact-main {\r\n  display: flex;\r\n  height: 100vh;\r\n  /* gap: 2rem; */\r\n}\r\n\r\n.home-main {\r\n  gap: 2rem;\r\n}\r\n\r\n.menu-main {\r\n  justify-content: center;\r\n  gap: 8rem;\r\n}\r\n\r\n.contact-main {\r\n  /* display: flex; */\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 6rem;\r\n}\r\n\r\n.main-dish-container,\r\n.drink-container {\r\n  width: min(600px, 100%);\r\n}\r\n\r\n.image-container {\r\n  /* max-width: 50%; */\r\n  width: clamp(300px, 50%, 500px);\r\n  /* width: min(180px, 100%); */\r\n}\r\n\r\n.intro-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nh1,\r\n.intro-heading {\r\n  font-size: 3rem;\r\n  font-family: var(--heading-font);\r\n  font-weight: 400;\r\n  line-height: 1.1;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.intro-message {\r\n  margin: 3rem 0;\r\n  font-family: var(--normal-font);\r\n  line-height: 1.5;\r\n}\r\n\r\n.intro-heading,\r\n.intro-message {\r\n  /* font-family: ; */\r\n  max-width: 45ch;\r\n  width: min(45ch, 100%);\r\n  text-align: center;\r\n}\r\n\r\n/* .intro-heading {\r\n  max-width: 70%;\r\n} */\r\n\r\n/* main section {\r\n  max-width: 50ch;\r\n} */\r\n\r\n.intro-container a {\r\n  background-color: var(--font-color);\r\n  border-radius: 30px;\r\n  color: var(--bg-color-light);\r\n  padding: 1rem 3rem;\r\n  margin-bottom: 2rem;\r\n  transition: all 0.3s ease-out;\r\n  font-family: var(--normal-font);\r\n  font-weight: 600;\r\n}\r\n.intro-container a:hover {\r\n  background-color: var(--bg-color-dark);\r\n  outline: solid 2px var(--font-color);\r\n  color: var(--font-color);\r\n  cursor: pointer;\r\n  /* padding: calc(1rem - 1px) calc(3rem - 1px); */\r\n  /* border-radius: 30px;\r\n  padding: 1rem 3rem;\r\n  font-family: var(--normal-font);\r\n  font-weight: 600; */\r\n}\r\n\r\n.menu-main h2 {\r\n  font-family: var(--heading-font);\r\n}\r\n\r\n.menu-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: relative;\r\n  background-color: var(--bg-color-light);\r\n  border: 5px ridge rgba(0, 0, 0, 0.1);\r\n  /* box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.2); */\r\n  cursor: pointer;\r\n  margin: 3rem 0;\r\n  max-height: 90px;\r\n  padding: 1rem;\r\n  transition: all 0.3s ease-out;\r\n  /* outline: solid red 1px; */\r\n  overflow: hidden;\r\n  /* display: -webkit-box;\r\n  -webkit-line-clamp: 2;\r\n  -webkit-box-orient: vertical;\r\n  overflow: hidden; */\r\n}\r\n\r\n.menu-item:first-of-type {\r\n  margin-top: 1.5rem;\r\n}\r\n\r\n/* .menu-item::after {\r\n  content: '▼';\r\n  position: absolute;\r\n  right: 1rem;\r\n  bottom: 3px;\r\n} */\r\n\r\n.menu-item:hover {\r\n  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.menu-item::after {\r\n  content: '▼';\r\n  position: absolute;\r\n  right: 1rem;\r\n  bottom: 3px;\r\n  transition: all 0.3s linear;\r\n  /* transform: rotate(90deg); */\r\n}\r\n\r\n.menu-item.expand {\r\n  /* background-color: lime; */\r\n  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.2);\r\n  max-height: 250px;\r\n  /* transition: all 0.3s ease-out; */\r\n}\r\n\r\n.menu-item.expand::after {\r\n  /* content: '▲'; */\r\n  transform: rotate(180deg);\r\n  /* transition: all 1.3s linear; */\r\n  position: absolute;\r\n  right: 1rem;\r\n  bottom: 3px;\r\n}\r\n\r\n.info-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 1rem;\r\n  font-family: var(--heading-font);\r\n  font-weight: 700;\r\n}\r\n\r\n.menu-item .desc {\r\n  font-family: var(--normal-font);\r\n  font-style: italic;\r\n  line-height: 25px;\r\n  padding-right: 16px;\r\n}\r\n\r\nform {\r\n  font-family: var(--normal-font);\r\n  width: min(80%, 600px);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n}\r\n\r\nfieldset {\r\n  display: flex;\r\n  /* flex-wrap: wrap; */\r\n  border: 0;\r\n  padding: 0;\r\n  gap: 2rem;\r\n}\r\n\r\nfieldset > div {\r\n  width: 50%;\r\n}\r\n\r\n/* legend {\r\n  overflow:hidden;\r\n  height:0;\r\n  width:0;\r\n} */\r\n\r\ninput {\r\n  border: solid 1px rgb(179, 179, 179);\r\n  border-radius: 30px;\r\n  padding: 10px 12px;\r\n  /* outline: solid 1px; */\r\n  width: 100%;\r\n}\r\n\r\ninput:focus {\r\n  outline: solid 1px;\r\n}\r\n\r\nbutton {\r\n  color: rgb(255, 255, 255);\r\n  background-color: var(--font-color);\r\n  border: none;\r\n  border-radius: 30px;\r\n  font-family: var(--normal-font);\r\n  font-weight: 600;\r\n  font-size: 1.125rem;\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n  padding: 10px;\r\n  width: 100%;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: rgba(17, 17, 17, 0.8);\r\n  cursor: pointer;\r\n}\r\n\r\n.contact-info-container {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.contact-info-container div {\r\n  text-align: center;\r\n  flex: 1;\r\n  font-family: var(--normal-font);\r\n  /* font-size: 1.125rem; */\r\n  line-height: 1.6;\r\n  /* width: 100%; */\r\n}\r\n\r\n.contact-info-container h3 {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.contact-info-container p:first-of-type {\r\n  margin-top: 1rem;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .home-main {\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-content: start;\r\n  }\r\n\r\n  .image-container {\r\n    /* max-width: 60%; */\r\n    order: 2;\r\n  }\r\n\r\n  .menu-main {\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .contact-info-container {\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .contact-info-container div {\r\n    min-width: calc(100% / 3);\r\n  }\r\n\r\n  fieldset {\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  fieldset > div {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 425px) {\r\n  /* .home-main {\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-content: start;\r\n  } */\r\n\r\n  header h1 {\r\n    font-size: 11vw;\r\n  }\r\n\r\n  .image-container {\r\n    /* max-width: 100%; */\r\n    /* order: 2; */\r\n  }\r\n\r\n  .contact-info-container {\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .contact-info-container div {\r\n    min-width: 100%;\r\n  }\r\n\r\n  form {\r\n    width: 100%;\r\n  }\r\n\r\n  /* .contact-info-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n  } */\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/reset.css":
/*!**********************************!*\
  !*** ./src/assets/css/reset.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/components/header.js":
/*!*****************************************!*\
  !*** ./src/assets/components/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHeader: () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index.js */ "./src/index.js");


function createHeader() {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const h1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('h1', undefined, 'Rainbow Bear Bites');
  const ul = document.createElement('ul');

  const menuNames = ['Home', 'Menu', 'Contact'];

  menuNames.forEach((name) => {
    const li = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('li', undefined, name);
    ul.appendChild(li);
  });

  _index_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(header);
  header.appendChild(h1);
  header.appendChild(nav);
  nav.appendChild(ul);
}


/***/ }),

/***/ "./src/assets/pages/contact.js":
/*!*************************************!*\
  !*** ./src/assets/pages/contact.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContactPage: () => (/* binding */ createContactPage)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index.js */ "./src/index.js");


const main = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('main', 'contact-main', undefined);

function createContactPage() {
  main.innerHTML = '';
  createContactForm();
  createContactInfo();
}

function createContactForm() {
  const form = document.createElement('form');
  const fieldset = document.createElement('fieldset');

  const emailContainer = document.createElement('div');
  const emailLabel = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('label', undefined, 'Email');
  const emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('id', 'email');
  emailInput.setAttribute('name', 'email');
  emailInput.setAttribute('placeholder', 'Enter your email');
  emailLabel.htmlFor = emailInput.id;

  const nameContainer = document.createElement('div');
  const nameLabel = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('label', undefined, 'Name');
  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('id', 'name');
  nameInput.setAttribute('name', 'name');
  nameInput.setAttribute('placeholder', 'Enter your name');
  nameLabel.htmlFor = nameInput.id;

  const button = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('button', undefined, 'Submit');
  button.addEventListener('click', (e) => {
    e.preventDefault();
  });

  main.appendChild(form);
  form.appendChild(fieldset);
  fieldset.appendChild(emailContainer);
  emailContainer.appendChild(emailLabel);
  emailContainer.appendChild(emailInput);
  fieldset.appendChild(nameContainer);
  nameContainer.appendChild(nameLabel);
  nameContainer.appendChild(nameInput);
  form.appendChild(button);
}

function createContactInfo() {
  const contactInfoContainer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)(
    'section',
    'contact-info-container',
    undefined
  );

  const contact1 = document.createElement('div');
  const contact1Heading = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('h3', undefined, 'Find Us');
  const contact1Content = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)(
    'p',
    undefined,
    '121 Rock Sreet, 21 Avenue, New York, NY 92103-9000'
  );

  const contact2 = document.createElement('div');
  const contact2Heading = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('h3', undefined, 'Hours');
  const contact2Content = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)(
    'p',
    undefined,
    `Monday - Saturday
    9am - 7pm
    Sunday
    10am - 6pm`
  );

  const contact3 = document.createElement('div');
  const contact3Heading = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('h3', undefined, 'Call Us');
  const contact3Content = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('p', undefined, '1 (234) 567-891');
  const contact3Content2 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('p', undefined, '2 (345) 333-897');

  _index_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main);

  main.appendChild(contactInfoContainer);

  contactInfoContainer.appendChild(contact1);
  contact1.appendChild(contact1Heading);
  contact1.appendChild(contact1Content);

  contactInfoContainer.appendChild(contact2);
  contact2.appendChild(contact2Heading);
  contact2.appendChild(contact2Content);

  contactInfoContainer.appendChild(contact3);
  contact3.appendChild(contact3Heading);
  contact3.appendChild(contact3Content);
  contact3.appendChild(contact3Content2);
}


/***/ }),

/***/ "./src/assets/pages/home.js":
/*!**********************************!*\
  !*** ./src/assets/pages/home.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHomePage: () => (/* binding */ createHomePage)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index.js */ "./src/index.js");
/* harmony import */ var _images_home_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/home.png */ "./src/assets/images/home.png");



const main = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('main', 'home-main', undefined);

function createHomePage() {
  main.innerHTML = '';

  const imageContainer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('div', 'image-container', undefined);
  const img = document.createElement('img');
  img.src = _images_home_png__WEBPACK_IMPORTED_MODULE_1__;
  img.setAttribute('alt', 'sweets on a plate');

  const introContainer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('div', 'intro-container', undefined);

  const introHeading = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)(
    'h1',
    'intro-heading',
    'Vibrant gummy-inspired treats crafted daily with love.'
  );

  const introduction =
    'Welcome to Rainbow Bear Bites, where gummy bears meet culinary magic. Dive into a world of playful, vibrant flavors and whimsy. Join us for a burst of joy in every bite!';

  const introductionEl = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)(
    'div',
    'intro-message',
    introduction
  );

  const link = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('a', undefined, 'View Menu');

  _index_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main);
  main.appendChild(imageContainer);
  imageContainer.appendChild(img);
  main.appendChild(introContainer);
  introContainer.appendChild(introHeading);
  introContainer.appendChild(introductionEl);
  introContainer.appendChild(link);
}


/***/ }),

/***/ "./src/assets/pages/menu.js":
/*!**********************************!*\
  !*** ./src/assets/pages/menu.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenuPage: () => (/* binding */ createMenuPage)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index.js */ "./src/index.js");


const main = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('main', 'menu-main', undefined);

function createMenuPage() {
  main.innerHTML = '';
  createMainCourses();
  createDrinks();
  expandDish();
}

function createMainCourses() {
  const mainItems = restaurantMenu.mainItems;
  const mainDishContainer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)(
    'section',
    'main-dish-container',
    undefined
  );
  const header = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('h2', undefined, 'Main Dishes');
  mainDishContainer.appendChild(header);

  for (const mainItem of mainItems) {
    const mainName = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('div', 'name', mainItem.name);

    const mainDesc = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('div', 'desc', mainItem.description);

    const mainPrice = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('div', 'price', mainItem.price);

    const mainInfo = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('div', 'info-container', undefined);

    const mainDish = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('div', 'menu-item', undefined);

    mainDishContainer.appendChild(mainDish);
    mainDish.appendChild(mainInfo);
    mainInfo.appendChild(mainName);
    mainDish.appendChild(mainDesc);
    mainInfo.appendChild(mainPrice);
  }

  _index_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main);
  main.appendChild(mainDishContainer);
}

function createDrinks() {
  const drinks = restaurantMenu.drinks;
  const drinksContainer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)(
    'section',
    'drink-container',
    undefined
  );
  const header = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('h2', undefined, 'Drinks');
  drinksContainer.appendChild(header);

  for (const drink of drinks) {
    const drinkName = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('div', 'name', drink.name);

    const drinkDesc = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('div', 'desc', drink.description);

    const drinkPrice = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('div', 'price', drink.price);

    const drinkInfo = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('div', 'info-container', undefined);

    const mainDrink = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)('div', 'menu-item', undefined);

    drinksContainer.appendChild(mainDrink);
    mainDrink.appendChild(drinkInfo);
    drinkInfo.appendChild(drinkName);
    mainDrink.appendChild(drinkDesc);
    drinkInfo.appendChild(drinkPrice);
  }

  _index_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main);
  main.appendChild(drinksContainer);
}

function expandDish() {
  const menuEl = document.querySelectorAll('section > div');

  menuEl.forEach((el) =>
    el.addEventListener('click', () => {
      el.classList.toggle('expand');
    })
  );
}

const restaurantMenu = {
  mainItems: [
    {
      name: 'Gummy Bear Pancake Stack',
      description:
        'Fluffy pancakes layered with gummy bear-infused syrup, whipped cream, and gummy bear pieces.',
      price: 11.99,
    },
    {
      name: 'Gummy Bear Pizza',
      description:
        'Thin crust pizza topped with gooey mozzarella, pepperoni, and scattered gummy bear surprises.',
      price: 14.99,
    },
    {
      name: 'Gummy Bear Tacos',
      description:
        'Soft flour tortillas filled with grilled chicken or veggies, lettuce, cheese, and gummy bear salsa.',
      price: 13.99,
    },
    {
      name: 'Gummy Bear Pasta',
      description:
        'Colorful pasta spirals tossed in a creamy alfredo sauce with sautéed vegetables and gummy bear accents.',
      price: 12.99,
    },
    {
      name: 'Gummy Bear Stir-Fry',
      description:
        'A medley of fresh vegetables and your choice of protein stir-fried in a tangy gummy bear glaze, served over steamed rice.',
      price: 15.99,
    },
  ],
  drinks: [
    {
      name: 'Gummy Bear Fizz',
      description:
        'Sparkling blend of lemon-lime soda and gummy bear-infused syrup, garnished with a gummy bear skewer.',
      price: 4.99,
    },
    {
      name: 'Gummy Bear Smoothie',
      description:
        'Refreshing mix of fresh fruits, yogurt, and gummy bear pieces, blended to perfection.',
      price: 5.99,
    },
    {
      name: 'Gummy Bear Lemonade',
      description:
        'Classic lemonade with a twist—gummy bear ice cubes that slowly melt to add extra sweetness.',
      price: 3.99,
    },
    {
      name: 'Gummy Bear Iced Tea',
      description:
        'Chilled iced tea infused with gummy bear essence, perfect for a cool, flavorful sip.',
      price: 3.99,
    },
    {
      name: 'Gummy Bear Mocktail Spritzer',
      description:
        'A mocktail medley of fruit juices, soda water, and gummy bear garnish for a fizzy delight.',
      price: 6.99,
    },
  ],
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   content: () => (/* binding */ content),
/* harmony export */   createHTMLelement: () => (/* binding */ createHTMLelement)
/* harmony export */ });
/* harmony import */ var _assets_css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/reset.css */ "./src/assets/css/reset.css");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _assets_components_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/components/header.js */ "./src/assets/components/header.js");
/* harmony import */ var _assets_pages_home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/pages/home.js */ "./src/assets/pages/home.js");
/* harmony import */ var _assets_pages_menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/pages/menu.js */ "./src/assets/pages/menu.js");
/* harmony import */ var _assets_pages_contact_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/pages/contact.js */ "./src/assets/pages/contact.js");








const content = document.querySelector('#content');

function createHTMLelement(tagName, className, content) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  element.textContent = content;

  return element;
}

(0,_assets_components_header_js__WEBPACK_IMPORTED_MODULE_2__.createHeader)();
(0,_assets_pages_home_js__WEBPACK_IMPORTED_MODULE_3__.createHomePage)();
// createMenuPage();

const navEl = document.querySelector('nav');
const menuBtn = document.querySelector('main');

// menuBtn.addEventListener('click', function () {
//   content.children[1].remove();
//   createMenuPage();
// });

// navEl.addEventListener('click', function (e) {
//   if (e.target.innerText === 'Home') {
//     content.children[1].remove();
//     createHomePage();
//   } else if (e.target.innerText === 'Menu') {
//     content.children[1].remove();
//     createMenuPage();
//   } else if (e.target.innerText === 'Contact') {
//     content.children[1].remove();
//     createContactPage();
//   }
// });

[navEl, menuBtn].forEach((el) =>
  el.addEventListener('click', (e) => {
    if (e.target.innerText === 'Home') {
      content.children[1].remove();
      (0,_assets_pages_home_js__WEBPACK_IMPORTED_MODULE_3__.createHomePage)();
    } else if (
      e.target.innerText === 'Menu' ||
      e.target.innerText === 'View Menu'
    ) {
      content.children[1].remove();
      (0,_assets_pages_menu_js__WEBPACK_IMPORTED_MODULE_4__.createMenuPage)();
    } else if (e.target.innerText === 'Contact') {
      content.children[1].remove();
      (0,_assets_pages_contact_js__WEBPACK_IMPORTED_MODULE_5__.createContactPage)();
    }
  })
);


/***/ }),

/***/ "./src/assets/images/home.png":
/*!************************************!*\
  !*** ./src/assets/images/home.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "44577397003dc6d71df0.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksUUFBUSxPQUFPLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFFBQVEsT0FBTyxPQUFPLEtBQUssWUFBWSxPQUFPLFNBQVMsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxRQUFRLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxRQUFRLEtBQUssa0NBQWtDLG1FQUFtRSw2QkFBNkIsTUFBTSxpQkFBaUIsK0NBQStDLDZDQUE2QyxvQ0FBb0MsMENBQTBDLDJDQUEyQyxLQUFLLGNBQWMsb0JBQW9CLDZCQUE2QiwwQkFBMEIsK0JBQStCLEtBQUssa0JBQWtCLCtCQUErQixrQ0FBa0Msc0RBQXNELCtCQUErQixtQ0FBbUMsd0JBQXdCLDBCQUEwQix5REFBeUQsS0FBSyxnQkFBZ0Isb0JBQW9CLDBCQUEwQixxQ0FBcUMsMEJBQTBCLG9CQUFvQixLQUFLLDBCQUEwQix1Q0FBdUMsS0FBSyxtQkFBbUIsdUJBQXVCLEtBQUssYUFBYSxvQkFBb0IsNkJBQTZCLDhCQUE4Qix1QkFBdUIscUJBQXFCLE9BQU8sZ0JBQWdCLG9CQUFvQiwwQkFBMEIsc0JBQXNCLHVDQUF1Qyw0QkFBNEIsT0FBTyxnQkFBZ0IsdUNBQXVDLHVCQUF1Qix1QkFBdUIsNkJBQTZCLHdCQUF3Qiw0QkFBNEIsNkJBQTZCLHVDQUF1QyxzQ0FBc0MsaUNBQWlDLEtBQUssbUNBQW1DLDJCQUEyQixLQUFLLHNCQUFzQix1QkFBdUIsb0JBQW9CLHNDQUFzQyx3REFBd0QsdUNBQXVDLGlEQUFpRCxLQUFLLGNBQWMsMkJBQTJCLDZDQUE2QyxLQUFLLHFEQUFxRCxvQkFBb0Isb0JBQW9CLG9CQUFvQixPQUFPLG9CQUFvQixnQkFBZ0IsS0FBSyxvQkFBb0IsOEJBQThCLGdCQUFnQixLQUFLLHVCQUF1Qix3QkFBd0IsK0JBQStCLDBCQUEwQixnQkFBZ0IsS0FBSyxtREFBbUQsOEJBQThCLEtBQUssMEJBQTBCLHlCQUF5Qix3Q0FBd0Msa0NBQWtDLE9BQU8sMEJBQTBCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLEtBQUssK0JBQStCLHNCQUFzQix1Q0FBdUMsdUJBQXVCLHVCQUF1Qiw0QkFBNEIsS0FBSyx3QkFBd0IscUJBQXFCLHNDQUFzQyx1QkFBdUIsS0FBSywyQ0FBMkMsd0JBQXdCLHdCQUF3Qiw2QkFBNkIseUJBQXlCLEtBQUssMkJBQTJCLHFCQUFxQixNQUFNLDJCQUEyQixzQkFBc0IsTUFBTSw4QkFBOEIsMENBQTBDLDBCQUEwQixtQ0FBbUMseUJBQXlCLDBCQUEwQixvQ0FBb0Msc0NBQXNDLHVCQUF1QixLQUFLLDhCQUE4Qiw2Q0FBNkMsMkNBQTJDLCtCQUErQixzQkFBc0IscURBQXFELCtCQUErQix5QkFBeUIsc0NBQXNDLHdCQUF3QixPQUFPLHVCQUF1Qix1Q0FBdUMsS0FBSyxvQkFBb0Isb0JBQW9CLDZCQUE2Qix5QkFBeUIsOENBQThDLDJDQUEyQywwREFBMEQsd0JBQXdCLHFCQUFxQix1QkFBdUIsb0JBQW9CLG9DQUFvQyxpQ0FBaUMseUJBQXlCLDhCQUE4Qiw0QkFBNEIsbUNBQW1DLHdCQUF3QixPQUFPLGtDQUFrQyx5QkFBeUIsS0FBSyw4QkFBOEIsbUJBQW1CLHlCQUF5QixrQkFBa0Isa0JBQWtCLE1BQU0sNEJBQTRCLHNEQUFzRCxLQUFLLDJCQUEyQixtQkFBbUIseUJBQXlCLGtCQUFrQixrQkFBa0Isa0NBQWtDLG1DQUFtQyxPQUFPLDJCQUEyQixpQ0FBaUMsd0RBQXdELHdCQUF3Qix3Q0FBd0MsT0FBTyxrQ0FBa0MsdUJBQXVCLGtDQUFrQyxzQ0FBc0MsMkJBQTJCLGtCQUFrQixrQkFBa0IsS0FBSyx5QkFBeUIsb0JBQW9CLHFDQUFxQywwQkFBMEIsdUNBQXVDLHVCQUF1QixLQUFLLDBCQUEwQixzQ0FBc0MseUJBQXlCLHdCQUF3QiwwQkFBMEIsS0FBSyxjQUFjLHNDQUFzQyw2QkFBNkIsb0JBQW9CLDZCQUE2QixnQkFBZ0IsS0FBSyxrQkFBa0Isb0JBQW9CLDBCQUEwQixrQkFBa0IsaUJBQWlCLGdCQUFnQixLQUFLLHdCQUF3QixpQkFBaUIsS0FBSyxtQkFBbUIsc0JBQXNCLGVBQWUsY0FBYyxNQUFNLGlCQUFpQiwyQ0FBMkMsMEJBQTBCLHlCQUF5Qiw2QkFBNkIsb0JBQW9CLEtBQUsscUJBQXFCLHlCQUF5QixLQUFLLGdCQUFnQixnQ0FBZ0MsMENBQTBDLG1CQUFtQiwwQkFBMEIsc0NBQXNDLHVCQUF1QiwwQkFBMEIsMEJBQTBCLGdDQUFnQyxvQkFBb0Isa0JBQWtCLEtBQUssc0JBQXNCLDhDQUE4QyxzQkFBc0IsS0FBSyxpQ0FBaUMsb0JBQW9CLGdCQUFnQixLQUFLLHFDQUFxQyx5QkFBeUIsY0FBYyxzQ0FBc0MsOEJBQThCLHlCQUF5QixzQkFBc0IsT0FBTyxvQ0FBb0Msd0JBQXdCLEtBQUssaURBQWlELHVCQUF1QixLQUFLLG1EQUFtRCxrQkFBa0Isd0JBQXdCLGdDQUFnQyw2QkFBNkIsT0FBTyw0QkFBNEIsMkJBQTJCLG1CQUFtQixPQUFPLHNCQUFzQix3QkFBd0IsT0FBTyxtQ0FBbUMsd0JBQXdCLE9BQU8sdUNBQXVDLGtDQUFrQyxPQUFPLG9CQUFvQix3QkFBd0IsT0FBTywwQkFBMEIsb0JBQW9CLE9BQU8sS0FBSyxtREFBbUQscUJBQXFCLHdCQUF3QixnQ0FBZ0MsNkJBQTZCLFFBQVEsdUJBQXVCLHdCQUF3QixPQUFPLDRCQUE0Qiw0QkFBNEIsdUJBQXVCLFNBQVMsbUNBQW1DLHdCQUF3QixPQUFPLHVDQUF1Qyx3QkFBd0IsT0FBTyxnQkFBZ0Isb0JBQW9CLE9BQU8sc0NBQXNDLHNCQUFzQiwrQkFBK0Isa0JBQWtCLFFBQVEsT0FBTyx1QkFBdUI7QUFDMXdXO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDdGExQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBeUc7QUFDekc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUltRDtBQUMzRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQXFHO0FBQ3JHLE1BQTJGO0FBQzNGLE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQXlHO0FBQ3pHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJbUQ7QUFDM0UsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2I0RDtBQUM1RDtBQUNPO0FBQ1A7QUFDQTtBQUNBLGFBQWEsNERBQWlCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDREQUFpQjtBQUNoQztBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUUsOENBQU87QUFDVDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25CNEQ7QUFDNUQ7QUFDQSxhQUFhLDREQUFpQjtBQUM5QjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNERBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNERBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDREQUFpQjtBQUNsQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDREQUFpQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNERBQWlCO0FBQzNDLDBCQUEwQiw0REFBaUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDREQUFpQjtBQUMzQywwQkFBMEIsNERBQWlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw0REFBaUI7QUFDM0MsMEJBQTBCLDREQUFpQjtBQUMzQywyQkFBMkIsNERBQWlCO0FBQzVDO0FBQ0EsRUFBRSw4Q0FBTztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9GNEQ7QUFDbkI7QUFDekM7QUFDQSxhQUFhLDREQUFpQjtBQUM5QjtBQUNPO0FBQ1A7QUFDQTtBQUNBLHlCQUF5Qiw0REFBaUI7QUFDMUM7QUFDQSxZQUFZLDZDQUFPO0FBQ25CO0FBQ0E7QUFDQSx5QkFBeUIsNERBQWlCO0FBQzFDO0FBQ0EsdUJBQXVCLDREQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDREQUFpQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0REFBaUI7QUFDaEM7QUFDQSxFQUFFLDhDQUFPO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QzREO0FBQzVEO0FBQ0EsYUFBYSw0REFBaUI7QUFDOUI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNERBQWlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDREQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNERBQWlCO0FBQ3RDO0FBQ0EscUJBQXFCLDREQUFpQjtBQUN0QztBQUNBLHNCQUFzQiw0REFBaUI7QUFDdkM7QUFDQSxxQkFBcUIsNERBQWlCO0FBQ3RDO0FBQ0EscUJBQXFCLDREQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw4Q0FBTztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNERBQWlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDREQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNERBQWlCO0FBQ3ZDO0FBQ0Esc0JBQXNCLDREQUFpQjtBQUN2QztBQUNBLHVCQUF1Qiw0REFBaUI7QUFDeEM7QUFDQSxzQkFBc0IsNERBQWlCO0FBQ3ZDO0FBQ0Esc0JBQXNCLDREQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw4Q0FBTztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKZ0M7QUFDQTtBQUM2QjtBQUNMO0FBQ0E7QUFDTTtBQUN4QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQVk7QUFDWixxRUFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxRUFBYztBQUNwQixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHFFQUFjO0FBQ3BCLE1BQU07QUFDTjtBQUNBLE1BQU0sMkVBQWlCO0FBQ3ZCO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvY3NzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvY3NzL3Jlc2V0LmNzcz8yNTMxIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzP2NkZDYiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL3BhZ2VzL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qXHJcbiAgSm9zaCdzIEN1c3RvbSBDU1MgUmVzZXRcclxuICBodHRwczovL3d3dy5qb3Nod2NvbWVhdS5jb20vY3NzL2N1c3RvbS1jc3MtcmVzZXQvXHJcbiovXHJcbiosXHJcbio6OmJlZm9yZSxcclxuKjo6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbmJvZHkge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbn1cclxuaW1nLFxyXG5waWN0dXJlLFxyXG52aWRlbyxcclxuY2FudmFzLFxyXG5zdmcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5pbnB1dCxcclxuYnV0dG9uLFxyXG50ZXh0YXJlYSxcclxuc2VsZWN0IHtcclxuICBmb250OiBpbmhlcml0O1xyXG59XHJcbnAsXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuI3Jvb3QsXHJcbiNfX25leHQge1xyXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7QUFDRDs7O0VBR0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQ0FBbUM7QUFDckM7QUFDQTs7Ozs7RUFLRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBOzs7O0VBSUUsYUFBYTtBQUNmO0FBQ0E7Ozs7Ozs7RUFPRSx5QkFBeUI7QUFDM0I7QUFDQTs7RUFFRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypcXHJcXG4gIEpvc2gncyBDdXN0b20gQ1NTIFJlc2V0XFxyXFxuICBodHRwczovL3d3dy5qb3Nod2NvbWVhdS5jb20vY3NzL2N1c3RvbS1jc3MtcmVzZXQvXFxyXFxuKi9cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxufVxcclxcbmltZyxcXHJcXG5waWN0dXJlLFxcclxcbnZpZGVvLFxcclxcbmNhbnZhcyxcXHJcXG5zdmcge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbmlucHV0LFxcclxcbmJ1dHRvbixcXHJcXG50ZXh0YXJlYSxcXHJcXG5zZWxlY3Qge1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG59XFxyXFxucCxcXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNiB7XFxyXFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG4jcm9vdCxcXHJcXG4jX19uZXh0IHtcXHJcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBodG1sIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9ndW1teS1iZWFyLWJhY2tncm91bmQuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSAqL1xyXG5cclxuOnJvb3Qge1xyXG4gIC0taGVhZGluZy1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgLS1ub3JtYWwtZm9udDogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgLS1mb250LWNvbG9yOiByZ2IoMTcsIDE3LCAxNyk7XHJcbiAgLS1iZy1jb2xvci1kYXJrOiByZ2IoMjQ2LCAyNDYsIDI0OCk7XHJcbiAgLS1iZy1jb2xvci1saWdodDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICB3aWR0aDogbWluKDEwMCUsIDE0NDBweCk7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7ICovXHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE4MywgNzYsIDAuNSk7ICovXHJcbiAgLyogZmlsdGVyOiBibHVyKDEwcHgpOyAqL1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG4gIC8qIGhlaWdodDogMTAwdmg7ICovXHJcbiAgLyogcGFkZGluZzogMnJlbTsgKi9cclxuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMge1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5nLWZvbnQpO1xyXG59XHJcblxyXG5oZWFkZXIgaDEge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbiAgLyogd2lkdGg6IDUwJTsgKi9cclxufVxyXG5cclxubmF2IHVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMnB4OyAqL1xyXG59XHJcblxyXG5uYXYgbGkge1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5nLWZvbnQpO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgLyogZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7ICovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAvKiBtYXJnaW4tcmlnaHQ6IDIycHg7ICovXHJcbiAgLyogdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7ICovXHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbm5hdiBsaTpub3QoOmxhc3Qtb2YtdHlwZSkge1xyXG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xyXG59XHJcblxyXG5uYXYgbGk6aG92ZXIge1xyXG4gIC8qIGNvbG9yOiB3aGl0ZTsgKi9cclxuICBzY2FsZTogMS4wODtcclxuICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7ICovXHJcbiAgLyogdGV4dC1zaGFkb3c6IDBweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgKi9cclxuICAvKiB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgKi9cclxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHJnYigyMTAsIDEzNCwgNzIpO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBwYWRkaW5nOiA2cmVtIDJyZW0gMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1kYXJrKTtcclxufVxyXG5cclxuLmhvbWUtbWFpbixcclxuLm1lbnUtbWFpbixcclxuLmNvbnRhY3QtbWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIC8qIGdhcDogMnJlbTsgKi9cclxufVxyXG5cclxuLmhvbWUtbWFpbiB7XHJcbiAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4ubWVudS1tYWluIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDhyZW07XHJcbn1cclxuXHJcbi5jb250YWN0LW1haW4ge1xyXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnJlbTtcclxufVxyXG5cclxuLm1haW4tZGlzaC1jb250YWluZXIsXHJcbi5kcmluay1jb250YWluZXIge1xyXG4gIHdpZHRoOiBtaW4oNjAwcHgsIDEwMCUpO1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICAvKiBtYXgtd2lkdGg6IDUwJTsgKi9cclxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDUwJSwgNTAwcHgpO1xyXG4gIC8qIHdpZHRoOiBtaW4oMTgwcHgsIDEwMCUpOyAqL1xyXG59XHJcblxyXG4uaW50cm8tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaDEsXHJcbi5pbnRyby1oZWFkaW5nIHtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udCk7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS4xO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuLmludHJvLW1lc3NhZ2Uge1xyXG4gIG1hcmdpbjogM3JlbSAwO1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1ub3JtYWwtZm9udCk7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLmludHJvLWhlYWRpbmcsXHJcbi5pbnRyby1tZXNzYWdlIHtcclxuICAvKiBmb250LWZhbWlseTogOyAqL1xyXG4gIG1heC13aWR0aDogNDVjaDtcclxuICB3aWR0aDogbWluKDQ1Y2gsIDEwMCUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogLmludHJvLWhlYWRpbmcge1xyXG4gIG1heC13aWR0aDogNzAlO1xyXG59ICovXHJcblxyXG4vKiBtYWluIHNlY3Rpb24ge1xyXG4gIG1heC13aWR0aDogNTBjaDtcclxufSAqL1xyXG5cclxuLmludHJvLWNvbnRhaW5lciBhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1iZy1jb2xvci1saWdodCk7XHJcbiAgcGFkZGluZzogMXJlbSAzcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLW5vcm1hbC1mb250KTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5pbnRyby1jb250YWluZXIgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItZGFyayk7XHJcbiAgb3V0bGluZTogc29saWQgMnB4IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLyogcGFkZGluZzogY2FsYygxcmVtIC0gMXB4KSBjYWxjKDNyZW0gLSAxcHgpOyAqL1xyXG4gIC8qIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgcGFkZGluZzogMXJlbSAzcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1ub3JtYWwtZm9udCk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDsgKi9cclxufVxyXG5cclxuLm1lbnUtbWFpbiBoMiB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udCk7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItbGlnaHQpO1xyXG4gIGJvcmRlcjogNXB4IHJpZGdlIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAvKiBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgKi9cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAzcmVtIDA7XHJcbiAgbWF4LWhlaWdodDogOTBweDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gIC8qIG91dGxpbmU6IHNvbGlkIHJlZCAxcHg7ICovXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAvKiBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICBvdmVyZmxvdzogaGlkZGVuOyAqL1xyXG59XHJcblxyXG4ubWVudS1pdGVtOmZpcnN0LW9mLXR5cGUge1xyXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcclxufVxyXG5cclxuLyogLm1lbnUtaXRlbTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICfilrwnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMXJlbTtcclxuICBib3R0b206IDNweDtcclxufSAqL1xyXG5cclxuLm1lbnUtaXRlbTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW06OmFmdGVyIHtcclxuICBjb250ZW50OiAn4pa8JztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDFyZW07XHJcbiAgYm90dG9tOiAzcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG4gIC8qIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgKi9cclxufVxyXG5cclxuLm1lbnUtaXRlbS5leHBhbmQge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGxpbWU7ICovXHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgLyogdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7ICovXHJcbn1cclxuXHJcbi5tZW51LWl0ZW0uZXhwYW5kOjphZnRlciB7XHJcbiAgLyogY29udGVudDogJ+KWsic7ICovXHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAvKiB0cmFuc2l0aW9uOiBhbGwgMS4zcyBsaW5lYXI7ICovXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxcmVtO1xyXG4gIGJvdHRvbTogM3B4O1xyXG59XHJcblxyXG4uaW5mby1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udCk7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLm1lbnUtaXRlbSAuZGVzYyB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLW5vcm1hbC1mb250KTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLW5vcm1hbC1mb250KTtcclxuICB3aWR0aDogbWluKDgwJSwgNjAwcHgpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDJyZW07XHJcbn1cclxuXHJcbmZpZWxkc2V0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qIGZsZXgtd3JhcDogd3JhcDsgKi9cclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBnYXA6IDJyZW07XHJcbn1cclxuXHJcbmZpZWxkc2V0ID4gZGl2IHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4vKiBsZWdlbmQge1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxuICBoZWlnaHQ6MDtcclxuICB3aWR0aDowO1xyXG59ICovXHJcblxyXG5pbnB1dCB7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDE3OSwgMTc5LCAxNzkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gIC8qIG91dGxpbmU6IHNvbGlkIDFweDsgKi9cclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IHNvbGlkIDFweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1ub3JtYWwtZm9udCk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDE3LCAxNywgMC44KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWN0LWluZm8tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMnJlbTtcclxufVxyXG5cclxuLmNvbnRhY3QtaW5mby1jb250YWluZXIgZGl2IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZmxleDogMTtcclxuICBmb250LWZhbWlseTogdmFyKC0tbm9ybWFsLWZvbnQpO1xyXG4gIC8qIGZvbnQtc2l6ZTogMS4xMjVyZW07ICovXHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAvKiB3aWR0aDogMTAwJTsgKi9cclxufVxyXG5cclxuLmNvbnRhY3QtaW5mby1jb250YWluZXIgaDMge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uY29udGFjdC1pbmZvLWNvbnRhaW5lciBwOmZpcnN0LW9mLXR5cGUge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuaG9tZS1tYWluIHtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIC8qIG1heC13aWR0aDogNjAlOyAqL1xyXG4gICAgb3JkZXI6IDI7XHJcbiAgfVxyXG5cclxuICAubWVudS1tYWluIHtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcblxyXG4gIC5jb250YWN0LWluZm8tY29udGFpbmVyIHtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcblxyXG4gIC5jb250YWN0LWluZm8tY29udGFpbmVyIGRpdiB7XHJcbiAgICBtaW4td2lkdGg6IGNhbGMoMTAwJSAvIDMpO1xyXG4gIH1cclxuXHJcbiAgZmllbGRzZXQge1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuXHJcbiAgZmllbGRzZXQgPiBkaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgLyogLmhvbWUtbWFpbiB7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIH0gKi9cclxuXHJcbiAgaGVhZGVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMTF2dztcclxuICB9XHJcblxyXG4gIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgLyogbWF4LXdpZHRoOiAxMDAlOyAqL1xyXG4gICAgLyogb3JkZXI6IDI7ICovXHJcbiAgfVxyXG5cclxuICAuY29udGFjdC1pbmZvLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC1pbmZvLWNvbnRhaW5lciBkaXYge1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC8qIC5jb250YWN0LWluZm8tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gIH0gKi9cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0dBR0c7O0FBRUg7RUFDRSx3Q0FBd0M7RUFDeEMsc0NBQXNDO0VBQ3RDLDZCQUE2QjtFQUM3QixtQ0FBbUM7RUFDbkMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDZCQUE2QjtFQUM3QiwrQ0FBK0M7RUFDL0Msd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7OztFQUdFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VB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b3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvZ3VtbXktYmVhci1iYWNrZ3JvdW5kLmpwZycpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59ICovXFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1oZWFkaW5nLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXHJcXG4gIC0tbm9ybWFsLWZvbnQ6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgLS1mb250LWNvbG9yOiByZ2IoMTcsIDE3LCAxNyk7XFxyXFxuICAtLWJnLWNvbG9yLWRhcms6IHJnYigyNDYsIDI0NiwgMjQ4KTtcXHJcXG4gIC0tYmctY29sb3ItbGlnaHQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIHdpZHRoOiBtaW4oMTAwJSwgMTQ0MHB4KTtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJlaWdlOyAqL1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE4MywgNzYsIDAuNSk7ICovXFxyXFxuICAvKiBmaWx0ZXI6IGJsdXIoMTBweCk7ICovXFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXHJcXG4gIC8qIGhlaWdodDogMTAwdmg7ICovXFxyXFxuICAvKiBwYWRkaW5nOiAycmVtOyAqL1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udCk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBoMSB7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxyXFxuICAvKiB3aWR0aDogNTAlOyAqL1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMnB4OyAqL1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgbGkge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udCk7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgLyogZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgKi9cXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIC8qIG1hcmdpbi1yaWdodDogMjJweDsgKi9cXHJcXG4gIC8qIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zOyAqL1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGxpOm5vdCg6bGFzdC1vZi10eXBlKSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGxpOmhvdmVyIHtcXHJcXG4gIC8qIGNvbG9yOiB3aGl0ZTsgKi9cXHJcXG4gIHNjYWxlOiAxLjA4O1xcclxcbiAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpOyAqL1xcclxcbiAgLyogdGV4dC1zaGFkb3c6IDBweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgKi9cXHJcXG4gIC8qIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAqL1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiByZ2IoMjEwLCAxMzQsIDcyKTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBwYWRkaW5nOiA2cmVtIDJyZW0gMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLWRhcmspO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1tYWluLFxcclxcbi5tZW51LW1haW4sXFxyXFxuLmNvbnRhY3QtbWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIC8qIGdhcDogMnJlbTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtbWFpbiB7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51LW1haW4ge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDhyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LW1haW4ge1xcclxcbiAgLyogZGlzcGxheTogZmxleDsgKi9cXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA2cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1kaXNoLWNvbnRhaW5lcixcXHJcXG4uZHJpbmstY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiBtaW4oNjAwcHgsIDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gIC8qIG1heC13aWR0aDogNTAlOyAqL1xcclxcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA1MCUsIDUwMHB4KTtcXHJcXG4gIC8qIHdpZHRoOiBtaW4oMTgwcHgsIDEwMCUpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uaW50cm8tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaDEsXFxyXFxuLmludHJvLWhlYWRpbmcge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udCk7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMTtcXHJcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuLmludHJvLW1lc3NhZ2Uge1xcclxcbiAgbWFyZ2luOiAzcmVtIDA7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tbm9ybWFsLWZvbnQpO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG59XFxyXFxuXFxyXFxuLmludHJvLWhlYWRpbmcsXFxyXFxuLmludHJvLW1lc3NhZ2Uge1xcclxcbiAgLyogZm9udC1mYW1pbHk6IDsgKi9cXHJcXG4gIG1heC13aWR0aDogNDVjaDtcXHJcXG4gIHdpZHRoOiBtaW4oNDVjaCwgMTAwJSk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIC5pbnRyby1oZWFkaW5nIHtcXHJcXG4gIG1heC13aWR0aDogNzAlO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4vKiBtYWluIHNlY3Rpb24ge1xcclxcbiAgbWF4LXdpZHRoOiA1MGNoO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4uaW50cm8tY29udGFpbmVyIGEge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgY29sb3I6IHZhcigtLWJnLWNvbG9yLWxpZ2h0KTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gM3JlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1ub3JtYWwtZm9udCk7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG4uaW50cm8tY29udGFpbmVyIGE6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItZGFyayk7XFxyXFxuICBvdXRsaW5lOiBzb2xpZCAycHggdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAvKiBwYWRkaW5nOiBjYWxjKDFyZW0gLSAxcHgpIGNhbGMoM3JlbSAtIDFweCk7ICovXFxyXFxuICAvKiBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgcGFkZGluZzogMXJlbSAzcmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLW5vcm1hbC1mb250KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7ICovXFxyXFxufVxcclxcblxcclxcbi5tZW51LW1haW4gaDIge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udCk7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1saWdodCk7XFxyXFxuICBib3JkZXI6IDVweCByaWRnZSByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAvKiBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgKi9cXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbjogM3JlbSAwO1xcclxcbiAgbWF4LWhlaWdodDogOTBweDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXHJcXG4gIC8qIG91dGxpbmU6IHNvbGlkIHJlZCAxcHg7ICovXFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgLyogZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XFxyXFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbTpmaXJzdC1vZi10eXBlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLm1lbnUtaXRlbTo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogJ+KWvCc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMXJlbTtcXHJcXG4gIGJvdHRvbTogM3B4O1xcclxcbn0gKi9cXHJcXG5cXHJcXG4ubWVudS1pdGVtOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtOjphZnRlciB7XFxyXFxuICBjb250ZW50OiAn4pa8JztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAxcmVtO1xcclxcbiAgYm90dG9tOiAzcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XFxyXFxuICAvKiB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7ICovXFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0uZXhwYW5kIHtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGxpbWU7ICovXFxyXFxuICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xcclxcbiAgLyogdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7ICovXFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0uZXhwYW5kOjphZnRlciB7XFxyXFxuICAvKiBjb250ZW50OiAn4payJzsgKi9cXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxuICAvKiB0cmFuc2l0aW9uOiBhbGwgMS4zcyBsaW5lYXI7ICovXFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMXJlbTtcXHJcXG4gIGJvdHRvbTogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZy1mb250KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0gLmRlc2Mge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLW5vcm1hbC1mb250KTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tbm9ybWFsLWZvbnQpO1xcclxcbiAgd2lkdGg6IG1pbig4MCUsIDYwMHB4KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQgPiBkaXYge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbGVnZW5kIHtcXHJcXG4gIG92ZXJmbG93OmhpZGRlbjtcXHJcXG4gIGhlaWdodDowO1xcclxcbiAgd2lkdGg6MDtcXHJcXG59ICovXFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDE3OSwgMTc5LCAxNzkpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcXHJcXG4gIC8qIG91dGxpbmU6IHNvbGlkIDFweDsgKi9cXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBzb2xpZCAxcHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLW5vcm1hbC1mb250KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3LCAxNywgMTcsIDAuOCk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWluZm8tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWluZm8tY29udGFpbmVyIGRpdiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLW5vcm1hbC1mb250KTtcXHJcXG4gIC8qIGZvbnQtc2l6ZTogMS4xMjVyZW07ICovXFxyXFxuICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWluZm8tY29udGFpbmVyIGgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1pbmZvLWNvbnRhaW5lciBwOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLmhvbWUtbWFpbiB7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmltYWdlLWNvbnRhaW5lciB7XFxyXFxuICAgIC8qIG1heC13aWR0aDogNjAlOyAqL1xcclxcbiAgICBvcmRlcjogMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51LW1haW4ge1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdC1pbmZvLWNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWN0LWluZm8tY29udGFpbmVyIGRpdiB7XFxyXFxuICAgIG1pbi13aWR0aDogY2FsYygxMDAlIC8gMyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmaWVsZHNldCB7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZpZWxkc2V0ID4gZGl2IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcXHJcXG4gIC8qIC5ob21lLW1haW4ge1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcXHJcXG4gIH0gKi9cXHJcXG5cXHJcXG4gIGhlYWRlciBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTF2dztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbWFnZS1jb250YWluZXIge1xcclxcbiAgICAvKiBtYXgtd2lkdGg6IDEwMCU7ICovXFxyXFxuICAgIC8qIG9yZGVyOiAyOyAqL1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3QtaW5mby1jb250YWluZXIge1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdC1pbmZvLWNvbnRhaW5lciBkaXYge1xcclxcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmb3JtIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiAuY29udGFjdC1pbmZvLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gIH0gKi9cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNvbnRlbnQsIGNyZWF0ZUhUTUxlbGVtZW50IH0gZnJvbSAnLi4vLi4vaW5kZXguanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICBjb25zdCBoMSA9IGNyZWF0ZUhUTUxlbGVtZW50KCdoMScsIHVuZGVmaW5lZCwgJ1JhaW5ib3cgQmVhciBCaXRlcycpO1xyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHJcbiAgY29uc3QgbWVudU5hbWVzID0gWydIb21lJywgJ01lbnUnLCAnQ29udGFjdCddO1xyXG5cclxuICBtZW51TmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgY29uc3QgbGkgPSBjcmVhdGVIVE1MZWxlbWVudCgnbGknLCB1bmRlZmluZWQsIG5hbWUpO1xyXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gIH0pO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcclxuICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnRlbnQsIGNyZWF0ZUhUTUxlbGVtZW50IH0gZnJvbSAnLi4vLi4vaW5kZXguanMnO1xyXG5cclxuY29uc3QgbWFpbiA9IGNyZWF0ZUhUTUxlbGVtZW50KCdtYWluJywgJ2NvbnRhY3QtbWFpbicsIHVuZGVmaW5lZCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGFjdFBhZ2UoKSB7XHJcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcclxuICBjcmVhdGVDb250YWN0Rm9ybSgpO1xyXG4gIGNyZWF0ZUNvbnRhY3RJbmZvKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RGb3JtKCkge1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xyXG5cclxuICBjb25zdCBlbWFpbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGVtYWlsTGFiZWwgPSBjcmVhdGVIVE1MZWxlbWVudCgnbGFiZWwnLCB1bmRlZmluZWQsICdFbWFpbCcpO1xyXG4gIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2VtYWlsJyk7XHJcbiAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VtYWlsJyk7XHJcbiAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZW1haWwnKTtcclxuICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgeW91ciBlbWFpbCcpO1xyXG4gIGVtYWlsTGFiZWwuaHRtbEZvciA9IGVtYWlsSW5wdXQuaWQ7XHJcblxyXG4gIGNvbnN0IG5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBuYW1lTGFiZWwgPSBjcmVhdGVIVE1MZWxlbWVudCgnbGFiZWwnLCB1bmRlZmluZWQsICdOYW1lJyk7XHJcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lJyk7XHJcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJyk7XHJcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgeW91ciBuYW1lJyk7XHJcbiAgbmFtZUxhYmVsLmh0bWxGb3IgPSBuYW1lSW5wdXQuaWQ7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUhUTUxlbGVtZW50KCdidXR0b24nLCB1bmRlZmluZWQsICdTdWJtaXQnKTtcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG5cclxuICBtYWluLmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xyXG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKGVtYWlsQ29udGFpbmVyKTtcclxuICBlbWFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbExhYmVsKTtcclxuICBlbWFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbElucHV0KTtcclxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChuYW1lQ29udGFpbmVyKTtcclxuICBuYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XHJcbiAgbmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdEluZm8oKSB7XHJcbiAgY29uc3QgY29udGFjdEluZm9Db250YWluZXIgPSBjcmVhdGVIVE1MZWxlbWVudChcclxuICAgICdzZWN0aW9uJyxcclxuICAgICdjb250YWN0LWluZm8tY29udGFpbmVyJyxcclxuICAgIHVuZGVmaW5lZFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY29udGFjdDFIZWFkaW5nID0gY3JlYXRlSFRNTGVsZW1lbnQoJ2gzJywgdW5kZWZpbmVkLCAnRmluZCBVcycpO1xyXG4gIGNvbnN0IGNvbnRhY3QxQ29udGVudCA9IGNyZWF0ZUhUTUxlbGVtZW50KFxyXG4gICAgJ3AnLFxyXG4gICAgdW5kZWZpbmVkLFxyXG4gICAgJzEyMSBSb2NrIFNyZWV0LCAyMSBBdmVudWUsIE5ldyBZb3JrLCBOWSA5MjEwMy05MDAwJ1xyXG4gICk7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3QyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY29udGFjdDJIZWFkaW5nID0gY3JlYXRlSFRNTGVsZW1lbnQoJ2gzJywgdW5kZWZpbmVkLCAnSG91cnMnKTtcclxuICBjb25zdCBjb250YWN0MkNvbnRlbnQgPSBjcmVhdGVIVE1MZWxlbWVudChcclxuICAgICdwJyxcclxuICAgIHVuZGVmaW5lZCxcclxuICAgIGBNb25kYXkgLSBTYXR1cmRheVxyXG4gICAgOWFtIC0gN3BtXHJcbiAgICBTdW5kYXlcclxuICAgIDEwYW0gLSA2cG1gXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgY29udGFjdDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBjb250YWN0M0hlYWRpbmcgPSBjcmVhdGVIVE1MZWxlbWVudCgnaDMnLCB1bmRlZmluZWQsICdDYWxsIFVzJyk7XHJcbiAgY29uc3QgY29udGFjdDNDb250ZW50ID0gY3JlYXRlSFRNTGVsZW1lbnQoJ3AnLCB1bmRlZmluZWQsICcxICgyMzQpIDU2Ny04OTEnKTtcclxuICBjb25zdCBjb250YWN0M0NvbnRlbnQyID0gY3JlYXRlSFRNTGVsZW1lbnQoJ3AnLCB1bmRlZmluZWQsICcyICgzNDUpIDMzMy04OTcnKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcclxuXHJcbiAgbWFpbi5hcHBlbmRDaGlsZChjb250YWN0SW5mb0NvbnRhaW5lcik7XHJcblxyXG4gIGNvbnRhY3RJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3QxKTtcclxuICBjb250YWN0MS5hcHBlbmRDaGlsZChjb250YWN0MUhlYWRpbmcpO1xyXG4gIGNvbnRhY3QxLmFwcGVuZENoaWxkKGNvbnRhY3QxQ29udGVudCk7XHJcblxyXG4gIGNvbnRhY3RJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3QyKTtcclxuICBjb250YWN0Mi5hcHBlbmRDaGlsZChjb250YWN0MkhlYWRpbmcpO1xyXG4gIGNvbnRhY3QyLmFwcGVuZENoaWxkKGNvbnRhY3QyQ29udGVudCk7XHJcblxyXG4gIGNvbnRhY3RJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3QzKTtcclxuICBjb250YWN0My5hcHBlbmRDaGlsZChjb250YWN0M0hlYWRpbmcpO1xyXG4gIGNvbnRhY3QzLmFwcGVuZENoaWxkKGNvbnRhY3QzQ29udGVudCk7XHJcbiAgY29udGFjdDMuYXBwZW5kQ2hpbGQoY29udGFjdDNDb250ZW50Mik7XHJcbn1cclxuIiwiaW1wb3J0IHsgY29udGVudCwgY3JlYXRlSFRNTGVsZW1lbnQgfSBmcm9tICcuLi8uLi9pbmRleC5qcyc7XHJcbmltcG9ydCBob21lSW1nIGZyb20gJy4uL2ltYWdlcy9ob21lLnBuZyc7XHJcblxyXG5jb25zdCBtYWluID0gY3JlYXRlSFRNTGVsZW1lbnQoJ21haW4nLCAnaG9tZS1tYWluJywgdW5kZWZpbmVkKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIb21lUGFnZSgpIHtcclxuICBtYWluLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGNyZWF0ZUhUTUxlbGVtZW50KCdkaXYnLCAnaW1hZ2UtY29udGFpbmVyJywgdW5kZWZpbmVkKTtcclxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBpbWcuc3JjID0gaG9tZUltZztcclxuICBpbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnc3dlZXRzIG9uIGEgcGxhdGUnKTtcclxuXHJcbiAgY29uc3QgaW50cm9Db250YWluZXIgPSBjcmVhdGVIVE1MZWxlbWVudCgnZGl2JywgJ2ludHJvLWNvbnRhaW5lcicsIHVuZGVmaW5lZCk7XHJcblxyXG4gIGNvbnN0IGludHJvSGVhZGluZyA9IGNyZWF0ZUhUTUxlbGVtZW50KFxyXG4gICAgJ2gxJyxcclxuICAgICdpbnRyby1oZWFkaW5nJyxcclxuICAgICdWaWJyYW50IGd1bW15LWluc3BpcmVkIHRyZWF0cyBjcmFmdGVkIGRhaWx5IHdpdGggbG92ZS4nXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaW50cm9kdWN0aW9uID1cclxuICAgICdXZWxjb21lIHRvIFJhaW5ib3cgQmVhciBCaXRlcywgd2hlcmUgZ3VtbXkgYmVhcnMgbWVldCBjdWxpbmFyeSBtYWdpYy4gRGl2ZSBpbnRvIGEgd29ybGQgb2YgcGxheWZ1bCwgdmlicmFudCBmbGF2b3JzIGFuZCB3aGltc3kuIEpvaW4gdXMgZm9yIGEgYnVyc3Qgb2Ygam95IGluIGV2ZXJ5IGJpdGUhJztcclxuXHJcbiAgY29uc3QgaW50cm9kdWN0aW9uRWwgPSBjcmVhdGVIVE1MZWxlbWVudChcclxuICAgICdkaXYnLFxyXG4gICAgJ2ludHJvLW1lc3NhZ2UnLFxyXG4gICAgaW50cm9kdWN0aW9uXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbGluayA9IGNyZWF0ZUhUTUxlbGVtZW50KCdhJywgdW5kZWZpbmVkLCAnVmlldyBNZW51Jyk7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XHJcbiAgbWFpbi5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcik7XHJcbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICBtYWluLmFwcGVuZENoaWxkKGludHJvQ29udGFpbmVyKTtcclxuICBpbnRyb0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbnRyb0hlYWRpbmcpO1xyXG4gIGludHJvQ29udGFpbmVyLmFwcGVuZENoaWxkKGludHJvZHVjdGlvbkVsKTtcclxuICBpbnRyb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjb250ZW50LCBjcmVhdGVIVE1MZWxlbWVudCB9IGZyb20gJy4uLy4uL2luZGV4LmpzJztcclxuXHJcbmNvbnN0IG1haW4gPSBjcmVhdGVIVE1MZWxlbWVudCgnbWFpbicsICdtZW51LW1haW4nLCB1bmRlZmluZWQpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbnVQYWdlKCkge1xyXG4gIG1haW4uaW5uZXJIVE1MID0gJyc7XHJcbiAgY3JlYXRlTWFpbkNvdXJzZXMoKTtcclxuICBjcmVhdGVEcmlua3MoKTtcclxuICBleHBhbmREaXNoKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1haW5Db3Vyc2VzKCkge1xyXG4gIGNvbnN0IG1haW5JdGVtcyA9IHJlc3RhdXJhbnRNZW51Lm1haW5JdGVtcztcclxuICBjb25zdCBtYWluRGlzaENvbnRhaW5lciA9IGNyZWF0ZUhUTUxlbGVtZW50KFxyXG4gICAgJ3NlY3Rpb24nLFxyXG4gICAgJ21haW4tZGlzaC1jb250YWluZXInLFxyXG4gICAgdW5kZWZpbmVkXHJcbiAgKTtcclxuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIVE1MZWxlbWVudCgnaDInLCB1bmRlZmluZWQsICdNYWluIERpc2hlcycpO1xyXG4gIG1haW5EaXNoQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gIGZvciAoY29uc3QgbWFpbkl0ZW0gb2YgbWFpbkl0ZW1zKSB7XHJcbiAgICBjb25zdCBtYWluTmFtZSA9IGNyZWF0ZUhUTUxlbGVtZW50KCdkaXYnLCAnbmFtZScsIG1haW5JdGVtLm5hbWUpO1xyXG5cclxuICAgIGNvbnN0IG1haW5EZXNjID0gY3JlYXRlSFRNTGVsZW1lbnQoJ2RpdicsICdkZXNjJywgbWFpbkl0ZW0uZGVzY3JpcHRpb24pO1xyXG5cclxuICAgIGNvbnN0IG1haW5QcmljZSA9IGNyZWF0ZUhUTUxlbGVtZW50KCdkaXYnLCAncHJpY2UnLCBtYWluSXRlbS5wcmljZSk7XHJcblxyXG4gICAgY29uc3QgbWFpbkluZm8gPSBjcmVhdGVIVE1MZWxlbWVudCgnZGl2JywgJ2luZm8tY29udGFpbmVyJywgdW5kZWZpbmVkKTtcclxuXHJcbiAgICBjb25zdCBtYWluRGlzaCA9IGNyZWF0ZUhUTUxlbGVtZW50KCdkaXYnLCAnbWVudS1pdGVtJywgdW5kZWZpbmVkKTtcclxuXHJcbiAgICBtYWluRGlzaENvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluRGlzaCk7XHJcbiAgICBtYWluRGlzaC5hcHBlbmRDaGlsZChtYWluSW5mbyk7XHJcbiAgICBtYWluSW5mby5hcHBlbmRDaGlsZChtYWluTmFtZSk7XHJcbiAgICBtYWluRGlzaC5hcHBlbmRDaGlsZChtYWluRGVzYyk7XHJcbiAgICBtYWluSW5mby5hcHBlbmRDaGlsZChtYWluUHJpY2UpO1xyXG4gIH1cclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcclxuICBtYWluLmFwcGVuZENoaWxkKG1haW5EaXNoQ29udGFpbmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRHJpbmtzKCkge1xyXG4gIGNvbnN0IGRyaW5rcyA9IHJlc3RhdXJhbnRNZW51LmRyaW5rcztcclxuICBjb25zdCBkcmlua3NDb250YWluZXIgPSBjcmVhdGVIVE1MZWxlbWVudChcclxuICAgICdzZWN0aW9uJyxcclxuICAgICdkcmluay1jb250YWluZXInLFxyXG4gICAgdW5kZWZpbmVkXHJcbiAgKTtcclxuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIVE1MZWxlbWVudCgnaDInLCB1bmRlZmluZWQsICdEcmlua3MnKTtcclxuICBkcmlua3NDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgZm9yIChjb25zdCBkcmluayBvZiBkcmlua3MpIHtcclxuICAgIGNvbnN0IGRyaW5rTmFtZSA9IGNyZWF0ZUhUTUxlbGVtZW50KCdkaXYnLCAnbmFtZScsIGRyaW5rLm5hbWUpO1xyXG5cclxuICAgIGNvbnN0IGRyaW5rRGVzYyA9IGNyZWF0ZUhUTUxlbGVtZW50KCdkaXYnLCAnZGVzYycsIGRyaW5rLmRlc2NyaXB0aW9uKTtcclxuXHJcbiAgICBjb25zdCBkcmlua1ByaWNlID0gY3JlYXRlSFRNTGVsZW1lbnQoJ2RpdicsICdwcmljZScsIGRyaW5rLnByaWNlKTtcclxuXHJcbiAgICBjb25zdCBkcmlua0luZm8gPSBjcmVhdGVIVE1MZWxlbWVudCgnZGl2JywgJ2luZm8tY29udGFpbmVyJywgdW5kZWZpbmVkKTtcclxuXHJcbiAgICBjb25zdCBtYWluRHJpbmsgPSBjcmVhdGVIVE1MZWxlbWVudCgnZGl2JywgJ21lbnUtaXRlbScsIHVuZGVmaW5lZCk7XHJcblxyXG4gICAgZHJpbmtzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Ecmluayk7XHJcbiAgICBtYWluRHJpbmsuYXBwZW5kQ2hpbGQoZHJpbmtJbmZvKTtcclxuICAgIGRyaW5rSW5mby5hcHBlbmRDaGlsZChkcmlua05hbWUpO1xyXG4gICAgbWFpbkRyaW5rLmFwcGVuZENoaWxkKGRyaW5rRGVzYyk7XHJcbiAgICBkcmlua0luZm8uYXBwZW5kQ2hpbGQoZHJpbmtQcmljZSk7XHJcbiAgfVxyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xyXG4gIG1haW4uYXBwZW5kQ2hpbGQoZHJpbmtzQ29udGFpbmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXhwYW5kRGlzaCgpIHtcclxuICBjb25zdCBtZW51RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWN0aW9uID4gZGl2Jyk7XHJcblxyXG4gIG1lbnVFbC5mb3JFYWNoKChlbCkgPT5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmQnKTtcclxuICAgIH0pXHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgcmVzdGF1cmFudE1lbnUgPSB7XHJcbiAgbWFpbkl0ZW1zOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdHdW1teSBCZWFyIFBhbmNha2UgU3RhY2snLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAnRmx1ZmZ5IHBhbmNha2VzIGxheWVyZWQgd2l0aCBndW1teSBiZWFyLWluZnVzZWQgc3lydXAsIHdoaXBwZWQgY3JlYW0sIGFuZCBndW1teSBiZWFyIHBpZWNlcy4nLFxyXG4gICAgICBwcmljZTogMTEuOTksXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnR3VtbXkgQmVhciBQaXp6YScsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICdUaGluIGNydXN0IHBpenphIHRvcHBlZCB3aXRoIGdvb2V5IG1venphcmVsbGEsIHBlcHBlcm9uaSwgYW5kIHNjYXR0ZXJlZCBndW1teSBiZWFyIHN1cnByaXNlcy4nLFxyXG4gICAgICBwcmljZTogMTQuOTksXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnR3VtbXkgQmVhciBUYWNvcycsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICdTb2Z0IGZsb3VyIHRvcnRpbGxhcyBmaWxsZWQgd2l0aCBncmlsbGVkIGNoaWNrZW4gb3IgdmVnZ2llcywgbGV0dHVjZSwgY2hlZXNlLCBhbmQgZ3VtbXkgYmVhciBzYWxzYS4nLFxyXG4gICAgICBwcmljZTogMTMuOTksXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnR3VtbXkgQmVhciBQYXN0YScsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICdDb2xvcmZ1bCBwYXN0YSBzcGlyYWxzIHRvc3NlZCBpbiBhIGNyZWFteSBhbGZyZWRvIHNhdWNlIHdpdGggc2F1dMOpZWQgdmVnZXRhYmxlcyBhbmQgZ3VtbXkgYmVhciBhY2NlbnRzLicsXHJcbiAgICAgIHByaWNlOiAxMi45OSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdHdW1teSBCZWFyIFN0aXItRnJ5JyxcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgJ0EgbWVkbGV5IG9mIGZyZXNoIHZlZ2V0YWJsZXMgYW5kIHlvdXIgY2hvaWNlIG9mIHByb3RlaW4gc3Rpci1mcmllZCBpbiBhIHRhbmd5IGd1bW15IGJlYXIgZ2xhemUsIHNlcnZlZCBvdmVyIHN0ZWFtZWQgcmljZS4nLFxyXG4gICAgICBwcmljZTogMTUuOTksXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgZHJpbmtzOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdHdW1teSBCZWFyIEZpenonLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAnU3BhcmtsaW5nIGJsZW5kIG9mIGxlbW9uLWxpbWUgc29kYSBhbmQgZ3VtbXkgYmVhci1pbmZ1c2VkIHN5cnVwLCBnYXJuaXNoZWQgd2l0aCBhIGd1bW15IGJlYXIgc2tld2VyLicsXHJcbiAgICAgIHByaWNlOiA0Ljk5LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0d1bW15IEJlYXIgU21vb3RoaWUnLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAnUmVmcmVzaGluZyBtaXggb2YgZnJlc2ggZnJ1aXRzLCB5b2d1cnQsIGFuZCBndW1teSBiZWFyIHBpZWNlcywgYmxlbmRlZCB0byBwZXJmZWN0aW9uLicsXHJcbiAgICAgIHByaWNlOiA1Ljk5LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0d1bW15IEJlYXIgTGVtb25hZGUnLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAnQ2xhc3NpYyBsZW1vbmFkZSB3aXRoIGEgdHdpc3TigJRndW1teSBiZWFyIGljZSBjdWJlcyB0aGF0IHNsb3dseSBtZWx0IHRvIGFkZCBleHRyYSBzd2VldG5lc3MuJyxcclxuICAgICAgcHJpY2U6IDMuOTksXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnR3VtbXkgQmVhciBJY2VkIFRlYScsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICdDaGlsbGVkIGljZWQgdGVhIGluZnVzZWQgd2l0aCBndW1teSBiZWFyIGVzc2VuY2UsIHBlcmZlY3QgZm9yIGEgY29vbCwgZmxhdm9yZnVsIHNpcC4nLFxyXG4gICAgICBwcmljZTogMy45OSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdHdW1teSBCZWFyIE1vY2t0YWlsIFNwcml0emVyJyxcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgJ0EgbW9ja3RhaWwgbWVkbGV5IG9mIGZydWl0IGp1aWNlcywgc29kYSB3YXRlciwgYW5kIGd1bW15IGJlYXIgZ2FybmlzaCBmb3IgYSBmaXp6eSBkZWxpZ2h0LicsXHJcbiAgICAgIHByaWNlOiA2Ljk5LFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG4iLCJpbXBvcnQgJy4vYXNzZXRzL2Nzcy9yZXNldC5jc3MnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2Nzcy9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tICcuL2Fzc2V0cy9jb21wb25lbnRzL2hlYWRlci5qcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUhvbWVQYWdlIH0gZnJvbSAnLi9hc3NldHMvcGFnZXMvaG9tZS5qcyc7XHJcbmltcG9ydCB7IGNyZWF0ZU1lbnVQYWdlIH0gZnJvbSAnLi9hc3NldHMvcGFnZXMvbWVudS5qcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3RQYWdlIH0gZnJvbSAnLi9hc3NldHMvcGFnZXMvY29udGFjdC5qcyc7XHJcbmV4cG9ydCB7IGNvbnRlbnQsIGNyZWF0ZUhUTUxlbGVtZW50IH07XHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhUTUxlbGVtZW50KHRhZ05hbWUsIGNsYXNzTmFtZSwgY29udGVudCkge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xyXG4gIGlmIChjbGFzc05hbWUpIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xyXG5cclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuY3JlYXRlSGVhZGVyKCk7XHJcbmNyZWF0ZUhvbWVQYWdlKCk7XHJcbi8vIGNyZWF0ZU1lbnVQYWdlKCk7XHJcblxyXG5jb25zdCBuYXZFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xyXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG5cclxuLy8gbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuLy8gICBjb250ZW50LmNoaWxkcmVuWzFdLnJlbW92ZSgpO1xyXG4vLyAgIGNyZWF0ZU1lbnVQYWdlKCk7XHJcbi8vIH0pO1xyXG5cclxuLy8gbmF2RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4vLyAgIGlmIChlLnRhcmdldC5pbm5lclRleHQgPT09ICdIb21lJykge1xyXG4vLyAgICAgY29udGVudC5jaGlsZHJlblsxXS5yZW1vdmUoKTtcclxuLy8gICAgIGNyZWF0ZUhvbWVQYWdlKCk7XHJcbi8vICAgfSBlbHNlIGlmIChlLnRhcmdldC5pbm5lclRleHQgPT09ICdNZW51Jykge1xyXG4vLyAgICAgY29udGVudC5jaGlsZHJlblsxXS5yZW1vdmUoKTtcclxuLy8gICAgIGNyZWF0ZU1lbnVQYWdlKCk7XHJcbi8vICAgfSBlbHNlIGlmIChlLnRhcmdldC5pbm5lclRleHQgPT09ICdDb250YWN0Jykge1xyXG4vLyAgICAgY29udGVudC5jaGlsZHJlblsxXS5yZW1vdmUoKTtcclxuLy8gICAgIGNyZWF0ZUNvbnRhY3RQYWdlKCk7XHJcbi8vICAgfVxyXG4vLyB9KTtcclxuXHJcbltuYXZFbCwgbWVudUJ0bl0uZm9yRWFjaCgoZWwpID0+XHJcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmlubmVyVGV4dCA9PT0gJ0hvbWUnKSB7XHJcbiAgICAgIGNvbnRlbnQuY2hpbGRyZW5bMV0ucmVtb3ZlKCk7XHJcbiAgICAgIGNyZWF0ZUhvbWVQYWdlKCk7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBlLnRhcmdldC5pbm5lclRleHQgPT09ICdNZW51JyB8fFxyXG4gICAgICBlLnRhcmdldC5pbm5lclRleHQgPT09ICdWaWV3IE1lbnUnXHJcbiAgICApIHtcclxuICAgICAgY29udGVudC5jaGlsZHJlblsxXS5yZW1vdmUoKTtcclxuICAgICAgY3JlYXRlTWVudVBhZ2UoKTtcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaW5uZXJUZXh0ID09PSAnQ29udGFjdCcpIHtcclxuICAgICAgY29udGVudC5jaGlsZHJlblsxXS5yZW1vdmUoKTtcclxuICAgICAgY3JlYXRlQ29udGFjdFBhZ2UoKTtcclxuICAgIH1cclxuICB9KVxyXG4pO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9