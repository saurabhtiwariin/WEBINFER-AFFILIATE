(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-brands-brands-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/brands/component/brand/brand.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/brands/component/brand/brand.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-container uk-container-expand uk-padding-remove-horizontal uk-margin-left uk-margin-right\">\n  <h1 class=\"uk-heading-primary\">Brands</h1>\n\n  <div *ngIf=\"brands.loading\" class=\"uk-container uk-text-center uk-margin\">\n    <div uk-spinner=\"ratio: 3\"></div>\n  </div> \n  \n  <div class=\"uk-grid-match uk-child-width-1-5@l uk-child-width-1-4@m uk-child-width-1-2@s\" uk-grid>\n    <div *ngFor=\"let brand of brands.data\">\n      <p>{{brand.name}}</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/brands/component/brands/brands.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/brands/component/brands/brands.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-brand [brands]=\"( brands$ | async )\"></app-brand>\n\n"

/***/ }),

/***/ "./src/app/modules/brands/brand-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/brands/brand-routing.module.ts ***!
  \********************************************************/
/*! exports provided: BrandsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsRoutingModule", function() { return BrandsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_brands_brands_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/brands/brands.component */ "./src/app/modules/brands/component/brands/brands.component.ts");




const routes = [
    {
        path: '',
        component: _component_brands_brands_component__WEBPACK_IMPORTED_MODULE_3__["BrandsComponent"]
    }
];
let BrandsRoutingModule = class BrandsRoutingModule {
};
BrandsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BrandsRoutingModule);



/***/ }),

/***/ "./src/app/modules/brands/brands.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/brands/brands.module.ts ***!
  \*************************************************/
/*! exports provided: BrandsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsModule", function() { return BrandsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _component_brands_brands_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/brands/brands.component */ "./src/app/modules/brands/component/brands/brands.component.ts");
/* harmony import */ var _brand_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./brand-routing.module */ "./src/app/modules/brands/brand-routing.module.ts");
/* harmony import */ var _component_brand_brand_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/brand/brand.component */ "./src/app/modules/brands/component/brand/brand.component.ts");






let BrandsModule = class BrandsModule {
};
BrandsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_component_brands_brands_component__WEBPACK_IMPORTED_MODULE_3__["BrandsComponent"], _component_brand_brand_component__WEBPACK_IMPORTED_MODULE_5__["BrandComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _brand_routing_module__WEBPACK_IMPORTED_MODULE_4__["BrandsRoutingModule"]
        ]
    })
], BrandsModule);



/***/ }),

/***/ "./src/app/modules/brands/component/brand/brand.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/modules/brands/component/brand/brand.component.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYnJhbmRzL2NvbXBvbmVudC9icmFuZC9icmFuZC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/brands/component/brand/brand.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/brands/component/brand/brand.component.ts ***!
  \*******************************************************************/
/*! exports provided: BrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandComponent", function() { return BrandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BrandComponent = class BrandComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BrandComponent.prototype, "brands", void 0);
BrandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-brand',
        template: __webpack_require__(/*! raw-loader!./brand.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/brands/component/brand/brand.component.html"),
        styles: [__webpack_require__(/*! ./brand.component.less */ "./src/app/modules/brands/component/brand/brand.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BrandComponent);



/***/ }),

/***/ "./src/app/modules/brands/component/brands/brands.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/modules/brands/component/brands/brands.component.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYnJhbmRzL2NvbXBvbmVudC9icmFuZHMvYnJhbmRzLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/brands/component/brands/brands.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/brands/component/brands/brands.component.ts ***!
  \*********************************************************************/
/*! exports provided: BrandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsComponent", function() { return BrandsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_brand_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/brand.service */ "./src/app/modules/brands/services/brand.service.ts");



let BrandsComponent = class BrandsComponent {
    constructor(brandService) {
        this.brandService = brandService;
        this.brands$ = this.brandService.getBrands$();
    }
    ngOnInit() {
        this.brandService.loadBrands();
    }
};
BrandsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-brands',
        template: __webpack_require__(/*! raw-loader!./brands.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/brands/component/brands/brands.component.html"),
        styles: [__webpack_require__(/*! ./brands.component.less */ "./src/app/modules/brands/component/brands/brands.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_brand_service__WEBPACK_IMPORTED_MODULE_2__["BrandService"]])
], BrandsComponent);



/***/ }),

/***/ "./src/app/modules/brands/services/brand.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/brands/services/brand.service.ts ***!
  \**********************************************************/
/*! exports provided: BrandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandService", function() { return BrandService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let BrandService = class BrandService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.brandsUrl = "http://localhost:8080/apibrands";
        this.brands$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({ loading: false, data: [] });
    }
    getBrands$() {
        return this.brands$.asObservable();
    }
    loadBrands() {
        console.log("inside loadBrands... ");
        /*
            return this.httpClient.get(this.brandsUrl)
              .toPromise()
              .then(response => {
                console.log(response._embedded.apibrands)
                this.brands$.next({ loading: false, data: response._embedded.apibrands });
              });
        */
        this.brands$.next({ loading: true, data: [] });
        this.httpClient.get(this.brandsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            // important to get json properties from response
            let resStr = JSON.stringify(res);
            let resJSON = JSON.parse(resStr);
            console.log(resJSON._embedded.apibrands);
            return resJSON._embedded.apibrands;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000)).subscribe((brands) => {
            console.log("subscribed here..");
            this.brands$.next({ loading: false, data: brands });
        });
    }
};
BrandService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], BrandService);



/***/ })

}]);
//# sourceMappingURL=modules-brands-brands-module-es2015.js.map