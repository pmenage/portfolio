webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/projects */ "./data/projects.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_h1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/h1 */ "./components/h1.js");







var Project = function Project(_ref) {
  var title = _ref.title,
      image = _ref.image,
      slug = _ref.slug,
      technologies = _ref.technologies,
      description = _ref.description,
      github = _ref.github;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-374265951" + " " + 'main-pure-g'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-374265951" + " " + 'pure-u-sm-1 pure-u-md-1-2'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-374265951" + " " + 'image'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: image,
    className: "jsx-374265951" + " " + 'pure-img'
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-374265951" + " " + 'pure-u-sm-1 pure-u-md-1-2'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-374265951" + " " + 'information'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-374265951" + " " + 'title'
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-374265951" + " " + 'tech'
  }, technologies.map(function (tech, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      key: i,
      className: "jsx-374265951" + " " + 'technology'
    }, tech);
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-374265951" + " " + 'description'
  }, description), github ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    href: github,
    className: "jsx-374265951" + " " + 'pure-button'
  }, "Github") : null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "374265951"
  }, ".title.jsx-374265951{font-family:'Roboto Slab',serif;-webkit-letter-spacing:.03cm;-moz-letter-spacing:.03cm;-ms-letter-spacing:.03cm;letter-spacing:.03cm;font-size:30px;font-weight:500;color:#2c3e50;}div.jsx-374265951{color:#34495e;}.pure-img.jsx-374265951{box-shadow:0 0 .7em #bdc3c7;position:relative;}.image.jsx-374265951{padding:1em;}.information.jsx-374265951{padding:1em;text-align:center;}.tech.jsx-374265951{margin-top:1em;}.technology.jsx-374265951{font-family:'Roboto Slab';color:#3498db;margin-right:5px;font-size:19px;font-weight:500;}.description.jsx-374265951{margin-top:1em;line-height:1.4em;}.pure-button.jsx-374265951{margin-top:1.5em;padding:.8em 1.5em .8em 1.5em;border-radius:1.8em;background-color:#16a085;color:#fff;}@media only screen and (min-width:768px){.image.jsx-374265951{padding:2em 1em 2em 2em;}.information.jsx-374265951{padding:2em 2em 2em 1em;text-align:left;}}@media only screen and (min-width:1000px){.main-pure-g.jsx-374265951{width:1000px;margin:0 auto;}.title.jsx-374265951{font-size:30px;padding-bottom:.3em;}.image.jsx-374265951{padding:2em;}.information.jsx-374265951{padding:2em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsaW5lL1BvcnRmb2xpb3MvcG9ydGZvbGlvL3BhZ2VzL3Byb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCZ0IsQUFHMEMsQUFPbkIsQUFJYyxBQU1oQixBQUdBLEFBS0csQUFnQlcsQUFRWCxBQWFJLEFBVU8sQUFJQSxBQVNYLEFBS0UsQUFLSCxBQUlBLFlBakZoQixBQUdvQixBQTJFbEIsQUFJQSxDQWRnQixDQTlFbEIsQ0FrQkEsQUF3Qm9CLEFBeUNJLEVBNUJVLE9BVWhDLEFBSWtCLEVBbkNKLENBNkNkLENBM0VrQixFQVVwQixFQXJCdUIsQ0FrRHZCLEVBeUNFLEtBakRpQixBQW1DakIsTUFqRUYsQ0FtRHdCLFVBcEJQLFVBcUJZLEtBcEJYLGdCQUNsQixJQW9CZSxXQUNiLDhCQWpFZSxlQUNDLGdCQUNGLGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9wYXVsaW5lL1BvcnRmb2xpb3MvcG9ydGZvbGlvL3BhZ2VzL3Byb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBwcm9qZWN0cyBmcm9tICcuLi9kYXRhL3Byb2plY3RzJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcydcbmltcG9ydCBIMSBmcm9tICcuLi9jb21wb25lbnRzL2gxJ1xuXG5jb25zdCBQcm9qZWN0ID0gKHsgdGl0bGUsIGltYWdlLCBzbHVnLCB0ZWNobm9sb2dpZXMsIGRlc2NyaXB0aW9uLCBnaXRodWIgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1wdXJlLWcnPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdwdXJlLXUtc20tMSBwdXJlLXUtbWQtMS0yJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWFnZSc+XG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gY2xhc3NOYW1lPSdwdXJlLWltZycgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPSdwdXJlLXUtc20tMSBwdXJlLXUtbWQtMS0yJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmZvcm1hdGlvbic+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGl0bGUnPnt0aXRsZX08L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZWNoJz5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZWNobm9sb2dpZXMubWFwKCh0ZWNoLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGVjaG5vbG9neScga2V5PXtpfT57dGVjaH08L3NwYW4+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICB7Z2l0aHViID8gPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17Z2l0aHVifSBjbGFzc05hbWU9J3B1cmUtYnV0dG9uJz5HaXRodWI8L2E+IDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAuMDNjbTtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogIzJjM2U1MDtcbiAgICAgIH1cbiAgICAgIGRpdiB7XG4gICAgICAgIGNvbG9yOiAjMzQ0OTVlO1xuICAgICAgfVxuXG4gICAgICAucHVyZS1pbWcge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgLjdlbSAjYmRjM2M3O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cblxuICAgICAgLmltYWdlIHtcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgfVxuICAgICAgLmluZm9ybWF0aW9uIHtcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC50ZWNoIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgfVxuXG4gICAgICAvKlxuICAgICAgLnRlY2hub2xvZ3kge1xuICAgICAgICBwYWRkaW5nOiAuM2VtIC40ZW0gLjNlbSAuNGVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAuNWVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWJjOWM7XG4gICAgICB9XG4gICAgICAudGVjaG5vbG9neTphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6XCJcIjtcbiAgICAgIH0qL1xuXG4gICAgICAudGVjaG5vbG9neSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInO1xuICAgICAgICBjb2xvcjogIzM0OThkYjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIH1cblxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgICB9XG5cbiAgICAgIC8qXG4gICAgICAucHVyZS1idXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxYWJjOWM7XG4gICAgICAgIGNvbG9yOiAjMWFiYzljO1xuICAgICAgfSovXG5cbiAgICAgIC5wdXJlLWJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMS41ZW07XG4gICAgICAgICAgcGFkZGluZzogLjhlbSAxLjVlbSAuOGVtIDEuNWVtO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEuOGVtO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNmEwODU7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgcGFkZGluZzogMmVtIDFlbSAyZW0gMmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmluZm9ybWF0aW9uIHtcbiAgICAgICAgICBwYWRkaW5nOiAyZW0gMmVtIDJlbSAxZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XG5cbiAgICAgICAgLm1haW4tcHVyZS1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwMHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IC4zZW07XG4gICAgICAgIH1cblxuICAgICAgICAuaW1hZ2Uge1xuICAgICAgICAgIHBhZGRpbmc6IDJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbmZvcm1hdGlvbiB7XG4gICAgICAgICAgcGFkZGluZzogMmVtO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5cbmNvbnN0IFByb2plY3RzID0gKCkgPT4gKFxuICA8TGF5b3V0IHRpdGxlPVwiV29ya1wiPlxuXG4gICAgPEgxPk15IHByb2plY3RzPC9IMT5cbiAgICB7XG4gICAgICBwcm9qZWN0cy5tYXAoKHByb2plY3QsIGkpID0+IChcbiAgICAgICAgPFByb2plY3RcbiAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgdGl0bGU9e3Byb2plY3QubmFtZX1cbiAgICAgICAgICBpbWFnZT17cHJvamVjdC5pbWFnZX1cbiAgICAgICAgICBzbHVnPXtwcm9qZWN0LnNsdWd9XG4gICAgICAgICAgdGVjaG5vbG9naWVzPXtwcm9qZWN0LnRlY2hub2xvZ2llc31cbiAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvamVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICBnaXRodWI9e3Byb2plY3QuZ2l0aHVifT5cbiAgICAgICAgPC9Qcm9qZWN0PlxuICAgICAgKSlcbiAgICB9XG4gIDwvTGF5b3V0PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cyJdfQ== */\n/*@ sourceURL=/Users/pauline/Portfolios/portfolio/pages/projects.js */"));
};

var Projects = function Projects() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Work"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_h1__WEBPACK_IMPORTED_MODULE_5__["default"], null, "My projects"), _data_projects__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (project, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Project, {
      key: i,
      title: project.name,
      image: project.image,
      slug: project.slug,
      technologies: project.technologies,
      description: project.description,
      github: project.github
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=projects.js.de40b88a2253eb6e1349.hot-update.js.map