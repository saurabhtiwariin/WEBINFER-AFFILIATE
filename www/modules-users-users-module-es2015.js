(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-users-users-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/users/component/users/users.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/users/component/users/users.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  users works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/users/component/users/users.component.less":
/*!********************************************************************!*\
  !*** ./src/app/modules/users/component/users/users.component.less ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlcnMvY29tcG9uZW50L3VzZXJzL3VzZXJzLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/users/component/users/users.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/users/component/users/users.component.ts ***!
  \******************************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UsersComponent = class UsersComponent {
    constructor() { }
    ngOnInit() {
    }
};
UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/users/component/users/users.component.html"),
        styles: [__webpack_require__(/*! ./users.component.less */ "./src/app/modules/users/component/users/users.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UsersComponent);



/***/ }),

/***/ "./src/app/modules/users/user-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/users/user-routing.module.ts ***!
  \******************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/users/users.component */ "./src/app/modules/users/component/users/users.component.ts");




const routes = [
    {
        path: '',
        component: _component_users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"]
    }
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserRoutingModule);



/***/ }),

/***/ "./src/app/modules/users/users.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/users/users.module.ts ***!
  \***********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/modules/users/user-routing.module.ts");
/* harmony import */ var _component_users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/users/users.component */ "./src/app/modules/users/component/users/users.component.ts");





let UsersModule = class UsersModule {
};
UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_component_users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"]
        ]
    })
], UsersModule);



/***/ })

}]);
//# sourceMappingURL=modules-users-users-module-es2015.js.map