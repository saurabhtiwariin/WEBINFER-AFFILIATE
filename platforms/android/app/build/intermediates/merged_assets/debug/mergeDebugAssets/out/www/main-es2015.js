(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/brands/brands.module": [
		"./src/app/modules/brands/brands.module.ts",
		"modules-brands-brands-module"
	],
	"./modules/core/core.module": [
		"./src/app/modules/core/core.module.ts"
	],
	"./modules/homes/homes.module": [
		"./src/app/modules/homes/homes.module.ts",
		"modules-homes-homes-module"
	],
	"./modules/users/users.module": [
		"./src/app/modules/users/users.module.ts",
		"modules-users-users-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <app-header-container></app-header-container>\n    <!--\n    <div class=\"uk-background-default\" uk-sticky></div>-->\n</header> \n<main>\n<router-outlet></router-outlet> \n<app-sub-footer></app-sub-footer>\n</main>\n<footer>\n    <app-footer></app-footer>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/components/footer/footer.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/components/footer/footer.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <section class=\"uk-section uk-section-secondary uk-section-small uk-light\">\n    <div class=\"uk-container\">\n      <div class=\"uk-grid-medium uk-child-width-1-1 uk-child-width-1-4@m\" uk-grid>\n        <div>\n          <a class=\"uk-logo\" href=\"index\">\n            <img src=\"assets/images/logo-inverse.svg\" width=\"90\" height=\"32\" alt=\"Logo\">\n          </a>\n          <p class=\"uk-text-small\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris eros. Nulla\n            quis ante sed tortor efficitur facilisis.</p>\n          <ul class=\"uk-iconnav\">\n            <li>\n              <a href=\"#\" title=\"Facebook\" uk-icon=\"facebook\" ></a>\n            </li>\n            <li>\n              <a href=\"#\" title=\"Twitter\" uk-icon=\"twitter\" ></a>\n            </li>\n            <li>\n              <a href=\"#\" title=\"YouTube\" uk-icon=\"youtube\" ></a>\n            </li>\n            <li>\n              <a href=\"#\" title=\"Instagram\" uk-icon=\"instagram\" ></a>\n            </li>\n          </ul>\n        </div>\n        <div>\n          <nav class=\"uk-grid-small uk-child-width-1-2\" uk-grid>\n            <div>\n              <ul class=\"uk-nav uk-nav-default\">\n                <li>\n                  <a href=\"catalog\">Catalog</a>\n                </li>\n                <li>\n                  <a href=\"brand\">Brands</a>\n                </li>\n                <li>\n                  <a href=\"delivery\">Delivery</a>\n                </li>\n                <li>\n                  <a href=\"faq\">FAQ</a>\n                </li>\n                <li>\n                  <a href=\"#\">Payment</a>\n                </li>\n              </ul>\n            </div>\n            <div>\n              <ul class=\"uk-nav uk-nav-default\">\n                <li>\n                  <a href=\"about\">About</a>\n                </li>\n                <li>\n                  <a href=\"contact\">Contacts</a>\n                </li>\n                <li>\n                  <a href=\"blog\">Blog</a>\n                </li>\n                <li>\n                  <a href=\"news\">News</a>\n                </li>\n              </ul>\n            </div>\n          </nav>\n        </div>\n        <div>\n          <ul class=\"uk-list uk-text-small\">\n            <li>\n              <a class=\"uk-link-muted\" href=\"#\">\n                <span class=\"uk-margin-small-right\" uk-icon=\"receiver\" ></span>\n                <span class=\"tm-pseudo\">8 800 799 99 99</span>\n              </a>\n            </li>\n            <li>\n              <a class=\"uk-link-muted\" href=\"#\">\n                <span class=\"uk-margin-small-right\" uk-icon=\"mail\" ></span>\n                <span class=\"tm-pseudo\">example@example.com</span>\n              </a>\n            </li>\n            <li>\n              <div class=\"uk-text-muted\">\n                <span class=\"uk-margin-small-right\" uk-icon=\"location\" ></span>\n                <span>St.&nbsp;Petersburg, Nevsky&nbsp;Prospect&nbsp;28</span>\n              </div>\n            </li>\n            <li>\n              <div class=\"uk-text-muted\">\n                <span class=\"uk-margin-small-right\" uk-icon=\"clock\" ></span>\n                <span>Daily 10:00–22:00</span>\n              </div>\n            </li>\n          </ul>\n        </div>\n        <div>\n          <form class=\"uk-form-stacked\">\n            <label>\n              <div class=\"uk-form-label uk-text-muted\">Subscribe for updates</div>\n              <div class=\"uk-inline uk-width-1-1\">\n                <a class=\"uk-form-icon uk-form-icon-flip\" href=\"#\" uk-icon=\"mail\" ></a>\n                <input class=\"uk-input\" type=\"email\" placeholder=\"Your email\" required>\n              </div>\n            </label>\n          </form>\n          <div class=\"uk-margin uk-text-small uk-text-muted\">Shopping Categories icons by Jaro Sigrist from Noun Project\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/components/nav/nav.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/components/nav/nav.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"uk-navbar-container uk-light uk-visible@m tm-toolbar-container\">\n  <div class=\"uk-container\" uk-navbar>\n    <div class=\"uk-navbar-left\">\n      <nav>\n        <ul class=\"uk-navbar-nav\">\n          <li>\n            <a href=\"#\">\n              <span class=\"uk-margin-xsmall-right\" uk-icon=\"icon: receiver; ratio: .75;\"></span>\n              <span class=\"tm-pseudo\">8 800 799 99 99</span>\n            </a>\n          </li>\n          <li>\n            <a href=\"contact\" onclick=\"return false\">\n              <span class=\"uk-margin-xsmall-right\" uk-icon=\"icon: location; ratio: .75;\"></span>\n              <span class=\"tm-pseudo\">Store in St. Petersburg</span>\n              <span uk-icon=\"icon: triangle-down; ratio: .75;\"></span>\n            </a>\n            <div class=\"uk-margin-remove\" uk-drop=\"mode: click; pos: bottom-center;\">\n              <div class=\"uk-card uk-card-default uk-card-small uk-box-shadow-xlarge uk-overflow-hidden uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom\">\n                <figure class=\"uk-card-media-top uk-height-small js-map\" data-latitude=\"59.9356728\" data-longitude=\"30.3258604\" data-zoom=\"14\"></figure>\n                <div class=\"uk-card-body\">\n                  <div class=\"uk-text-small\">\n                    <div class=\"uk-text-bolder\">Store Name</div>\n                    <div>St.&nbsp;Petersburg, Nevsky&nbsp;Prospect&nbsp;28</div>\n                    <div>Daily 10:00–22:00</div>\n                  </div>\n                  <div class=\"uk-margin-small\">\n                    <a class=\"uk-link-muted uk-text-uppercase tm-link-to-all uk-link-reset\" href=\"contact\">\n                      <span>contacts</span>\n                      <span uk-icon=\"icon: chevron-right; ratio: .75;\"></span>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"uk-navbar-item\">\n              <span class=\"uk-margin-xsmall-right\" uk-icon=\"icon: clock; ratio: .75;\"></span>Daily 10:00–22:00</div>\n          </li>\n        </ul>\n      </nav>\n    </div>\n    <div class=\"uk-navbar-right\">\n      <nav>\n        <ul class=\"uk-navbar-nav\">\n          <li>\n            <a href=\"news\">News</a>\n          </li>\n          <li>\n            <a href=\"faq\">FAQ</a>\n          </li>\n          <li>\n            <a href=\"#\">Payment</a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n  </div>\n</div>\n<div class=\"uk-navbar-container tm-navbar-container\" uk-sticky=\"cls-active: tm-navbar-container-fixed\">\n  <div class=\"uk-container\" uk-navbar>\n    <div class=\"uk-navbar-left\">\n      <button class=\"uk-navbar-toggle uk-hidden@m\" uk-toggle=\"target: #nav-offcanvas\" uk-navbar-toggle-icon></button>\n      <a class=\"uk-navbar-item uk-logo\" href=\"index\">\n        <img src=\"assets/images/logo.svg\" width=\"90\" height=\"32\" alt=\"Logo\">\n        </a>\n        <nav class=\"uk-visible@m\">\n          <ul class=\"uk-navbar-nav\">\n            <li>\n              <a href=\"catalog\">Catalog<span class=\"uk-margin-xsmall-left\" uk-icon=\"icon: chevron-down; ratio: .75;\"></span>\n              </a>\n              <div class=\"uk-navbar-dropdown uk-margin-remove uk-padding-remove-vertical\" uk-drop=\"pos: bottom-justify;delay-show: 125;delay-hide: 50;duration: 75;boundary: .tm-navbar-container;boundary-align: true;pos: bottom-justify;flip: x\">\n                <div class=\"uk-container\">\n                  <ul class=\"uk-navbar-dropdown-grid uk-child-width-1-5\" uk-grid>\n                    <li>\n                      <div class=\"uk-margin-top uk-margin-bottom\">\n                        <a class=\"uk-link-reset\" href=\"category\">\n                          <img class=\"uk-display-block uk-margin-auto uk-margin-bottom\" src=\"assets/images/catalog/computers.svg\" alt=\"Laptops &amp; Tablets\" width=\"80\" height=\"80\">\n                            <div class=\"uk-text-bolder\">Laptops &amp; Tablets</div>\n                          </a>\n                          <ul class=\"uk-nav uk-nav-default\">\n                            <li>\n                              <a href=\"subcategory\">Laptops</a>\n                            </li>\n                            <li>\n                              <a href=\"subcategory\">Tablets</a>\n                            </li>\n                            <li>\n                              <a href=\"subcategory\">Peripherals</a>\n                            </li>\n                            <li>\n                              <a href=\"subcategory\">Keyboards</a>\n                            </li>\n                            <li>\n                              <a href=\"subcategory\">Accessories</a>\n                            </li>\n                          </ul>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"uk-margin-top uk-margin-bottom\">\n                          <a class=\"uk-link-reset\" href=\"category\">\n                            <img class=\"uk-display-block uk-margin-auto uk-margin-bottom\" src=\"assets/images/catalog/phones.svg\" alt=\"Phones &amp; Gadgets\" width=\"80\" height=\"80\">\n                              <div class=\"uk-text-bolder\">Phones &amp; Gadgets</div>\n                            </a>\n                            <ul class=\"uk-nav uk-nav-default\">\n                              <li>\n                                <a href=\"subcategory\">Smartphones</a>\n                              </li>\n                              <li>\n                                <a href=\"subcategory\">Mobile Phones</a>\n                              </li>\n                              <li>\n                                <a href=\"subcategory\">Smart watches</a>\n                              </li>\n                              <li>\n                                <a href=\"subcategory\">Charging and batteries</a>\n                              </li>\n                              <li>\n                                <a href=\"subcategory\">Accessories</a>\n                              </li>\n                            </ul>\n                          </div>\n                        </li>\n                        <li>\n                          <div class=\"uk-margin-top uk-margin-bottom\">\n                            <a class=\"uk-link-reset\" href=\"category\">\n                              <img class=\"uk-display-block uk-margin-auto uk-margin-bottom\" src=\"assets/images/catalog/tv.svg\" alt=\"TV &amp; Video\" width=\"80\" height=\"80\">\n                                <div class=\"uk-text-bolder\">TV &amp; Video</div>\n                              </a>\n                              <ul class=\"uk-nav uk-nav-default\">\n                                <li>\n                                  <a href=\"subcategory\">TV</a>\n                                </li>\n                                <li>\n                                  <a href=\"subcategory\">Home Cinema</a>\n                                </li>\n                                <li>\n                                  <a href=\"subcategory\">Satellite &amp; Cable TV</a>\n                                </li>\n                                <li>\n                                  <a href=\"subcategory\">Projectors</a>\n                                </li>\n                                <li>\n                                  <a href=\"subcategory\">DVD &amp; Blu-ray</a>\n                                </li>\n                                <li>\n                                  <a href=\"subcategory\">Accessories</a>\n                                </li>\n                              </ul>\n                            </div>\n                          </li>\n                          <li>\n                            <div class=\"uk-margin-top uk-margin-bottom\">\n                              <a class=\"uk-link-reset\" href=\"category\">\n                                <img class=\"uk-display-block uk-margin-auto uk-margin-bottom\" src=\"assets/images/catalog/games.svg\" alt=\"Games &amp; Entertainment\" width=\"80\" height=\"80\">\n                                  <div class=\"uk-text-bolder\">Games &amp; Entertainment</div>\n                                </a>\n                                <ul class=\"uk-nav uk-nav-default\">\n                                  <li>\n                                    <a href=\"subcategory\">Gaming consoles</a>\n                                  </li>\n                                  <li>\n                                    <a href=\"subcategory\">Games</a>\n                                  </li>\n                                  <li>\n                                    <a href=\"subcategory\">Software</a>\n                                  </li>\n                                  <li>\n                                    <a href=\"subcategory\">Joysticks &amp; gamepads</a>\n                                  </li>\n                                  <li>\n                                    <a href=\"subcategory\">Accessories</a>\n                                  </li>\n                                </ul>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"uk-margin-top uk-margin-bottom\">\n                                <a class=\"uk-link-reset\" href=\"category\">\n                                  <img class=\"uk-display-block uk-margin-auto uk-margin-bottom\" src=\"assets/images/catalog/photo.svg\" alt=\"Photo\" width=\"80\" height=\"80\">\n                                    <div class=\"uk-text-bolder\">Photo</div>\n                                  </a>\n                                  <ul class=\"uk-nav uk-nav-default\">\n                                    <li>\n                                      <a href=\"subcategory\">Cameras</a>\n                                    </li>\n                                    <li>\n                                      <a href=\"subcategory\">Lenses</a>\n                                    </li>\n                                    <li>\n                                      <a href=\"subcategory\">Accessories</a>\n                                    </li>\n                                  </ul>\n                                </div>\n                              </li>\n                            </ul>\n                          </div>\n                        </div>\n                      </li>\n                      <li>\n                        <a href=\"brand\">Brands<span class=\"uk-margin-xsmall-left\" uk-icon=\"icon: chevron-down; ratio: .75;\"></span>\n                        </a>\n                        <div class=\"uk-navbar-dropdown uk-margin-remove uk-padding-remove-vertical\" uk-drop=\"pos: bottom-justify;delay-show: 125;delay-hide: 50;duration: 75;boundary: .tm-navbar-container;boundary-align: true;pos: bottom-justify;flip: x\">\n                          <div class=\"uk-container uk-container-small uk-margin-top uk-margin-bottom\">\n                            <ul class=\"uk-grid-small uk-child-width-1-6\" uk-grid>\n                              <li>\n                                <div class=\"tm-ratio tm-ratio-4-3\">\n                                  <a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box\" href=\"#\" title=\"Apple\">\n                                    <figure class=\"tm-media-box-wrap\">\n                                      <img src=\"assets/images/brands/apple.svg\" alt=\"Apple\">\n                                      </figure>\n                                    </a>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"tm-ratio tm-ratio-4-3\">\n                                    <a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box\" href=\"#\" title=\"Samsung\">\n                                      <figure class=\"tm-media-box-wrap\">\n                                        <img src=\"assets/images/brands/samsung.svg\" alt=\"Samsung\">\n                                        </figure>\n                                      </a>\n                                    </div>\n                                  </li>\n                                  <li>\n                                    <div class=\"tm-ratio tm-ratio-4-3\">\n                                      <a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box\" href=\"#\" title=\"Sony\">\n                                        <figure class=\"tm-media-box-wrap\">\n                                          <img src=\"assets/images/brands/sony.svg\" alt=\"Sony\">\n                                          </figure>\n                                        </a>\n                                      </div>\n                                    </li>\n                                    <li>\n                                      <div class=\"tm-ratio tm-ratio-4-3\">\n                                        <a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box\" href=\"#\" title=\"Microsoft\">\n                                          <figure class=\"tm-media-box-wrap\">\n                                            <img src=\"assets/images/brands/microsoft.svg\" alt=\"Microsoft\">\n                                            </figure>\n                                          </a>\n                                        </div>\n                                      </li>\n                                      <li>\n                                        <div class=\"tm-ratio tm-ratio-4-3\">\n                                          <a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box\" href=\"#\" title=\"Intel\">\n                                            <figure class=\"tm-media-box-wrap\">\n                                              <img src=\"assets/images/brands/intel.svg\" alt=\"Intel\">\n                                              </figure>\n                                            </a>\n                                          </div>\n                                        </li>\n                                        <li>\n                                          <div class=\"tm-ratio tm-ratio-4-3\">\n                                            <a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box\" href=\"#\" title=\"HP\">\n                                              <figure class=\"tm-media-box-wrap\">\n                                                <img src=\"assets/images/brands/hp.svg\" alt=\"HP\">\n                                                </figure>\n                                              </a>\n                                            </div>\n                                          </li>\n                                          <li>\n                                            <div class=\"tm-ratio tm-ratio-4-3\">\n                                              <a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box\" href=\"#\" title=\"LG\">\n                                                <figure class=\"tm-media-box-wrap\">\n                                                  <img src=\"assets/images/brands/lg.svg\" alt=\"LG\">\n                                                  </figure>\n                                                </a>\n                                              </div>\n                                            </li>\n                                            <li>\n                                              <div class=\"tm-ratio tm-ratio-4-3\">\n                                                <a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box\" href=\"#\" title=\"Lenovo\">\n                                                  <figure class=\"tm-media-box-wrap\">\n                                                    <img src=\"assets/images/brands/lenovo.svg\" alt=\"Lenovo\">\n                                                    </figure>\n                                                  </a>\n                                                </div>\n                                              </li>\n                                              <li>\n                                                <div class=\"tm-ratio tm-ratio-4-3\">\n                                                  <a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box\" href=\"#\" title=\"ASUS\">\n                                                    <figure class=\"tm-media-box-wrap\">\n                                                      <img src=\"assets/images/brands/asus.svg\" alt=\"ASUS\">\n                                                      </figure>\n                                                    </a>\n                                                  </div>\n                                                </li>\n                                                <li>\n                                                  <div class=\"tm-ratio tm-ratio-4-3\">\n                                                    <a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box\" href=\"#\" title=\"Acer\">\n                                                      <figure class=\"tm-media-box-wrap\">\n                                                        <img src=\"assets/images/brands/acer.svg\" alt=\"Acer\">\n                                                        </figure>\n                                                      </a>\n                                                    </div>\n                                                  </li>\n                                                  <li>\n                                                    <div class=\"tm-ratio tm-ratio-4-3\">\n                                                      <a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box\" href=\"#\" title=\"Dell\">\n                                                        <figure class=\"tm-media-box-wrap\">\n                                                          <img src=\"assets/images/brands/dell.svg\" alt=\"Dell\">\n                                                          </figure>\n                                                        </a>\n                                                      </div>\n                                                    </li>\n                                                    <li>\n                                                      <div class=\"tm-ratio tm-ratio-4-3\">\n                                                        <a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box\" href=\"#\" title=\"Canon\">\n                                                          <figure class=\"tm-media-box-wrap\">\n                                                            <img src=\"assets/images/brands/canon.svg\" alt=\"Canon\">\n                                                            </figure>\n                                                          </a>\n                                                        </div>\n                                                      </li>\n                                                    </ul>\n                                                    <div class=\"uk-text-center uk-margin\">\n                                                      <a class=\"uk-link-muted uk-text-uppercase tm-link-to-all\" href=\"brand\">\n                                                        <span>See all brands</span>\n                                                        <span uk-icon=\"icon: chevron-right; ratio: .75;\"></span>\n                                                      </a>\n                                                    </div>\n                                                  </div>\n                                                </div>\n                                              </li>\n                                              <li>\n                                                <a href=\"#\">Pages<span class=\"uk-margin-xsmall-left\" uk-icon=\"icon: chevron-down; ratio: .75;\"></span>\n                                                </a>\n                                                <div class=\"uk-navbar-dropdown uk-margin-remove uk-padding-remove-vertical\" uk-drop=\"pos: bottom-justify;delay-show: 125;delay-hide: 50;duration: 75;boundary: .tm-navbar-container;boundary-align: true;pos: bottom-justify;flip: x\">\n                                                  <div class=\"uk-container uk-container-small uk-margin-top uk-margin-bottom\">\n                                                    <ul class=\"uk-nav uk-nav-default uk-column-1-3\">\n                                                      <li>\n                                                        <a href=\"catalog\">Catalog</a>\n                                                      </li>\n                                                      <li>\n                                                        <a href=\"category\">Category</a>\n                                                      </li>\n                                                      <li>\n                                                        <a href=\"subcategory\">Subcategory</a>\n                                                      </li>\n                                                      <li>\n                                                        <a href=\"product\">Product</a>\n                                                      </li>\n                                                      <li>\n                                                        <a href=\"cart\">Cart</a>\n                                                      </li>\n                                                      <li>\n                                                        <a href=\"checkout\">Checkout</a>\n                                                      </li>\n                                                      <li>\n                                                        <a href=\"compare\">Compare</a>\n                                                      </li>\n                                                      <li>\n                                                        <a href=\"brand\">Brands</a>\n                                                      </li>\n                                                      <li>\n                                                        <a href=\"compare\">Compare</a>\n                                                      </li>\n                                                      <li>\n                                                        <a href=\"account\">Account</a>\n                                                      </li>\n                                                      <li>\n                                                        <a href=\"favorites\">Favorites</a>\n                                                      </li>\n                                                      <li>\n                                                        <a href=\"personal\">Personal</a>\n                                                      </li>\n                                                      <li>\n                                                        <a href=\"settings\">Settings</a>\n                                                      </li>\n                                                      <li>\n                                                        <a href=\"about\">About</a>\n                                                      </li>\n                                                      <li>\n                                                        <a href=\"contact\">Contacts</a>\n                                                      </li>\n                                                      <li>\n                                                        <a href=\"blog\">Blog</a>\n                                                      </li>\n                                                      <li>\n                                                        <a href=\"news\">News</a>\n                                                      </li>\n                                                      <li>\n                                                        <a href=\"article\">Article</a>\n                                                      </li>\n                                                      <li>\n                                                        <a href=\"faq\">FAQ</a>\n                                                      </li>\n                                                      <li>\n                                                        <a href=\"delivery\">Delivery</a>\n                                                      </li>\n                                                      <li>\n                                                        <a href=\"notfound\">404</a>\n                                                      </li>\n                                                    </ul>\n                                                  </div>\n                                                </div>\n                                              </li>\n                                              <li>\n                                                <a href=\"blog\">Blog</a>\n                                              </li>\n                                              <li>\n                                                <a href=\"about\">About</a>\n                                              </li>\n                                              <li>\n                                                <a href=\"contact\">Contacts</a>\n                                              </li>\n                                              <li>\n                                                  <a href=\"homes\">Homes</a>\n                                                </li>\n                                            </ul>\n                                          </nav>\n                                        </div>\n                                        <div class=\"uk-navbar-right\">\n                                          <a class=\"uk-navbar-toggle tm-navbar-button\" href=\"#\" uk-search-icon></a>\n                                          <div class=\"uk-navbar-dropdown uk-padding-small uk-margin-remove\" uk-drop=\"mode: click;cls-drop: uk-navbar-dropdown;boundary: .tm-navbar-container;boundary-align: true;pos: bottom-justify;flip: x\">\n                                            <div class=\"uk-container\">\n                                              <div class=\"uk-grid-small uk-flex-middle\" uk-grid>\n                                                <div class=\"uk-width-expand\">\n                                                  <form class=\"uk-search uk-search-navbar uk-width-1-1\">\n                                                    <input class=\"uk-search-input\" type=\"search\" placeholder=\"Search…\" autofocus>\n                                                    </form>\n                                                  </div>\n                                                  <div class=\"uk-width-auto\">\n                                                    <a class=\"uk-navbar-dropdown-close\" href=\"#\" uk-close></a>\n                                                  </div>\n                                                </div>\n                                              </div>\n                                            </div>\n                                            <a class=\"uk-navbar-item uk-link-muted uk-visible@m tm-navbar-button\" href=\"compare\">\n                                              <span uk-icon=\"copy\"></span>\n                                              <span class=\"uk-badge\">3</span>\n                                            </a>\n                                            <a class=\"uk-navbar-item uk-link-muted tm-navbar-button\" href=\"account\" uk-icon=\"user\"></a>\n                                            <div class=\"uk-padding-small uk-margin-remove\" uk-dropdown=\"pos: bottom-right; offset: -10; delay-hide: 200;\" style=\"min-width: 150px;\">\n                                              <ul class=\"uk-nav uk-dropdown-nav\">\n                                                <li>\n                                                  <a href=\"account\">Orders\n                                                    <span>(2)</span>\n                                                  </a>\n                                                </li>\n                                                <li>\n                                                  <a href=\"favorites\">Favorites\n                                                    <span>(3)</span>\n                                                  </a>\n                                                </li>\n                                                <li>\n                                                  <a href=\"personal\">Personal</a>\n                                                </li>\n                                                <li>\n                                                  <a href=\"settings\">Settings</a>\n                                                </li>\n                                                <li class=\"uk-nav-divider\"></li>\n                                                <li>\n                                                  <a href=\"#\">Log out</a>\n                                                </li>\n                                              </ul>\n                                            </div>\n                                            <a class=\"uk-navbar-item uk-link-muted tm-navbar-button\" href=\"cart\" uk-toggle=\"target: #cart-offcanvas\" onclick=\"return false\">\n                                              <span uk-icon=\"cart\"></span>\n                                              <span class=\"uk-badge\">2</span>\n                                            </a>\n                                          </div>\n                                        </div>\n                                      </div>\n<!--\n<nav class=\"uk-navbar uk-margin-left\">\n  <div class=\"uk-navbar-left uk-flex-nowrap\">\n\n    <a uk-navbar-toggle-icon href=\"#hamburger-menu\" class=\"uk navbar-toggle uk-hidden@m uk-padding-right uk-padding-remove-left\" uk-toggle>\n\n    </a>\n\n    <a href=\"#\" class=\"uk-navbar-item uk-logo uk-padding-remove-left\">\n      <img src=\"assets/logo.jpeg\" />\n    </a>\n  </div>\n\n  <div class=\"uk-navbar-left uk-width-large@m uk-width-5-6\">\n    <form action=\"\" class=\"uk-search uk-search-default uk-box-shadow-small uk-card-hover uk-width-5-6\">\n      <span uk-search-icon></span>\n      <input type=\"search\" class=\"uk-search-input\" placeholder=\"Filter here...\">\n    </form>\n  </div>\n\n  <div class=\"uk-navbar-right\">\n    <ul class=\"uk-navbar-nav uk-margin-right uk-visible@m uk-margin-right\">\n      <li class=\"\"><a href=\"#\" class=\"\">Become a host</a></li>\n      <li class=\"\"><a href=\"/users\" class=\"\">Users</a></li>\n      <li class=\"\"><a href=\"/brands\" class=\"\">Brands</a></li>\n      <li class=\"\"><a href=\"#\" class=\"\">Signup</a></li>\n      <li class=\"\"><a href=\"#\" class=\"\">Login</a></li>\n    </ul>\n  </div>\n</nav>\n\n<div id=\"hamburger-menu\" uk-offcanvas=\"overlay=: true\">\n  <div class=\"uk-offcanvas-bar\">\n\n    <ul class=\"uk-nav uk-nav-default\">\n      <li class=\"\"><a href=\"#\" class=\"\">Become a host</a></li> \n      <li class=\"\"><a href=\"/users\" class=\"\">Users</a></li>\n      <li class=\"\"><a href=\"/brands\" class=\"\">Brands</a></li>\n      <li class=\"\"><a href=\"#\" class=\"\">Help</a></li>\n      <li class=\"\"><a href=\"#\" class=\"\">Signup</a></li>\n      <li class=\"\"><a href=\"#\" class=\"\">Login</a></li>\n    </ul>\n\n    <button class=\"uk-offcanvas-close\" type=\"button\" uk-close>\n    </button>\n  </div>\n</div>\n-->\n\n<div id=\"nav-offcanvas\" uk-offcanvas=\"overlay: true\">\n    <aside class=\"uk-offcanvas-bar uk-padding-remove\">\n      <div class=\"uk-card uk-card-default uk-card-small tm-shadow-remove\">\n        <header class=\"uk-card-header uk-flex uk-flex-middle\">\n          <div>\n            <a class=\"uk-link-muted uk-text-bold\" href=\"#\">8 800 799 99 99</a>\n            <div class=\"uk-text-xsmall uk-text-muted\" style=\"margin-top: -2px;\">\n              <div>St.&nbsp;Petersburg, Nevsky&nbsp;Prospect&nbsp;28</div>\n              <div>Daily 10:00–22:00</div>\n            </div>\n          </div>\n        </header>\n        <nav class=\"uk-card-small uk-card-body\">\n          <ul class=\"uk-nav-default uk-nav-parent-icon uk-list-divider\" uk-nav>\n            <li class=\"uk-parent\">\n              <a href=\"catalog\">Catalog</a>\n              <ul class=\"uk-nav-sub uk-list-divider\">\n                <li>\n                  <a href=\"subcategory\">Laptops &amp; Tablets</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Phones &amp; Gadgets</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">TV &amp; Video</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Games &amp; Entertainment</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Photo</a>\n                </li>\n                <li class=\"uk-text-center\">\n                  <a class=\"uk-link-muted uk-text-uppercase tm-link-to-all\" href=\"catalog\">\n                    <span>see all categories</span>\n                    <span uk-icon=\"icon: chevron-right; ratio: .75;\"></span>\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"uk-parent\">\n              <a href=\"brand\">Brands</a>\n              <ul class=\"uk-nav-sub uk-list-divider\">\n                <li>\n                  <a href=\"subcategory\">Apple</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Samsung</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Sony</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Microsoft</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Intel</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">HP</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">LG</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Lenovo</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">ASUS</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Acer</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Dell</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Canon</a>\n                </li>\n                <li class=\"uk-text-center\">\n                  <a class=\"uk-link-muted uk-text-uppercase tm-link-to-all\" href=\"brand\">\n                    <span>see all brands</span>\n                    <span uk-icon=\"icon: chevron-right; ratio: .75;\"></span>\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"uk-parent\">\n              <a href=\"#\">Pages</a>\n              <ul class=\"uk-nav-sub uk-list-divider\">\n                <li>\n                  <a href=\"subcategory\">Catalog</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Category</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Subcategory</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Product</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Cart</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Checkout</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Compare</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Brands</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Compare</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Account</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Favorites</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Personal</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Settings</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">About</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Contacts</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Blog</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">News</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Article</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">FAQ</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Delivery</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">404</a>\n                </li>\n              </ul>\n            </li>\n            <li>\n              <a href=\"blog\">Blog</a>\n            </li>\n            <li>\n              <a href=\"about\">About</a>\n            </li>\n            <li>\n              <a href=\"contact\">Contacts</a>\n            </li>\n            <li>\n              <a href=\"compare\">Compare<span class=\"uk-badge uk-margin-xsmall-left\">3</span>\n              </a>\n            </li>\n          </ul>\n        </nav>\n        <nav class=\"uk-card-small uk-card-body\">\n          <ul class=\"uk-nav uk-nav-default\">\n            <li>\n              <a href=\"news\">News</a>\n            </li>\n            <li>\n              <a href=\"faq\">FAQ</a>\n            </li>\n            <li>\n              <a href=\"#\">Payment</a>\n            </li>\n          </ul>\n        </nav>\n        <nav class=\"uk-card-body\">\n          <ul class=\"uk-iconnav uk-flex-center\">\n            <li>\n              <a href=\"#\" title=\"Facebook\" uk-icon=\"facebook\"></a>\n            </li>\n            <li>\n              <a href=\"#\" title=\"Twitter\" uk-icon=\"twitter\"></a>\n            </li>\n            <li>\n              <a href=\"#\" title=\"YouTube\" uk-icon=\"youtube\"></a>\n            </li>\n            <li>\n              <a href=\"#\" title=\"Instagram\" uk-icon=\"instagram\"></a>\n            </li>\n          </ul>\n        </nav>\n      </div>\n    </aside>\n  </div>\n\n\n  \n  <div id=\"cart-offcanvas\" uk-offcanvas=\"overlay: true; flip: true\">\n      <aside class=\"uk-offcanvas-bar uk-padding-remove\">\n        <div class=\"uk-card uk-card-default uk-card-small uk-height-1-1 uk-flex uk-flex-column tm-shadow-remove\">\n          <header class=\"uk-card-header uk-flex uk-flex-middle\">\n            <div class=\"uk-grid-small uk-flex-1\" uk-grid>\n              <div class=\"uk-width-expand\">\n                <div class=\"uk-h3\">Cart</div>\n              </div>\n              <button class=\"uk-offcanvas-close\" type=\"button\" uk-close></button>\n            </div>\n          </header>\n          <div class=\"uk-card-body uk-overflow-auto\">\n            <ul class=\"uk-list uk-list-divider\">\n              <li class=\"uk-visible-toggle\">\n              \n                <article>\n                  <div class=\"uk-grid-small\" uk-grid>\n                    <div class=\"uk-width-1-4\">\n                      <div class=\"tm-ratio tm-ratio-4-3\">\n                        <a class=\"tm-media-box\" href=\"product\">\n                          <figure class=\"tm-media-box-wrap\">\n                            <img src=\"assets/images/products/1/1-small.jpg\" alt=\"Apple MacBook Pro 15&quot; Touch Bar MPTU2LL/A 256GB (Silver)\">\n                            </figure>\n                          </a>\n                        </div>\n                      </div>\n                      <div class=\"uk-width-expand\">\n                        <div class=\"uk-text-meta uk-text-xsmall\">Laptop</div>\n                        <a class=\"uk-link-heading uk-text-small\" href=\"product\">Apple MacBook Pro 15&quot; Touch Bar MPTU2LL/A 256GB (Silver)</a>\n                        <div class=\"uk-margin-xsmall uk-grid-small uk-flex-middle\" uk-grid>\n                          <div class=\"uk-text-bolder uk-text-small\">$1599.00</div>\n                          <div class=\"uk-text-meta uk-text-xsmall\">1 × $1599.00</div>\n                        </div>\n                      </div>\n                      <div>\n                        <a class=\"uk-icon-link uk-text-danger uk-invisible-hover\" href=\"#\" uk-icon=\"icon: close; ratio: .75\" uk-tooltip=\"Remove\"></a>\n                      </div>\n                    </div>\n                  </article>\n                </li>\n                <li class=\"uk-visible-toggle\">\n                  <article>\n                    <div class=\"uk-grid-small\" uk-grid>\n                      <div class=\"uk-width-1-4\">\n                        <div class=\"tm-ratio tm-ratio-4-3\">\n                          <a class=\"tm-media-box\" href=\"product\">\n                            <figure class=\"tm-media-box-wrap\">\n                              <img src=\"assets/images/products/2/2-small.jpg\" alt=\"Apple MacBook 12&quot; MNYN2LL/A 512GB (Rose Gold)\">\n                              </figure>\n                            </a>\n                          </div>\n                        </div>\n                        <div class=\"uk-width-expand\">\n                          <div class=\"uk-text-meta uk-text-xsmall\">Laptop</div>\n                          <a class=\"uk-link-heading uk-text-small\" href=\"product\">Apple MacBook 12&quot; MNYN2LL/A 512GB (Rose Gold)</a>\n                          <div class=\"uk-margin-xsmall uk-grid-small uk-flex-middle\" uk-grid>\n                            <div class=\"uk-text-bolder uk-text-small\">$1549.00</div>\n                            <div class=\"uk-text-meta uk-text-xsmall\">1 × $1549.00</div>\n                          </div>\n                        </div>\n                        <div>\n                          <a class=\"uk-icon-link uk-text-danger uk-invisible-hover\" href=\"#\" uk-icon=\"icon: close; ratio: .75\" uk-tooltip=\"Remove\"></a>\n                        </div>\n                      </div>\n                    </article>\n                  </li>\n                </ul>\n              </div>\n              <footer class=\"uk-card-footer\">\n                <div class=\"uk-grid-small\" uk-grid>\n                  <div class=\"uk-width-expand uk-text-muted uk-h4\">Subtotal</div>\n                  <div class=\"uk-h4 uk-text-bolder\">$3148.00</div>\n                </div>\n                <div class=\"uk-grid-small uk-child-width-1-1 uk-child-width-1-2@m uk-margin-small\" uk-grid>\n                  <div>\n                    <a class=\"uk-button uk-button-default uk-margin-small uk-width-1-1\" href=\"cart\">view cart</a>\n                  </div>\n                  <div>\n                    <a class=\"uk-button uk-button-primary uk-margin-small uk-width-1-1\" href=\"checkout\">checkout</a>\n                  </div>\n                </div>\n              </footer>\n            </div>\n          </aside>\n        </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/components/pagination/pagination.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/components/pagination/pagination.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <ul class=\"uk-pagination uk-flex-center\">\n      <li class=\"uk-active\">\n        <span>1</span>\n      </li>\n      <li>\n        <a href=\"#\">2</a>\n      </li>\n      <li>\n        <a href=\"#\">3</a>\n      </li>\n      <li>\n        <a href=\"#\">4</a>\n      </li>\n      <li>\n        <a href=\"#\">5</a>\n      </li>\n      <li class=\"uk-disabled\">\n        <span>…</span>\n      </li>\n      <li>\n        <a href=\"#\">20</a>\n      </li>\n      <li>\n        <a href=\"#\">\n          <span uk-pagination-next></span>\n        </a>\n      </li>\n    </ul>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/components/sub-footer/sub-footer.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/components/sub-footer/sub-footer.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"uk-section uk-section-default uk-section-small\">\n    <div class=\"uk-container\">\n      <div uk-slider>\n        <ul class=\"uk-slider-items uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-5@m uk-grid\">\n          <li>\n            <div class=\"uk-grid-small uk-flex-center uk-flex-left@s\" uk-grid>\n              <div>\n                <span uk-icon=\"icon: star; ratio: 2.5;\"></span>\n              </div>\n              <div class=\"uk-text-center uk-text-left@s uk-width-expand@s\">\n                <div>Mauris placerat</div>\n                <div class=\"uk-text-meta\">Donec mollis nibh dolor, sit amet auctor</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"uk-grid-small uk-flex-center uk-flex-left@s\" uk-grid>\n              <div>\n                <span uk-icon=\"icon: receiver; ratio: 2.5;\"></span>\n              </div>\n              <div class=\"uk-text-center uk-text-left@s uk-width-expand@s\">\n                <div>Lorem ipsum</div>\n                <div class=\"uk-text-meta\">Sit amet, consectetur adipiscing elit</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"uk-grid-small uk-flex-center uk-flex-left@s\" uk-grid>\n              <div>\n                <span uk-icon=\"icon: location; ratio: 2.5;\"></span>\n              </div>\n              <div class=\"uk-text-center uk-text-left@s uk-width-expand@s\">\n                <div>Proin pharetra</div>\n                <div class=\"uk-text-meta\">Nec quam a fermentum ut viverra</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"uk-grid-small uk-flex-center uk-flex-left@s\" uk-grid>\n              <div>\n                <span uk-icon=\"icon: comments; ratio: 2.5;\"></span>\n              </div>\n              <div class=\"uk-text-center uk-text-left@s uk-width-expand@s\">\n                <div>Praesent ultrices</div>\n                <div class=\"uk-text-meta\">Praesent ultrices, orci nec finibus</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"uk-grid-small uk-flex-center uk-flex-left@s\" uk-grid>\n              <div>\n                <span uk-icon=\"icon: happy; ratio: 2.5;\"></span>\n              </div>\n              <div class=\"uk-text-center uk-text-left@s uk-width-expand@s\">\n                <div>Duis condimentum</div>\n                <div class=\"uk-text-meta\">Pellentesque eget varius arcu</div>\n              </div>\n            </div>\n          </li>\n        </ul>\n        <ul class=\"uk-slider-nav uk-dotnav uk-flex-center uk-margin-medium-top\"></ul>\n      </div>\n    </div>\n  </section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/about-n-latest-news/about-n-latest-news.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/about-n-latest-news/about-n-latest-news.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"uk-section uk-section-default uk-section-small\">\n  <div class=\"uk-container\">\n    <div class=\"uk-grid-medium uk-child-width-1-1 uk-child-width-1-2@s\" uk-grid>\n      <section>\n        <h2 class=\"uk-text-center uk-text-left@s\">About</h2>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at neque vulputate, vestibulum magna in,\n          accumsan urna. Nulla feugiat ipsum ex, molestie porttitor nibh faucibus at. Lorem ipsum dolor sit amet,\n          consectetur adipiscing elit. Nullam hendrerit lorem ut finibus semper. Donec ac vehicula erat, nec consequat\n          massa.</p>\n        <p>Quisque rhoncus fermentum sapien id congue. Nam at rutrum turpis. Aliquam sagittis imperdiet tortor vel\n          dignissim. Ut ipsum nunc, egestas et odio id, vestibulum posuere orci. Orci varius natoque penatibus et magnis\n          dis parturient montes, nascetur ridiculus mus.</p>\n        <div class=\"uk-text-center uk-text-left@s\">\n          <a class=\"uk-link-muted uk-text-uppercase tm-link-to-all\" href=\"about\">\n            <span>read more</span>\n            <span uk-icon=\"icon: chevron-right; ratio: .75;\" ></span>\n          </a>\n        </div>\n      </section>\n      <section>\n        <h2 class=\"uk-text-center uk-text-left@s\">Latest News</h2>\n        <ul class=\"uk-list uk-list-small uk-list-divider\">\n          <li>\n            <article class=\"uk-article\">\n              <div class=\"uk-article-body\">\n                <div class=\"uk-article-meta uk-margin-xsmall-bottom\">\n                  <time>June 4, 2018</time>\n                </div>\n                <h3 class=\"uk-h4 uk-margin-remove\">\n                  <a class=\"uk-link-heading\" href=\"article\">Highlights from WWDC</a>\n                </h3>\n                <div class=\"uk-margin-xsmall-top uk-text-small\">\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales eget ipsum id aliquam. Nam\n                    consectetur interdum nibh eget sodales. Cras volutpat efficitur ornare.</p>\n                </div>\n              </div>\n            </article>\n          </li>\n          <li>\n            <article class=\"uk-article\">\n              <div class=\"uk-article-body\">\n                <div class=\"uk-article-meta uk-margin-xsmall-bottom\">\n                  <time>June 4, 2018</time>\n                </div>\n                <h3 class=\"uk-h4 uk-margin-remove\">\n                  <a class=\"uk-link-heading\" href=\"article\">Apple introduces macOS Mojave</a>\n                </h3>\n                <div class=\"uk-margin-xsmall-top uk-text-small\">\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales eget ipsum id aliquam. Nam\n                    consectetur interdum nibh eget sodales. Cras volutpat efficitur ornare.</p>\n                </div>\n              </div>\n            </article>\n          </li>\n          <li>\n            <article class=\"uk-article\">\n              <div class=\"uk-article-body\">\n                <div class=\"uk-article-meta uk-margin-xsmall-bottom\">\n                  <time>May 29, 2018</time>\n                </div>\n                <h3 class=\"uk-h4 uk-margin-remove\">\n                  <a class=\"uk-link-heading\" href=\"article\">iOS 11.4 brings stereo pairs and multi-room audio with\n                    AirPlay 2</a>\n                </h3>\n                <div class=\"uk-margin-xsmall-top uk-text-small\">\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales eget ipsum id aliquam. Nam\n                    consectetur interdum nibh eget sodales. Cras volutpat efficitur ornare.</p>\n                </div>\n              </div>\n            </article>\n          </li>\n        </ul>\n        <div class=\"uk-margin uk-text-center uk-text-left@s\">\n          <a class=\"uk-link-muted uk-text-uppercase tm-link-to-all\" href=\"news\">\n            <span>see all news</span>\n            <span uk-icon=\"icon: chevron-right; ratio: .75;\" ></span>\n          </a>\n        </div>\n      </section>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/about/about-heading/about-heading.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/about/about-heading/about-heading.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"uk-text-center\">\n  <ul class=\"uk-breadcrumb uk-flex-center uk-margin-remove\">\n    <li>\n      <a href=\"index\">Home</a>\n    </li>\n    <li>\n      <span>About</span>\n    </li>\n  </ul>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/about/stats/stats.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/about/stats/stats.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"uk-text-center\">Some stats</h2>\n<div class=\"uk-child-width-1-1 uk-child-width-1-3@s uk-text-center\" uk-grid>\n  <div>\n    <div class=\"uk-heading-primary uk-text-warning\">5+</div>\n    <div class=\"uk-margin-small-top\">years on the market</div>\n  </div>\n  <div>\n    <div class=\"uk-heading-primary uk-text-warning\">150+</div>\n    <div class=\"uk-margin-small-top\">orders per day</div>\n  </div>\n  <div>\n    <div class=\"uk-heading-primary uk-text-warning\">75000+</div>\n    <div class=\"uk-margin-small-top\">clients</div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/about/store/store.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/about/store/store.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"uk-text-center\">Store</h2>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet venenatis est. Phasellus vitae mauris\n  imperdiet, condimentum eros vel, ullamcorper turpis. Maecenas sed libero quis orci egestas vehicula fermentum id diam.\n</p>\n<figure>\n  <div class=\"uk-text-bolder\">Store Name</div>\n  <div>St.&nbsp;Petersburg, Nevsky&nbsp;Prospect&nbsp;28</div>\n  <div>Daily 10:00–22:00</div>\n</figure>\n<div class=\"tm-wrapper\">\n  <figure class=\"tm-ratio tm-ratio-16-9 js-map\" data-latitude=\"59.9356728\" data-longitude=\"30.3258604\" data-zoom=\"14\">\n  </figure>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/about/team/team.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/about/team/team.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"uk-text-center\">Our team</h2>\n<div class=\"uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m\" uk-grid>\n  <div>\n    <div class=\"uk-grid-small uk-flex-middle\" uk-grid>\n      <div>\n        <img src=\"assets/images/about/thomas.svg\" alt=\"Thomas Bruns\" width=\"80\" height=\"80\">\n      </div>\n      <div class=\"uk-width-expand\">\n        <div>Thomas Bruns</div>\n        <div class=\"uk-text-meta\">Co-founder & CEO</div>\n      </div>\n    </div>\n  </div>\n  <div>\n    <div class=\"uk-grid-small uk-flex-middle\" uk-grid>\n      <div>\n        <img src=\"assets/images/about/george.svg\" alt=\"George Clanton\" width=\"80\" height=\"80\">\n      </div>\n      <div class=\"uk-width-expand\">\n        <div>George Clanton</div>\n        <div class=\"uk-text-meta\">Co-founder & President</div>\n      </div>\n    </div>\n  </div>\n  <div>\n    <div class=\"uk-grid-small uk-flex-middle\" uk-grid>\n      <div>\n        <img src=\"assets/images/about/martin.svg\" alt=\"Martin Cade\" width=\"80\" height=\"80\">\n      </div>\n      <div class=\"uk-width-expand\">\n        <div>Martin Cade</div>\n        <div class=\"uk-text-meta\">Co-founder & CTO</div>\n      </div>\n    </div>\n  </div>\n  <div>\n    <div class=\"uk-grid-small uk-flex-middle\" uk-grid>\n      <div>\n        <img src=\"assets/images/about/carol.svg\" alt=\"Carol Issa\" width=\"80\" height=\"80\">\n      </div>\n      <div class=\"uk-width-expand\">\n        <div>Carol Issa</div>\n        <div class=\"uk-text-meta\">Former Commercial Director</div>\n      </div>\n    </div>\n  </div>\n  <div>\n    <div class=\"uk-grid-small uk-flex-middle\" uk-grid>\n      <div>\n        <img src=\"assets/images/about/patricia.svg\" alt=\"Patricia Kirk\" width=\"80\" height=\"80\">\n      </div>\n      <div class=\"uk-width-expand\">\n        <div>Patricia Kirk</div>\n        <div class=\"uk-text-meta\">Former Director of Strategy</div>\n      </div>\n    </div>\n  </div>\n  <div>\n    <div class=\"uk-grid-small uk-flex-middle\" uk-grid>\n      <div>\n        <img src=\"assets/images/about/nicole.svg\" alt=\"Nicole Yokoyama\" width=\"80\" height=\"80\">\n      </div>\n      <div class=\"uk-width-expand\">\n        <div>Nicole Yokoyama</div>\n        <div class=\"uk-text-meta\">Product Marketing Manager</div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/account/account-leftsidebar/account-leftsidebar.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/account/account-leftsidebar/account-leftsidebar.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-card uk-card-default uk-card-small tm-ignore-container\" uk-sticky=\"offset: 90; bottom: true; media: @m;\">\n  <div class=\"uk-card-header\">\n    <div class=\"uk-grid-small uk-child-width-1-1\" uk-grid>\n      <section>\n        <div\n          class=\"uk-width-1-3 uk-width-1-4@s uk-width-1-2@m uk-margin-auto uk-visible-toggle uk-position-relative uk-border-circle uk-overflow-hidden uk-light\">\n          <img class=\"uk-width-1-1\" src=\"assets/images/avatar.jpg\">\n          <a class=\"uk-link-reset uk-overlay-primary uk-position-cover uk-hidden-hover\" href=\"#\">\n            <div class=\"uk-position-center\">\n              <span uk-icon=\"icon: camera; ratio: 1.25;\"></span>\n            </div>\n          </a>\n        </div>\n      </section>\n      <div class=\"uk-text-center\">\n        <div class=\"uk-h4 uk-margin-remove\">Thomas Bruns</div>\n        <div class=\"uk-text-meta\">Joined June 6, 2018</div>\n      </div>\n      <div>\n        <div class=\"uk-grid-small uk-flex-center\" uk-grid>\n          <div>\n            <a class=\"uk-button uk-button-default uk-button-small\" href=\"settings\">\n              <span class=\"uk-margin-xsmall-right\" uk-icon=\"icon: cog; ratio: .75;\"></span>\n              <span>Settings</span>\n            </a>\n          </div>\n          <div>\n            <button class=\"uk-button uk-button-default uk-button-small\" href=\"#\" title=\"Log out\">\n              <span uk-icon=\"icon: sign-out; ratio: .75;\"></span>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div>\n    <nav>\n      <ul class=\"uk-nav uk-nav-default tm-nav\">\n        <li class=\"uk-active\">\n          <a href=\"account\">Orders\n            <span>(2)</span>\n          </a>\n        </li>\n        <li>\n          <a href=\"favorites\">Favorites\n            <span>(3)</span>\n          </a>\n        </li>\n        <li>\n          <a href=\"personal\">Personal Info</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/account/account-orders/account-orders.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/account/account-orders/account-orders.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-card uk-card-default uk-card-small tm-ignore-container\">\n    <header class=\"uk-card-header\">\n      <h1 class=\"uk-h2\">Orders</h1>\n    </header>\n    <section class=\"uk-card-body\">\n      <h3>\n        <a class=\"uk-link-heading\" href=\"#\">#36637649\n          <span class=\"uk-text-muted uk-text-small\">from June 17, 2018</span>\n        </a>\n      </h3>\n      <table\n        class=\"uk-table uk-table-small uk-table-justify uk-table-responsive uk-table-divider uk-margin-small-top uk-margin-remove-bottom\">\n        <tbody>\n          <tr>\n            <th class=\"uk-width-medium\">Items</th>\n            <td>7</td>\n          </tr>\n          <tr>\n            <th class=\"uk-width-medium\">Shipping</th>\n            <td>Pick up from store</td>\n          </tr>\n          <tr>\n            <th class=\"uk-width-medium\">Payment</th>\n            <td>Online by card</td>\n          </tr>\n          <tr>\n            <th class=\"uk-width-medium\">Total</th>\n            <td>$4896.00</td>\n          </tr>\n          <tr>\n            <th class=\"uk-width-medium\">Status</th>\n            <td>\n              <span class=\"uk-label\">Processing</span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </section>\n    <section class=\"uk-card-body\">\n      <h3>\n        <a class=\"uk-link-heading\" href=\"#\">#36637648\n          <span class=\"uk-text-muted uk-text-small\">from June 16, 2018</span>\n        </a>\n      </h3>\n      <table\n        class=\"uk-table uk-table-small uk-table-justify uk-table-responsive uk-table-divider uk-margin-small-top uk-margin-remove-bottom\">\n        <tbody>\n          <tr>\n            <th class=\"uk-width-medium\">Items</th>\n            <td>2</td>\n          </tr>\n          <tr>\n            <th class=\"uk-width-medium\">Shipping</th>\n            <td>Pick up from store</td>\n          </tr>\n          <tr>\n            <th class=\"uk-width-medium\">Payment</th>\n            <td>Online by card</td>\n          </tr>\n          <tr>\n            <th class=\"uk-width-medium\">Total</th>\n            <td>$599.00</td>\n          </tr>\n          <tr>\n            <th class=\"uk-width-medium\">Status</th>\n            <td>\n              <span class=\"uk-label uk-label-danger\">Canceled</span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </section>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/basic-categories/basic-categories.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/basic-categories/basic-categories.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"uk-section uk-section-default uk-section-small\">\n\t<div class=\"uk-container\">\n\t\t<div class=\"uk-grid-small uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-6@m\" uk-grid>\n\t\t\t<div>\n\t\t\t\t<a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large\" href=\"subcategory\">\n\t\t\t\t\t<div class=\"tm-ratio tm-ratio-4-3\">\n\t\t\t\t\t\t<div class=\"tm-media-box\">\n\t\t\t\t\t\t\t<figure class=\"tm-media-box-wrap\">\n\t\t\t\t\t\t\t\t<img class=\"item-brand\" src=\"assets/images/catalog/laptops.png\" alt=\"Laptops\">\n\t\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"uk-margin-small-top\">\n\t\t\t\t\t\t\t<div class=\"uk-text-truncate\">Laptops</div>\n\t\t\t\t\t\t\t<div class=\"uk-text-meta uk-text-xsmall uk-text-truncate\">from $149</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large\" href=\"subcategory\">\n\t\t\t\t\t\t<div class=\"tm-ratio tm-ratio-4-3\">\n\t\t\t\t\t\t\t<div class=\"tm-media-box\">\n\t\t\t\t\t\t\t\t<figure class=\"tm-media-box-wrap\">\n\t\t\t\t\t\t\t\t\t<img class=\"item-brand\" src=\"assets/images/catalog/smartphones.png\" alt=\"Smartphones\">\n\t\t\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"uk-margin-small-top\">\n\t\t\t\t\t\t\t\t<div class=\"uk-text-truncate\">Smartphones</div>\n\t\t\t\t\t\t\t\t<div class=\"uk-text-meta uk-text-xsmall uk-text-truncate\">from $99</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large\" href=\"subcategory\">\n\t\t\t\t\t\t\t<div class=\"tm-ratio tm-ratio-4-3\">\n\t\t\t\t\t\t\t\t<div class=\"tm-media-box\">\n\t\t\t\t\t\t\t\t\t<figure class=\"tm-media-box-wrap\">\n\t\t\t\t\t\t\t\t\t\t<img class=\"item-brand\" src=\"assets/images/catalog/tablets.png\" alt=\"Tablets\">\n\t\t\t\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"uk-margin-small-top\">\n\t\t\t\t\t\t\t\t\t<div class=\"uk-text-truncate\">Tablets</div>\n\t\t\t\t\t\t\t\t\t<div class=\"uk-text-meta uk-text-xsmall uk-text-truncate\">from $129</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large\" href=\"subcategory\">\n\t\t\t\t\t\t\t\t<div class=\"tm-ratio tm-ratio-4-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"tm-media-box\">\n\t\t\t\t\t\t\t\t\t\t<figure class=\"tm-media-box-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t<img class=\"item-brand\" src=\"assets/images/catalog/watches.png\" alt=\"Smart Watches\">\n\t\t\t\t\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"uk-margin-small-top\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"uk-text-truncate\">Smart Watches</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"uk-text-meta uk-text-xsmall uk-text-truncate\">from $49</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large\" href=\"subcategory\">\n\t\t\t\t\t\t\t\t\t<div class=\"tm-ratio tm-ratio-4-3\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"tm-media-box\">\n\t\t\t\t\t\t\t\t\t\t\t<figure class=\"tm-media-box-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"item-brand\" src=\"assets/images/catalog/consoles.png\" alt=\"Gaming Consoles\">\n\t\t\t\t\t\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"uk-margin-small-top\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-text-truncate\">Gaming Consoles</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-text-meta uk-text-xsmall uk-text-truncate\">from $399</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large\" href=\"subcategory\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"tm-ratio tm-ratio-4-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-media-box\">\n\t\t\t\t\t\t\t\t\t\t\t\t<figure class=\"tm-media-box-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"item-brand\" src=\"assets/images/catalog/cameras.png\" alt=\"Cameras\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-margin-small-top\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-text-truncate\">Cameras</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-text-meta uk-text-xsmall uk-text-truncate\">from $129</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"uk-margin uk-text-center\">\n\t\t\t\t\t\t\t\t\t<a class=\"uk-link-muted uk-text-uppercase tm-link-to-all\" href=\"catalog\">\n\t\t\t\t\t\t\t\t\t\t<span>see all categories</span>\n\t\t\t\t\t\t\t\t\t\t<span uk-icon=\"icon: chevron-right; ratio: .75;\"></span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</section>\n\n\t\t\t\t\t\t"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/blogs/blogs.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/blogs/blogs.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"uk-section uk-section-small\">\n  <div class=\"uk-container\">\n    <h2 class=\"uk-text-center\">Blog</h2>\n    <div class=\"uk-grid-medium uk-grid-match uk-child-width-1-1 uk-child-width-1-2@s\" uk-grid>\n      <div>\n        <a href=\"article\">\n          <article\n            class=\"uk-card uk-card-default uk-card-small uk-article uk-overflow-hidden uk-box-shadow-hover-large uk-height-1-1 tm-ignore-container\">\n            <div class=\"tm-ratio tm-ratio-16-9\">\n              <figure class=\"tm-media-box uk-cover-container uk-margin-remove\">\n                <img src=\"assets/images/articles/macbook-photo.jpg\" alt=\"Everything You Need to Know About the MacBook Pro\"\n                  uk-cover=\"uk-cover\" />\n              </figure>\n            </div>\n            <div class=\"uk-card-body\">\n              <div class=\"uk-article-body\">\n                <div class=\"uk-article-meta uk-margin-xsmall-bottom\">\n                  <time>May 21, 2018</time>\n                </div>\n                <div>\n                  <h3 class=\"uk-margin-remove\">Everything You Need to Know About the MacBook Pro</h3>\n                </div>\n                <div class=\"uk-margin-small-top\">\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales eget ipsum id aliquam. Nam\n                    consectetur interdum nibh eget sodales. Cras volutpat efficitur ornare.</p>\n                </div>\n              </div>\n            </div>\n          </article>\n        </a>\n      </div>\n      <div>\n        <a href=\"article\">\n          <article\n            class=\"uk-card uk-card-default uk-card-small uk-article uk-overflow-hidden uk-box-shadow-hover-large uk-height-1-1 tm-ignore-container\">\n            <div class=\"tm-ratio tm-ratio-16-9\">\n              <figure class=\"tm-media-box uk-cover-container uk-margin-remove\">\n                <img src=\"assets/images/articles/macos.jpg\" alt=\"Apple introduces macOS Mojave\" uk-cover=\"uk-cover\" />\n              </figure>\n            </div>\n            <div class=\"uk-card-body\">\n              <div class=\"uk-article-body\">\n                <div class=\"uk-article-meta uk-margin-xsmall-bottom\">\n                  <time>May 21, 2018</time>\n                </div>\n                <div>\n                  <h3 class=\"uk-margin-remove\">Apple introduces macOS Mojave</h3>\n                </div>\n                <div class=\"uk-margin-small-top\">\n                  <p>Praesent consequat justo eu massa malesuada posuere. Donec ultricies tincidunt nisl, sed euismod\n                    nulla venenatis maximus. Maecenas sit amet semper tellus. Pellentesque imperdiet finibus sapien, a\n                    consectetur eros auctor a.</p>\n                </div>\n              </div>\n            </div>\n          </article>\n        </a>\n      </div>\n    </div>\n    <div class=\"uk-margin uk-text-center\">\n      <a class=\"uk-link-muted uk-text-uppercase tm-link-to-all\" href=\"blog\">\n        <span>see all articles</span>\n        <span uk-icon=\"icon: chevron-right; ratio: .75;\" ></span>\n      </a>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/cart/cart-checkout/cart-checkout.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/cart/cart-checkout/cart-checkout.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-card uk-card-default uk-card-small tm-ignore-container\" uk-sticky=\"offset: 30; bottom: true; media: @m;\">\n  <div class=\"uk-card-body\">\n    <div class=\"uk-grid-small\" uk-grid>\n      <div class=\"uk-width-expand uk-text-muted\">Subtotal</div>\n      <div>$3148</div>\n    </div>\n    <div class=\"uk-grid-small\" uk-grid>\n      <div class=\"uk-width-expand uk-text-muted\">Discount</div>\n      <div class=\"uk-text-danger\">−$29</div>\n    </div>\n  </div>\n  <div class=\"uk-card-body\">\n    <div class=\"uk-grid-small uk-flex-middle\" uk-grid>\n      <div class=\"uk-width-expand uk-text-muted\">Total</div>\n      <div class=\"uk-text-lead uk-text-bolder\">$3119</div>\n    </div>\n    <a class=\"uk-button uk-button-primary uk-margin-small uk-width-1-1\" href=\"checkout\">checkout</a>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/cart/cart-heading/cart-heading.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/cart/cart-heading/cart-heading.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-text-center\">\n    <ul class=\"uk-breadcrumb uk-flex-center uk-margin-remove\">\n      <li>\n        <a href=\"index\">Home</a>\n      </li>\n      <li>\n        <span>Cart</span>\n      </li>\n    </ul>\n    <h1 class=\"uk-margin-small-top uk-margin-remove-bottom\">Cart</h1>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/cart/cart-products/cart-products.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/cart/cart-products/cart-products.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-card uk-card-default uk-card-small tm-ignore-container\">\n    <header class=\"uk-card-header uk-text-uppercase uk-text-muted uk-text-center uk-text-small uk-visible@m\">\n      <div class=\"uk-grid-small uk-child-width-1-2\" uk-grid>\n        <div>product</div>\n        <div>\n          <div class=\"uk-grid-small uk-child-width-expand\" uk-grid>\n            <div>price</div>\n            <div class=\"tm-quantity-column\">quantity</div>\n            <div>sum</div>\n            <div class=\"uk-width-auto\">\n              <div style=\"width: 20px;\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </header>\n    <div class=\"uk-card-body\">\n      <div class=\"uk-grid-small uk-child-width-1-1 uk-child-width-1-2@m uk-flex-middle\" uk-grid>\n        <!-- Product cell-->\n        <div>\n          <div class=\"uk-grid-small\" uk-grid>\n            <div class=\"uk-width-1-3\">\n              <div class=\"tm-ratio tm-ratio-4-3\">\n                <a class=\"tm-media-box\" href=\"product.\">\n                  <figure class=\"tm-media-box-wrap\">\n                    <img src=\"assets/images/products/1/1-small.jpg\"\n                      alt=\"Apple MacBook Pro 15&quot; Touch Bar MPTU2LL/A 256GB (Silver)\">\n                  </figure>\n                </a>\n              </div>\n            </div>\n            <div class=\"uk-width-expand\">\n              <div class=\"uk-text-meta\">Laptop</div>\n              <a class=\"uk-link-heading\" href=\"product\">Apple MacBook Pro 15&quot; Touch Bar MPTU2LL/A\n                256GB (Silver)</a>\n            </div>\n          </div>\n        </div>\n        <!-- Other cells-->\n        <div>\n          <div class=\"uk-grid-small uk-child-width-1-1 uk-child-width-expand@s uk-text-center\" uk-grid>\n            <div>\n              <div class=\"uk-text-muted uk-hidden@m\">Price</div>\n              <div>$1599.00</div>\n            </div>\n            <div class=\"tm-cart-quantity-column\">\n              <a onclick=\"increment(-1, 'product-1')\" uk-icon=\"icon: minus; ratio: .75\"></a>\n              <input class=\"uk-input tm-quantity-input\" id=\"product-1\" type=\"text\" maxlength=\"3\" value=\"1\" />\n              <a onclick=\"increment(+1, 'product-1')\" uk-icon=\"icon: plus; ratio: .75\"></a>\n            </div>\n            <div>\n              <div class=\"uk-text-muted uk-hidden@m\">Sum</div>\n              <div>$1599.00</div>\n            </div>\n            <div class=\"uk-width-auto@s\">\n              <a class=\"uk-text-danger\" uk-tooltip=\"Remove\">\n                <span uk-icon=\"close\" ></span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"uk-card-body\">\n      <div class=\"uk-grid-small uk-child-width-1-1 uk-child-width-1-2@m uk-flex-middle\" uk-grid>\n        <!-- Product cell-->\n        <div>\n          <div class=\"uk-grid-small\" uk-grid>\n            <div class=\"uk-width-1-3\">\n              <div class=\"tm-ratio tm-ratio-4-3\">\n                <a class=\"tm-media-box\" href=\"product\">\n                  <figure class=\"tm-media-box-wrap\">\n                    <img src=\"assets/images/products/2/2-small.jpg\"\n                      alt=\"Apple MacBook 12&quot; MNYN2LL/A 512GB (Rose Gold)\">\n                  </figure>\n                </a>\n              </div>\n            </div>\n            <div class=\"uk-width-expand\">\n              <div class=\"uk-text-meta\">Laptop</div>\n              <a class=\"uk-link-heading\" href=\"product.\">Apple MacBook 12&quot; MNYN2LL/A 512GB (Rose\n                Gold)</a>\n            </div>\n          </div>\n        </div>\n        <!-- Other cells-->\n        <div>\n          <div class=\"uk-grid-small uk-child-width-1-1 uk-child-width-expand@s uk-text-center\" uk-grid>\n            <div>\n              <div class=\"uk-text-muted uk-hidden@m\">Price</div>\n              <div>$1549.00</div>\n            </div>\n            <div class=\"tm-cart-quantity-column\">\n              <a onclick=\"increment(-1, 'product-2')\" uk-icon=\"icon: minus; ratio: .75\"></a>\n              <input class=\"uk-input tm-quantity-input\" id=\"product-2\" type=\"text\" maxlength=\"3\" value=\"1\" />\n              <a onclick=\"increment(+1, 'product-2')\" uk-icon=\"icon: plus; ratio: .75\"></a>\n            </div>\n            <div>\n              <div class=\"uk-text-muted uk-hidden@m\">Sum</div>\n              <div>$1549.00</div>\n            </div>\n            <div class=\"uk-width-auto@s\">\n              <a class=\"uk-text-danger\" uk-tooltip=\"Remove\">\n                <span uk-icon=\"close\"></span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"uk-card-footer\">\n      <label>\n        <span class=\"uk-form-label uk-margin-small-right\">Promo Code</span>\n        <div class=\"uk-inline\">\n          <a class=\"uk-form-icon uk-form-icon-flip\" href=\"#\" uk-icon=\"arrow-right\"></a>\n          <input class=\"uk-input uk-form-width-small\" type=\"text\">\n        </div>\n      </label>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/catalog/catalog-body/catalog-body.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/catalog/catalog-body/catalog-body.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-grid-medium\" uk-grid>\n  <aside class=\"uk-width-1-4 uk-visible@m tm-aside-column\">\n    <nav class=\"uk-card uk-card-default uk-card-body uk-card-small\" uk-sticky=\"bottom: true; offset: 90\">\n      <ul class=\"uk-nav uk-nav-default\" uk-scrollspy-nav=\"closest: li; scroll: true; offset: 90\">\n        <li>\n          <a href=\"#laptops-tablets\">Laptops &amp; Tablets</a>\n        </li>\n        <li>\n          <a href=\"#phones-gadgets\">Phones &amp; Gadgets</a>\n        </li>\n        <li>\n          <a href=\"#tv-video\">TV &amp; Video</a>\n        </li>\n        <li>\n          <a href=\"#games-entertainment\">Games &amp; Entertainment</a>\n        </li>\n        <li>\n          <a href=\"#photo\">Photo</a>\n        </li>\n      </ul>\n    </nav>\n  </aside>\n  <div class=\"uk-width-1-1 uk-width-expand@m\">\n    <div class=\"uk-grid-medium uk-child-width-1-1\" uk-grid>\n      <section id=\"laptops-tablets\">\n        <div class=\"uk-card uk-card-default uk-card-small tm-ignore-container\">\n          <header class=\"uk-card-header\">\n            <div class=\"uk-grid-small uk-flex-middle\" uk-grid>\n              <a href=\"category\">\n                <img src=\"assets/images/catalog/computers.svg\" alt=\"Laptops &amp; Tablets\" width=\"50\" height=\"50\">\n                </a>\n                <div class=\"uk-width-expand\">\n                  <h2 class=\"uk-h4 uk-margin-remove\">\n                    <a class=\"uk-link-heading\" href=\"category\">Laptops &amp; Tablets</a>\n                  </h2>\n                  <div class=\"uk-text-meta\">367 items</div>\n                </div>\n              </div>\n            </header>\n            <div class=\"uk-card-body\">\n              <ul class=\"uk-list\">\n                <li>\n                  <a href=\"subcategory\">Laptops</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Tablets</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Peripherals</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Keyboards</a>\n                </li>\n                <li>\n                  <a href=\"subcategory\">Accessories</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </section>\n        <section id=\"phones-gadgets\">\n          <div class=\"uk-card uk-card-default uk-card-small tm-ignore-container\">\n            <header class=\"uk-card-header\">\n              <div class=\"uk-grid-small uk-flex-middle\" uk-grid>\n                <a href=\"category\">\n                  <img src=\"assets/images/catalog/phones.svg\" alt=\"Phones &amp; Gadgets\" width=\"50\" height=\"50\">\n                  </a>\n                  <div class=\"uk-width-expand\">\n                    <h2 class=\"uk-h4 uk-margin-remove\">\n                      <a class=\"uk-link-heading\" href=\"category\">Phones &amp; Gadgets</a>\n                    </h2>\n                    <div class=\"uk-text-meta\">144 items</div>\n                  </div>\n                </div>\n              </header>\n              <div class=\"uk-card-body\">\n                <ul class=\"uk-list\">\n                  <li>\n                    <a href=\"subcategory\">Smartphones</a>\n                  </li>\n                  <li>\n                    <a href=\"subcategory\">Mobile Phones</a>\n                  </li>\n                  <li>\n                    <a href=\"subcategory\">Smart watches</a>\n                  </li>\n                  <li>\n                    <a href=\"subcategory\">Charging and batteries</a>\n                  </li>\n                  <li>\n                    <a href=\"subcategory\">Accessories</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </section>\n          <section id=\"tv-video\">\n            <div class=\"uk-card uk-card-default uk-card-small tm-ignore-container\">\n              <header class=\"uk-card-header\">\n                <div class=\"uk-grid-small uk-flex-middle\" uk-grid>\n                  <a href=\"category\">\n                    <img src=\"assets/images/catalog/tv.svg\" alt=\"TV &amp; Video\" width=\"50\" height=\"50\">\n                    </a>\n                    <div class=\"uk-width-expand\">\n                      <h2 class=\"uk-h4 uk-margin-remove\">\n                        <a class=\"uk-link-heading\" href=\"category\">TV &amp; Video</a>\n                      </h2>\n                      <div class=\"uk-text-meta\">58 items</div>\n                    </div>\n                  </div>\n                </header>\n                <div class=\"uk-card-body\">\n                  <ul class=\"uk-list\">\n                    <li>\n                      <a href=\"subcategory\">TV</a>\n                    </li>\n                    <li>\n                      <a href=\"subcategory\">Home Cinema</a>\n                    </li>\n                    <li>\n                      <a href=\"subcategory\">Satellite &amp; Cable TV</a>\n                    </li>\n                    <li>\n                      <a href=\"subcategory\">Projectors</a>\n                    </li>\n                    <li>\n                      <a href=\"subcategory\">DVD &amp; Blu-ray</a>\n                    </li>\n                    <li>\n                      <a href=\"subcategory\">Accessories</a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </section>\n            <section id=\"games-entertainment\">\n              <div class=\"uk-card uk-card-default uk-card-small tm-ignore-container\">\n                <header class=\"uk-card-header\">\n                  <div class=\"uk-grid-small uk-flex-middle\" uk-grid>\n                    <a href=\"category\">\n                      <img src=\"assets/images/catalog/games.svg\" alt=\"Games &amp; Entertainment\" width=\"50\" height=\"50\">\n                      </a>\n                      <div class=\"uk-width-expand\">\n                        <h2 class=\"uk-h4 uk-margin-remove\">\n                          <a class=\"uk-link-heading\" href=\"category\">Games &amp; Entertainment</a>\n                        </h2>\n                        <div class=\"uk-text-meta\">13 items</div>\n                      </div>\n                    </div>\n                  </header>\n                  <div class=\"uk-card-body\">\n                    <ul class=\"uk-list\">\n                      <li>\n                        <a href=\"subcategory\">Gaming consoles</a>\n                      </li>\n                      <li>\n                        <a href=\"subcategory\">Games</a>\n                      </li>\n                      <li>\n                        <a href=\"subcategory\">Software</a>\n                      </li>\n                      <li>\n                        <a href=\"subcategory\">Joysticks &amp; gamepads</a>\n                      </li>\n                      <li>\n                        <a href=\"subcategory\">Accessories</a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </section>\n              <section id=\"photo\">\n                <div class=\"uk-card uk-card-default uk-card-small tm-ignore-container\">\n                  <header class=\"uk-card-header\">\n                    <div class=\"uk-grid-small uk-flex-middle\" uk-grid>\n                      <a href=\"category\">\n                        <img src=\"assets/images/catalog/photo.svg\" alt=\"Photo\" width=\"50\" height=\"50\">\n                        </a>\n                        <div class=\"uk-width-expand\">\n                          <h2 class=\"uk-h4 uk-margin-remove\">\n                            <a class=\"uk-link-heading\" href=\"category\">Photo</a>\n                          </h2>\n                          <div class=\"uk-text-meta\">59 items</div>\n                        </div>\n                      </div>\n                    </header>\n                    <div class=\"uk-card-body\">\n                      <ul class=\"uk-list\">\n                        <li>\n                          <a href=\"subcategory\">Cameras</a>\n                        </li>\n                        <li>\n                          <a href=\"subcategory\">Lenses</a>\n                        </li>\n                        <li>\n                          <a href=\"subcategory\">Accessories</a>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </section>\n              </div>\n            </div>\n          </div>\n        "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/catalog/catalog-heading/catalog-heading.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/catalog/catalog-heading/catalog-heading.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-text-center\">\n  <ul class=\"uk-breadcrumb uk-flex-center uk-margin-remove\">\n    <li>\n      <a href=\"index\">Home</a>\n    </li>\n    <li>\n      <span>Catalog</span>\n    </li>\n  </ul>\n  <h1 class=\"uk-margin-small-top uk-margin-remove-bottom\">Catalog</h1>\n  <div class=\"uk-text-meta uk-margin-xsmall-top\">641 items</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/category/category-body/category-body.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/category/category-body/category-body.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"uk-card uk-card-default uk-card-small tm-ignore-container\">\n      <div class=\"uk-grid-collapse uk-child-width-1-1\" id=\"products\" uk-grid>\n        <div class=\"uk-card-header\">\n          <div class=\"uk-grid-small uk-flex-middle\" uk-grid>\n            <div\n              class=\"uk-width-1-1 uk-width-expand@s uk-flex uk-flex-center uk-flex-left@s uk-text-small\">\n              <span class=\"uk-margin-small-right uk-text-muted\">Sort by:</span>\n              <ul class=\"uk-subnav uk-margin-remove\">\n                <li class=\"uk-active uk-padding-remove\">\n                  <a class=\"uk-text-lowercase\" href=\"#\">relevant<span\n                      class=\"uk-margin-xsmall-left\"\n                      uk-icon=\"icon: chevron-down; ratio: .5;\"></span>\n                  </a>\n                </li>\n                <li>\n                  <a class=\"uk-text-lowercase\" href=\"#\">price</a>\n                </li>\n                <li>\n                  <a class=\"uk-text-lowercase\" href=\"#\">newest</a>\n                </li>\n              </ul>\n            </div>\n            <div\n              class=\"uk-width-1-1 uk-width-auto@s uk-flex uk-flex-center uk-flex-middle\">\n              <button\n                class=\"uk-button uk-button-default uk-button-small uk-hidden@m\"\n                uk-toggle=\"target: #filters\">\n                <span class=\"uk-margin-xsmall-right\"\n                  uk-icon=\"icon: settings; ratio: .75;\"></span>Filters</button>\n              <div class=\"tm-change-view uk-margin-small-left\">\n                <ul class=\"uk-subnav uk-iconnav js-change-view\" uk-switcher>\n                  <li>\n                    <a class=\"uk-active\" data-view=\"grid\" uk-icon=\"grid\"\n                      uk-tooltip=\"Grid\"></a>\n                  </li>\n                  <li>\n                    <a data-view=\"list\" uk-icon=\"list\"\n                      uk-tooltip=\"List\"></a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div>\n          <div class=\"uk-grid-collapse uk-child-width-1-3 tm-products-grid js-products-grid\"\n            uk-grid>\n            <article class=\"tm-product-card\">\n              <div class=\"tm-product-card-media\">\n                <div class=\"tm-ratio tm-ratio-4-3\">\n                  <a class=\"tm-media-box\" href=\"product\">\n                    <div class=\"tm-product-card-labels\">\n                      <span class=\"uk-label uk-label-warning\">top\n                        selling</span>\n                      <span\n                        class=\"uk-label uk-label-danger\">trade-in</span>\n                    </div>\n                    <figure class=\"tm-media-box-wrap\">\n                      <img src=\"assets/images/products/1/1-medium.jpg\"\n                        alt=\"Apple MacBook Pro 15&quot; Touch Bar MPTU2LL/A 256GB (Silver)\" />\n                    </figure>\n                  </a>\n                </div>\n              </div>\n              <div class=\"tm-product-card-body\">\n                <div class=\"tm-product-card-info\">\n                  <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop\n                  </div>\n                  <h3 class=\"tm-product-card-title\">\n                    <a class=\"uk-link-heading\" href=\"product\">Apple\n                      MacBook Pro 15&quot; Touch Bar MPTU2LL/A 256GB\n                      (Silver)</a>\n                  </h3>\n                  <ul\n                    class=\"uk-list uk-text-small tm-product-card-properties\">\n                    <li>\n                      <span class=\"uk-text-muted\">Diagonal display:\n                      </span>\n                      <span>15.4\"</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">CPU: </span>\n                      <span>Intel®&nbsp;Core™ i7</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">RAM: </span>\n                      <span>16&nbsp;GB</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">Video Card: </span>\n                      <span>AMD Radeon Pro 555</span>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"tm-product-card-shop\">\n                  <div class=\"tm-product-card-prices\">\n                    <del class=\"uk-text-meta\">$1899.00</del>\n                    <div class=\"tm-product-card-price\">$1599.00</div>\n                  </div>\n                  <div class=\"tm-product-card-add\">\n                    <div class=\"uk-text-meta tm-product-card-actions\">\n                      <a class=\"tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to\"\n                        title=\"Add to favorites\">\n                        <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                        <span class=\"tm-product-card-action-text\">Add to\n                          favorites</span>\n                      </a>\n                      <a class=\"tm-product-card-action js-add-to js-add-to-compare tm-action-button-active js-added-to\"\n                        title=\"Add to compare\">\n                        <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                        <span class=\"tm-product-card-action-text\">Add to\n                          compare</span>\n                      </a>\n                    </div>\n                    <button\n                      class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                      <span class=\"tm-product-card-add-button-icon\"\n                        uk-icon=\"cart\"></span>\n                      <span class=\"tm-product-card-add-button-text\">add to\n                        cart</span>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </article>\n            <article class=\"tm-product-card\">\n              <div class=\"tm-product-card-media\">\n                <div class=\"tm-ratio tm-ratio-4-3\">\n                  <a class=\"tm-media-box\" href=\"product\">\n                    <div class=\"tm-product-card-labels\">\n                      <span class=\"uk-label uk-label-success\">new</span>\n                      <span\n                        class=\"uk-label uk-label-danger\">trade-in</span>\n                    </div>\n                    <figure class=\"tm-media-box-wrap\">\n                      <img src=\"assets/images/products/2/2-medium.jpg\"\n                        alt=\"Apple MacBook 12&quot; MNYN2LL/A 512GB (Rose Gold)\" />\n                    </figure>\n                  </a>\n                </div>\n              </div>\n              <div class=\"tm-product-card-body\">\n                <div class=\"tm-product-card-info\">\n                  <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop\n                  </div>\n                  <h3 class=\"tm-product-card-title\">\n                    <a class=\"uk-link-heading\" href=\"product\">Apple\n                      MacBook 12&quot; MNYN2LL/A 512GB (Rose Gold)</a>\n                  </h3>\n                  <ul\n                    class=\"uk-list uk-text-small tm-product-card-properties\">\n                    <li>\n                      <span class=\"uk-text-muted\">Diagonal display:\n                      </span>\n                      <span>12\"</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">CPU: </span>\n                      <span>Intel®&nbsp;Core™ i5</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">RAM: </span>\n                      <span>8&nbsp;GB</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">Video Card: </span>\n                      <span>Intel® HD Graphics 615</span>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"tm-product-card-shop\">\n                  <div class=\"tm-product-card-prices\">\n                    <div class=\"tm-product-card-price\">$1549.00</div>\n                  </div>\n                  <div class=\"tm-product-card-add\">\n                    <div class=\"uk-text-meta tm-product-card-actions\">\n                      <a class=\"tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to\"\n                        title=\"Add to favorites\">\n                        <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                        <span class=\"tm-product-card-action-text\">Add to\n                          favorites</span>\n                      </a>\n                      <a class=\"tm-product-card-action js-add-to js-add-to-compare tm-action-button-active js-added-to\"\n                        title=\"Add to compare\">\n                        <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                        <span class=\"tm-product-card-action-text\">Add to\n                          compare</span>\n                      </a>\n                    </div>\n                    <button\n                      class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                      <span class=\"tm-product-card-add-button-icon\"\n                        uk-icon=\"cart\"></span>\n                      <span class=\"tm-product-card-add-button-text\">add to\n                        cart</span>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </article>\n            <article class=\"tm-product-card\">\n              <div class=\"tm-product-card-media\">\n                <div class=\"tm-ratio tm-ratio-4-3\">\n                  <a class=\"tm-media-box\" href=\"product\">\n                    <figure class=\"tm-media-box-wrap\">\n                      <img src=\"assets/images/products/3/3-medium.jpg\"\n                        alt=\"Lenovo IdeaPad YOGA 920-13IKB 80Y7001RRK (Copper)\" />\n                    </figure>\n                  </a>\n                </div>\n              </div>\n              <div class=\"tm-product-card-body\">\n                <div class=\"tm-product-card-info\">\n                  <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop\n                  </div>\n                  <h3 class=\"tm-product-card-title\">\n                    <a class=\"uk-link-heading\" href=\"product\">Lenovo\n                      IdeaPad YOGA 920-13IKB 80Y7001RRK (Copper)</a>\n                  </h3>\n                  <ul\n                    class=\"uk-list uk-text-small tm-product-card-properties\">\n                    <li>\n                      <span class=\"uk-text-muted\">Diagonal display:\n                      </span>\n                      <span>13.9\"</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">CPU: </span>\n                      <span>Intel®&nbsp;Core™ i7 8550U</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">RAM: </span>\n                      <span>16&nbsp;GB</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">Video Card: </span>\n                      <span>Intel® HD Graphics 620</span>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"tm-product-card-shop\">\n                  <div class=\"tm-product-card-prices\">\n                    <div class=\"tm-product-card-price\">$1199.00</div>\n                  </div>\n                  <div class=\"tm-product-card-add\">\n                    <div class=\"uk-text-meta tm-product-card-actions\">\n                      <a class=\"tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to\"\n                        title=\"Add to favorites\">\n                        <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                        <span class=\"tm-product-card-action-text\">Add to\n                          favorites</span>\n                      </a>\n                      <a class=\"tm-product-card-action js-add-to js-add-to-compare\"\n                        title=\"Add to compare\">\n                        <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                        <span class=\"tm-product-card-action-text\">Add to\n                          compare</span>\n                      </a>\n                    </div>\n                    <button\n                      class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                      <span class=\"tm-product-card-add-button-icon\"\n                        uk-icon=\"cart\"></span>\n                      <span class=\"tm-product-card-add-button-text\">add to\n                        cart</span>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </article>\n            <article class=\"tm-product-card\">\n              <div class=\"tm-product-card-media\">\n                <div class=\"tm-ratio tm-ratio-4-3\">\n                  <a class=\"tm-media-box\" href=\"product\">\n                    <div class=\"tm-product-card-labels\">\n                      <span class=\"uk-label uk-label-warning\">top\n                        selling</span>\n                    </div>\n                    <figure class=\"tm-media-box-wrap\">\n                      <img src=\"assets/images/products/4/4-medium.jpg\"\n                        alt=\"ASUS Zenbook UX330UA-FC020T (Rose Gold)\" />\n                    </figure>\n                  </a>\n                </div>\n              </div>\n              <div class=\"tm-product-card-body\">\n                <div class=\"tm-product-card-info\">\n                  <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop\n                  </div>\n                  <h3 class=\"tm-product-card-title\">\n                    <a class=\"uk-link-heading\" href=\"product\">ASUS\n                      Zenbook UX330UA-FC020T (Rose Gold)</a>\n                  </h3>\n                  <ul\n                    class=\"uk-list uk-text-small tm-product-card-properties\">\n                    <li>\n                      <span class=\"uk-text-muted\">Diagonal display:\n                      </span>\n                      <span>13.3\"</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">CPU: </span>\n                      <span>Intel®&nbsp;Core™ i7-6500U</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">RAM: </span>\n                      <span>8&nbsp;GB</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">Video Card: </span>\n                      <span>Intel® HD Graphics 520</span>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"tm-product-card-shop\">\n                  <div class=\"tm-product-card-prices\">\n                    <div class=\"tm-product-card-price\">$749.00</div>\n                  </div>\n                  <div class=\"tm-product-card-add\">\n                    <div class=\"uk-text-meta tm-product-card-actions\">\n                      <a class=\"tm-product-card-action js-add-to js-add-to-favorites\"\n                        title=\"Add to favorites\">\n                        <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                        <span class=\"tm-product-card-action-text\">Add to\n                          favorites</span>\n                      </a>\n                      <a class=\"tm-product-card-action js-add-to js-add-to-compare\"\n                        title=\"Add to compare\">\n                        <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                        <span class=\"tm-product-card-action-text\">Add to\n                          compare</span>\n                      </a>\n                    </div>\n                    <button\n                      class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                      <span class=\"tm-product-card-add-button-icon\"\n                        uk-icon=\"cart\"></span>\n                      <span class=\"tm-product-card-add-button-text\">add to\n                        cart</span>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </article>\n            <article class=\"tm-product-card\">\n              <div class=\"tm-product-card-media\">\n                <div class=\"tm-ratio tm-ratio-4-3\">\n                  <a class=\"tm-media-box\" href=\"product\">\n                    <figure class=\"tm-media-box-wrap\">\n                      <img src=\"assets/images/products/5/5-medium.jpg\"\n                        alt=\"Dell XPS 15 9560-8968 (Silver)\" />\n                    </figure>\n                  </a>\n                </div>\n              </div>\n              <div class=\"tm-product-card-body\">\n                <div class=\"tm-product-card-info\">\n                  <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop\n                  </div>\n                  <h3 class=\"tm-product-card-title\">\n                    <a class=\"uk-link-heading\" href=\"product\">Dell XPS\n                      15 9560-8968 (Silver)</a>\n                  </h3>\n                  <ul\n                    class=\"uk-list uk-text-small tm-product-card-properties\">\n                    <li>\n                      <span class=\"uk-text-muted\">Diagonal display:\n                      </span>\n                      <span>15.6\"</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">CPU: </span>\n                      <span>Intel®&nbsp;Core™ i7 7700HQ</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">RAM: </span>\n                      <span>16&nbsp;GB</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">Video Card: </span>\n                      <span>NVIDIA GeForce GTX 960M</span>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"tm-product-card-shop\">\n                  <div class=\"tm-product-card-prices\">\n                    <del class=\"uk-text-meta\">$999.00</del>\n                    <div class=\"tm-product-card-price\">$949.00</div>\n                  </div>\n                  <div class=\"tm-product-card-add\">\n                    <div class=\"uk-text-meta tm-product-card-actions\">\n                      <a class=\"tm-product-card-action js-add-to js-add-to-favorites\"\n                        title=\"Add to favorites\">\n                        <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                        <span class=\"tm-product-card-action-text\">Add to\n                          favorites</span>\n                      </a>\n                      <a class=\"tm-product-card-action js-add-to js-add-to-compare\"\n                        title=\"Add to compare\">\n                        <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                        <span class=\"tm-product-card-action-text\">Add to\n                          compare</span>\n                      </a>\n                    </div>\n                    <button\n                      class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                      <span class=\"tm-product-card-add-button-icon\"\n                        uk-icon=\"cart\"></span>\n                      <span class=\"tm-product-card-add-button-text\">add to\n                        cart</span>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </article>\n            <article class=\"tm-product-card\">\n              <div class=\"tm-product-card-media\">\n                <div class=\"tm-ratio tm-ratio-4-3\">\n                  <a class=\"tm-media-box\" href=\"product\">\n                    <div class=\"tm-product-card-labels\">\n                      <span\n                        class=\"uk-label uk-label-danger\">trade-in</span>\n                    </div>\n                    <figure class=\"tm-media-box-wrap\">\n                      <img src=\"assets/images/products/6/6-medium.jpg\"\n                        alt=\"Apple MacBook Air 13&quot; MQD32LL/A 128GB (Silver)\" />\n                    </figure>\n                  </a>\n                </div>\n              </div>\n              <div class=\"tm-product-card-body\">\n                <div class=\"tm-product-card-info\">\n                  <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop\n                  </div>\n                  <h3 class=\"tm-product-card-title\">\n                    <a class=\"uk-link-heading\" href=\"product\">Apple\n                      MacBook Air 13&quot; MQD32LL/A 128GB (Silver)</a>\n                  </h3>\n                  <ul\n                    class=\"uk-list uk-text-small tm-product-card-properties\">\n                    <li>\n                      <span class=\"uk-text-muted\">Diagonal display:\n                      </span>\n                      <span>13.3\"</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">CPU: </span>\n                      <span>Intel®&nbsp;Core™ i5</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">RAM: </span>\n                      <span>8&nbsp;GB</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">Video Card: </span>\n                      <span>Intel® HD Graphics 6000</span>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"tm-product-card-shop\">\n                  <div class=\"tm-product-card-prices\">\n                    <div class=\"tm-product-card-price\">$849.00</div>\n                  </div>\n                  <div class=\"tm-product-card-add\">\n                    <div class=\"uk-text-meta tm-product-card-actions\">\n                      <a class=\"tm-product-card-action js-add-to js-add-to-favorites\"\n                        title=\"Add to favorites\">\n                        <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                        <span class=\"tm-product-card-action-text\">Add to\n                          favorites</span>\n                      </a>\n                      <a class=\"tm-product-card-action js-add-to js-add-to-compare tm-action-button-active js-added-to\"\n                        title=\"Add to compare\">\n                        <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                        <span class=\"tm-product-card-action-text\">Add to\n                          compare</span>\n                      </a>\n                    </div>\n                    <button\n                      class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                      <span class=\"tm-product-card-add-button-icon\"\n                        uk-icon=\"cart\"></span>\n                      <span class=\"tm-product-card-add-button-text\">add to\n                        cart</span>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </article>\n            <article class=\"tm-product-card\">\n              <div class=\"tm-product-card-media\">\n                <div class=\"tm-ratio tm-ratio-4-3\">\n                  <a class=\"tm-media-box\" href=\"product\">\n                    <figure class=\"tm-media-box-wrap\">\n                      <img src=\"assets/images/products/7/7-medium.jpg\"\n                        alt=\"Dell Inspiron 5378-2063 (Gray)\" />\n                    </figure>\n                  </a>\n                </div>\n              </div>\n              <div class=\"tm-product-card-body\">\n                <div class=\"tm-product-card-info\">\n                  <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop\n                  </div>\n                  <h3 class=\"tm-product-card-title\">\n                    <a class=\"uk-link-heading\" href=\"product\">Dell\n                      Inspiron 5378-2063 (Gray)</a>\n                  </h3>\n                  <ul\n                    class=\"uk-list uk-text-small tm-product-card-properties\">\n                    <li>\n                      <span class=\"uk-text-muted\">Diagonal display:\n                      </span>\n                      <span>13.3\"</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">CPU: </span>\n                      <span>Intel®&nbsp;Core™ i3-7100U</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">RAM: </span>\n                      <span>4&nbsp;GB</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">HDD Capacity: </span>\n                      <span>1&nbsp;TB</span>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"tm-product-card-shop\">\n                  <div class=\"tm-product-card-prices\">\n                    <del class=\"uk-text-meta\">$599.00</del>\n                    <div class=\"tm-product-card-price\">$579.00</div>\n                  </div>\n                  <div class=\"tm-product-card-add\">\n                    <div class=\"uk-text-meta tm-product-card-actions\">\n                      <a class=\"tm-product-card-action js-add-to js-add-to-favorites\"\n                        title=\"Add to favorites\">\n                        <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                        <span class=\"tm-product-card-action-text\">Add to\n                          favorites</span>\n                      </a>\n                      <a class=\"tm-product-card-action js-add-to js-add-to-compare\"\n                        title=\"Add to compare\">\n                        <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                        <span class=\"tm-product-card-action-text\">Add to\n                          compare</span>\n                      </a>\n                    </div>\n                    <button\n                      class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                      <span class=\"tm-product-card-add-button-icon\"\n                        uk-icon=\"cart\"></span>\n                      <span class=\"tm-product-card-add-button-text\">add to\n                        cart</span>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </article>\n            <article class=\"tm-product-card\">\n              <div class=\"tm-product-card-media\">\n                <div class=\"tm-ratio tm-ratio-4-3\">\n                  <a class=\"tm-media-box\" href=\"product\">\n                    <div class=\"tm-product-card-labels\">\n                      <span class=\"uk-label uk-label-success\">new</span>\n                    </div>\n                    <figure class=\"tm-media-box-wrap\">\n                      <img src=\"assets/images/products/8/8-medium.jpg\"\n                        alt=\"Lenovo Yoga 720-13IKB 80X60059RK (Silver)\" />\n                    </figure>\n                  </a>\n                </div>\n              </div>\n              <div class=\"tm-product-card-body\">\n                <div class=\"tm-product-card-info\">\n                  <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop\n                  </div>\n                  <h3 class=\"tm-product-card-title\">\n                    <a class=\"uk-link-heading\" href=\"product\">Lenovo\n                      Yoga 720-13IKB 80X60059RK (Silver)</a>\n                  </h3>\n                  <ul\n                    class=\"uk-list uk-text-small tm-product-card-properties\">\n                    <li>\n                      <span class=\"uk-text-muted\">Diagonal display:\n                      </span>\n                      <span>13.3\"</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">CPU: </span>\n                      <span>Intel®&nbsp;Core™ i5-7200U</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">RAM: </span>\n                      <span>8&nbsp;GB</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">Video Card: </span>\n                      <span>Intel® HD Graphics 620</span>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"tm-product-card-shop\">\n                  <div class=\"tm-product-card-prices\">\n                    <div class=\"tm-product-card-price\">$1099.00</div>\n                  </div>\n                  <div class=\"tm-product-card-add\">\n                    <div class=\"uk-text-meta tm-product-card-actions\">\n                      <a class=\"tm-product-card-action js-add-to js-add-to-favorites\"\n                        title=\"Add to favorites\">\n                        <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                        <span class=\"tm-product-card-action-text\">Add to\n                          favorites</span>\n                      </a>\n                      <a class=\"tm-product-card-action js-add-to js-add-to-compare\"\n                        title=\"Add to compare\">\n                        <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                        <span class=\"tm-product-card-action-text\">Add to\n                          compare</span>\n                      </a>\n                    </div>\n                    <button\n                      class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                      <span class=\"tm-product-card-add-button-icon\"\n                        uk-icon=\"cart\"></span>\n                      <span class=\"tm-product-card-add-button-text\">add to\n                        cart</span>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </article>\n            <article class=\"tm-product-card\">\n              <div class=\"tm-product-card-media\">\n                <div class=\"tm-ratio tm-ratio-4-3\">\n                  <a class=\"tm-media-box\" href=\"product\">\n                    <figure class=\"tm-media-box-wrap\">\n                      <span class=\"uk-text-muted\"\n                        uk-icon=\"icon: image; ratio: 3;\"></span>\n                    </figure>\n                  </a>\n                </div>\n              </div>\n              <div class=\"tm-product-card-body\">\n                <div class=\"tm-product-card-info\">\n                  <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop\n                  </div>\n                  <h3 class=\"tm-product-card-title\">\n                    <a class=\"uk-link-heading\" href=\"product\">Lenovo\n                      ThinkPad X380 Yoga 20LH000MUS (Black)</a>\n                  </h3>\n                  <ul\n                    class=\"uk-list uk-text-small tm-product-card-properties\">\n                    <li>\n                      <span class=\"uk-text-muted\">Diagonal display:\n                      </span>\n                      <span>13.3\"</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">CPU: </span>\n                      <span>Intel®&nbsp;Core™ i7 8550U</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">RAM: </span>\n                      <span>4&nbsp;GB</span>\n                    </li>\n                    <li>\n                      <span class=\"uk-text-muted\">Video Card: </span>\n                      <span>Intel® UHD Graphics 620</span>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"tm-product-card-shop\">\n                  <div class=\"tm-product-card-prices\">\n                    <div class=\"uk-text-muted\">Product not available</div>\n                  </div>\n                  <div class=\"tm-product-card-add\">\n                    <div class=\"uk-text-meta tm-product-card-actions\">\n                      <a class=\"tm-product-card-action js-add-to js-add-to-favorites\"\n                        title=\"Add to favorites\">\n                        <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                        <span class=\"tm-product-card-action-text\">Add to\n                          favorites</span>\n                      </a>\n                      <a class=\"tm-product-card-action js-add-to js-add-to-compare\"\n                        title=\"Add to compare\">\n                        <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                        <span class=\"tm-product-card-action-text\">Add to\n                          compare</span>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </article>\n          </div>\n        </div>\n        <div>\n          <button class=\"uk-button uk-button-default uk-button-large uk-width-1-1\"\n            style=\"border-top-left-radius: 0; border-top-right-radius: 0;\">\n            <span class=\"uk-margin-small-right\"\n              uk-icon=\"icon: plus; ratio: .75;\"></span>\n            <span>Load more</span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/category/category-heading/category-heading.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/category/category-heading/category-heading.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-text-center\">\n    <ul class=\"uk-breadcrumb uk-flex-center uk-margin-remove\">\n      <li>\n        <a href=\"index\">Home</a>\n      </li>\n      <li>\n        <a href=\"catalog\">Catalog</a>\n      </li>\n      <li>\n        <span>Laptops &amp; Tablets</span>\n      </li>\n    </ul>\n    <h1 class=\"uk-margin-small-top uk-margin-remove-bottom\">Laptops &amp; Tablets</h1>\n    <div class=\"uk-text-meta uk-margin-xsmall-top\">367 items</div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/category/category-leftsidebar/category-leftsidebar.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/category/category-leftsidebar/category-leftsidebar.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-card uk-card-default uk-card-small uk-flex uk-flex-column uk-height-1-1\">\n  <header class=\"uk-card-header uk-flex uk-flex-middle\">\n    <div class=\"uk-grid-small uk-flex-1\" uk-grid>\n      <div class=\"uk-width-expand\">\n        <div class=\"uk-h3\">Filters</div>\n      </div>\n      <button class=\"uk-offcanvas-close\" type=\"button\" uk-close></button>\n    </div>\n  </header>\n  <div class=\"uk-margin-remove uk-flex-1 uk-overflow-auto\"\n    uk-accordion=\"multiple: true; targets: &gt; .js-accordion-section\" style=\"flex-basis: auto\">\n    <section class=\"uk-card-small uk-card-body\">\n      <h4 class=\"uk-margin-small-bottom\">Categories</h4>\n      <ul class=\"uk-nav uk-nav-default\">\n        <li>\n          <a href=\"subcategory\">Laptops</a>\n        </li>\n        <li>\n          <a href=\"subcategory\">Tablets</a>\n        </li>\n        <li>\n          <a href=\"subcategory\">Peripherals</a>\n        </li>\n        <li>\n          <a href=\"subcategory\">Keyboards</a>\n        </li>\n        <li>\n          <a href=\"subcategory\">Accessories</a>\n        </li>\n      </ul>\n    </section>\n    <section class=\"uk-card-body uk-open js-accordion-section\">\n      <h4 class=\"uk-accordion-title uk-margin-remove\">Prices</h4>\n      <div class=\"uk-accordion-content\">\n        <div class=\"uk-grid-small uk-child-width-1-2 uk-text-small\" uk-grid>\n          <div>\n            <div class=\"uk-inline\">\n              <span class=\"uk-form-icon uk-text-xsmall\">from</span>\n              <input class=\"uk-input\" type=\"text\" placeholder=\"$59\">\n            </div>\n          </div>\n          <div>\n            <div class=\"uk-inline\">\n              <span class=\"uk-form-icon uk-text-xsmall\">to</span>\n              <input class=\"uk-input\" type=\"text\" placeholder=\"$6559\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <section class=\"uk-card-body js-accordion-section uk-open\">\n      <h4 class=\"uk-accordion-title uk-margin-remove\">Brands</h4>\n      <div class=\"uk-accordion-content\">\n        <ul class=\"uk-list tm-scrollbox\">\n          <li>\n            <input class=\"tm-checkbox\" id=\"brand-1\" name=\"brand\" value=\"1\" type=\"checkbox\">\n            <label for=\"brand-1\">\n              <span>Acer\n                <span class=\"uk-text-meta uk-text-xsmall\">177</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"brand-2\" name=\"brand\" value=\"2\" type=\"checkbox\">\n            <label for=\"brand-2\">\n              <span>Apple\n                <span class=\"uk-text-meta uk-text-xsmall\">18</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"brand-3\" name=\"brand\" value=\"3\" type=\"checkbox\">\n            <label for=\"brand-3\">\n              <span>ASUS\n                <span class=\"uk-text-meta uk-text-xsmall\">150</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"brand-4\" name=\"brand\" value=\"4\" type=\"checkbox\">\n            <label for=\"brand-4\">\n              <span>Dell\n                <span class=\"uk-text-meta uk-text-xsmall\">170</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"brand-5\" name=\"brand\" value=\"5\" type=\"checkbox\">\n            <label for=\"brand-5\">\n              <span>HP\n                <span class=\"uk-text-meta uk-text-xsmall\">498</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"brand-6\" name=\"brand\" value=\"6\" type=\"checkbox\">\n            <label for=\"brand-6\">\n              <span>MSI\n                <span class=\"uk-text-meta uk-text-xsmall\">54</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"brand-7\" name=\"brand\" value=\"7\" type=\"checkbox\">\n            <label for=\"brand-7\">\n              <span>Samsung\n                <span class=\"uk-text-meta uk-text-xsmall\">1</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"brand-8\" name=\"brand\" value=\"8\" type=\"checkbox\">\n            <label for=\"brand-8\">\n              <span>Sony\n                <span class=\"uk-text-meta uk-text-xsmall\">1</span>\n              </span>\n            </label>\n          </li>\n        </ul>\n      </div>\n    </section>\n    <div class=\"uk-card-body\">\n      <button class=\"uk-button uk-button-default uk-width-1-1\">\n        <span class=\"uk-margin-xsmall-right\" uk-icon=\"icon: close; ratio: .75;\"></span>Reset all filters</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/checkout/checkout-contactinfo/checkout-contactinfo.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/checkout/checkout-contactinfo/checkout-contactinfo.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <h2 class=\"tm-checkout-title\">Contact Information</h2>\n  <div class=\"uk-card uk-card-default uk-card-small uk-card-body tm-ignore-container\">\n    <div class=\"uk-grid-small uk-child-width-1-1 uk-child-width-1-2@s\" uk-grid>\n      <div>\n        <label>\n          <div class=\"uk-form-label uk-form-label-required\">First Name</div>\n          <input class=\"uk-input\" type=\"text\" required>\n        </label>\n      </div>\n      <div>\n        <label>\n          <div class=\"uk-form-label uk-form-label-required\">Last Name</div>\n          <input class=\"uk-input\" type=\"text\" required>\n        </label>\n      </div>\n      <div>\n        <label>\n          <div class=\"uk-form-label uk-form-label-required\">Phone Number</div>\n          <input class=\"uk-input\" type=\"tel\" required>\n        </label>\n      </div>\n      <div>\n        <label>\n          <div class=\"uk-form-label uk-form-label-required\">Email</div>\n          <input class=\"uk-input\" type=\"email\" required>\n        </label>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/checkout/checkout-heading/checkout-heading.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/checkout/checkout-heading/checkout-heading.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"uk-text-center\">\n    <a class=\"uk-link-muted uk-text-small\" href=\"cart\">\n      <span class=\"uk-margin-xsmall-right\" uk-icon=\"icon: arrow-left; ratio: .75;\"></span>Return to cart</a>\n    <h1 class=\"uk-margin-small-top uk-margin-remove-bottom\">Checkout</h1>\n  </section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/checkout/checkout-payment/checkout-payment.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/checkout/checkout-payment/checkout-payment.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <h2 class=\"tm-checkout-title\">Payment</h2>\n  <div class=\"uk-card uk-card-default uk-card-small tm-ignore-container\">\n    <div class=\"uk-card-body\">\n      <div class=\"uk-grid-small uk-grid-match uk-child-width-1-1 uk-child-width-1-3@s uk-flex-center\"\n        uk-switcher=\"toggle: &gt; * &gt; .tm-choose\" uk-grid>\n        <div>\n          <a class=\"tm-choose\" href=\"#\">\n            <div class=\"tm-choose-title\">payment upon receipt</div>\n            <div class=\"tm-choose-description\">Cash, credit card</div>\n          </a>\n        </div>\n        <div>\n          <a class=\"tm-choose\" href=\"#\">\n            <div class=\"tm-choose-title\">online by card</div>\n            <div class=\"tm-choose-description\">Visa, MasterCard</div>\n          </a>\n        </div>\n        <div>\n          <a class=\"tm-choose\" href=\"#\">\n            <div class=\"tm-choose-title\">electronic payment</div>\n            <div class=\"tm-choose-description\">PayPal, Yandex.Money, QIWI</div>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"uk-card-footer\">\n      <div class=\"uk-grid-small uk-flex-middle uk-flex-center uk-text-center\" uk-grid>\n        <div class=\"uk-text-meta\">\n          <span class=\"uk-margin-xsmall-right\" uk-icon=\"icon: lock; ratio: .75;\"></span>Security of payments is is\n          provided by secure protocols</div>\n        <div>\n          <img src=\"assets/images/verified-by-visa.svg\" title=\"Verified by Visa\" style=\"height: 25px;\">\n        </div>\n        <div>\n          <img src=\"assets/images/mastercard-securecode.svg\" title=\"MasterCard SecureCode\" style=\"height: 25px;\">\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/checkout/checkout-rightsidebar/checkout-rightsidebar.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/checkout/checkout-rightsidebar/checkout-rightsidebar.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <h2 class=\"tm-checkout-title\">Payment</h2>\n  <div class=\"uk-card uk-card-default uk-card-small tm-ignore-container\">\n    <div class=\"uk-card-body\">\n      <div class=\"uk-grid-small uk-grid-match uk-child-width-1-1 uk-child-width-1-3@s uk-flex-center\"\n        uk-switcher=\"toggle: &gt; * &gt; .tm-choose\" uk-grid>\n        <div>\n          <a class=\"tm-choose\" href=\"#\">\n            <div class=\"tm-choose-title\">payment upon receipt</div>\n            <div class=\"tm-choose-description\">Cash, credit card</div>\n          </a>\n        </div>\n        <div>\n          <a class=\"tm-choose\" href=\"#\">\n            <div class=\"tm-choose-title\">online by card</div>\n            <div class=\"tm-choose-description\">Visa, MasterCard</div>\n          </a>\n        </div>\n        <div>\n          <a class=\"tm-choose\" href=\"#\">\n            <div class=\"tm-choose-title\">electronic payment</div>\n            <div class=\"tm-choose-description\">PayPal, Yandex.Money, QIWI</div>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"uk-card-footer\">\n      <div class=\"uk-grid-small uk-flex-middle uk-flex-center uk-text-center\" uk-grid>\n        <div class=\"uk-text-meta\">\n          <span class=\"uk-margin-xsmall-right\" uk-icon=\"icon: lock; ratio: .75;\"></span>Security of payments is is\n          provided by secure protocols</div>\n        <div>\n          <img src=\"assets/images/verified-by-visa.svg\" title=\"Verified by Visa\" style=\"height: 25px;\">\n        </div>\n        <div>\n          <img src=\"assets/images/mastercard-securecode.svg\" title=\"MasterCard SecureCode\" style=\"height: 25px;\">\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/checkout/checkout-shipping/checkout-shipping.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/checkout/checkout-shipping/checkout-shipping.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <h2 class=\"tm-checkout-title\">Shipping</h2>\n  <div class=\"uk-card uk-card-default uk-card-small uk-card-body tm-ignore-container\">\n    <div class=\"uk-grid-small uk-grid-match uk-child-width-1-1 uk-child-width-1-3@s uk-flex-center\"\n      uk-switcher=\"toggle: &gt; * &gt; .tm-choose\" uk-grid>\n      <div>\n        <a class=\"tm-choose\" href=\"#\">\n          <div class=\"tm-choose-title\">pick up from store</div>\n          <div class=\"tm-choose-description\">Free, tomorrow</div>\n        </a>\n      </div>\n      <div>\n        <a class=\"tm-choose\" href=\"#\">\n          <div class=\"tm-choose-title\">delivery in city</div>\n          <div class=\"tm-choose-description\">Free, tomorrow</div>\n        </a>\n      </div>\n      <div>\n        <a class=\"tm-choose\" href=\"#\">\n          <div class=\"tm-choose-title\">regional delivery</div>\n          <div class=\"tm-choose-description\">Via Russian Post or postal courier services. Sending to any\n            country</div>\n        </a>\n      </div>\n    </div>\n    <div class=\"uk-switcher uk-margin\">\n      <section>\n        <div class=\"uk-grid-small uk-child-width-1-1 uk-child-width-1-2@s\" uk-grid>\n          <div>\n            <figure class=\"uk-card-media-top tm-ratio tm-ratio-16-9 js-map\" data-latitude=\"59.9356728\"\n              data-longitude=\"30.3258604\" data-zoom=\"14\"></figure>\n          </div>\n          <div class=\"uk-text-small\">\n            <div class=\"uk-text-bolder\">Store Name</div>\n            <div>St.&nbsp;Petersburg, Nevsky&nbsp;Prospect&nbsp;28</div>\n            <div>Daily 10:00–22:00</div>\n          </div>\n        </div>\n      </section>\n      <section>\n        <div class=\"uk-grid-small\" uk-grid>\n          <div class=\"uk-width-expand\">\n            <label>\n              <div class=\"uk-form-label uk-form-label-required\">Street</div>\n              <input class=\"uk-input\" type=\"text\">\n            </label>\n          </div>\n          <div class=\"uk-width-1-3 uk-width-1-6@s\">\n            <label>\n              <div class=\"uk-form-label uk-form-label-required\">House</div>\n              <input class=\"uk-input\" type=\"text\">\n            </label>\n          </div>\n        </div>\n        <div class=\"uk-grid-small uk-child-width-1-3 uk-child-width-1-4@s\" uk-grid>\n          <div>\n            <label>\n              <div class=\"uk-form-label\">Building</div>\n              <input class=\"uk-input\" type=\"text\">\n            </label>\n          </div>\n          <div>\n            <label>\n              <div class=\"uk-form-label\">Entrance</div>\n              <input class=\"uk-input\" type=\"text\">\n            </label>\n          </div>\n          <div>\n            <label>\n              <div class=\"uk-form-label\">Floor</div>\n              <input class=\"uk-input\" type=\"text\">\n            </label>\n          </div>\n          <div>\n            <label>\n              <div class=\"uk-form-label\">Apartment</div>\n              <input class=\"uk-input\" type=\"text\">\n            </label>\n          </div>\n          <div class=\"uk-width-1-1\">\n            <label>\n              <div class=\"uk-form-label\">Comment</div>\n              <textarea class=\"uk-textarea\" rows=\"5\"\n                placeholder=\"Additional information: phone numbers or doorphone code\"></textarea>\n            </label>\n          </div>\n        </div>\n        <div class=\"uk-grid-small uk-child-width-1-2 uk-child-width-1-4@s\" uk-grid>\n          <div class=\"uk-width-1-1 uk-text-meta\">Choose a convenient date and delivery interval</div>\n          <div>\n            <select class=\"uk-select\">\n              <option>Tomorrow</option>\n              <option>25 May</option>\n              <option>26 May</option>\n              <option>27 May</option>\n              <option>28 May</option>\n              <option>29 May</option>\n              <option>30 May</option>\n              <option>1 June</option>\n            </select>\n          </div>\n          <div>\n            <select class=\"uk-select\">\n              <option>09:00 – 12:00</option>\n              <option>12:00 – 15:00</option>\n              <option>15:00 – 18:00</option>\n              <option>18:00 – 21:00</option>\n              <option>21:00 – 23:00</option>\n            </select>\n          </div>\n        </div>\n      </section>\n      <div>\n        <div class=\"uk-grid-small\" uk-grid>\n          <div class=\"uk-width-1-1\">\n            <label>\n              <div class=\"uk-form-label uk-form-label-required\">Country</div>\n              <select class=\"uk-select\">\n                <option>Choose the country</option>\n                <option value=\"RU\">Russia</option>\n              </select>\n            </label>\n          </div>\n        </div>\n        <div class=\"uk-grid-small\" uk-grid>\n          <div class=\"uk-width-expand\">\n            <label>\n              <div class=\"uk-form-label uk-form-label-required\">City</div>\n              <input class=\"uk-input\" type=\"text\">\n            </label>\n          </div>\n          <div class=\"uk-width-1-3 uk-width-1-6@s\">\n            <label>\n              <div class=\"uk-form-label uk-form-label-required\">Post Code</div>\n              <input class=\"uk-input\" type=\"text\">\n            </label>\n          </div>\n        </div>\n        <div class=\"uk-grid-small\" uk-grid>\n          <div class=\"uk-width-expand\">\n            <label>\n              <div class=\"uk-form-label uk-form-label-required\">Street</div>\n              <input class=\"uk-input\" type=\"text\">\n            </label>\n          </div>\n          <div class=\"uk-width-1-3 uk-width-1-6@s\">\n            <label>\n              <div class=\"uk-form-label uk-form-label-required\">House</div>\n              <input class=\"uk-input\" type=\"text\">\n            </label>\n          </div>\n        </div>\n        <div class=\"uk-grid-small uk-child-width-1-3 uk-child-width-1-4@s\" uk-grid>\n          <div>\n            <label>\n              <div class=\"uk-form-label\">Building</div>\n              <input class=\"uk-input\" type=\"text\">\n            </label>\n          </div>\n          <div>\n            <label>\n              <div class=\"uk-form-label\">Entrance</div>\n              <input class=\"uk-input\" type=\"text\">\n            </label>\n          </div>\n          <div>\n            <label>\n              <div class=\"uk-form-label\">Floor</div>\n              <input class=\"uk-input\" type=\"text\">\n            </label>\n          </div>\n          <div>\n            <label>\n              <div class=\"uk-form-label\">Apartment</div>\n              <input class=\"uk-input\" type=\"text\">\n            </label>\n          </div>\n          <div class=\"uk-width-1-1\">\n            <label>\n              <div class=\"uk-form-label\">Comment</div>\n              <textarea class=\"uk-textarea\" rows=\"5\"\n                placeholder=\"Additional information: phone numbers or doorphone code\"></textarea>\n            </label>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/compare/compare-heading/compare-heading.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/compare/compare-heading/compare-heading.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-text-center\">\n  <ul class=\"uk-breadcrumb uk-flex-center uk-margin-remove\">\n    <li>\n      <a href=\"index\">Home</a>\n    </li>\n    <li>\n      <span>Compare</span>\n    </li>\n  </ul>\n  <h1 class=\"uk-margin-small-top uk-margin-remove-bottom\">Compare</h1>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/delivery/delivery-heading/delivery-heading.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/delivery/delivery-heading/delivery-heading.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-text-center\">\n  <ul class=\"uk-breadcrumb uk-flex-center uk-margin-remove\">\n    <li>\n      <a href=\"index\">Home</a>\n    </li>\n    <li>\n      <span>Delivery</span>\n    </li>\n  </ul>\n  <h1 class=\"uk-margin-small-top uk-margin-remove-bottom\">Delivery</h1>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/faq/faq-heading/faq-heading.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/faq/faq-heading/faq-heading.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-text-center\">\n  <ul class=\"uk-breadcrumb uk-flex-center uk-margin-remove\">\n    <li>\n      <a href=\"index\">Home</a>\n    </li>\n    <li>\n      <span>FAQ</span>\n    </li>\n  </ul>\n  <h1 class=\"uk-margin-small-top uk-margin-remove-bottom\">FAQ</h1>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/favorites/favorite-products/favorite-products.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/favorites/favorite-products/favorite-products.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"tm-product-card\">\n    <div class=\"tm-product-card-media\">\n      <div class=\"tm-ratio tm-ratio-4-3\">\n        <a class=\"tm-media-box\" href=\"product\">\n          <div class=\"tm-product-card-labels\">\n            <span class=\"uk-label uk-label-warning\">top selling</span>\n            <span class=\"uk-label uk-label-danger\">trade-in</span>\n          </div>\n          <figure class=\"tm-media-box-wrap\">\n            <img src=\"assets/images/products/1/1-medium.jpg\"\n              alt=\"Apple MacBook Pro 15&quot; Touch Bar MPTU2LL/A 256GB (Silver)\" />\n          </figure>\n        </a>\n      </div>\n    </div>\n    <div class=\"tm-product-card-body\">\n      <div class=\"tm-product-card-info\">\n        <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n        <h3 class=\"tm-product-card-title\">\n          <a class=\"uk-link-heading\" href=\"product\">Apple MacBook Pro 15&quot; Touch Bar MPTU2LL/A 256GB (Silver)</a>\n        </h3>\n        <ul class=\"uk-list uk-text-small tm-product-card-properties\">\n          <li>\n            <span class=\"uk-text-muted\">Diagonal display: </span>\n            <span>15.4\"</span>\n          </li>\n          <li>\n            <span class=\"uk-text-muted\">CPU: </span>\n            <span>Intel®&nbsp;Core™ i7</span>\n          </li>\n          <li>\n            <span class=\"uk-text-muted\">RAM: </span>\n            <span>16&nbsp;GB</span>\n          </li>\n          <li>\n            <span class=\"uk-text-muted\">Video Card: </span>\n            <span>AMD Radeon Pro 555</span>\n          </li>\n        </ul>\n      </div>\n      <div class=\"tm-product-card-shop\">\n        <div class=\"tm-product-card-prices\">\n          <del class=\"uk-text-meta\">$1899.00</del>\n          <div class=\"tm-product-card-price\">$1599.00</div>\n        </div>\n        <div class=\"tm-product-card-add\">\n          <div class=\"uk-text-meta tm-product-card-actions\">\n            <a class=\"tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to\"\n              title=\"Add to favorites\">\n              <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n              <span class=\"tm-product-card-action-text\">Add to favorites</span>\n            </a>\n            <a class=\"tm-product-card-action js-add-to js-add-to-compare tm-action-button-active js-added-to\"\n              title=\"Add to compare\">\n              <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n              <span class=\"tm-product-card-action-text\">Add to compare</span>\n            </a>\n          </div>\n          <button class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n            <span class=\"tm-product-card-add-button-icon\" uk-icon=\"cart\"></span>\n            <span class=\"tm-product-card-add-button-text\">add to cart</span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </article>\n  <article class=\"tm-product-card\">\n    <div class=\"tm-product-card-media\">\n      <div class=\"tm-ratio tm-ratio-4-3\">\n        <a class=\"tm-media-box\" href=\"product\">\n          <div class=\"tm-product-card-labels\">\n            <span class=\"uk-label uk-label-success\">new</span>\n            <span class=\"uk-label uk-label-danger\">trade-in</span>\n          </div>\n          <figure class=\"tm-media-box-wrap\">\n            <img src=\"assets/images/products/2/2-medium.jpg\" alt=\"Apple MacBook 12&quot; MNYN2LL/A 512GB (Rose Gold)\" />\n          </figure>\n        </a>\n      </div>\n    </div>\n    <div class=\"tm-product-card-body\">\n      <div class=\"tm-product-card-info\">\n        <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n        <h3 class=\"tm-product-card-title\">\n          <a class=\"uk-link-heading\" href=\"product\">Apple MacBook 12&quot; MNYN2LL/A 512GB (Rose Gold)</a>\n        </h3>\n        <ul class=\"uk-list uk-text-small tm-product-card-properties\">\n          <li>\n            <span class=\"uk-text-muted\">Diagonal display: </span>\n            <span>12\"</span>\n          </li>\n          <li>\n            <span class=\"uk-text-muted\">CPU: </span>\n            <span>Intel®&nbsp;Core™ i5</span>\n          </li>\n          <li>\n            <span class=\"uk-text-muted\">RAM: </span>\n            <span>8&nbsp;GB</span>\n          </li>\n          <li>\n            <span class=\"uk-text-muted\">Video Card: </span>\n            <span>Intel® HD Graphics 615</span>\n          </li>\n        </ul>\n      </div>\n      <div class=\"tm-product-card-shop\">\n        <div class=\"tm-product-card-prices\">\n          <div class=\"tm-product-card-price\">$1549.00</div>\n        </div>\n        <div class=\"tm-product-card-add\">\n          <div class=\"uk-text-meta tm-product-card-actions\">\n            <a class=\"tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to\"\n              title=\"Add to favorites\">\n              <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n              <span class=\"tm-product-card-action-text\">Add to favorites</span>\n            </a>\n            <a class=\"tm-product-card-action js-add-to js-add-to-compare tm-action-button-active js-added-to\"\n              title=\"Add to compare\">\n              <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n              <span class=\"tm-product-card-action-text\">Add to compare</span>\n            </a>\n          </div>\n          <button class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n            <span class=\"tm-product-card-add-button-icon\" uk-icon=\"cart\"></span>\n            <span class=\"tm-product-card-add-button-text\">add to cart</span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </article>\n  <article class=\"tm-product-card\">\n    <div class=\"tm-product-card-media\">\n      <div class=\"tm-ratio tm-ratio-4-3\">\n        <a class=\"tm-media-box\" href=\"product\">\n          <figure class=\"tm-media-box-wrap\">\n            <img src=\"assets/images/products/3/3-medium.jpg\" alt=\"Lenovo IdeaPad YOGA 920-13IKB 80Y7001RRK (Copper)\" />\n          </figure>\n        </a>\n      </div>\n    </div>\n    <div class=\"tm-product-card-body\">\n      <div class=\"tm-product-card-info\">\n        <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n        <h3 class=\"tm-product-card-title\">\n          <a class=\"uk-link-heading\" href=\"product\">Lenovo IdeaPad YOGA 920-13IKB 80Y7001RRK (Copper)</a>\n        </h3>\n        <ul class=\"uk-list uk-text-small tm-product-card-properties\">\n          <li>\n            <span class=\"uk-text-muted\">Diagonal display: </span>\n            <span>13.9\"</span>\n          </li>\n          <li>\n            <span class=\"uk-text-muted\">CPU: </span>\n            <span>Intel®&nbsp;Core™ i7 8550U</span>\n          </li>\n          <li>\n            <span class=\"uk-text-muted\">RAM: </span>\n            <span>16&nbsp;GB</span>\n          </li>\n          <li>\n            <span class=\"uk-text-muted\">Video Card: </span>\n            <span>Intel® HD Graphics 620</span>\n          </li>\n        </ul>\n      </div>\n      <div class=\"tm-product-card-shop\">\n        <div class=\"tm-product-card-prices\">\n          <div class=\"tm-product-card-price\">$1199.00</div>\n        </div>\n        <div class=\"tm-product-card-add\">\n          <div class=\"uk-text-meta tm-product-card-actions\">\n            <a class=\"tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to\"\n              title=\"Add to favorites\">\n              <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n              <span class=\"tm-product-card-action-text\">Add to favorites</span>\n            </a>\n            <a class=\"tm-product-card-action js-add-to js-add-to-compare\" title=\"Add to compare\">\n              <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n              <span class=\"tm-product-card-action-text\">Add to compare</span>\n            </a>\n          </div>\n          <button class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n            <span class=\"tm-product-card-add-button-icon\" uk-icon=\"cart\"></span>\n            <span class=\"tm-product-card-add-button-text\">add to cart</span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </article>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/header-container/header-container.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/header-container/header-container.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/news/news-rightsidebar/news-rightsidebar.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/news/news-rightsidebar/news-rightsidebar.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\t\t\t\t\t<aside class=\"uk-width-1-4 uk-visible@m tm-aside-column\">\n\t\t\t\t\t\t<section class=\"uk-card uk-card-default uk-card-small\" uk-sticky=\"offset: 90; bottom: true;\">\n\t\t\t\t\t\t\t<nav>\n\t\t\t\t\t\t\t\t<ul class=\"uk-nav uk-nav-default tm-nav\">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href=\"about\">About</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href=\"contacts\">Contacts</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href=\"blog\">Blog</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"uk-active\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"news\">News</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href=\"faq\">FAQ</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href=\"delivery\">Delivery</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t</section>\n          </aside>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/personal-info/personal-info.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/personal-info/personal-info.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-card uk-card-default uk-card-small tm-ignore-container\">\n  <header class=\"uk-card-header\">\n    <h1 class=\"uk-h2\">Personal Info</h1>\n  </header>\n  <div class=\"uk-card-body\">\n    <form class=\"uk-form-stacked\">\n      <div class=\"uk-grid-medium uk-child-width-1-1\" uk-grid>\n        <fieldset class=\"uk-fieldset\">\n          <legend class=\"uk-h4\">Contact</legend>\n          <div class=\"uk-grid-small uk-child-width-1-1 uk-child-width-1-2@s\" uk-grid>\n            <div>\n              <label>\n                <div class=\"uk-form-label\">First Name</div>\n                <input class=\"uk-input\" type=\"text\" value=\"Thomas\">\n              </label>\n            </div>\n            <div>\n              <label>\n                <div class=\"uk-form-label\">Last Name</div>\n                <input class=\"uk-input\" type=\"text\" value=\"Bruns\">\n              </label>\n            </div>\n            <div>\n              <label>\n                <div class=\"uk-form-label\">Phone Number</div>\n                <input class=\"uk-input\" type=\"tel\" value=\"8 (800) 555-35-35\">\n              </label>\n            </div>\n            <div>\n              <label>\n                <div class=\"uk-form-label\">Date of Birth</div>\n                <input class=\"uk-input\" type=\"date\" value=\"1990-01-01\">\n              </label>\n            </div>\n          </div>\n        </fieldset>\n        <fieldset class=\"uk-fieldset\">\n          <legend class=\"uk-h4\">Address</legend>\n          <div class=\"uk-grid-small\" uk-grid>\n            <div class=\"uk-width-1-1\">\n              <label>\n                <div class=\"uk-form-label\">Country</div>\n                <select class=\"uk-select\">\n                  <option>Choose the country</option>\n                  <option value=\"RU\">Russia</option>\n                </select>\n              </label>\n            </div>\n          </div>\n          <div class=\"uk-grid-small\" uk-grid>\n            <div class=\"uk-width-expand\">\n              <label>\n                <div class=\"uk-form-label\">City</div>\n                <input class=\"uk-input\" type=\"text\">\n              </label>\n            </div>\n            <div class=\"uk-width-1-3 uk-width-1-6@s\">\n              <label>\n                <div class=\"uk-form-label\">Post Code</div>\n                <input class=\"uk-input\" type=\"text\">\n              </label>\n            </div>\n          </div>\n          <div class=\"uk-grid-small\" uk-grid>\n            <div class=\"uk-width-expand\">\n              <label>\n                <div class=\"uk-form-label\">Street</div>\n                <input class=\"uk-input\" type=\"text\">\n              </label>\n            </div>\n            <div class=\"uk-width-1-3 uk-width-1-6@s\">\n              <label>\n                <div class=\"uk-form-label\">House</div>\n                <input class=\"uk-input\" type=\"text\">\n              </label>\n            </div>\n          </div>\n          <div class=\"uk-grid-small uk-child-width-1-3 uk-child-width-1-4@s\" uk-grid>\n            <div>\n              <label>\n                <div class=\"uk-form-label\">Building</div>\n                <input class=\"uk-input\" type=\"text\">\n              </label>\n            </div>\n            <div>\n              <label>\n                <div class=\"uk-form-label\">Entrance</div>\n                <input class=\"uk-input\" type=\"text\">\n              </label>\n            </div>\n            <div>\n              <label>\n                <div class=\"uk-form-label\">Floor</div>\n                <input class=\"uk-input\" type=\"text\">\n              </label>\n            </div>\n            <div>\n              <label>\n                <div class=\"uk-form-label\">Apartment</div>\n                <input class=\"uk-input\" type=\"text\">\n              </label>\n            </div>\n            <div class=\"uk-width-1-1\">\n              <label>\n                <div class=\"uk-form-label\">Comment</div>\n                <textarea class=\"uk-textarea\" rows=\"5\"\n                  placeholder=\"Additional information: phone numbers or doorphone code\"></textarea>\n              </label>\n            </div>\n          </div>\n        </fieldset>\n      </div>\n    </form>\n  </div>\n  <div class=\"uk-card-footer uk-text-center\">\n    <button class=\"uk-button uk-button-primary\">save</button>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/popular-brands/popular-brands.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/popular-brands/popular-brands.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"uk-section uk-section-default uk-section-small\">\n  <div class=\"uk-container\">\n    <h2 class=\"uk-text-center\">Popular Brands</h2>\n    <div class=\"uk-margin-medium-top\" uk-slider=\"finite: true\">\n      <div class=\"uk-position-relative\">\n        <div class=\"uk-grid-small uk-flex-middle\" uk-grid>\n          <div class=\"uk-visible@m\">\n            <a href=\"#\" uk-slidenav-previous uk-slider-item=\"previous\" ></a>\n          </div>\n          <div class=\"uk-width-expand uk-slider-container\">\n            <ul class=\"uk-slider-items uk-child-width-1-3 uk-child-width-1-6@s uk-grid uk-grid-large\">\n              <li>\n                <div class=\"tm-ratio tm-ratio-16-9\">\n                  <a class=\"uk-link-muted tm-media-box tm-grayscale\" href=\"#\" title=\"Apple\">\n                    <figure class=\"tm-media-box-wrap\">\n                      <img src=\"assets/images//brands/apple.svg\" alt=\"Apple\">\n                    </figure>\n                  </a>\n                </div>\n              </li>\n              <li>\n                <div class=\"tm-ratio tm-ratio-16-9\">\n                  <a class=\"uk-link-muted tm-media-box tm-grayscale\" href=\"#\" title=\"Samsung\">\n                    <figure class=\"tm-media-box-wrap\">\n                      <img src=\"assets/images//brands/samsung.svg\" alt=\"Samsung\">\n                    </figure>\n                  </a>\n                </div>\n              </li>\n              <li>\n                <div class=\"tm-ratio tm-ratio-16-9\">\n                  <a class=\"uk-link-muted tm-media-box tm-grayscale\" href=\"#\" title=\"Sony\">\n                    <figure class=\"tm-media-box-wrap\">\n                      <img src=\"assets/images//brands/sony.svg\" alt=\"Sony\">\n                    </figure>\n                  </a>\n                </div>\n              </li>\n              <li>\n                <div class=\"tm-ratio tm-ratio-16-9\">\n                  <a class=\"uk-link-muted tm-media-box tm-grayscale\" href=\"#\" title=\"Microsoft\">\n                    <figure class=\"tm-media-box-wrap\">\n                      <img src=\"assets/images//brands/microsoft.svg\" alt=\"Microsoft\">\n                    </figure>\n                  </a>\n                </div>\n              </li>\n              <li>\n                <div class=\"tm-ratio tm-ratio-16-9\">\n                  <a class=\"uk-link-muted tm-media-box tm-grayscale\" href=\"#\" title=\"Intel\">\n                    <figure class=\"tm-media-box-wrap\">\n                      <img src=\"assets/images//brands/intel.svg\" alt=\"Intel\">\n                    </figure>\n                  </a>\n                </div>\n              </li>\n              <li>\n                <div class=\"tm-ratio tm-ratio-16-9\">\n                  <a class=\"uk-link-muted tm-media-box tm-grayscale\" href=\"#\" title=\"HP\">\n                    <figure class=\"tm-media-box-wrap\">\n                      <img src=\"assets/images//brands/hp.svg\" alt=\"HP\">\n                    </figure>\n                  </a>\n                </div>\n              </li>\n              <li>\n                <div class=\"tm-ratio tm-ratio-16-9\">\n                  <a class=\"uk-link-muted tm-media-box tm-grayscale\" href=\"#\" title=\"LG\">\n                    <figure class=\"tm-media-box-wrap\">\n                      <img src=\"assets/images//brands/lg.svg\" alt=\"LG\">\n                    </figure>\n                  </a>\n                </div>\n              </li>\n              <li>\n                <div class=\"tm-ratio tm-ratio-16-9\">\n                  <a class=\"uk-link-muted tm-media-box tm-grayscale\" href=\"#\" title=\"Lenovo\">\n                    <figure class=\"tm-media-box-wrap\">\n                      <img src=\"assets/images//brands/lenovo.svg\" alt=\"Lenovo\">\n                    </figure>\n                  </a>\n                </div>\n              </li>\n              <li>\n                <div class=\"tm-ratio tm-ratio-16-9\">\n                  <a class=\"uk-link-muted tm-media-box tm-grayscale\" href=\"#\" title=\"ASUS\">\n                    <figure class=\"tm-media-box-wrap\">\n                      <img src=\"assets/images//brands/asus.svg\" alt=\"ASUS\">\n                    </figure>\n                  </a>\n                </div>\n              </li>\n              <li>\n                <div class=\"tm-ratio tm-ratio-16-9\">\n                  <a class=\"uk-link-muted tm-media-box tm-grayscale\" href=\"#\" title=\"Acer\">\n                    <figure class=\"tm-media-box-wrap\">\n                      <img src=\"assets/images//brands/acer.svg\" alt=\"Acer\">\n                    </figure>\n                  </a>\n                </div>\n              </li>\n              <li>\n                <div class=\"tm-ratio tm-ratio-16-9\">\n                  <a class=\"uk-link-muted tm-media-box tm-grayscale\" href=\"#\" title=\"Dell\">\n                    <figure class=\"tm-media-box-wrap\">\n                      <img src=\"assets/images//brands/dell.svg\" alt=\"Dell\">\n                    </figure>\n                  </a>\n                </div>\n              </li>\n              <li>\n                <div class=\"tm-ratio tm-ratio-16-9\">\n                  <a class=\"uk-link-muted tm-media-box tm-grayscale\" href=\"#\" title=\"Canon\">\n                    <figure class=\"tm-media-box-wrap\">\n                      <img src=\"assets/images//brands/canon.svg\" alt=\"Canon\">\n                    </figure>\n                  </a>\n                </div>\n              </li>\n            </ul>\n          </div>\n          <div class=\"uk-visible@m\">\n            <a href=\"#\" uk-slider-item=\"next\" uk-slidenav-next ></a>\n          </div>\n        </div>\n      </div>\n      <ul class=\"uk-slider-nav uk-dotnav uk-flex-center uk-margin-medium-top uk-hidden@m\" ></ul>\n    </div>\n    <div class=\"uk-margin uk-text-center\">\n      <a class=\"uk-link-muted uk-text-uppercase tm-link-to-all\" href=\"brand\">\n        <span>see all brands</span>\n        <span uk-icon=\"icon: chevron-right; ratio: .75;\" ></span>\n      </a>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/product/product-accessories/product-accessories.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/product/product-accessories/product-accessories.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"tm-wrapper\">\n    <div class=\"uk-grid-collapse uk-child-width-1-3@s uk-child-width-1-4@m tm-products-grid\" uk-grid>\n      <article class=\"tm-product-card\">\n        <div class=\"tm-product-card-media\">\n          <div class=\"tm-ratio tm-ratio-4-3\">\n            <a class=\"tm-media-box\" href=\"product\">\n              <div class=\"tm-product-card-labels\">\n                <span class=\"uk-label uk-label-warning\">top selling</span>\n                <span class=\"uk-label uk-label-danger\">trade-in</span>\n              </div>\n              <figure class=\"tm-media-box-wrap\">\n                <img src=\"assets/images/products/1/1-medium.jpg\"\n                  alt=\"Apple MacBook Pro 15&quot; Touch Bar MPTU2LL/A 256GB (Silver)\" />\n              </figure>\n            </a>\n          </div>\n        </div>\n        <div class=\"tm-product-card-body\">\n          <div class=\"tm-product-card-info\">\n            <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n            <h3 class=\"tm-product-card-title\">\n              <a class=\"uk-link-heading\" href=\"product\">Apple MacBook Pro 15&quot; Touch Bar\n                MPTU2LL/A 256GB (Silver)</a>\n            </h3>\n            <ul class=\"uk-list uk-text-small tm-product-card-properties\">\n              <li>\n                <span class=\"uk-text-muted\">Diagonal display: </span>\n                <span>15.4\"</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">CPU: </span>\n                <span>Intel®&nbsp;Core™ i7</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">RAM: </span>\n                <span>16&nbsp;GB</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">Video Card: </span>\n                <span>AMD Radeon Pro 555</span>\n              </li>\n            </ul>\n          </div>\n          <div class=\"tm-product-card-shop\">\n            <div class=\"tm-product-card-prices\">\n              <del class=\"uk-text-meta\">$1899.00</del>\n              <div class=\"tm-product-card-price\">$1599.00</div>\n            </div>\n            <div class=\"tm-product-card-add\">\n              <div class=\"uk-text-meta tm-product-card-actions\">\n                <a class=\"tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to\"\n                  title=\"Add to favorites\">\n                  <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                  <span class=\"tm-product-card-action-text\">Add to favorites</span>\n                </a>\n                <a class=\"tm-product-card-action js-add-to js-add-to-compare tm-action-button-active js-added-to\"\n                  title=\"Add to compare\">\n                  <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                  <span class=\"tm-product-card-action-text\">Add to compare</span>\n                </a>\n              </div>\n              <button class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                <span class=\"tm-product-card-add-button-icon\" uk-icon=\"cart\"></span>\n                <span class=\"tm-product-card-add-button-text\">add to cart</span>\n              </button>\n            </div>\n          </div>\n        </div>\n      </article>\n      <article class=\"tm-product-card\">\n        <div class=\"tm-product-card-media\">\n          <div class=\"tm-ratio tm-ratio-4-3\">\n            <a class=\"tm-media-box\" href=\"product\">\n              <div class=\"tm-product-card-labels\">\n                <span class=\"uk-label uk-label-success\">new</span>\n                <span class=\"uk-label uk-label-danger\">trade-in</span>\n              </div>\n              <figure class=\"tm-media-box-wrap\">\n                <img src=\"assets/images/products/2/2-medium.jpg\"\n                  alt=\"Apple MacBook 12&quot; MNYN2LL/A 512GB (Rose Gold)\" />\n              </figure>\n            </a>\n          </div>\n        </div>\n        <div class=\"tm-product-card-body\">\n          <div class=\"tm-product-card-info\">\n            <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n            <h3 class=\"tm-product-card-title\">\n              <a class=\"uk-link-heading\" href=\"product\">Apple MacBook 12&quot; MNYN2LL/A 512GB\n                (Rose Gold)</a>\n            </h3>\n            <ul class=\"uk-list uk-text-small tm-product-card-properties\">\n              <li>\n                <span class=\"uk-text-muted\">Diagonal display: </span>\n                <span>12\"</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">CPU: </span>\n                <span>Intel®&nbsp;Core™ i5</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">RAM: </span>\n                <span>8&nbsp;GB</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">Video Card: </span>\n                <span>Intel® HD Graphics 615</span>\n              </li>\n            </ul>\n          </div>\n          <div class=\"tm-product-card-shop\">\n            <div class=\"tm-product-card-prices\">\n              <div class=\"tm-product-card-price\">$1549.00</div>\n            </div>\n            <div class=\"tm-product-card-add\">\n              <div class=\"uk-text-meta tm-product-card-actions\">\n                <a class=\"tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to\"\n                  title=\"Add to favorites\">\n                  <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                  <span class=\"tm-product-card-action-text\">Add to favorites</span>\n                </a>\n                <a class=\"tm-product-card-action js-add-to js-add-to-compare tm-action-button-active js-added-to\"\n                  title=\"Add to compare\">\n                  <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                  <span class=\"tm-product-card-action-text\">Add to compare</span>\n                </a>\n              </div>\n              <button class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                <span class=\"tm-product-card-add-button-icon\" uk-icon=\"cart\"></span>\n                <span class=\"tm-product-card-add-button-text\">add to cart</span>\n              </button>\n            </div>\n          </div>\n        </div>\n      </article>\n      <article class=\"tm-product-card\">\n        <div class=\"tm-product-card-media\">\n          <div class=\"tm-ratio tm-ratio-4-3\">\n            <a class=\"tm-media-box\" href=\"product\">\n              <figure class=\"tm-media-box-wrap\">\n                <img src=\"assets/images/products/3/3-medium.jpg\"\n                  alt=\"Lenovo IdeaPad YOGA 920-13IKB 80Y7001RRK (Copper)\" />\n              </figure>\n            </a>\n          </div>\n        </div>\n        <div class=\"tm-product-card-body\">\n          <div class=\"tm-product-card-info\">\n            <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n            <h3 class=\"tm-product-card-title\">\n              <a class=\"uk-link-heading\" href=\"product\">Lenovo IdeaPad YOGA 920-13IKB 80Y7001RRK\n                (Copper)</a>\n            </h3>\n            <ul class=\"uk-list uk-text-small tm-product-card-properties\">\n              <li>\n                <span class=\"uk-text-muted\">Diagonal display: </span>\n                <span>13.9\"</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">CPU: </span>\n                <span>Intel®&nbsp;Core™ i7 8550U</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">RAM: </span>\n                <span>16&nbsp;GB</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">Video Card: </span>\n                <span>Intel® HD Graphics 620</span>\n              </li>\n            </ul>\n          </div>\n          <div class=\"tm-product-card-shop\">\n            <div class=\"tm-product-card-prices\">\n              <div class=\"tm-product-card-price\">$1199.00</div>\n            </div>\n            <div class=\"tm-product-card-add\">\n              <div class=\"uk-text-meta tm-product-card-actions\">\n                <a class=\"tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to\"\n                  title=\"Add to favorites\">\n                  <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                  <span class=\"tm-product-card-action-text\">Add to favorites</span>\n                </a>\n                <a class=\"tm-product-card-action js-add-to js-add-to-compare\" title=\"Add to compare\">\n                  <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                  <span class=\"tm-product-card-action-text\">Add to compare</span>\n                </a>\n              </div>\n              <button class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                <span class=\"tm-product-card-add-button-icon\" uk-icon=\"cart\"></span>\n                <span class=\"tm-product-card-add-button-text\">add to cart</span>\n              </button>\n            </div>\n          </div>\n        </div>\n      </article>\n      <article class=\"tm-product-card\">\n        <div class=\"tm-product-card-media\">\n          <div class=\"tm-ratio tm-ratio-4-3\">\n            <a class=\"tm-media-box\" href=\"product\">\n              <div class=\"tm-product-card-labels\">\n                <span class=\"uk-label uk-label-warning\">top selling</span>\n              </div>\n              <figure class=\"tm-media-box-wrap\">\n                <img src=\"assets/images/products/4/4-medium.jpg\" alt=\"ASUS Zenbook UX330UA-FC020T (Rose Gold)\" />\n              </figure>\n            </a>\n          </div>\n        </div>\n        <div class=\"tm-product-card-body\">\n          <div class=\"tm-product-card-info\">\n            <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n            <h3 class=\"tm-product-card-title\">\n              <a class=\"uk-link-heading\" href=\"product\">ASUS Zenbook UX330UA-FC020T (Rose\n                Gold)</a>\n            </h3>\n            <ul class=\"uk-list uk-text-small tm-product-card-properties\">\n              <li>\n                <span class=\"uk-text-muted\">Diagonal display: </span>\n                <span>13.3\"</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">CPU: </span>\n                <span>Intel®&nbsp;Core™ i7-6500U</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">RAM: </span>\n                <span>8&nbsp;GB</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">Video Card: </span>\n                <span>Intel® HD Graphics 520</span>\n              </li>\n            </ul>\n          </div>\n          <div class=\"tm-product-card-shop\">\n            <div class=\"tm-product-card-prices\">\n              <div class=\"tm-product-card-price\">$749.00</div>\n            </div>\n            <div class=\"tm-product-card-add\">\n              <div class=\"uk-text-meta tm-product-card-actions\">\n                <a class=\"tm-product-card-action js-add-to js-add-to-favorites\" title=\"Add to favorites\">\n                  <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                  <span class=\"tm-product-card-action-text\">Add to favorites</span>\n                </a>\n                <a class=\"tm-product-card-action js-add-to js-add-to-compare\" title=\"Add to compare\">\n                  <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                  <span class=\"tm-product-card-action-text\">Add to compare</span>\n                </a>\n              </div>\n              <button class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                <span class=\"tm-product-card-add-button-icon\" uk-icon=\"cart\"></span>\n                <span class=\"tm-product-card-add-button-text\">add to cart</span>\n              </button>\n            </div>\n          </div>\n        </div>\n      </article>\n      <article class=\"tm-product-card\">\n        <div class=\"tm-product-card-media\">\n          <div class=\"tm-ratio tm-ratio-4-3\">\n            <a class=\"tm-media-box\" href=\"product\">\n              <figure class=\"tm-media-box-wrap\">\n                <img src=\"assets/images/products/5/5-medium.jpg\" alt=\"Dell XPS 15 9560-8968 (Silver)\" />\n              </figure>\n            </a>\n          </div>\n        </div>\n        <div class=\"tm-product-card-body\">\n          <div class=\"tm-product-card-info\">\n            <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n            <h3 class=\"tm-product-card-title\">\n              <a class=\"uk-link-heading\" href=\"product\">Dell XPS 15 9560-8968 (Silver)</a>\n            </h3>\n            <ul class=\"uk-list uk-text-small tm-product-card-properties\">\n              <li>\n                <span class=\"uk-text-muted\">Diagonal display: </span>\n                <span>15.6\"</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">CPU: </span>\n                <span>Intel®&nbsp;Core™ i7 7700HQ</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">RAM: </span>\n                <span>16&nbsp;GB</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">Video Card: </span>\n                <span>NVIDIA GeForce GTX 960M</span>\n              </li>\n            </ul>\n          </div>\n          <div class=\"tm-product-card-shop\">\n            <div class=\"tm-product-card-prices\">\n              <del class=\"uk-text-meta\">$999.00</del>\n              <div class=\"tm-product-card-price\">$949.00</div>\n            </div>\n            <div class=\"tm-product-card-add\">\n              <div class=\"uk-text-meta tm-product-card-actions\">\n                <a class=\"tm-product-card-action js-add-to js-add-to-favorites\" title=\"Add to favorites\">\n                  <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                  <span class=\"tm-product-card-action-text\">Add to favorites</span>\n                </a>\n                <a class=\"tm-product-card-action js-add-to js-add-to-compare\" title=\"Add to compare\">\n                  <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                  <span class=\"tm-product-card-action-text\">Add to compare</span>\n                </a>\n              </div>\n              <button class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                <span class=\"tm-product-card-add-button-icon\" uk-icon=\"cart\"></span>\n                <span class=\"tm-product-card-add-button-text\">add to cart</span>\n              </button>\n            </div>\n          </div>\n        </div>\n      </article>\n      <article class=\"tm-product-card\">\n        <div class=\"tm-product-card-media\">\n          <div class=\"tm-ratio tm-ratio-4-3\">\n            <a class=\"tm-media-box\" href=\"product\">\n              <div class=\"tm-product-card-labels\">\n                <span class=\"uk-label uk-label-danger\">trade-in</span>\n              </div>\n              <figure class=\"tm-media-box-wrap\">\n                <img src=\"assets/images/products/6/6-medium.jpg\"\n                  alt=\"Apple MacBook Air 13&quot; MQD32LL/A 128GB (Silver)\" />\n              </figure>\n            </a>\n          </div>\n        </div>\n        <div class=\"tm-product-card-body\">\n          <div class=\"tm-product-card-info\">\n            <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n            <h3 class=\"tm-product-card-title\">\n              <a class=\"uk-link-heading\" href=\"product\">Apple MacBook Air 13&quot; MQD32LL/A 128GB\n                (Silver)</a>\n            </h3>\n            <ul class=\"uk-list uk-text-small tm-product-card-properties\">\n              <li>\n                <span class=\"uk-text-muted\">Diagonal display: </span>\n                <span>13.3\"</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">CPU: </span>\n                <span>Intel®&nbsp;Core™ i5</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">RAM: </span>\n                <span>8&nbsp;GB</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">Video Card: </span>\n                <span>Intel® HD Graphics 6000</span>\n              </li>\n            </ul>\n          </div>\n          <div class=\"tm-product-card-shop\">\n            <div class=\"tm-product-card-prices\">\n              <div class=\"tm-product-card-price\">$849.00</div>\n            </div>\n            <div class=\"tm-product-card-add\">\n              <div class=\"uk-text-meta tm-product-card-actions\">\n                <a class=\"tm-product-card-action js-add-to js-add-to-favorites\" title=\"Add to favorites\">\n                  <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                  <span class=\"tm-product-card-action-text\">Add to favorites</span>\n                </a>\n                <a class=\"tm-product-card-action js-add-to js-add-to-compare tm-action-button-active js-added-to\"\n                  title=\"Add to compare\">\n                  <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                  <span class=\"tm-product-card-action-text\">Add to compare</span>\n                </a>\n              </div>\n              <button class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                <span class=\"tm-product-card-add-button-icon\" uk-icon=\"cart\"></span>\n                <span class=\"tm-product-card-add-button-text\">add to cart</span>\n              </button>\n            </div>\n          </div>\n        </div>\n      </article>\n      <article class=\"tm-product-card\">\n        <div class=\"tm-product-card-media\">\n          <div class=\"tm-ratio tm-ratio-4-3\">\n            <a class=\"tm-media-box\" href=\"product\">\n              <figure class=\"tm-media-box-wrap\">\n                <img src=\"assets/images/products/7/7-medium.jpg\" alt=\"Dell Inspiron 5378-2063 (Gray)\" />\n              </figure>\n            </a>\n          </div>\n        </div>\n        <div class=\"tm-product-card-body\">\n          <div class=\"tm-product-card-info\">\n            <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n            <h3 class=\"tm-product-card-title\">\n              <a class=\"uk-link-heading\" href=\"product\">Dell Inspiron 5378-2063 (Gray)</a>\n            </h3>\n            <ul class=\"uk-list uk-text-small tm-product-card-properties\">\n              <li>\n                <span class=\"uk-text-muted\">Diagonal display: </span>\n                <span>13.3\"</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">CPU: </span>\n                <span>Intel®&nbsp;Core™ i3-7100U</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">RAM: </span>\n                <span>4&nbsp;GB</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">HDD Capacity: </span>\n                <span>1&nbsp;TB</span>\n              </li>\n            </ul>\n          </div>\n          <div class=\"tm-product-card-shop\">\n            <div class=\"tm-product-card-prices\">\n              <del class=\"uk-text-meta\">$599.00</del>\n              <div class=\"tm-product-card-price\">$579.00</div>\n            </div>\n            <div class=\"tm-product-card-add\">\n              <div class=\"uk-text-meta tm-product-card-actions\">\n                <a class=\"tm-product-card-action js-add-to js-add-to-favorites\" title=\"Add to favorites\">\n                  <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                  <span class=\"tm-product-card-action-text\">Add to favorites</span>\n                </a>\n                <a class=\"tm-product-card-action js-add-to js-add-to-compare\" title=\"Add to compare\">\n                  <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                  <span class=\"tm-product-card-action-text\">Add to compare</span>\n                </a>\n              </div>\n              <button class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                <span class=\"tm-product-card-add-button-icon\" uk-icon=\"cart\"></span>\n                <span class=\"tm-product-card-add-button-text\">add to cart</span>\n              </button>\n            </div>\n          </div>\n        </div>\n      </article>\n      <article class=\"tm-product-card\">\n        <div class=\"tm-product-card-media\">\n          <div class=\"tm-ratio tm-ratio-4-3\">\n            <a class=\"tm-media-box\" href=\"product\">\n              <div class=\"tm-product-card-labels\">\n                <span class=\"uk-label uk-label-success\">new</span>\n              </div>\n              <figure class=\"tm-media-box-wrap\">\n                <img src=\"assets/images/products/8/8-medium.jpg\" alt=\"Lenovo Yoga 720-13IKB 80X60059RK (Silver)\" />\n              </figure>\n            </a>\n          </div>\n        </div>\n        <div class=\"tm-product-card-body\">\n          <div class=\"tm-product-card-info\">\n            <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n            <h3 class=\"tm-product-card-title\">\n              <a class=\"uk-link-heading\" href=\"product\">Lenovo Yoga 720-13IKB 80X60059RK\n                (Silver)</a>\n            </h3>\n            <ul class=\"uk-list uk-text-small tm-product-card-properties\">\n              <li>\n                <span class=\"uk-text-muted\">Diagonal display: </span>\n                <span>13.3\"</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">CPU: </span>\n                <span>Intel®&nbsp;Core™ i5-7200U</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">RAM: </span>\n                <span>8&nbsp;GB</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">Video Card: </span>\n                <span>Intel® HD Graphics 620</span>\n              </li>\n            </ul>\n          </div>\n          <div class=\"tm-product-card-shop\">\n            <div class=\"tm-product-card-prices\">\n              <div class=\"tm-product-card-price\">$1099.00</div>\n            </div>\n            <div class=\"tm-product-card-add\">\n              <div class=\"uk-text-meta tm-product-card-actions\">\n                <a class=\"tm-product-card-action js-add-to js-add-to-favorites\" title=\"Add to favorites\">\n                  <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                  <span class=\"tm-product-card-action-text\">Add to favorites</span>\n                </a>\n                <a class=\"tm-product-card-action js-add-to js-add-to-compare\" title=\"Add to compare\">\n                  <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                  <span class=\"tm-product-card-action-text\">Add to compare</span>\n                </a>\n              </div>\n              <button class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                <span class=\"tm-product-card-add-button-icon\" uk-icon=\"cart\"></span>\n                <span class=\"tm-product-card-add-button-text\">add to cart</span>\n              </button>\n            </div>\n          </div>\n        </div>\n      </article>\n      <article class=\"tm-product-card\">\n        <div class=\"tm-product-card-media\">\n          <div class=\"tm-ratio tm-ratio-4-3\">\n            <a class=\"tm-media-box\" href=\"product\">\n              <figure class=\"tm-media-box-wrap\">\n                <span class=\"uk-text-muted\" uk-icon=\"icon: image; ratio: 3;\"></span>\n              </figure>\n            </a>\n          </div>\n        </div>\n        <div class=\"tm-product-card-body\">\n          <div class=\"tm-product-card-info\">\n            <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n            <h3 class=\"tm-product-card-title\">\n              <a class=\"uk-link-heading\" href=\"product\">Lenovo ThinkPad X380 Yoga 20LH000MUS\n                (Black)</a>\n            </h3>\n            <ul class=\"uk-list uk-text-small tm-product-card-properties\">\n              <li>\n                <span class=\"uk-text-muted\">Diagonal display: </span>\n                <span>13.3\"</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">CPU: </span>\n                <span>Intel®&nbsp;Core™ i7 8550U</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">RAM: </span>\n                <span>4&nbsp;GB</span>\n              </li>\n              <li>\n                <span class=\"uk-text-muted\">Video Card: </span>\n                <span>Intel® UHD Graphics 620</span>\n              </li>\n            </ul>\n          </div>\n          <div class=\"tm-product-card-shop\">\n            <div class=\"tm-product-card-prices\">\n              <div class=\"uk-text-muted\">Product not available</div>\n            </div>\n            <div class=\"tm-product-card-add\">\n              <div class=\"uk-text-meta tm-product-card-actions\">\n                <a class=\"tm-product-card-action js-add-to js-add-to-favorites\" title=\"Add to favorites\">\n                  <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                  <span class=\"tm-product-card-action-text\">Add to favorites</span>\n                </a>\n                <a class=\"tm-product-card-action js-add-to js-add-to-compare\" title=\"Add to compare\">\n                  <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                  <span class=\"tm-product-card-action-text\">Add to compare</span>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </article>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/product/product-heading/product-heading.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/product/product-heading/product-heading.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-text-center\">\n    <ul class=\"uk-breadcrumb uk-flex-center uk-margin-remove\">\n      <li>\n        <a href=\"index\">Home</a>\n      </li>\n      <li>\n        <a href=\"catalog\">Catalog</a>\n      </li>\n      <li>\n        <a href=\"category\">Laptops &amp; Tablets</a>\n      </li>\n      <li>\n        <a href=\"subcategory\">Laptops</a>\n      </li>\n      <li>\n        <span>Apple MacBook Pro 15&quot; Touch Bar MPTU2LL/A 256GB (Silver)</span>\n      </li>\n    </ul>\n    <h1 class=\"uk-margin-small-top uk-margin-remove-bottom\">Apple MacBook Pro 15&quot; Touch Bar MPTU2LL/A 256GB\n      (Silver)</h1>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/product/product-image/product-image.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/product/product-image/product-image.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"uk-grid-collapse uk-child-width-1-1\" uk-slideshow=\"finite: true; ratio: 4:3;\" uk-grid>\n    <div>\n      <ul class=\"uk-slideshow-items\" uk-lightbox>\n        <li>\n          <a class=\"uk-card-body tm-media-box tm-media-box-zoom\" href=\"assets/images/products/1/1-large.jpg\">\n            <figure class=\"tm-media-box-wrap\">\n              <img src=\"assets/images/products/1/1-large.jpg\"\n                alt=\"Apple MacBook Pro 15&quot; Touch Bar MPTU2LL/A 256GB (Silver)\">\n            </figure>\n          </a>\n        </li>\n        <li>\n          <a class=\"uk-card-body tm-media-box tm-media-box-zoom\" href=\"assets/images/products/1/1-add-1-large.jpg\">\n            <figure class=\"tm-media-box-wrap\">\n              <img src=\"assets/images/products/1/1-add-1-large.jpg\"\n                alt=\"Apple MacBook Pro 15&quot; Touch Bar MPTU2LL/A 256GB (Silver)\">\n            </figure>\n          </a>\n        </li>\n        <li>\n          <a class=\"uk-card-body tm-media-box tm-media-box-zoom\" href=\"assets/images/products/1/1-add-2-large.jpg\">\n            <figure class=\"tm-media-box-wrap\">\n              <img src=\"assets/images/products/1/1-add-2-large.jpg\"\n                alt=\"Apple MacBook Pro 15&quot; Touch Bar MPTU2LL/A 256GB (Silver)\">\n            </figure>\n          </a>\n        </li>\n        <li>\n          <a class=\"uk-card-body tm-media-box tm-media-box-zoom\" href=\"assets/images/products/1/1-add-3-large.jpg\">\n            <figure class=\"tm-media-box-wrap\">\n              <img src=\"assets/images/products/1/1-add-3-large.jpg\"\n                alt=\"Apple MacBook Pro 15&quot; Touch Bar MPTU2LL/A 256GB (Silver)\">\n            </figure>\n          </a>\n        </li>\n        <li>\n          <a class=\"uk-card-body tm-media-box tm-media-box-zoom\" href=\"assets/images/products/1/1-add-4-large.jpg\">\n            <figure class=\"tm-media-box-wrap\">\n              <img src=\"assets/images/products/1/1-add-4-large.jpg\"\n                alt=\"Apple MacBook Pro 15&quot; Touch Bar MPTU2LL/A 256GB (Silver)\">\n            </figure>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div>\n      <div class=\"uk-card-body uk-flex uk-flex-center\">\n        <div class=\"uk-width-1-2 uk-visible@s\">\n          <div uk-slider=\"finite: true\">\n            <div class=\"uk-position-relative\">\n              <div class=\"uk-slider-container\">\n                <ul class=\"tm-slider-items uk-slider-items uk-child-width-1-4 uk-grid uk-grid-small\">\n                  <li uk-slideshow-item=\"0\">\n                    <div class=\"tm-ratio tm-ratio-1-1\">\n                      <a class=\"tm-media-box tm-media-box-frame\">\n                        <figure class=\"tm-media-box-wrap\">\n                          <img src=\"assets/images/products/1/1-small.jpg\"\n                            alt=\"Apple MacBook Pro 15&quot; Touch Bar MPTU2LL/A 256GB (Silver)\">\n                        </figure>\n                      </a>\n                    </div>\n                  </li>\n                  <li uk-slideshow-item=\"1\">\n                    <div class=\"tm-ratio tm-ratio-1-1\">\n                      <a class=\"tm-media-box tm-media-box-frame\" href=\"#\">\n                        <figure class=\"tm-media-box-wrap\">\n                          <img src=\"assets/images/products/1/1-add-1-small.jpg\"\n                            alt=\"Apple MacBook Pro 15&quot; Touch Bar MPTU2LL/A 256GB (Silver)\">\n                        </figure>\n                      </a>\n                    </div>\n                  </li>\n                  <li uk-slideshow-item=\"2\">\n                    <div class=\"tm-ratio tm-ratio-1-1\">\n                      <a class=\"tm-media-box tm-media-box-frame\" href=\"#\">\n                        <figure class=\"tm-media-box-wrap\">\n                          <img src=\"assets/images/products/1/1-add-2-small.jpg\"\n                            alt=\"Apple MacBook Pro 15&quot; Touch Bar MPTU2LL/A 256GB (Silver)\">\n                        </figure>\n                      </a>\n                    </div>\n                  </li>\n                  <li uk-slideshow-item=\"3\">\n                    <div class=\"tm-ratio tm-ratio-1-1\">\n                      <a class=\"tm-media-box tm-media-box-frame\" href=\"#\">\n                        <figure class=\"tm-media-box-wrap\">\n                          <img src=\"assets/images/products/1/1-add-3-small.jpg\"\n                            alt=\"Apple MacBook Pro 15&quot; Touch Bar MPTU2LL/A 256GB (Silver)\">\n                        </figure>\n                      </a>\n                    </div>\n                  </li>\n                  <li uk-slideshow-item=\"4\">\n                    <div class=\"tm-ratio tm-ratio-1-1\">\n                      <a class=\"tm-media-box tm-media-box-frame\" href=\"#\">\n                        <figure class=\"tm-media-box-wrap\">\n                          <img src=\"assets/images/products/1/1-add-4-small.jpg\"\n                            alt=\"Apple MacBook Pro 15&quot; Touch Bar MPTU2LL/A 256GB (Silver)\">\n                        </figure>\n                      </a>\n                    </div>\n                  </li>\n                </ul>\n                <div>\n                  <a class=\"uk-position-center-left-out uk-position-small\" href=\"#\" uk-slider-item=\"previous\"\n                    uk-slidenav-previous></a>\n                  <a class=\"uk-position-center-right-out uk-position-small\" href=\"#\" uk-slider-item=\"next\"\n                    uk-slidenav-next></a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <ul class=\"uk-slideshow-nav uk-dotnav uk-hidden@s\"></ul>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/product/product-info/product-info.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/product/product-info/product-info.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-card-body\">\n  <div>\n    <a href=\"#\" title=\"Apple\">\n      <img src=\"assets/images/brands/apple.svg\" alt=\"Apple\" style=\"height: 40px;\">\n    </a>\n  </div>\n  <div class=\"uk-margin\">\n    <div class=\"uk-grid-small\" uk-grid>\n      <div class=\"uk-flex uk-flex-middle\">\n        <ul class=\"uk-iconnav uk-margin-xsmall-bottom tm-rating\">\n          <li>\n            <span class=\"uk-text-warning\" uk-icon=\"star\"></span>\n          </li>\n          <li>\n            <span class=\"uk-text-warning\" uk-icon=\"star\"></span>\n          </li>\n          <li>\n            <span class=\"uk-text-warning\" uk-icon=\"star\"></span>\n          </li>\n          <li>\n            <span class=\"uk-text-warning\" uk-icon=\"star\"></span>\n          </li>\n          <li>\n            <span class=\"uk-text-warning\" uk-icon=\"star\"></span>\n          </li>\n        </ul>\n        <div class=\"uk-margin-xsmall-left\">\n          <a class=\"uk-text-meta js-scroll-to-description\" href=\"#description\"\n            onclick=\"UIkit.switcher('.js-product-switcher').show(3);\">(2)</a>\n        </div>\n      </div>\n      <div>\n        <span class=\"uk-label uk-label-warning uk-margin-xsmall-right\">top selling</span>\n        <span class=\"uk-label uk-label-danger uk-margin-xsmall-right\">trade-in</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"uk-margin\">\n    <div class=\"uk-grid-medium\" uk-grid>\n      <div>\n        <div class=\"uk-text-small uk-margin-xsmall-bottom\">Color</div>\n        <ul class=\"uk-subnav uk-subnav-pill tm-variations\" uk-switcher>\n          <li>\n            <a class=\"tm-variation-color\" uk-tooltip=\"Space Grey\">\n              <div style=\"background-color: #aaaeb1\"></div>\n            </a>\n          </li>\n          <li>\n            <a class=\"tm-variation-color\" uk-tooltip=\"Silver\">\n              <div style=\"background-color: #dddfde\"></div>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div>\n        <div class=\"uk-text-small uk-margin-xsmall-bottom\">SSD Storage</div>\n        <ul class=\"uk-subnav uk-subnav-pill tm-variations\" uk-switcher>\n          <li>\n            <a>256 GB</a>\n          </li>\n          <li>\n            <a>512 GB</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"uk-margin\">\n    <div class=\"uk-padding-small uk-background-primary-lighten uk-border-rounded\">\n      <div class=\"uk-grid-small uk-child-width-1-1\" uk-grid>\n        <div>\n          <del class=\"uk-text-meta\">$1899.00</del>\n          <div class=\"tm-product-price\">$1599.00</div>\n        </div>\n        <div>\n          <div class=\"uk-grid-small\" uk-grid>\n            <div>\n              <a onclick=\"increment(-1, 'product-1')\" uk-icon=\"icon: minus; ratio: .75\"></a>\n              <input class=\"uk-input tm-quantity-input\" id=\"product-1\" type=\"text\" maxlength=\"3\" value=\"1\" />\n              <a onclick=\"increment(+1, 'product-1')\" uk-icon=\"icon: plus; ratio: .75\"></a>\n            </div>\n            <div>\n              <button class=\"uk-button uk-button-primary tm-product-add-button tm-shine js-add-to-cart\">add\n                to cart</button>\n            </div>\n            <div class=\"uk-width-auto uk-width-expand@s uk-flex uk-flex-middle uk-text-meta\">\n              <a class=\"uk-margin-small-right js-add-to js-add-to-favorites tm-action-button-active js-added-to\"\n                uk-tooltip=\"Add to favorites\">\n                <span uk-icon=\"heart\"></span>\n              </a>\n              <a class=\"js-add-to js-add-to-compare tm-action-button-active js-added-to\" uk-tooltip=\"Add to compare\">\n                <span uk-icon=\"copy\"></span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"uk-margin\">\n    <div class=\"uk-padding-small uk-background-muted uk-border-rounded\">\n      <div class=\"uk-grid-small uk-child-width-1-1 uk-text-small\" uk-grid>\n        <div>\n          <div class=\"uk-grid-collapse\" uk-grid>\n            <span class=\"uk-margin-xsmall-right\" uk-icon=\"cart\"></span>\n            <div>\n              <div class=\"uk-text-bolder\">Delivery</div>\n              <div class=\"uk-text-xsmall uk-text-muted\">In stock, free, tomorrow</div>\n            </div>\n          </div>\n        </div>\n        <div>\n          <div class=\"uk-grid-collapse\" uk-grid>\n            <span class=\"uk-margin-xsmall-right\" uk-icon=\"location\"></span>\n            <div>\n              <div class=\"uk-text-bolder\">Pick up from store</div>\n              <div class=\"uk-text-xsmall uk-text-muted\">In stock, free, tomorrow</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"uk-margin\">\n    <ul class=\"uk-list uk-text-small uk-margin-remove\">\n      <li>\n        <span class=\"uk-text-muted\">Diagonal display: </span>\n        <span>15.4\"</span>\n      </li>\n      <li>\n        <span class=\"uk-text-muted\">CPU: </span>\n        <span>Intel®&nbsp;Core™ i7</span>\n      </li>\n      <li>\n        <span class=\"uk-text-muted\">RAM: </span>\n        <span>16&nbsp;GB</span>\n      </li>\n      <li>\n        <span class=\"uk-text-muted\">Video Card: </span>\n        <span>AMD Radeon Pro 555</span>\n      </li>\n    </ul>\n    <div class=\"uk-margin-small-top\">\n      <a class=\"uk-link-heading js-scroll-to-description\" href=\"#description\"\n        onclick=\"UIkit.switcher('.js-product-switcher').show(1);\">\n        <span class=\"tm-pseudo\">Detailed specifications</span>\n        <span class=\"uk-margin-xsmall-left\" uk-icon=\"icon: chevron-down; ratio: .75;\"></span>\n      </a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/product/product-newreview/product-newreview.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/product/product-newreview/product-newreview.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"review\" uk-modal>\n  <div class=\"uk-modal-dialog uk-modal-body\">\n    <button class=\"uk-modal-close-outside\" type=\"button\" uk-close></button>\n    <h2 class=\"uk-modal-title uk-text-center\">Review</h2>\n    <form class=\"uk-form-stacked\">\n      <div class=\"uk-grid-small uk-child-width-1-1\" uk-grid>\n        <div>\n          <label>\n            <div class=\"uk-form-label uk-form-label-required\">Name</div>\n            <input class=\"uk-input\" type=\"text\" required>\n          </label>\n        </div>\n        <div>\n          <label>\n            <div class=\"uk-form-label uk-form-label-required\">Email</div>\n            <input class=\"uk-input\" type=\"email\" required>\n          </label>\n        </div>\n        <div>\n          <div class=\"uk-form-label\">Rating</div>\n          <ul class=\"uk-iconnav tm-rating\">\n            <li>\n              <a uk-icon=\"star\"></a>\n            </li>\n            <li>\n              <a uk-icon=\"star\"></a>\n            </li>\n            <li>\n              <a uk-icon=\"star\"></a>\n            </li>\n            <li>\n              <a uk-icon=\"star\"></a>\n            </li>\n            <li>\n              <a uk-icon=\"star\"></a>\n            </li>\n          </ul>\n        </div>\n        <div>\n          <label>\n            <div class=\"uk-form-label uk-form-label-required\">Review</div>\n            <textarea class=\"uk-textarea\" rows=\"5\" required></textarea>\n          </label>\n        </div>\n        <div class=\"uk-text-center\">\n          <button class=\"uk-button uk-button-primary\">Send</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/product/product-overview/product-overview.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/product/product-overview/product-overview.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <article class=\"uk-article\">\n    <div class=\"uk-article-body\">\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod nisl nunc,\n        a dictum magna laoreet eget. Vestibulum ante ipsum primis in faucibus orci luctus et\n        ultrices posuere cubilia Curae.</p>\n      <div class=\"tm-wrapper uk-text-center\">\n        <figure>\n          <a href=\"assets/images/articles/macbook-photo.jpg\">\n            <img src=\"assets/images/articles/macbook-photo.jpg\" alt=\"MacBook Pro\">\n          </a>\n          <figcaption>MacBook Pro</figcaption>\n        </figure>\n      </div>\n      <p>Sed sit amet ante eget nunc dictum auctor sagittis in libero. Aliquam ultricies tincidunt\n        nisi, a vestibulum nisi tempor vitae. Praesent fermentum sem semper fermentum ultrices.\n        Duis eleifend vel sapien dignissim auctor. Vestibulum at commodo leo. In vitae eros ut\n        sapien egestas venenatis non sit amet elit. In gravida vitae ante a rutrum.</p>\n      <h2>Touch Bar</h2>\n      <p>Vivamus ornare tortor elit, sed rutrum felis iaculis in. Nunc ut molestie neque. Aenean\n        vitae elementum arcu, at rutrum ligula. Pellentesque fringilla dictum viverra. Vestibulum\n        eu ipsum nec risus pharetra iaculis. Donec quis nulla orci. Suspendisse eget dictum augue,\n        et lobortis justo. Suspendisse velit dui, sollicitudin quis velit nec, tincidunt consequat\n        arcu.</p>\n      <h2>Retina Display</h2>\n      <p>Pellentesque dictum imperdiet rutrum. Vestibulum egestas quam eget maximus rutrum. Etiam\n        blandit a dolor laoreet vulputate. Nulla ullamcorper ipsum et libero finibus, vitae\n        vestibulum odio feugiat.</p>\n      <figure class=\"uk-text-center\">\n        <a href=\"assets/images/articles/macbook-promo-4.jpg\">\n          <img src=\"assets/images/articles/macbook-promo-4.jpg\" alt=\"MacBook Pro\">\n        </a>\n      </figure>\n      <h2>Force Touch Trackpad</h2>\n      <p>Vivamus ornare tortor elit, sed rutrum felis iaculis in. Nunc ut molestie neque. Aenean\n        vitae elementum arcu, at rutrum ligula. Pellentesque fringilla dictum viverra. Vestibulum\n        eu ipsum nec risus pharetra iaculis. Donec quis nulla orci. Suspendisse eget dictum augue,\n        et lobortis justo. Suspendisse velit dui, sollicitudin quis velit nec, tincidunt consequat\n        arcu.</p>\n      <div class=\"tm-wrapper\">\n        <figure class=\"tm-ratio tm-ratio-16-9\">\n          <iframe src=\"https://www.youtube.com/embed/WVPRkcczXCY\" frameborder=\"0\" allow=\"autoplay; encrypted-media\"\n            allowfullscreen></iframe>\n        </figure>\n      </div>\n      <p>Ut arcu lacus, tempus bibendum purus sed, iaculis sollicitudin sapien. Donec quis\n        imperdiet arcu. Ut sagittis ipsum diam, nec tempor ex fermentum a. Nam ac vehicula erat.\n        Curabitur id congue risus, vel iaculis enim. Donec tristique lacinia velit eu fringilla.\n        Mauris lectus enim, aliquet eu dolor sed, porta vehicula lacus. Etiam luctus egestas\n        scelerisque. Sed sit amet metus ante. Cras pulvinar sollicitudin nisl nec egestas.\n        Maecenas vitae velit ut urna vestibulum venenatis ut vel ex. Quisque sit amet mattis ante.\n        Duis blandit nisl non commodo rutrum. Nulla in velit ut arcu efficitur laoreet ut eu\n        mauris. Duis condimentum vulputate consequat. Vestibulum aliquet suscipit purus.</p>\n      <figure uk-slideshow>\n        <div class=\"uk-position-relative uk-visible-toggle uk-light\">\n          <ul class=\"uk-slideshow-items\">\n            <li>\n              <img src=\"assets/images/articles/macbook-promo-1.jpg\" alt=\"MacBook Pro\" uk-cover>\n            </li>\n            <li>\n              <img src=\"assets/images/articles/macbook-promo-2.jpg\" alt=\"MacBook Pro\" uk-cover>\n            </li>\n          </ul>\n          <a class=\"uk-position-center-left uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-previous\n            uk-slideshow-item=\"previous\"></a>\n          <a class=\"uk-position-center-right uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-next\n            uk-slideshow-item=\"next\"></a>\n        </div>\n        <ul class=\"uk-slideshow-nav uk-dotnav uk-flex-center uk-margin\"></ul>\n      </figure>\n      <p>Mauris dignissim non nulla quis sollicitudin. Maecenas quis orci dui. Suspendisse\n        pharetra facilisis metus, at venenatis nisl convallis et. Curabitur vulputate eget nisl\n        sed dignissim. Sed eget metus ut orci volutpat gravida.</p>\n      <blockquote class=\"twitter-tweet\" data-lang=\"en\">\n        <p lang=\"en\" dir=\"ltr\">Mophie&apos;s latest battery pack is powerful enough to charge your\n          15-inch MacBook Pro<a href=\"https://t.co/jN4RzcxOyG\">https://t.co/jN4RzcxOyG</a>\n          <a href=\"https://t.co/5oJBKZRVBx\">pic.twitter.com/5oJBKZRVBx</a>\n        </p>&mdash; The Verge (@verge)<a\n          href=\"https://twitter.com/verge/status/948539601265872896?ref_src=twsrc%5Etfw\">January\n          3, 2018</a>\n      </blockquote>\n      <script src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\" async></script>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem urna, accumsan nec\n        velit et, convallis tincidunt enim. Proin sollicitudin, metus at interdum tempus, velit mi\n        posuere nisl, nec viverra ligula lorem sit amet felis. Class aptent taciti sociosqu ad\n        litora torquent per conubia nostra, per inceptos himenaeos.</p>\n      <table class=\"uk-table uk-table-large uk-table-middle uk-table-divider uk-table-justify uk-table-responsive\">\n        <thead>\n          <tr>\n            <th></th>\n            <th class=\"uk-width-1-4 uk-text-center\">MacBook Pro 13\"</th>\n            <th class=\"uk-width-1-4 uk-text-center\">MacBook Pro 13\" with Touch Bar</th>\n            <th class=\"uk-width-1-4 uk-text-center\">MacBook Pro 15\" with Touch Bar</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <th>Dimensions</th>\n            <td>0.59 × 11.97 × 8.36&nbsp;inches</td>\n            <td>0.59 × 11.97 × 8.36&nbsp;inches</td>\n            <td>0.61 × 13.75 × 9.48&nbsp;inches</td>\n          </tr>\n          <tr>\n            <th>Weight</th>\n            <td>3.02&nbsp;pounds</td>\n            <td>3.02&nbsp;pounds</td>\n            <td>4.02&nbsp;pounds</td>\n          </tr>\n          <tr>\n            <th>Display</th>\n            <td>13.3\" 2560×1600,<br>60Hz Retina Display</td>\n            <td>13.3\" 2560×1600,<br>60Hz Retina Display</td>\n            <td>15.4\" 2880×1800,<br>60Hz Retina Display</td>\n          </tr>\n          <tr>\n            <th>Inputs</th>\n            <td>2 × USB-C Ports,<br>1 × 3.5mm Headphone Jack</td>\n            <td>4 × USB-C Ports,<br>1 × 3.5mm Headphone Jack</td>\n            <td>4 × USB-C Ports,<br>1 × 3.5mm Headphone Jack</td>\n          </tr>\n          <tr>\n            <th>Battery Life</th>\n            <td>Approximately 10&nbsp;hours</td>\n            <td>Approximately 10&nbsp;hours</td>\n            <td>Approximately 10&nbsp;hours</td>\n          </tr>\n        </tbody>\n      </table>\n      <p>Sed at diam aliquet, fringilla turpis ac, consequat ante. Duis id maximus purus. Cras\n        rutrum erat non nibh accumsan, vitae maximus sapien elementum. Maecenas tellus libero,\n        vulputate vitae mi eu, volutpat ornare felis. Nulla malesuada nunc urna, quis rutrum massa\n        consequat id. Pellentesque elit diam, dignissim a lorem eu, tincidunt mollis erat.</p>\n      <div class=\"tm-wrapper\">\n        <figure class=\"uk-text-center\">\n          <a href=\"assets/images/articles/macbook-promo-3.jpg\">\n            <img src=\"assets/images/articles/macbook-promo-3.jpg\" alt=\"MacBook Pro\">\n          </a>\n          <figcaption>13-inch and 15-inch</figcaption>\n        </figure>\n      </div>\n      <p>Sed at diam aliquet, fringilla turpis ac, consequat ante. Duis id maximus purus. Cras\n        rutrum erat non nibh accumsan, vitae maximus sapien elementum. Maecenas tellus libero,\n        vulputate vitae mi eu, volutpat ornare felis. Nulla malesuada nunc urna, quis rutrum massa\n        consequat id. Pellentesque elit diam, dignissim a lorem eu, tincidunt mollis erat.</p>\n      <blockquote cite=\"#\">\n        <p class=\"uk-margin-small-bottom\">You can converge a toaster and refrigerator, but these\n          things are probably not going to be pleasing to the user.</p>\n        <footer>Tim Cook</footer>\n      </blockquote>\n    </div>\n  </article>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/product/product-qna/product-qna.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/product/product-qna/product-qna.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n    <ul class=\"uk-list-divider uk-list-large\" uk-accordion=\"multiple: true\">\n      <li>\n        <a class=\"uk-accordion-title\" href=\"#\">Lorem ipsum dolor sit amet, consectetur adipiscing\n          elit?</a>\n        <div class=\"uk-accordion-content\">Vivamus imperdiet venenatis est. Phasellus vitae mauris\n          imperdiet, condimentum eros vel, ullamcorper turpis. Maecenas sed libero quis orci egestas\n          vehicula fermentum id diam.</div>\n      </li>\n      <li>\n        <a class=\"uk-accordion-title\" href=\"#\">Nullam massa sem, mollis ut luctus at, tincidunt a\n          lorem?</a>\n        <div class=\"uk-accordion-content\">Aliquam sed dictum elit, quis consequat metus. Proin in\n          mauris finibus urna lacinia laoreet sed id orci.</div>\n      </li>\n      <li>\n        <a class=\"uk-accordion-title\" href=\"#\">Aliquam pretium diam et ullamcorper malesuada?</a>\n        <div class=\"uk-accordion-content\">Praesent feugiat lectus faucibus tellus congue pharetra.\n          In viverra vehicula pellentesque. Etiam consectetur ultricies magna at bibendum.</div>\n      </li>\n      <li>\n        <a class=\"uk-accordion-title\" href=\"#\">Nulla fringilla sollicitudin mauris eu volutpat?</a>\n        <div class=\"uk-accordion-content\">Mauris quis neque nec lectus aliquet malesuada. Nunc\n          ullamcorper purus id gravida aliquam. Integer eget blandit urna.</div>\n      </li>\n      <li>\n        <a class=\"uk-accordion-title\" href=\"#\">Nam luctus velit ante, id pulvinar nisl gravida\n          eget?</a>\n        <div class=\"uk-accordion-content\">Vestibulum gravida nisi tempor malesuada iaculis.\n          Phasellus finibus, nisl quis pellentesque scelerisque, erat erat mollis massa, eu semper\n          diam eros id risus. Cras vitae nisi porta.</div>\n      </li>\n    </ul>\n  </section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/product/product-relateditems/product-relateditems.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/product/product-relateditems/product-relateditems.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n    <div uk-slider=\"finite: true\">\n      <div class=\"uk-grid-small uk-flex-middle uk-margin-bottom\" uk-grid>\n        <h2 class=\"uk-width-expand uk-text-center uk-text-left@s\">Related Products</h2>\n        <div class=\"uk-visible@s\">\n          <a class=\"tm-slidenav\" href=\"#\" uk-slider-item=\"previous\" uk-slidenav-previous></a>\n          <a class=\"tm-slidenav\" href=\"#\" uk-slider-item=\"next\" uk-slidenav-next></a>\n        </div>\n      </div>\n      <div>\n        <div class=\"uk-card uk-card-default uk-card-small tm-ignore-container\">\n          <div class=\"uk-position-relative\">\n            <div class=\"uk-slider-container\">\n              <div\n                class=\"uk-slider-items uk-grid-collapse uk-child-width-1-3 uk-child-width-1-4@m tm-products-grid\">\n                <article class=\"tm-product-card\">\n                  <div class=\"tm-product-card-media\">\n                    <div class=\"tm-ratio tm-ratio-4-3\">\n                      <a class=\"tm-media-box\" href=\"product\">\n                        <div class=\"tm-product-card-labels\">\n                          <span class=\"uk-label uk-label-warning\">top selling</span>\n                          <span class=\"uk-label uk-label-danger\">trade-in</span>\n                        </div>\n                        <figure class=\"tm-media-box-wrap\">\n                          <img src=\"assets/images/products/1/1-medium.jpg\"\n                            alt=\"Apple MacBook Pro 15&quot; Touch Bar MPTU2LL/A 256GB (Silver)\" />\n                        </figure>\n                      </a>\n                    </div>\n                  </div>\n                  <div class=\"tm-product-card-body\">\n                    <div class=\"tm-product-card-info\">\n                      <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n                      <h3 class=\"tm-product-card-title\">\n                        <a class=\"uk-link-heading\" href=\"product\">Apple MacBook Pro 15&quot; Touch Bar MPTU2LL/A\n                          256GB (Silver)</a>\n                      </h3>\n                      <ul class=\"uk-list uk-text-small tm-product-card-properties\">\n                        <li>\n                          <span class=\"uk-text-muted\">Diagonal display: </span>\n                          <span>15.4\"</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">CPU: </span>\n                          <span>Intel®&nbsp;Core™ i7</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">RAM: </span>\n                          <span>16&nbsp;GB</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">Video Card: </span>\n                          <span>AMD Radeon Pro 555</span>\n                        </li>\n                      </ul>\n                    </div>\n                    <div class=\"tm-product-card-shop\">\n                      <div class=\"tm-product-card-prices\">\n                        <del class=\"uk-text-meta\">$1899.00</del>\n                        <div class=\"tm-product-card-price\">$1599.00</div>\n                      </div>\n                      <div class=\"tm-product-card-add\">\n                        <div class=\"uk-text-meta tm-product-card-actions\">\n                          <a class=\"tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to\"\n                            title=\"Add to favorites\">\n                            <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                            <span class=\"tm-product-card-action-text\">Add to favorites</span>\n                          </a>\n                          <a class=\"tm-product-card-action js-add-to js-add-to-compare tm-action-button-active js-added-to\"\n                            title=\"Add to compare\">\n                            <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                            <span class=\"tm-product-card-action-text\">Add to compare</span>\n                          </a>\n                        </div>\n                        <button\n                          class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                          <span class=\"tm-product-card-add-button-icon\" uk-icon=\"cart\"></span>\n                          <span class=\"tm-product-card-add-button-text\">add to cart</span>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </article>\n                <article class=\"tm-product-card\">\n                  <div class=\"tm-product-card-media\">\n                    <div class=\"tm-ratio tm-ratio-4-3\">\n                      <a class=\"tm-media-box\" href=\"product\">\n                        <div class=\"tm-product-card-labels\">\n                          <span class=\"uk-label uk-label-success\">new</span>\n                          <span class=\"uk-label uk-label-danger\">trade-in</span>\n                        </div>\n                        <figure class=\"tm-media-box-wrap\">\n                          <img src=\"assets/images/products/2/2-medium.jpg\"\n                            alt=\"Apple MacBook 12&quot; MNYN2LL/A 512GB (Rose Gold)\" />\n                        </figure>\n                      </a>\n                    </div>\n                  </div>\n                  <div class=\"tm-product-card-body\">\n                    <div class=\"tm-product-card-info\">\n                      <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n                      <h3 class=\"tm-product-card-title\">\n                        <a class=\"uk-link-heading\" href=\"product\">Apple MacBook 12&quot; MNYN2LL/A 512GB (Rose\n                          Gold)</a>\n                      </h3>\n                      <ul class=\"uk-list uk-text-small tm-product-card-properties\">\n                        <li>\n                          <span class=\"uk-text-muted\">Diagonal display: </span>\n                          <span>12\"</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">CPU: </span>\n                          <span>Intel®&nbsp;Core™ i5</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">RAM: </span>\n                          <span>8&nbsp;GB</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">Video Card: </span>\n                          <span>Intel® HD Graphics 615</span>\n                        </li>\n                      </ul>\n                    </div>\n                    <div class=\"tm-product-card-shop\">\n                      <div class=\"tm-product-card-prices\">\n                        <div class=\"tm-product-card-price\">$1549.00</div>\n                      </div>\n                      <div class=\"tm-product-card-add\">\n                        <div class=\"uk-text-meta tm-product-card-actions\">\n                          <a class=\"tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to\"\n                            title=\"Add to favorites\">\n                            <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                            <span class=\"tm-product-card-action-text\">Add to favorites</span>\n                          </a>\n                          <a class=\"tm-product-card-action js-add-to js-add-to-compare tm-action-button-active js-added-to\"\n                            title=\"Add to compare\">\n                            <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                            <span class=\"tm-product-card-action-text\">Add to compare</span>\n                          </a>\n                        </div>\n                        <button\n                          class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                          <span class=\"tm-product-card-add-button-icon\" uk-icon=\"cart\"></span>\n                          <span class=\"tm-product-card-add-button-text\">add to cart</span>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </article>\n                <article class=\"tm-product-card\">\n                  <div class=\"tm-product-card-media\">\n                    <div class=\"tm-ratio tm-ratio-4-3\">\n                      <a class=\"tm-media-box\" href=\"product\">\n                        <figure class=\"tm-media-box-wrap\">\n                          <img src=\"assets/images/products/3/3-medium.jpg\"\n                            alt=\"Lenovo IdeaPad YOGA 920-13IKB 80Y7001RRK (Copper)\" />\n                        </figure>\n                      </a>\n                    </div>\n                  </div>\n                  <div class=\"tm-product-card-body\">\n                    <div class=\"tm-product-card-info\">\n                      <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n                      <h3 class=\"tm-product-card-title\">\n                        <a class=\"uk-link-heading\" href=\"product\">Lenovo IdeaPad YOGA 920-13IKB 80Y7001RRK\n                          (Copper)</a>\n                      </h3>\n                      <ul class=\"uk-list uk-text-small tm-product-card-properties\">\n                        <li>\n                          <span class=\"uk-text-muted\">Diagonal display: </span>\n                          <span>13.9\"</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">CPU: </span>\n                          <span>Intel®&nbsp;Core™ i7 8550U</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">RAM: </span>\n                          <span>16&nbsp;GB</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">Video Card: </span>\n                          <span>Intel® HD Graphics 620</span>\n                        </li>\n                      </ul>\n                    </div>\n                    <div class=\"tm-product-card-shop\">\n                      <div class=\"tm-product-card-prices\">\n                        <div class=\"tm-product-card-price\">$1199.00</div>\n                      </div>\n                      <div class=\"tm-product-card-add\">\n                        <div class=\"uk-text-meta tm-product-card-actions\">\n                          <a class=\"tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to\"\n                            title=\"Add to favorites\">\n                            <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                            <span class=\"tm-product-card-action-text\">Add to favorites</span>\n                          </a>\n                          <a class=\"tm-product-card-action js-add-to js-add-to-compare\" title=\"Add to compare\">\n                            <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                            <span class=\"tm-product-card-action-text\">Add to compare</span>\n                          </a>\n                        </div>\n                        <button\n                          class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                          <span class=\"tm-product-card-add-button-icon\" uk-icon=\"cart\"></span>\n                          <span class=\"tm-product-card-add-button-text\">add to cart</span>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </article>\n                <article class=\"tm-product-card\">\n                  <div class=\"tm-product-card-media\">\n                    <div class=\"tm-ratio tm-ratio-4-3\">\n                      <a class=\"tm-media-box\" href=\"product\">\n                        <div class=\"tm-product-card-labels\">\n                          <span class=\"uk-label uk-label-warning\">top selling</span>\n                        </div>\n                        <figure class=\"tm-media-box-wrap\">\n                          <img src=\"assets/images/products/4/4-medium.jpg\"\n                            alt=\"ASUS Zenbook UX330UA-FC020T (Rose Gold)\" />\n                        </figure>\n                      </a>\n                    </div>\n                  </div>\n                  <div class=\"tm-product-card-body\">\n                    <div class=\"tm-product-card-info\">\n                      <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n                      <h3 class=\"tm-product-card-title\">\n                        <a class=\"uk-link-heading\" href=\"product\">ASUS Zenbook UX330UA-FC020T (Rose Gold)</a>\n                      </h3>\n                      <ul class=\"uk-list uk-text-small tm-product-card-properties\">\n                        <li>\n                          <span class=\"uk-text-muted\">Diagonal display: </span>\n                          <span>13.3\"</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">CPU: </span>\n                          <span>Intel®&nbsp;Core™ i7-6500U</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">RAM: </span>\n                          <span>8&nbsp;GB</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">Video Card: </span>\n                          <span>Intel® HD Graphics 520</span>\n                        </li>\n                      </ul>\n                    </div>\n                    <div class=\"tm-product-card-shop\">\n                      <div class=\"tm-product-card-prices\">\n                        <div class=\"tm-product-card-price\">$749.00</div>\n                      </div>\n                      <div class=\"tm-product-card-add\">\n                        <div class=\"uk-text-meta tm-product-card-actions\">\n                          <a class=\"tm-product-card-action js-add-to js-add-to-favorites\"\n                            title=\"Add to favorites\">\n                            <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                            <span class=\"tm-product-card-action-text\">Add to favorites</span>\n                          </a>\n                          <a class=\"tm-product-card-action js-add-to js-add-to-compare\" title=\"Add to compare\">\n                            <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                            <span class=\"tm-product-card-action-text\">Add to compare</span>\n                          </a>\n                        </div>\n                        <button\n                          class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                          <span class=\"tm-product-card-add-button-icon\" uk-icon=\"cart\"></span>\n                          <span class=\"tm-product-card-add-button-text\">add to cart</span>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </article>\n                <article class=\"tm-product-card\">\n                  <div class=\"tm-product-card-media\">\n                    <div class=\"tm-ratio tm-ratio-4-3\">\n                      <a class=\"tm-media-box\" href=\"product\">\n                        <figure class=\"tm-media-box-wrap\">\n                          <img src=\"assets/images/products/5/5-medium.jpg\"\n                            alt=\"Dell XPS 15 9560-8968 (Silver)\" />\n                        </figure>\n                      </a>\n                    </div>\n                  </div>\n                  <div class=\"tm-product-card-body\">\n                    <div class=\"tm-product-card-info\">\n                      <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n                      <h3 class=\"tm-product-card-title\">\n                        <a class=\"uk-link-heading\" href=\"product\">Dell XPS 15 9560-8968 (Silver)</a>\n                      </h3>\n                      <ul class=\"uk-list uk-text-small tm-product-card-properties\">\n                        <li>\n                          <span class=\"uk-text-muted\">Diagonal display: </span>\n                          <span>15.6\"</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">CPU: </span>\n                          <span>Intel®&nbsp;Core™ i7 7700HQ</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">RAM: </span>\n                          <span>16&nbsp;GB</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">Video Card: </span>\n                          <span>NVIDIA GeForce GTX 960M</span>\n                        </li>\n                      </ul>\n                    </div>\n                    <div class=\"tm-product-card-shop\">\n                      <div class=\"tm-product-card-prices\">\n                        <del class=\"uk-text-meta\">$999.00</del>\n                        <div class=\"tm-product-card-price\">$949.00</div>\n                      </div>\n                      <div class=\"tm-product-card-add\">\n                        <div class=\"uk-text-meta tm-product-card-actions\">\n                          <a class=\"tm-product-card-action js-add-to js-add-to-favorites\"\n                            title=\"Add to favorites\">\n                            <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                            <span class=\"tm-product-card-action-text\">Add to favorites</span>\n                          </a>\n                          <a class=\"tm-product-card-action js-add-to js-add-to-compare\" title=\"Add to compare\">\n                            <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                            <span class=\"tm-product-card-action-text\">Add to compare</span>\n                          </a>\n                        </div>\n                        <button\n                          class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                          <span class=\"tm-product-card-add-button-icon\" uk-icon=\"cart\"></span>\n                          <span class=\"tm-product-card-add-button-text\">add to cart</span>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </article>\n                <article class=\"tm-product-card\">\n                  <div class=\"tm-product-card-media\">\n                    <div class=\"tm-ratio tm-ratio-4-3\">\n                      <a class=\"tm-media-box\" href=\"product\">\n                        <div class=\"tm-product-card-labels\">\n                          <span class=\"uk-label uk-label-danger\">trade-in</span>\n                        </div>\n                        <figure class=\"tm-media-box-wrap\">\n                          <img src=\"assets/images/products/6/6-medium.jpg\"\n                            alt=\"Apple MacBook Air 13&quot; MQD32LL/A 128GB (Silver)\" />\n                        </figure>\n                      </a>\n                    </div>\n                  </div>\n                  <div class=\"tm-product-card-body\">\n                    <div class=\"tm-product-card-info\">\n                      <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n                      <h3 class=\"tm-product-card-title\">\n                        <a class=\"uk-link-heading\" href=\"product\">Apple MacBook Air 13&quot; MQD32LL/A 128GB\n                          (Silver)</a>\n                      </h3>\n                      <ul class=\"uk-list uk-text-small tm-product-card-properties\">\n                        <li>\n                          <span class=\"uk-text-muted\">Diagonal display: </span>\n                          <span>13.3\"</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">CPU: </span>\n                          <span>Intel®&nbsp;Core™ i5</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">RAM: </span>\n                          <span>8&nbsp;GB</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">Video Card: </span>\n                          <span>Intel® HD Graphics 6000</span>\n                        </li>\n                      </ul>\n                    </div>\n                    <div class=\"tm-product-card-shop\">\n                      <div class=\"tm-product-card-prices\">\n                        <div class=\"tm-product-card-price\">$849.00</div>\n                      </div>\n                      <div class=\"tm-product-card-add\">\n                        <div class=\"uk-text-meta tm-product-card-actions\">\n                          <a class=\"tm-product-card-action js-add-to js-add-to-favorites\"\n                            title=\"Add to favorites\">\n                            <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                            <span class=\"tm-product-card-action-text\">Add to favorites</span>\n                          </a>\n                          <a class=\"tm-product-card-action js-add-to js-add-to-compare tm-action-button-active js-added-to\"\n                            title=\"Add to compare\">\n                            <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                            <span class=\"tm-product-card-action-text\">Add to compare</span>\n                          </a>\n                        </div>\n                        <button\n                          class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                          <span class=\"tm-product-card-add-button-icon\" uk-icon=\"cart\"></span>\n                          <span class=\"tm-product-card-add-button-text\">add to cart</span>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </article>\n                <article class=\"tm-product-card\">\n                  <div class=\"tm-product-card-media\">\n                    <div class=\"tm-ratio tm-ratio-4-3\">\n                      <a class=\"tm-media-box\" href=\"product\">\n                        <figure class=\"tm-media-box-wrap\">\n                          <img src=\"assets/images/products/7/7-medium.jpg\"\n                            alt=\"Dell Inspiron 5378-2063 (Gray)\" />\n                        </figure>\n                      </a>\n                    </div>\n                  </div>\n                  <div class=\"tm-product-card-body\">\n                    <div class=\"tm-product-card-info\">\n                      <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n                      <h3 class=\"tm-product-card-title\">\n                        <a class=\"uk-link-heading\" href=\"product\">Dell Inspiron 5378-2063 (Gray)</a>\n                      </h3>\n                      <ul class=\"uk-list uk-text-small tm-product-card-properties\">\n                        <li>\n                          <span class=\"uk-text-muted\">Diagonal display: </span>\n                          <span>13.3\"</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">CPU: </span>\n                          <span>Intel®&nbsp;Core™ i3-7100U</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">RAM: </span>\n                          <span>4&nbsp;GB</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">HDD Capacity: </span>\n                          <span>1&nbsp;TB</span>\n                        </li>\n                      </ul>\n                    </div>\n                    <div class=\"tm-product-card-shop\">\n                      <div class=\"tm-product-card-prices\">\n                        <del class=\"uk-text-meta\">$599.00</del>\n                        <div class=\"tm-product-card-price\">$579.00</div>\n                      </div>\n                      <div class=\"tm-product-card-add\">\n                        <div class=\"uk-text-meta tm-product-card-actions\">\n                          <a class=\"tm-product-card-action js-add-to js-add-to-favorites\"\n                            title=\"Add to favorites\">\n                            <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                            <span class=\"tm-product-card-action-text\">Add to favorites</span>\n                          </a>\n                          <a class=\"tm-product-card-action js-add-to js-add-to-compare\" title=\"Add to compare\">\n                            <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                            <span class=\"tm-product-card-action-text\">Add to compare</span>\n                          </a>\n                        </div>\n                        <button\n                          class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                          <span class=\"tm-product-card-add-button-icon\" uk-icon=\"cart\"></span>\n                          <span class=\"tm-product-card-add-button-text\">add to cart</span>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </article>\n                <article class=\"tm-product-card\">\n                  <div class=\"tm-product-card-media\">\n                    <div class=\"tm-ratio tm-ratio-4-3\">\n                      <a class=\"tm-media-box\" href=\"product\">\n                        <div class=\"tm-product-card-labels\">\n                          <span class=\"uk-label uk-label-success\">new</span>\n                        </div>\n                        <figure class=\"tm-media-box-wrap\">\n                          <img src=\"assets/images/products/8/8-medium.jpg\"\n                            alt=\"Lenovo Yoga 720-13IKB 80X60059RK (Silver)\" />\n                        </figure>\n                      </a>\n                    </div>\n                  </div>\n                  <div class=\"tm-product-card-body\">\n                    <div class=\"tm-product-card-info\">\n                      <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n                      <h3 class=\"tm-product-card-title\">\n                        <a class=\"uk-link-heading\" href=\"product\">Lenovo Yoga 720-13IKB 80X60059RK (Silver)</a>\n                      </h3>\n                      <ul class=\"uk-list uk-text-small tm-product-card-properties\">\n                        <li>\n                          <span class=\"uk-text-muted\">Diagonal display: </span>\n                          <span>13.3\"</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">CPU: </span>\n                          <span>Intel®&nbsp;Core™ i5-7200U</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">RAM: </span>\n                          <span>8&nbsp;GB</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">Video Card: </span>\n                          <span>Intel® HD Graphics 620</span>\n                        </li>\n                      </ul>\n                    </div>\n                    <div class=\"tm-product-card-shop\">\n                      <div class=\"tm-product-card-prices\">\n                        <div class=\"tm-product-card-price\">$1099.00</div>\n                      </div>\n                      <div class=\"tm-product-card-add\">\n                        <div class=\"uk-text-meta tm-product-card-actions\">\n                          <a class=\"tm-product-card-action js-add-to js-add-to-favorites\"\n                            title=\"Add to favorites\">\n                            <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                            <span class=\"tm-product-card-action-text\">Add to favorites</span>\n                          </a>\n                          <a class=\"tm-product-card-action js-add-to js-add-to-compare\" title=\"Add to compare\">\n                            <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                            <span class=\"tm-product-card-action-text\">Add to compare</span>\n                          </a>\n                        </div>\n                        <button\n                          class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                          <span class=\"tm-product-card-add-button-icon\" uk-icon=\"cart\"></span>\n                          <span class=\"tm-product-card-add-button-text\">add to cart</span>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </article>\n                <article class=\"tm-product-card\">\n                  <div class=\"tm-product-card-media\">\n                    <div class=\"tm-ratio tm-ratio-4-3\">\n                      <a class=\"tm-media-box\" href=\"product\">\n                        <figure class=\"tm-media-box-wrap\">\n                          <span class=\"uk-text-muted\" uk-icon=\"icon: image; ratio: 3;\"></span>\n                        </figure>\n                      </a>\n                    </div>\n                  </div>\n                  <div class=\"tm-product-card-body\">\n                    <div class=\"tm-product-card-info\">\n                      <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n                      <h3 class=\"tm-product-card-title\">\n                        <a class=\"uk-link-heading\" href=\"product\">Lenovo ThinkPad X380 Yoga 20LH000MUS\n                          (Black)</a>\n                      </h3>\n                      <ul class=\"uk-list uk-text-small tm-product-card-properties\">\n                        <li>\n                          <span class=\"uk-text-muted\">Diagonal display: </span>\n                          <span>13.3\"</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">CPU: </span>\n                          <span>Intel®&nbsp;Core™ i7 8550U</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">RAM: </span>\n                          <span>4&nbsp;GB</span>\n                        </li>\n                        <li>\n                          <span class=\"uk-text-muted\">Video Card: </span>\n                          <span>Intel® UHD Graphics 620</span>\n                        </li>\n                      </ul>\n                    </div>\n                    <div class=\"tm-product-card-shop\">\n                      <div class=\"tm-product-card-prices\">\n                        <div class=\"uk-text-muted\">Product not available</div>\n                      </div>\n                      <div class=\"tm-product-card-add\">\n                        <div class=\"uk-text-meta tm-product-card-actions\">\n                          <a class=\"tm-product-card-action js-add-to js-add-to-favorites\"\n                            title=\"Add to favorites\">\n                            <span uk-icon=\"icon: heart; ratio: .75;\"></span>\n                            <span class=\"tm-product-card-action-text\">Add to favorites</span>\n                          </a>\n                          <a class=\"tm-product-card-action js-add-to js-add-to-compare\" title=\"Add to compare\">\n                            <span uk-icon=\"icon: copy; ratio: .75;\"></span>\n                            <span class=\"tm-product-card-action-text\">Add to compare</span>\n                          </a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </article>\n              </div>\n            </div>\n          </div>\n        </div>\n        <ul class=\"uk-slider-nav uk-dotnav uk-flex-center uk-margin-top uk-hidden@s\"></ul>\n      </div>\n    </div>\n  </section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/product/product-reviews/product-reviews.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/product/product-reviews/product-reviews.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"uk-grid-small uk-grid-divider\" uk-grid>\n    <div class=\"uk-width-1-1 uk-width-1-5@s uk-text-center tm-reviews-column\">\n      <div class=\"uk-text-meta uk-text-uppercase\">average rating</div>\n      <div class=\"uk-heading-primary\">5.0</div>\n      <div class=\"uk-flex uk-flex-center\">\n        <ul class=\"uk-iconnav tm-rating\">\n          <li>\n            <span class=\"uk-text-warning\" uk-icon=\"star\"></span>\n          </li>\n          <li>\n            <span class=\"uk-text-warning\" uk-icon=\"star\"></span>\n          </li>\n          <li>\n            <span class=\"uk-text-warning\" uk-icon=\"star\"></span>\n          </li>\n          <li>\n            <span class=\"uk-text-warning\" uk-icon=\"star\"></span>\n          </li>\n          <li>\n            <span class=\"uk-text-warning\" uk-icon=\"star\"></span>\n          </li>\n        </ul>\n      </div>\n      <div class=\"uk-margin-small-top uk-text-meta\">based on 2 reviews</div>\n      <button class=\"uk-button uk-button-primary uk-margin-top uk-width-1-1\" uk-toggle=\"target: #review\">write a\n        review</button>\n    </div>\n    <div class=\"uk-width-1-1 uk-width-expand@s\">\n      <div class=\"uk-grid-small uk-grid-divider uk-child-width-1-1\" uk-grid>\n        <article>\n          <section class=\"uk-grid-small uk-child-width-1-1\" uk-grid>\n            <header>\n              <div class=\"uk-h4 uk-margin-remove\">Thomas Bruns</div>\n              <time class=\"uk-text-meta\">May 21, 2018</time>\n            </header>\n            <div>\n              <ul class=\"uk-iconnav uk-margin-bottom tm-rating\">\n                <li>\n                  <span class=\"uk-text-warning\" uk-icon=\"star\"></span>\n                </li>\n                <li>\n                  <span class=\"uk-text-warning\" uk-icon=\"star\"></span>\n                </li>\n                <li>\n                  <span class=\"uk-text-warning\" uk-icon=\"star\"></span>\n                </li>\n                <li>\n                  <span class=\"uk-text-warning\" uk-icon=\"star\"></span>\n                </li>\n                <li>\n                  <span class=\"uk-text-warning\" uk-icon=\"star\"></span>\n                </li>\n              </ul>\n              <div>\n                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod\n                  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At\n                  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,\n                  no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>\n              </div>\n              <div class=\"uk-grid-small uk-flex-middle uk-margin-top\" uk-grid>\n                <div class=\"uk-text-meta\">Was this review helpful to you?</div>\n                <div>\n                  <button class=\"uk-button uk-button-default uk-button-small\">Yes<span\n                      class=\"uk-margin-xsmall-left uk-text-muted\">14</span>\n                  </button>\n                  <button class=\"uk-button uk-button-default uk-button-small uk-margin-small-left\">No<span\n                      class=\"uk-margin-xsmall-left uk-text-muted\">2</span>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </section>\n        </article>\n        <article>\n          <section class=\"uk-grid-small uk-child-width-1-1\" uk-grid>\n            <header>\n              <div class=\"uk-h4 uk-margin-remove\">George Clanton</div>\n              <time class=\"uk-text-meta\">May 24, 2018</time>\n            </header>\n            <div>\n              <ul class=\"uk-iconnav uk-margin-bottom tm-rating\">\n                <li>\n                  <span class=\"uk-text-warning\" uk-icon=\"star\"></span>\n                </li>\n                <li>\n                  <span class=\"uk-text-warning\" uk-icon=\"star\"></span>\n                </li>\n                <li>\n                  <span class=\"uk-text-warning\" uk-icon=\"star\"></span>\n                </li>\n                <li>\n                  <span class=\"uk-text-warning\" uk-icon=\"star\"></span>\n                </li>\n                <li>\n                  <span class=\"uk-text-warning\" uk-icon=\"star\"></span>\n                </li>\n              </ul>\n              <div>\n                <p>Nunc interdum odio non erat commodo lacinia. Aliquam nec tincidunt lorem. Nunc\n                  quis scelerisque nulla. Nam nulla ante, luctus non dignissim a, luctus quis sem.\n                  Curabitur consectetur porttitor leo. Donec molestie nisl vitae lorem porttitor\n                  vehicula. Etiam feugiat a magna ac dapibus. Donec vitae sollicitudin lectus.</p>\n                <p>Sed mollis ex tincidunt posuere blandit. Mauris sed tellus dolor. Suspendisse\n                  nibh mi, dignissim et molestie id, dictum in arcu. Duis sodales scelerisque\n                  quam, quis lobortis felis egestas eu. Sed nibh nulla, aliquet ac leo vel, rutrum\n                  dignissim metus. Sed non rhoncus ex. Curabitur accumsan porta lacus non viverra.\n                  Etiam feugiat sapien ut purus luctus, eu porttitor neque volutpat.</p>\n              </div>\n              <div class=\"uk-grid-small uk-flex-middle uk-margin-top\" uk-grid>\n                <div class=\"uk-text-meta\">Was this review helpful to you?</div>\n                <div>\n                  <button class=\"uk-button uk-button-default uk-button-small\">Yes<span\n                      class=\"uk-margin-xsmall-left uk-text-muted\">5</span>\n                  </button>\n                  <button class=\"uk-button uk-button-default uk-button-small uk-margin-small-left\">No<span\n                      class=\"uk-margin-xsmall-left uk-text-muted\">0</span>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </section>\n        </article>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/product/product-specifications/product-specifications.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/product/product-specifications/product-specifications.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <h2>Performance</h2>\n  <table class=\"uk-table uk-table-divider uk-table-justify uk-table-responsive\">\n    <tr>\n      <th class=\"uk-width-medium\">Processor</th>\n      <td class=\"uk-table-expand\">Intel&nbsp;Core i7&nbsp;Quad-Core</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Base Clock Speed</th>\n      <td class=\"uk-table-expand\">2.8&nbsp;GHz</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Maximum Boost Speed</th>\n      <td class=\"uk-table-expand\">3.8&nbsp;GHz</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Total Installed Memory</th>\n      <td class=\"uk-table-expand\">16&nbsp;GB</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Memory Type</th>\n      <td class=\"uk-table-expand\">LPDDR3&nbsp;SDRAM</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Memory Speed</th>\n      <td class=\"uk-table-expand\">2133&nbsp;MHz</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Onboard Memory</th>\n      <td class=\"uk-table-expand\">16&nbsp;GB</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Available Memory Slots</th>\n      <td class=\"uk-table-expand\">—</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Graphics Type</th>\n      <td class=\"uk-table-expand\">Hybrid</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">GPU</th>\n      <td class=\"uk-table-expand\">AMD Radeon&nbsp;Pro 555 with 2&nbsp;GB&nbsp;GDDR5 VRAM,<br>Intel\n        HD Graphics&nbsp;630</td>\n    </tr>\n  </table>\n  <h2>Display</h2>\n  <table class=\"uk-table uk-table-divider uk-table-justify uk-table-responsive\">\n    <tr>\n      <th class=\"uk-width-medium\">Panel Type</th>\n      <td class=\"uk-table-expand\">IPS</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Size</th>\n      <td class=\"uk-table-expand\">15.4\"</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Aspect Ratio</th>\n      <td class=\"uk-table-expand\">16:10</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Native Resolution</th>\n      <td class=\"uk-table-expand\">2880×1800</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Touchscreen</th>\n      <td class=\"uk-table-expand\">—</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Finish</th>\n      <td class=\"uk-table-expand\">Glossy</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Brightness</th>\n      <td class=\"uk-table-expand\">500&nbsp;cd/m<sup>2</sup>\n      </td>\n    </tr>\n  </table>\n  <h2>Drives</h2>\n  <table class=\"uk-table uk-table-divider uk-table-justify uk-table-responsive\">\n    <tr>\n      <th class=\"uk-width-medium\">Available Slots</th>\n      <td class=\"uk-table-expand\">—</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Total Capacity</th>\n      <td class=\"uk-table-expand\">256&nbsp;GB</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Solid State Storage</th>\n      <td class=\"uk-table-expand\">1 × 256&nbsp;GB&nbsp;Integrated PCIe</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Optical Drive</th>\n      <td class=\"uk-table-expand\">—</td>\n    </tr>\n  </table>\n  <h2>Input/ Output Connectors</h2>\n  <table class=\"uk-table uk-table-divider uk-table-justify uk-table-responsive\">\n    <tr>\n      <th class=\"uk-width-medium\">Ports</th>\n      <td class=\"uk-table-expand\">4 × Thunderbolt 3&nbsp;via USB Type-C</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Display</th>\n      <td class=\"uk-table-expand\">4 × DisplayPort&nbsp;via Type-C</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Audio</th>\n      <td class=\"uk-table-expand\">1 × 1/8\" (3.5&nbsp;mm) Headphone Output,<br>2 × Integrated\n        Speaker,<br>3 × Integrated Microphone</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Expansion Slots</th>\n      <td class=\"uk-table-expand\">—</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Media Card Slots</th>\n      <td class=\"uk-table-expand\">—</td>\n    </tr>\n  </table>\n  <h2>Communications</h2>\n  <table class=\"uk-table uk-table-divider uk-table-justify uk-table-responsive\">\n    <tr>\n      <th class=\"uk-width-medium\">Network</th>\n      <td class=\"uk-table-expand\">—</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Modem</th>\n      <td class=\"uk-table-expand\">—</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Wi-Fi</th>\n      <td class=\"uk-table-expand\">802.11ac; Dual-Band</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Bluetooth</th>\n      <td class=\"uk-table-expand\">Bluetooth 4.2</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Mobile Broadband</th>\n      <td class=\"uk-table-expand\">—</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">GPS</th>\n      <td class=\"uk-table-expand\">Not Specified by Manufacturer</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">NFC</th>\n      <td class=\"uk-table-expand\">Not Specified by Manufacturer</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Webcam</th>\n      <td class=\"uk-table-expand\">User-Facing: 720p Video</td>\n    </tr>\n  </table>\n  <h2>Battery</h2>\n  <table class=\"uk-table uk-table-divider uk-table-justify uk-table-responsive\">\n    <tr>\n      <th class=\"uk-width-medium\">Battery Chemistry</th>\n      <td class=\"uk-table-expand\">Lithium-Ion Polymer</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Watt Hours / Type</th>\n      <td class=\"uk-table-expand\">76&nbsp;Wh&nbsp;Non-Removable</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Maximum Runtime</th>\n      <td class=\"uk-table-expand\">10&nbsp;Hours</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Power Requirements</th>\n      <td class=\"uk-table-expand\">100-240&nbsp;VAC, 50-60&nbsp;Hz</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Power Supply</th>\n      <td class=\"uk-table-expand\">1 × 87&nbsp;W</td>\n    </tr>\n  </table>\n  <h2>General</h2>\n  <table class=\"uk-table uk-table-divider uk-table-justify uk-table-responsive\">\n    <tr>\n      <th class=\"uk-width-medium\">Operating System</th>\n      <td class=\"uk-table-expand\">macOS High Sierra</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Security</th>\n      <td class=\"uk-table-expand\">Not specified</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Keyboard</th>\n      <td class=\"uk-table-expand\">Keys: 64,<br>Type: Standard Notebook Keyboard,<br>Features:\n        Backlight</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Pointing Device</th>\n      <td class=\"uk-table-expand\">Force Touch Trackpad</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Dimensions (W × H × D)</th>\n      <td class=\"uk-table-expand\">13.8 × 0.6 × 9.5\"&nbsp;/&nbsp;35.1 × 1.5 × 24.1&nbsp;cm</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Weight</th>\n      <td class=\"uk-table-expand\">4.02&nbsp;lb&nbsp;/&nbsp;1.82&nbsp;kg</td>\n    </tr>\n  </table>\n  <h2>Packaging Info</h2>\n  <table class=\"uk-table uk-table-divider uk-table-justify uk-table-responsive\">\n    <tr>\n      <th class=\"uk-width-medium\">Package Weight</th>\n      <td class=\"uk-table-expand\">7.55&nbsp;lb</td>\n    </tr>\n    <tr>\n      <th class=\"uk-width-medium\">Box Dimensions (L × W × H)</th>\n      <td class=\"uk-table-expand\">16.2 × 11.6 × 3.7\"</td>\n    </tr>\n  </table>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/slideshow-items/slideshow-items.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/slideshow-items/slideshow-items.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"uk-position-relative uk-visible-toggle uk-light\" uk-slideshow=\"min-height: 300; max-height: 600;\">\n\t<ul class=\"uk-slideshow-items\">\n\t\t<li style=\"background-color: #0b0a12\">\n\t\t\t<a href=\"#\">\n\t\t\t\t<figure class=\"uk-container uk-height-1-1\">\n\t\t\t\t\t<img src=\"assets/images/promo/macbook-new.jpg\" alt=\"New Macbook\" width=\"1200\" height=\"600\" uk-cover>\n\t\t\t\t\t</figure>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li style=\"background-color: #ce071e\">\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<figure class=\"uk-container uk-height-1-1\">\n\t\t\t\t\t\t<img src=\"assets/images/promo/iphone.jpg\" alt=\"iPhone\" width=\"1200\" height=\"600\" uk-cover>\n\t\t\t\t\t\t</figure>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li style=\"background-color: #1f2024\">\n\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t<figure class=\"uk-container uk-height-1-1\">\n\t\t\t\t\t\t\t<img src=\"assets/images/promo/ipad.jpg\" alt=\"iPad\" width=\"1200\" height=\"600\" uk-cover>\n\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<a class=\"uk-position-center-left uk-position-small uk-hidden-hover\" href=\"#\" uk-slideshow-item=\"previous\" uk-slidenav-previous></a>\n\t\t\t\t<a class=\"uk-position-center-right uk-position-small uk-hidden-hover\" href=\"#\" uk-slideshow-item=\"next\" uk-slidenav-next></a>\n\t\t\t\t<div class=\"uk-position-bottom-center uk-position-small\">\n\t\t\t\t\t<ul class=\"uk-slideshow-nav uk-dotnav\"></ul>\n\t\t\t\t</div>\n\t\t\t</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/subcategory/subcategory-heading/subcategory-heading.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/subcategory/subcategory-heading/subcategory-heading.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-text-center\">\n    <ul class=\"uk-breadcrumb uk-flex-center uk-margin-remove\">\n      <li>\n        <a href=\"index\">Home</a>\n      </li>\n      <li>\n        <a href=\"catalog\">Catalog</a>\n      </li>\n      <li>\n        <a href=\"category\">Laptops &amp; Tablets</a>\n      </li>\n      <li>\n        <span>Laptops</span>\n      </li>\n    </ul>\n    <h1 class=\"uk-margin-small-top uk-margin-remove-bottom\">Laptops</h1>\n    <div class=\"uk-text-meta uk-margin-xsmall-top\">289 items</div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/subcategory/subcategory-leftsidebar/subcategory-leftsidebar.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/subcategory/subcategory-leftsidebar/subcategory-leftsidebar.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-card uk-card-default uk-card-small uk-flex uk-flex-column uk-height-1-1\">\n  <header class=\"uk-card-header uk-flex uk-flex-middle\">\n    <div class=\"uk-grid-small uk-flex-1\" uk-grid>\n      <div class=\"uk-width-expand\">\n        <h3>Filters</h3>\n      </div>\n      <button class=\"uk-offcanvas-close\" type=\"button\" uk-close></button>\n    </div>\n  </header>\n  <div class=\"uk-margin-remove uk-flex-1 uk-overflow-auto\"\n    uk-accordion=\"multiple: true; targets: &gt; .js-accordion-section\" style=\"flex-basis: auto\">\n    <section class=\"uk-card-body uk-open js-accordion-section\">\n      <h4 class=\"uk-accordion-title uk-margin-remove\">Prices</h4>\n      <div class=\"uk-accordion-content\">\n        <div class=\"uk-grid-small uk-child-width-1-2 uk-text-small\" uk-grid>\n          <div>\n            <div class=\"uk-inline\">\n              <span class=\"uk-form-icon uk-text-xsmall\">from</span>\n              <input class=\"uk-input\" type=\"text\" placeholder=\"$59\">\n            </div>\n          </div>\n          <div>\n            <div class=\"uk-inline\">\n              <span class=\"uk-form-icon uk-text-xsmall\">to</span>\n              <input class=\"uk-input\" type=\"text\" placeholder=\"$6559\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <section class=\"uk-card-body js-accordion-section uk-open\">\n      <h4 class=\"uk-accordion-title uk-margin-remove\">Brands</h4>\n      <div class=\"uk-accordion-content\">\n        <ul class=\"uk-list tm-scrollbox\">\n          <li>\n            <input class=\"tm-checkbox\" id=\"brand-1\" name=\"brand\" value=\"1\" type=\"checkbox\">\n            <label for=\"brand-1\">\n              <span>Acer\n                <span class=\"uk-text-meta uk-text-xsmall\">177</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"brand-2\" name=\"brand\" value=\"2\" type=\"checkbox\">\n            <label for=\"brand-2\">\n              <span>Apple\n                <span class=\"uk-text-meta uk-text-xsmall\">18</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"brand-3\" name=\"brand\" value=\"3\" type=\"checkbox\">\n            <label for=\"brand-3\">\n              <span>ASUS\n                <span class=\"uk-text-meta uk-text-xsmall\">150</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"brand-4\" name=\"brand\" value=\"4\" type=\"checkbox\">\n            <label for=\"brand-4\">\n              <span>Dell\n                <span class=\"uk-text-meta uk-text-xsmall\">170</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"brand-5\" name=\"brand\" value=\"5\" type=\"checkbox\">\n            <label for=\"brand-5\">\n              <span>HP\n                <span class=\"uk-text-meta uk-text-xsmall\">498</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"brand-6\" name=\"brand\" value=\"6\" type=\"checkbox\">\n            <label for=\"brand-6\">\n              <span>MSI\n                <span class=\"uk-text-meta uk-text-xsmall\">54</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"brand-7\" name=\"brand\" value=\"7\" type=\"checkbox\">\n            <label for=\"brand-7\">\n              <span>Samsung\n                <span class=\"uk-text-meta uk-text-xsmall\">1</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"brand-8\" name=\"brand\" value=\"8\" type=\"checkbox\">\n            <label for=\"brand-8\">\n              <span>Sony\n                <span class=\"uk-text-meta uk-text-xsmall\">1</span>\n              </span>\n            </label>\n          </li>\n        </ul>\n      </div>\n    </section>\n    <section class=\"uk-card-body js-accordion-section uk-open\">\n      <h4 class=\"uk-accordion-title uk-margin-remove\">Type<span class=\"tm-help-icon\"\n          uk-icon=\"icon: question; ratio: .75;\" onclick=\"event.stopPropagation();\"></span>\n        <div class=\"uk-margin-remove\"\n          uk-drop=\"mode: click;boundary-align: true; boundary: !.uk-accordion-title; pos: bottom-justify;\">\n          <div class=\"uk-card uk-card-body uk-card-default uk-card-small uk-box-shadow-xlarge uk-text-small\">\n            A small description for this property</div>\n        </div>\n      </h4>\n      <div class=\"uk-accordion-content\">\n        <ul class=\"uk-list tm-scrollbox\">\n          <li>\n            <input class=\"tm-checkbox\" id=\"type-1\" name=\"type\" value=\"1\" type=\"checkbox\">\n            <label for=\"type-1\">\n              <span>Notebook\n                <span class=\"uk-text-meta uk-text-xsmall\">150</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"type-2\" name=\"type\" value=\"2\" type=\"checkbox\">\n            <label for=\"type-2\">\n              <span>Ultrabook\n                <span class=\"uk-text-meta uk-text-xsmall\">18</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"type-3\" name=\"type\" value=\"3\" type=\"checkbox\">\n            <label for=\"type-3\">\n              <span>Transformer\n                <span class=\"uk-text-meta uk-text-xsmall\">6</span>\n              </span>\n            </label>\n          </li>\n        </ul>\n      </div>\n    </section>\n    <section class=\"uk-card-body js-accordion-section\">\n      <h4 class=\"uk-accordion-title uk-margin-remove\">Screen Size<span class=\"tm-help-icon\"\n          uk-icon=\"icon: question; ratio: .75;\" onclick=\"event.stopPropagation();\"></span>\n        <div class=\"uk-margin-remove\"\n          uk-drop=\"mode: click;boundary-align: true; boundary: !.uk-accordion-title; pos: bottom-justify;\">\n          <div class=\"uk-card uk-card-body uk-card-default uk-card-small uk-box-shadow-xlarge uk-text-small\">\n            A small description for this property</div>\n        </div>\n      </h4>\n      <div class=\"uk-accordion-content\">\n        <ul class=\"uk-list tm-scrollbox\">\n          <li>\n            <input class=\"tm-checkbox\" id=\"screen-size-1\" name=\"screen-size\" value=\"1\" type=\"checkbox\">\n            <label for=\"screen-size-1\">\n              <span>11.6&quot; and smaller\n                <span class=\"uk-text-meta uk-text-xsmall\">45</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"screen-size-2\" name=\"screen-size\" value=\"2\" type=\"checkbox\">\n            <label for=\"screen-size-2\">\n              <span>12&quot; - 13.5&quot;\n                <span class=\"uk-text-meta uk-text-xsmall\">178</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"screen-size-3\" name=\"screen-size\" value=\"3\" type=\"checkbox\">\n            <label for=\"screen-size-3\">\n              <span>14&quot; - 14.5&quot;\n                <span class=\"uk-text-meta uk-text-xsmall\">461</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"screen-size-4\" name=\"screen-size\" value=\"4\" type=\"checkbox\">\n            <label for=\"screen-size-4\">\n              <span>15&quot; - 15.6&quot;\n                <span class=\"uk-text-meta uk-text-xsmall\">148</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"screen-size-5\" name=\"screen-size\" value=\"5\" type=\"checkbox\">\n            <label for=\"screen-size-5\">\n              <span>17&quot; - 17.3&quot;\n                <span class=\"uk-text-meta uk-text-xsmall\">73</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"screen-size-6\" name=\"screen-size\" value=\"6\" type=\"checkbox\">\n            <label for=\"screen-size-6\">\n              <span>18.4&quot; and larger\n                <span class=\"uk-text-meta uk-text-xsmall\">54</span>\n              </span>\n            </label>\n          </li>\n        </ul>\n      </div>\n    </section>\n    <section class=\"uk-card-body js-accordion-section\">\n      <h4 class=\"uk-accordion-title uk-margin-remove\">Screen Resolution<span class=\"tm-help-icon\"\n          uk-icon=\"icon: question; ratio: .75;\" onclick=\"event.stopPropagation();\"></span>\n        <div class=\"uk-margin-remove\"\n          uk-drop=\"mode: click;boundary-align: true; boundary: !.uk-accordion-title; pos: bottom-justify;\">\n          <div class=\"uk-card uk-card-body uk-card-default uk-card-small uk-box-shadow-xlarge uk-text-small\">\n            A small description for this property</div>\n        </div>\n      </h4>\n      <div class=\"uk-accordion-content\">\n        <ul class=\"uk-list tm-scrollbox\">\n          <li>\n            <input class=\"tm-checkbox\" id=\"screen-resolution-1\" name=\"screen-resolution\" value=\"1\" type=\"checkbox\">\n            <label for=\"screen-resolution-1\">\n              <span>3840×2160\n                <span class=\"uk-text-meta uk-text-xsmall\">12</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"screen-resolution-2\" name=\"screen-resolution\" value=\"2\" type=\"checkbox\">\n            <label for=\"screen-resolution-2\">\n              <span>3200×1800&quot;\n                <span class=\"uk-text-meta uk-text-xsmall\">12</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"screen-resolution-3\" name=\"screen-resolution\" value=\"3\" type=\"checkbox\">\n            <label for=\"screen-resolution-3\">\n              <span>2880×1800\n                <span class=\"uk-text-meta uk-text-xsmall\">10</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"screen-resolution-4\" name=\"screen-resolution\" value=\"4\" type=\"checkbox\">\n            <label for=\"screen-resolution-4\">\n              <span>2560×1600\n                <span class=\"uk-text-meta uk-text-xsmall\">7</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"screen-resolution-5\" name=\"screen-resolution\" value=\"5\" type=\"checkbox\">\n            <label for=\"screen-resolution-5\">\n              <span>2560×1440\n                <span class=\"uk-text-meta uk-text-xsmall\">13</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"screen-resolution-6\" name=\"screen-resolution\" value=\"6\" type=\"checkbox\">\n            <label for=\"screen-resolution-6\">\n              <span>1920×1080\n                <span class=\"uk-text-meta uk-text-xsmall\">341</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"screen-resolution-7\" name=\"screen-resolution\" value=\"7\" type=\"checkbox\">\n            <label for=\"screen-resolution-7\">\n              <span>1600×900\n                <span class=\"uk-text-meta uk-text-xsmall\">11</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"screen-resolution-8\" name=\"screen-resolution\" value=\"8\" type=\"checkbox\">\n            <label for=\"screen-resolution-8\">\n              <span>1440×900\n                <span class=\"uk-text-meta uk-text-xsmall\">13</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"screen-resolution-9\" name=\"screen-resolution\" value=\"9\" type=\"checkbox\">\n            <label for=\"screen-resolution-9\">\n              <span>1366×768\n                <span class=\"uk-text-meta uk-text-xsmall\">237</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"screen-resolution-10\" name=\"screen-resolution\" value=\"10\" type=\"checkbox\">\n            <label for=\"screen-resolution-10\">\n              <span>1024×600\n                <span class=\"uk-text-meta uk-text-xsmall\">5</span>\n              </span>\n            </label>\n          </li>\n        </ul>\n      </div>\n    </section>\n    <section class=\"uk-card-body js-accordion-section\">\n      <h4 class=\"uk-accordion-title uk-margin-remove\">CPU<span class=\"tm-help-icon\"\n          uk-icon=\"icon: question; ratio: .75;\" onclick=\"event.stopPropagation();\"></span>\n        <div class=\"uk-margin-remove\"\n          uk-drop=\"mode: click;boundary-align: true; boundary: !.uk-accordion-title; pos: bottom-justify;\">\n          <div class=\"uk-card uk-card-body uk-card-default uk-card-small uk-box-shadow-xlarge uk-text-small\">\n            A small description for this property</div>\n        </div>\n      </h4>\n      <div class=\"uk-accordion-content\">\n        <ul class=\"uk-list tm-scrollbox\">\n          <li>\n            <input class=\"tm-checkbox\" id=\"cpu-1\" name=\"cpu\" value=\"1\" type=\"checkbox\">\n            <label for=\"cpu-1\">\n              <span>AMD A-series\n                <span class=\"uk-text-meta uk-text-xsmall\">102</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"cpu-2\" name=\"cpu\" value=\"2\" type=\"checkbox\">\n            <label for=\"cpu-2\">\n              <span>AMD E-series\n                <span class=\"uk-text-meta uk-text-xsmall\">21</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"cpu-3\" name=\"cpu\" value=\"3\" type=\"checkbox\">\n            <label for=\"cpu-3\">\n              <span>AMD FX\n                <span class=\"uk-text-meta uk-text-xsmall\">1</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"cpu-4\" name=\"cpu\" value=\"4\" type=\"checkbox\">\n            <label for=\"cpu-4\">\n              <span>AMD Ryzen\n                <span class=\"uk-text-meta uk-text-xsmall\">1</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"cpu-5\" name=\"cpu\" value=\"5\" type=\"checkbox\">\n            <label for=\"cpu-5\">\n              <span>Intel Atom\n                <span class=\"uk-text-meta uk-text-xsmall\">8</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"cpu-6\" name=\"cpu\" value=\"6\" type=\"checkbox\">\n            <label for=\"cpu-6\">\n              <span>Intel Celeron\n                <span class=\"uk-text-meta uk-text-xsmall\">38</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"cpu-7\" name=\"cpu\" value=\"7\" type=\"checkbox\">\n            <label for=\"cpu-7\">\n              <span>Intel Core M\n                <span class=\"uk-text-meta uk-text-xsmall\">6</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"cpu-8\" name=\"cpu\" value=\"8\" type=\"checkbox\">\n            <label for=\"cpu-8\">\n              <span>Intel Core i3\n                <span class=\"uk-text-meta uk-text-xsmall\">143</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"cpu-9\" name=\"cpu\" value=\"9\" type=\"checkbox\">\n            <label for=\"cpu-9\">\n              <span>Intel Core i5\n                <span class=\"uk-text-meta uk-text-xsmall\">273</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"cpu-10\" name=\"cpu\" value=\"10\" type=\"checkbox\">\n            <label for=\"cpu-10\">\n              <span>Intel Core i7\n                <span class=\"uk-text-meta uk-text-xsmall\">218</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"cpu-11\" name=\"cpu\" value=\"11\" type=\"checkbox\">\n            <label for=\"cpu-11\">\n              <span>Intel Xeon\n                <span class=\"uk-text-meta uk-text-xsmall\">3</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"cpu-12\" name=\"cpu\" value=\"12\" type=\"checkbox\">\n            <label for=\"cpu-12\">\n              <span>Intel Pentium\n                <span class=\"uk-text-meta uk-text-xsmall\">86</span>\n              </span>\n            </label>\n          </li>\n        </ul>\n      </div>\n    </section>\n    <section class=\"uk-card-body js-accordion-section\">\n      <h4 class=\"uk-accordion-title uk-margin-remove\">RAM<span class=\"tm-help-icon\"\n          uk-icon=\"icon: question; ratio: .75;\" onclick=\"event.stopPropagation();\"></span>\n        <div class=\"uk-margin-remove\"\n          uk-drop=\"mode: click;boundary-align: true; boundary: !.uk-accordion-title; pos: bottom-justify;\">\n          <div class=\"uk-card uk-card-body uk-card-default uk-card-small uk-box-shadow-xlarge uk-text-small\">\n            A small description for this property</div>\n        </div>\n      </h4>\n      <div class=\"uk-accordion-content\">\n        <ul class=\"uk-list tm-scrollbox\">\n          <li>\n            <input class=\"tm-checkbox\" id=\"ram-1\" name=\"ram\" value=\"1\" type=\"checkbox\">\n            <label for=\"ram-1\">\n              <span>2 GB\n                <span class=\"uk-text-meta uk-text-xsmall\">17</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"ram-2\" name=\"ram\" value=\"2\" type=\"checkbox\">\n            <label for=\"ram-2\">\n              <span>4 GB\n                <span class=\"uk-text-meta uk-text-xsmall\">359</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"ram-3\" name=\"ram\" value=\"3\" type=\"checkbox\">\n            <label for=\"ram-3\">\n              <span>6 GB\n                <span class=\"uk-text-meta uk-text-xsmall\">81</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"ram-4\" name=\"ram\" value=\"4\" type=\"checkbox\">\n            <label for=\"ram-4\">\n              <span>8 GB\n                <span class=\"uk-text-meta uk-text-xsmall\">346</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"ram-5\" name=\"ram\" value=\"5\" type=\"checkbox\">\n            <label for=\"ram-5\">\n              <span>12 GB\n                <span class=\"uk-text-meta uk-text-xsmall\">13</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"ram-6\" name=\"ram\" value=\"6\" type=\"checkbox\">\n            <label for=\"ram-6\">\n              <span>16 GB\n                <span class=\"uk-text-meta uk-text-xsmall\">72</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"ram-7\" name=\"ram\" value=\"7\" type=\"checkbox\">\n            <label for=\"ram-7\">\n              <span>24 GB\n                <span class=\"uk-text-meta uk-text-xsmall\">1</span>\n              </span>\n            </label>\n          </li>\n          <li>\n            <input class=\"tm-checkbox\" id=\"ram-8\" name=\"ram\" value=\"8\" type=\"checkbox\">\n            <label for=\"ram-8\">\n              <span>32 GB\n                <span class=\"uk-text-meta uk-text-xsmall\">11</span>\n              </span>\n            </label>\n          </li>\n        </ul>\n      </div>\n    </section>\n    <div class=\"uk-card-body\">\n      <button class=\"uk-button uk-button-default uk-width-1-1\">\n        <span class=\"uk-margin-xsmall-right\" uk-icon=\"icon: close; ratio: .75;\"></span>Reset all\n        filters</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/subscription/subscription.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/subscription/subscription.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"uk-section uk-section-primary uk-section-small uk-light\">\n  <div class=\"uk-container\">\n    <div class=\"uk-text-center\">\n      <div class=\"uk-h2 uk-margin-remove\">Subscribe for updates</div>\n      <div>Be aware of new products and special offers.</div>\n    </div>\n    <div class=\"uk-margin\">\n      <form>\n        <div class=\"uk-grid-small uk-flex-center\" uk-grid>\n          <div class=\"uk-width-1-1 uk-width-medium@s\">\n            <div class=\"uk-inline uk-width-1-1\">\n              <span class=\"uk-form-icon\" uk-icon=\"mail\"></span>\n              <input class=\"uk-input\" type=\"email\" placeholder=\"Your email\" required>\n              </div>\n            </div>\n            <div>\n              <button class=\"uk-button uk-button-primary\">subscribe</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/trending-items/trending-items.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/containers/trending-items/trending-items.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"uk-section uk-section-small\">\n\t<div class=\"uk-container\">\n\t\t<h2 class=\"uk-text-center\">Trending Items</h2>\n\t\t<div class=\"uk-card uk-card-default tm-ignore-container\">\n\t\t\t<div class=\"uk-grid-collapse uk-child-width-1-3 uk-child-width-1-4@m tm-products-grid uk-grid\" uk-grid=\"\">\n\t\t\t\t<article class=\"tm-product-card uk-first-column\">\n\t\t\t\t\t<div class=\"tm-product-card-media\">\n\t\t\t\t\t\t<div class=\"tm-ratio tm-ratio-4-3\">\n\t\t\t\t\t\t\t<a class=\"tm-media-box\" href=\"product\">\n\t\t\t\t\t\t\t\t<div class=\"tm-product-card-labels\">\n\t\t\t\t\t\t\t\t\t<span class=\"uk-label uk-label-warning\">top selling</span>\n\t\t\t\t\t\t\t\t\t<span class=\"uk-label uk-label-danger\">trade-in</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<figure class=\"tm-media-box-wrap\">\n\t\t\t\t\t\t\t\t\t<img src=\"assets/images/products/1/1-medium.jpg\" alt=\"Apple MacBook Pro 15&quot; Touch Bar MPTU2LL/A 256GB (Silver)\">\n\t\t\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"tm-product-card-body\">\n\t\t\t\t\t\t\t<div class=\"tm-product-card-info\">\n\t\t\t\t\t\t\t\t<div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n\t\t\t\t\t\t\t\t<h3 class=\"tm-product-card-title\">\n\t\t\t\t\t\t\t\t\t<a class=\"uk-link-heading\" href=\"product\">Apple MacBook Pro 15\" Touch Bar MPTU2LL/A 256GB (Silver)</a>\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t<ul class=\"uk-list uk-text-small tm-product-card-properties\">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">Diagonal display: </span>\n\t\t\t\t\t\t\t\t\t\t<span>15.4\"</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">CPU: </span>\n\t\t\t\t\t\t\t\t\t\t<span>Intel®&nbsp;Core™ i7</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">RAM: </span>\n\t\t\t\t\t\t\t\t\t\t<span>16&nbsp;GB</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">Video Card: </span>\n\t\t\t\t\t\t\t\t\t\t<span>AMD Radeon Pro 555</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"tm-product-card-shop\">\n\t\t\t\t\t\t\t\t<div class=\"tm-product-card-prices\">\n\t\t\t\t\t\t\t\t\t<del class=\"uk-text-meta\">$1899.00</del>\n\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-price\">$1599.00</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"tm-product-card-add\">\n\t\t\t\t\t\t\t\t\t<div class=\"uk-text-meta tm-product-card-actions\">\n\t\t\t\t\t\t\t\t\t\t<a class=\"tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to\" title=\"Add to favorites\">\n\t\t\t\t\t\t\t\t\t\t\t<span uk-icon=\"icon: heart; ratio: .75;\" class=\"uk-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"15\" height=\"15\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" d=\"M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-action-text\">Add to favorites</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<a class=\"tm-product-card-action js-add-to js-add-to-compare tm-action-button-active js-added-to\" title=\"Add to compare\">\n\t\t\t\t\t\t\t\t\t\t\t<span uk-icon=\"icon: copy; ratio: .75;\" class=\"uk-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"15\" height=\"15\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"2.5\" width=\"12\" height=\"16\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<polyline fill=\"none\" stroke=\"#000\" points=\"5 0.5 17.5 0.5 17.5 17\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-action-text\">Add to compare</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<button class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-add-button-icon uk-icon\" uk-icon=\"cart\">\n\t\t\t\t\t\t\t\t\t\t\t<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t<circle cx=\"7.3\" cy=\"17.3\" r=\"1.4\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<circle cx=\"13.3\" cy=\"17.3\" r=\"1.4\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<polyline fill=\"none\" stroke=\"#000\" points=\"0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-add-button-text\">add to cart</span>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</article>\n\t\t\t\t\t<article class=\"tm-product-card\">\n\t\t\t\t\t\t<div class=\"tm-product-card-media\">\n\t\t\t\t\t\t\t<div class=\"tm-ratio tm-ratio-4-3\">\n\t\t\t\t\t\t\t\t<a class=\"tm-media-box\" href=\"product\">\n\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-labels\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"uk-label uk-label-success\">new</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"uk-label uk-label-danger\">trade-in</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<figure class=\"tm-media-box-wrap\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/products/2/2-medium.jpg\" alt=\"Apple MacBook 12&quot; MNYN2LL/A 512GB (Rose Gold)\">\n\t\t\t\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"tm-product-card-body\">\n\t\t\t\t\t\t\t\t<div class=\"tm-product-card-info\">\n\t\t\t\t\t\t\t\t\t<div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n\t\t\t\t\t\t\t\t\t<h3 class=\"tm-product-card-title\">\n\t\t\t\t\t\t\t\t\t\t<a class=\"uk-link-heading\" href=\"product\">Apple MacBook 12\" MNYN2LL/A 512GB (Rose Gold)</a>\n\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t<ul class=\"uk-list uk-text-small tm-product-card-properties\">\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">Diagonal display: </span>\n\t\t\t\t\t\t\t\t\t\t\t<span>12\"</span>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">CPU: </span>\n\t\t\t\t\t\t\t\t\t\t\t<span>Intel®&nbsp;Core™ i5</span>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">RAM: </span>\n\t\t\t\t\t\t\t\t\t\t\t<span>8&nbsp;GB</span>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">Video Card: </span>\n\t\t\t\t\t\t\t\t\t\t\t<span>Intel® HD Graphics 615</span>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"tm-product-card-shop\">\n\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-prices\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-price\">$1549.00</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-add\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"uk-text-meta tm-product-card-actions\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to\" title=\"Add to favorites\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span uk-icon=\"icon: heart; ratio: .75;\" class=\"uk-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"15\" height=\"15\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" d=\"M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-action-text\">Add to favorites</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"tm-product-card-action js-add-to js-add-to-compare tm-action-button-active js-added-to\" title=\"Add to compare\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span uk-icon=\"icon: copy; ratio: .75;\" class=\"uk-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"15\" height=\"15\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"2.5\" width=\"12\" height=\"16\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<polyline fill=\"none\" stroke=\"#000\" points=\"5 0.5 17.5 0.5 17.5 17\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-action-text\">Add to compare</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<button class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-add-button-icon uk-icon\" uk-icon=\"cart\">\n\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<circle cx=\"7.3\" cy=\"17.3\" r=\"1.4\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<circle cx=\"13.3\" cy=\"17.3\" r=\"1.4\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<polyline fill=\"none\" stroke=\"#000\" points=\"0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-add-button-text\">add to cart</span>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</article>\n\t\t\t\t\t\t<article class=\"tm-product-card\">\n\t\t\t\t\t\t\t<div class=\"tm-product-card-media\">\n\t\t\t\t\t\t\t\t<div class=\"tm-ratio tm-ratio-4-3\">\n\t\t\t\t\t\t\t\t\t<a class=\"tm-media-box\" href=\"product\">\n\t\t\t\t\t\t\t\t\t\t<figure class=\"tm-media-box-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/products/3/3-medium.jpg\" alt=\"Lenovo IdeaPad YOGA 920-13IKB 80Y7001RRK (Copper)\">\n\t\t\t\t\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"tm-product-card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-info\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"tm-product-card-title\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"uk-link-heading\" href=\"product\">Lenovo IdeaPad YOGA 920-13IKB 80Y7001RRK (Copper)</a>\n\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"uk-list uk-text-small tm-product-card-properties\">\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">Diagonal display: </span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>13.9\"</span>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">CPU: </span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Intel®&nbsp;Core™ i7 8550U</span>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">RAM: </span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>16&nbsp;GB</span>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">Video Card: </span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Intel® HD Graphics 620</span>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-shop\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-prices\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-price\">$1199.00</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-add\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-text-meta tm-product-card-actions\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to\" title=\"Add to favorites\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span uk-icon=\"icon: heart; ratio: .75;\" class=\"uk-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"15\" height=\"15\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" d=\"M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-action-text\">Add to favorites</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"tm-product-card-action js-add-to js-add-to-compare\" title=\"Add to compare\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span uk-icon=\"icon: copy; ratio: .75;\" class=\"uk-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"15\" height=\"15\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"2.5\" width=\"12\" height=\"16\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<polyline fill=\"none\" stroke=\"#000\" points=\"5 0.5 17.5 0.5 17.5 17\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-action-text\">Add to compare</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-add-button-icon uk-icon\" uk-icon=\"cart\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<circle cx=\"7.3\" cy=\"17.3\" r=\"1.4\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<circle cx=\"13.3\" cy=\"17.3\" r=\"1.4\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<polyline fill=\"none\" stroke=\"#000\" points=\"0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-add-button-text\">add to cart</span>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</article>\n\t\t\t\t\t\t\t<article class=\"tm-product-card\">\n\t\t\t\t\t\t\t\t<div class=\"tm-product-card-media\">\n\t\t\t\t\t\t\t\t\t<div class=\"tm-ratio tm-ratio-4-3\">\n\t\t\t\t\t\t\t\t\t\t<a class=\"tm-media-box\" href=\"product\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-labels\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-label uk-label-warning\">top selling</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<figure class=\"tm-media-box-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/products/4/4-medium.jpg\" alt=\"ASUS Zenbook UX330UA-FC020T (Rose Gold)\">\n\t\t\t\t\t\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-info\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"tm-product-card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"uk-link-heading\" href=\"product\">ASUS Zenbook UX330UA-FC020T (Rose Gold)</a>\n\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"uk-list uk-text-small tm-product-card-properties\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">Diagonal display: </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>13.3\"</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">CPU: </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Intel®&nbsp;Core™ i7-6500U</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">RAM: </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>8&nbsp;GB</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">Video Card: </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Intel® HD Graphics 520</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-shop\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-prices\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-price\">$749.00</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-add\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-text-meta tm-product-card-actions\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"tm-product-card-action js-add-to js-add-to-favorites\" title=\"Add to favorites\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span uk-icon=\"icon: heart; ratio: .75;\" class=\"uk-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"15\" height=\"15\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" d=\"M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-action-text\">Add to favorites</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"tm-product-card-action js-add-to js-add-to-compare\" title=\"Add to compare\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span uk-icon=\"icon: copy; ratio: .75;\" class=\"uk-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"15\" height=\"15\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"2.5\" width=\"12\" height=\"16\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<polyline fill=\"none\" stroke=\"#000\" points=\"5 0.5 17.5 0.5 17.5 17\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-action-text\">Add to compare</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-add-button-icon uk-icon\" uk-icon=\"cart\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<circle cx=\"7.3\" cy=\"17.3\" r=\"1.4\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<circle cx=\"13.3\" cy=\"17.3\" r=\"1.4\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<polyline fill=\"none\" stroke=\"#000\" points=\"0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-add-button-text\">add to cart</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</article>\n\t\t\t\t\t\t\t\t<article class=\"tm-product-card uk-grid-margin uk-first-column\">\n\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-media\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"tm-ratio tm-ratio-4-3\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"tm-media-box\" href=\"product\">\n\t\t\t\t\t\t\t\t\t\t\t\t<figure class=\"tm-media-box-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/products/5/5-medium.jpg\" alt=\"Dell XPS 15 9560-8968 (Silver)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"tm-product-card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"uk-link-heading\" href=\"product\">Dell XPS 15 9560-8968 (Silver)</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"uk-list uk-text-small tm-product-card-properties\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">Diagonal display: </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>15.6\"</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">CPU: </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Intel®&nbsp;Core™ i7 7700HQ</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">RAM: </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>16&nbsp;GB</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">Video Card: </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>NVIDIA GeForce GTX 960M</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-shop\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-prices\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<del class=\"uk-text-meta\">$999.00</del>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-price\">$949.00</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-add\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-text-meta tm-product-card-actions\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"tm-product-card-action js-add-to js-add-to-favorites\" title=\"Add to favorites\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span uk-icon=\"icon: heart; ratio: .75;\" class=\"uk-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"15\" height=\"15\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" d=\"M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-action-text\">Add to favorites</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"tm-product-card-action js-add-to js-add-to-compare\" title=\"Add to compare\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span uk-icon=\"icon: copy; ratio: .75;\" class=\"uk-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"15\" height=\"15\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"2.5\" width=\"12\" height=\"16\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<polyline fill=\"none\" stroke=\"#000\" points=\"5 0.5 17.5 0.5 17.5 17\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-action-text\">Add to compare</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-add-button-icon uk-icon\" uk-icon=\"cart\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<circle cx=\"7.3\" cy=\"17.3\" r=\"1.4\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<circle cx=\"13.3\" cy=\"17.3\" r=\"1.4\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<polyline fill=\"none\" stroke=\"#000\" points=\"0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-add-button-text\">add to cart</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</article>\n\t\t\t\t\t\t\t\t\t<article class=\"tm-product-card uk-grid-margin\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-media\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-ratio tm-ratio-4-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"tm-media-box\" href=\"product\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-labels\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-label uk-label-danger\">trade-in</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<figure class=\"tm-media-box-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/products/6/6-medium.jpg\" alt=\"Apple MacBook Air 13&quot; MQD32LL/A 128GB (Silver)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"tm-product-card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"uk-link-heading\" href=\"product\">Apple MacBook Air 13\" MQD32LL/A 128GB (Silver)</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"uk-list uk-text-small tm-product-card-properties\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">Diagonal display: </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>13.3\"</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">CPU: </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Intel®&nbsp;Core™ i5</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">RAM: </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>8&nbsp;GB</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">Video Card: </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Intel® HD Graphics 6000</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-shop\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-prices\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-price\">$849.00</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-add\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-text-meta tm-product-card-actions\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"tm-product-card-action js-add-to js-add-to-favorites\" title=\"Add to favorites\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span uk-icon=\"icon: heart; ratio: .75;\" class=\"uk-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"15\" height=\"15\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" d=\"M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-action-text\">Add to favorites</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"tm-product-card-action js-add-to js-add-to-compare tm-action-button-active js-added-to\" title=\"Add to compare\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span uk-icon=\"icon: copy; ratio: .75;\" class=\"uk-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"15\" height=\"15\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"2.5\" width=\"12\" height=\"16\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<polyline fill=\"none\" stroke=\"#000\" points=\"5 0.5 17.5 0.5 17.5 17\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-action-text\">Add to compare</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-add-button-icon uk-icon\" uk-icon=\"cart\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<circle cx=\"7.3\" cy=\"17.3\" r=\"1.4\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<circle cx=\"13.3\" cy=\"17.3\" r=\"1.4\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<polyline fill=\"none\" stroke=\"#000\" points=\"0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-add-button-text\">add to cart</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</article>\n\t\t\t\t\t\t\t\t\t\t<article class=\"tm-product-card uk-grid-margin\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-media\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-ratio tm-ratio-4-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"tm-media-box\" href=\"product\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<figure class=\"tm-media-box-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/products/7/7-medium.jpg\" alt=\"Dell Inspiron 5378-2063 (Gray)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"tm-product-card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"uk-link-heading\" href=\"product\">Dell Inspiron 5378-2063 (Gray)</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"uk-list uk-text-small tm-product-card-properties\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">Diagonal display: </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>13.3\"</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">CPU: </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Intel®&nbsp;Core™ i3-7100U</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">RAM: </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>4&nbsp;GB</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">HDD Capacity: </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>1&nbsp;TB</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-shop\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-prices\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<del class=\"uk-text-meta\">$599.00</del>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-price\">$579.00</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-add\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-text-meta tm-product-card-actions\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"tm-product-card-action js-add-to js-add-to-favorites\" title=\"Add to favorites\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span uk-icon=\"icon: heart; ratio: .75;\" class=\"uk-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"15\" height=\"15\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" d=\"M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-action-text\">Add to favorites</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"tm-product-card-action js-add-to js-add-to-compare\" title=\"Add to compare\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span uk-icon=\"icon: copy; ratio: .75;\" class=\"uk-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"15\" height=\"15\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"2.5\" width=\"12\" height=\"16\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<polyline fill=\"none\" stroke=\"#000\" points=\"5 0.5 17.5 0.5 17.5 17\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-action-text\">Add to compare</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-add-button-icon uk-icon\" uk-icon=\"cart\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<circle cx=\"7.3\" cy=\"17.3\" r=\"1.4\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<circle cx=\"13.3\" cy=\"17.3\" r=\"1.4\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<polyline fill=\"none\" stroke=\"#000\" points=\"0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-add-button-text\">add to cart</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</article>\n\t\t\t\t\t\t\t\t\t\t\t<article class=\"tm-product-card uk-grid-margin\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-media\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-ratio tm-ratio-4-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"tm-media-box\" href=\"product\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-labels\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-label uk-label-success\">new</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<figure class=\"tm-media-box-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/products/8/8-medium.jpg\" alt=\"Lenovo Yoga 720-13IKB 80X60059RK (Silver)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"tm-product-card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"uk-link-heading\" href=\"product\">Lenovo Yoga 720-13IKB 80X60059RK (Silver)</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"uk-list uk-text-small tm-product-card-properties\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">Diagonal display: </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>13.3\"</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">CPU: </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Intel®&nbsp;Core™ i5-7200U</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">RAM: </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>8&nbsp;GB</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-text-muted\">Video Card: </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Intel® HD Graphics 620</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-shop\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-prices\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-price\">$1099.00</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-product-card-add\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-text-meta tm-product-card-actions\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"tm-product-card-action js-add-to js-add-to-favorites\" title=\"Add to favorites\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span uk-icon=\"icon: heart; ratio: .75;\" class=\"uk-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"15\" height=\"15\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" d=\"M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-action-text\">Add to favorites</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"tm-product-card-action js-add-to js-add-to-compare\" title=\"Add to compare\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span uk-icon=\"icon: copy; ratio: .75;\" class=\"uk-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"15\" height=\"15\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"2.5\" width=\"12\" height=\"16\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<polyline fill=\"none\" stroke=\"#000\" points=\"5 0.5 17.5 0.5 17.5 17\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-action-text\">Add to compare</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-add-button-icon uk-icon\" uk-icon=\"cart\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<circle cx=\"7.3\" cy=\"17.3\" r=\"1.4\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<circle cx=\"13.3\" cy=\"17.3\" r=\"1.4\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<polyline fill=\"none\" stroke=\"#000\" points=\"0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-product-card-add-button-text\">add to cart</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</article>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"uk-margin uk-text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"uk-link-muted uk-text-uppercase tm-link-to-all\" href=\"subcategory\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>shop all</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span uk-icon=\"icon: chevron-right; ratio: .75;\" class=\"uk-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"15\" height=\"15\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"7 4 13 10 7 16\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/about/about.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/pages/about/about.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"uk-section uk-section-small\">\n  <div class=\"uk-container\">\n    <div class=\"uk-grid-medium uk-child-width-1-1\" uk-grid>\n      <app-about-heading></app-about-heading>\n      <section>\n        <div>\n          <article class=\"uk-card uk-card-default uk-card-body uk-article tm-ignore-container\">\n            <header class=\"uk-text-center\">\n              <h1 class=\"uk-article-title\">About</h1>\n            </header>\n            <div class=\"uk-article-body\">\n              <p class=\"uk-text-lead uk-text-center\">Urabitur justo diam, auctor vitae ornare sit amet, accumsan sed\n                neque. Curabitur efficitur lacinia euismod. Nunc dictum sagittis lacus. Etiam ultrices nulla orci, in\n                ultrices risus.</p>\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac tortor sit amet nisi malesuada\n                commodo. Phasellus et tempus justo. Sed iaculis dignissim lacinia. Nulla id felis vel ligula tempus\n                sodales vel a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis neque ac elit\n                lacinia laoreet. Sed dolor sem, rutrum ac egestas non, tempor nec eros. Etiam lobortis porta viverra.\n                Etiam ut suscipit sem, a volutpat mi. Maecenas euismod a lectus ut dapibus. Nulla mattis diam et leo\n                lacinia dignissim.</p>\n              <h2 class=\"uk-text-center\">Our principles</h2>\n              <ul class=\"uk-list uk-list-bullet\">\n                <li>Vestibulum ut mollis est. Fusce iaculis mauris ut tortor convallis sollicitudin. Suspendisse porta\n                  nulla nibh, id lacinia lacus tempus ut. Morbi non arcu aliquam, placerat sapien a, luctus diam. Etiam\n                  mattis cursus sem, eu maximus nisi bibendum nec. Vivamus ut turpis augue. Phasellus vehicula risus sit\n                  amet mi luctus malesuada.</li>\n                <li>Curabitur justo diam, auctor vitae ornare sit amet, accumsan sed neque. Curabitur efficitur lacinia\n                  euismod. Nunc dictum sagittis lacus. Etiam ultrices nulla orci, in ultrices risus tincidunt ac. Cras\n                  et maximus mauris. Morbi aliquam efficitur maximus. Aenean orci diam, auctor a mattis eu, consectetur\n                  id urna.</li>\n                <li>Morbi faucibus mattis ante. Donec varius neque sem, nec convallis mi dictum ut. Duis sit amet massa\n                  ac eros luctus egestas. Proin hendrerit aliquam metus, ac tincidunt risus viverra at. In viverra,\n                  ligula in facilisis interdum, dui arcu varius purus, eu blandit mi mi ut diam. Phasellus finibus metus\n                  sit amet lobortis dapibus. Nunc fringilla ac erat vitae elementum. Donec sagittis odio non mi\n                  vestibulum accumsan.</li>\n              </ul>\n\n\n\n              <app-team></app-team>\n              <app-stats></app-stats>\n              <app-store></app-store>\n\n            </div>\n          </article>\n        </div>\n      </section>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/account/account.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/pages/account/account.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"uk-section uk-section-small\">\n    <div class=\"uk-container\">\n      <div class=\"uk-grid-medium\" uk-grid>\n        <div class=\"uk-width-1-1 uk-width-1-4@m tm-aside-column\">\n          \n          \n          <app-account-leftsidebar></app-account-leftsidebar>\n\n\n        </div>\n        <div class=\"uk-width-1-1 uk-width-expand@m\">\n         \n         <app-account-orders></app-account-orders>\n         \n\n\n        </div>\n      </div>\n    </div>\n  </section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/article/article.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/pages/article/article.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"uk-section uk-section-small\">\n  <div class=\"uk-container\">\n    <div class=\"uk-grid-medium uk-child-width-1-1\" uk-grid>\n      <section class=\"uk-text-center\">\n        <ul class=\"uk-breadcrumb uk-flex-center uk-margin-remove\">\n          <li>\n            <a href=\"index\">Home</a>\n          </li>\n          <li>\n            <a href=\"blog\">Blog</a>\n          </li>\n          <li>\n            <span>Everything You Need to Know About the MacBook Pro</span>\n          </li>\n        </ul>\n      </section>\n      <section>\n        <div class=\"uk-grid-medium uk-child-width-1-1\" uk-grid>\n          <section>\n            <article class=\"uk-card uk-card-default uk-card-body uk-article tm-ignore-container\">\n              <header class=\"uk-text-center\">\n                <h1 class=\"uk-article-title\">Everything You Need to Know About the MacBook Pro</h1>\n                <div class=\"uk-article-meta\">\n                  <time>May 21, 2018</time>\n                </div>\n              </header>\n              <section class=\"uk-article-body\">\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod nisl nunc, a dictum\n                  magna laoreet eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia\n                  Curae.</p>\n                <div class=\"tm-wrapper uk-text-center\">\n                  <figure>\n                    <a href=\"assets/images/articles/macbook-photo.jpg\">\n                      <img src=\"assets/images/articles/macbook-photo.jpg\" alt=\"MacBook Pro\">\n                    </a>\n                    <figcaption>MacBook Pro</figcaption>\n                  </figure>\n                </div>\n                <p>Sed sit amet ante eget nunc dictum auctor sagittis in libero. Aliquam ultricies tincidunt nisi, a\n                  vestibulum nisi tempor vitae. Praesent fermentum sem semper fermentum ultrices. Duis eleifend vel\n                  sapien dignissim auctor. Vestibulum at commodo leo. In vitae eros ut sapien egestas venenatis non sit\n                  amet elit. In gravida vitae ante a rutrum.</p>\n                <h2>Touch Bar</h2>\n                <p>Vivamus ornare tortor elit, sed rutrum felis iaculis in. Nunc ut molestie neque. Aenean vitae\n                  elementum arcu, at rutrum ligula. Pellentesque fringilla dictum viverra. Vestibulum eu ipsum nec risus\n                  pharetra iaculis. Donec quis nulla orci. Suspendisse eget dictum augue, et lobortis justo. Suspendisse\n                  velit dui, sollicitudin quis velit nec, tincidunt consequat arcu.</p>\n                <h2>Retina Display</h2>\n                <p>Pellentesque dictum imperdiet rutrum. Vestibulum egestas quam eget maximus rutrum. Etiam blandit a\n                  dolor laoreet vulputate. Nulla ullamcorper ipsum et libero finibus, vitae vestibulum odio feugiat.</p>\n                <figure class=\"uk-text-center\">\n                  <a href=\"assets/images/articles/macbook-promo-4.jpg\">\n                    <img src=\"assets/images/articles/macbook-promo-4.jpg\" alt=\"MacBook Pro\">\n                  </a>\n                </figure>\n                <h2>Force Touch Trackpad</h2>\n                <p>Vivamus ornare tortor elit, sed rutrum felis iaculis in. Nunc ut molestie neque. Aenean vitae\n                  elementum arcu, at rutrum ligula. Pellentesque fringilla dictum viverra. Vestibulum eu ipsum nec risus\n                  pharetra iaculis. Donec quis nulla orci. Suspendisse eget dictum augue, et lobortis justo. Suspendisse\n                  velit dui, sollicitudin quis velit nec, tincidunt consequat arcu.</p>\n                <div class=\"tm-wrapper\">\n                  <figure class=\"tm-ratio tm-ratio-16-9\">\n                    <iframe src=\"https://www.youtube.com/embed/WVPRkcczXCY\" frameborder=\"0\"\n                      allow=\"autoplay; encrypted-media\" allowfullscreen ></iframe>\n                  </figure>\n                </div>\n                <p>Ut arcu lacus, tempus bibendum purus sed, iaculis sollicitudin sapien. Donec quis imperdiet arcu. Ut\n                  sagittis ipsum diam, nec tempor ex fermentum a. Nam ac vehicula erat. Curabitur id congue risus, vel\n                  iaculis enim. Donec tristique lacinia velit eu fringilla. Mauris lectus enim, aliquet eu dolor sed,\n                  porta vehicula lacus. Etiam luctus egestas scelerisque. Sed sit amet metus ante. Cras pulvinar\n                  sollicitudin nisl nec egestas. Maecenas vitae velit ut urna vestibulum venenatis ut vel ex. Quisque\n                  sit amet mattis ante. Duis blandit nisl non commodo rutrum. Nulla in velit ut arcu efficitur laoreet\n                  ut eu mauris. Duis condimentum vulputate consequat. Vestibulum aliquet suscipit purus.</p>\n                <figure uk-slideshow>\n                  <div class=\"uk-position-relative uk-visible-toggle uk-light\">\n                    <ul class=\"uk-slideshow-items\">\n                      <li>\n                        <img src=\"assets/images/articles/macbook-promo-1.jpg\" alt=\"MacBook Pro\" uk-cover>\n                      </li>\n                      <li>\n                        <img src=\"assets/images/articles/macbook-promo-2.jpg\" alt=\"MacBook Pro\" uk-cover>\n                      </li>\n                    </ul>\n                    <a class=\"uk-position-center-left uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-previous\n                      uk-slideshow-item=\"previous\" ></a>\n                    <a class=\"uk-position-center-right uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-next\n                      uk-slideshow-item=\"next\" ></a>\n                  </div>\n                  <ul class=\"uk-slideshow-nav uk-dotnav uk-flex-center uk-margin\" ></ul>\n                </figure>\n                <p>Mauris dignissim non nulla quis sollicitudin. Maecenas quis orci dui. Suspendisse pharetra facilisis\n                  metus, at venenatis nisl convallis et. Curabitur vulputate eget nisl sed dignissim. Sed eget metus ut\n                  orci volutpat gravida.</p>\n                <blockquote class=\"twitter-tweet\" data-lang=\"en\">\n                  <p lang=\"en\" dir=\"ltr\">Mophie&apos;s latest battery pack is powerful enough to charge your 15-inch\n                    MacBook Pro<a href=\"https://t.co/jN4RzcxOyG\">https://t.co/jN4RzcxOyG</a>\n                    <a href=\"https://t.co/5oJBKZRVBx\">pic.twitter.com/5oJBKZRVBx</a>\n                  </p>&mdash; The Verge (@verge)<a\n                    href=\"https://twitter.com/verge/status/948539601265872896?ref_src=twsrc%5Etfw\">January 3, 2018</a>\n                </blockquote>\n                <script src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\" async ></script>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem urna, accumsan nec velit et, convallis tincidunt enim. Proin sollicitudin, metus at interdum tempus, velit mi posuere nisl, nec viverra ligula lorem sit amet felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"uk-table uk-table-large uk-table-middle uk-table-divider uk-table-justify uk-table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"uk-width-1-4 uk-text-center\">MacBook Pro 13\"</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"uk-width-1-4 uk-text-center\">MacBook Pro 13\" with Touch Bar</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"uk-width-1-4 uk-text-center\">MacBook Pro 15\" with Touch Bar</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Dimensions</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>0.59 × 11.97 × 8.36&nbsp;inches</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>0.59 × 11.97 × 8.36&nbsp;inches</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>0.61 × 13.75 × 9.48&nbsp;inches</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>3.02&nbsp;pounds</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>3.02&nbsp;pounds</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>4.02&nbsp;pounds</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Display</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>13.3\" 2560×1600,<br>60Hz Retina Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>13.3\" 2560×1600,<br>60Hz Retina Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>15.4\" 2880×1800,<br>60Hz Retina Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Inputs</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>2 × USB-C Ports,<br>1 × 3.5mm Headphone Jack</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>4 × USB-C Ports,<br>1 × 3.5mm Headphone Jack</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>4 × USB-C Ports,<br>1 × 3.5mm Headphone Jack</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Battery Life</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Approximately 10&nbsp;hours</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Approximately 10&nbsp;hours</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Approximately 10&nbsp;hours</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Sed at diam aliquet, fringilla turpis ac, consequat ante. Duis id maximus purus. Cras rutrum erat non nibh accumsan, vitae maximus sapien elementum. Maecenas tellus libero, vulputate vitae mi eu, volutpat ornare felis. Nulla malesuada nunc urna, quis rutrum massa consequat id. Pellentesque elit diam, dignissim a lorem eu, tincidunt mollis erat.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tm-wrapper\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<figure class=\"uk-text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"assets/images/articles/macbook-promo-3.jpg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/articles/macbook-promo-3.jpg\" alt=\"MacBook Pro\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<figcaption>13-inch and 15-inch</figcaption>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Sed at diam aliquet, fringilla turpis ac, consequat ante. Duis id maximus purus. Cras rutrum erat non nibh accumsan, vitae maximus sapien elementum. Maecenas tellus libero, vulputate vitae mi eu, volutpat ornare felis. Nulla malesuada nunc urna, quis rutrum massa consequat id. Pellentesque elit diam, dignissim a lorem eu, tincidunt mollis erat.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<blockquote cite=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"uk-margin-small-bottom\">You can converge a toaster and refrigerator, but these things are probably not going to be pleasing to the user.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<footer>Tim Cook</footer>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</blockquote>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</article>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<section>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h2 class=\"uk-text-center\">Related Articles</h2>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-grid-medium uk-grid-match uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-4@m\" uk-grid>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"article\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<article class=\"uk-card uk-card-default uk-card-small uk-overflow-hidden uk-link-heading uk-display-block uk-box-shadow-hover-large uk-height-1-1 tm-ignore-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-card-media-top\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<figure class=\"uk-margin-remove tm-ratio tm-ratio-16-9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-cover-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/articles/macbook-photo.jpg\" alt=\"Everything You Need to Know About the MacBook Pro\" uk-cover>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-article-meta uk-margin-xsmall-bottom\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<time>May 21, 2018</time>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"uk-h4 uk-margin-remove\">Everything You Need to Know About the MacBook Pro</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</article>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"article\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<article class=\"uk-card uk-card-default uk-card-small uk-overflow-hidden uk-link-heading uk-display-block uk-box-shadow-hover-large uk-height-1-1 tm-ignore-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-card-media-top\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<figure class=\"uk-margin-remove tm-ratio tm-ratio-16-9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-cover-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/articles/macos.jpg\" alt=\"Apple introduces macOS Mojave\" uk-cover>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-article-meta uk-margin-xsmall-bottom\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<time>May 21, 2018</time>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"uk-h4 uk-margin-remove\">Apple introduces macOS Mojave</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</article>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/blog/blog.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/pages/blog/blog.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"uk-section uk-section-small\">\n\t<div class=\"uk-container\">\n\t\t<div class=\"uk-grid-medium uk-child-width-1-1\" uk-grid>\n\t\t\t<div class=\"uk-text-center\">\n\t\t\t\t<ul class=\"uk-breadcrumb uk-flex-center uk-margin-remove\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"index\">Home</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<span>Blog</span>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<h1 class=\"uk-margin-small-top uk-margin-remove-bottom\">Blog</h1>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<div class=\"uk-grid-medium\" uk-grid>\n\t\t\t\t\t<section class=\"uk-width-1-1 uk-width-expand@m\">\n\t\t\t\t\t\t<div class=\"uk-grid-medium uk-child-width-1-1\" uk-grid>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<a href=\"article\">\n\t\t\t\t\t\t\t\t\t<article class=\"uk-card uk-card-default uk-card-small uk-article uk-overflow-hidden uk-box-shadow-hover-large uk-height-1-1 tm-ignore-container\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"tm-ratio tm-ratio-16-9\">\n\t\t\t\t\t\t\t\t\t\t\t<figure class=\"tm-media-box uk-cover-container uk-margin-remove\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/articles/macbook-photo.jpg\" alt=\"Everything You Need to Know About the MacBook Pro\" uk-cover=\"uk-cover\"/>\n\t\t\t\t\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"uk-card-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-article-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-article-meta uk-margin-xsmall-bottom\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<time>May 21, 2018</time>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"uk-margin-remove\">Everything You Need to Know About the MacBook Pro</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-margin-small-top\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales eget ipsum id aliquam. Nam consectetur interdum nibh eget sodales. Cras volutpat efficitur ornare.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</article>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<a href=\"article\">\n\t\t\t\t\t\t\t\t\t<article class=\"uk-card uk-card-default uk-card-small uk-article uk-overflow-hidden uk-box-shadow-hover-large uk-height-1-1 tm-ignore-container\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"tm-ratio tm-ratio-16-9\">\n\t\t\t\t\t\t\t\t\t\t\t<figure class=\"tm-media-box uk-cover-container uk-margin-remove\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/articles/macos.jpg\" alt=\"Apple introduces macOS Mojave\" uk-cover=\"uk-cover\"/>\n\t\t\t\t\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"uk-card-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-article-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-article-meta uk-margin-xsmall-bottom\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<time>May 21, 2018</time>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"uk-margin-remove\">Apple introduces macOS Mojave</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-margin-small-top\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Praesent consequat justo eu massa malesuada posuere. Donec ultricies tincidunt nisl, sed euismod nulla venenatis maximus. Maecenas sit amet semper tellus. Pellentesque imperdiet finibus sapien, a consectetur eros auctor a.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</article>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</section>\n\t\t\t\t\t\n\t\t\t\t\t<app-news-rightsidebar></app-news-rightsidebar>\n          \n\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/brand/brand.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/pages/brand/brand.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"uk-section uk-section-small\">\n  <div class=\"uk-container\">\n    <div class=\"uk-grid-medium uk-child-width-1-1\" uk-grid>\n      <div class=\"uk-text-center\">\n        <ul class=\"uk-breadcrumb uk-flex-center uk-margin-remove\">\n          <li>\n            <a href=\"index\">Home</a>\n          </li>\n          <li>\n            <span>Brands</span>\n          </li>\n        </ul>\n        <h1 class=\"uk-margin-small-top uk-margin-remove-bottom\">Brands</h1>\n      </div>\n      <div>\n        <div class=\"uk-card uk-card-default tm-ignore-container\">\n          <header class=\"uk-card-header uk-background-default\">\n            <nav>\n              <ul class=\"uk-subnav uk-flex-center uk-margin-remove\">\n                <li>\n                  <a href=\"#number\">#</a>\n                </li>\n                <li>\n                  <a href=\"#A\">A</a>\n                </li>\n                <li>\n                  <a href=\"#B\">B</a>\n                </li>\n                <li>\n                  <a href=\"#C\">C</a>\n                </li>\n                <li>\n                  <a href=\"#D\">D</a>\n                </li>\n                <li>\n                  <a href=\"#E\">E</a>\n                </li>\n                <li>\n                  <a href=\"#F\">F</a>\n                </li>\n                <li>\n                  <a href=\"#G\">G</a>\n                </li>\n                <li>\n                  <a href=\"#H\">H</a>\n                </li>\n                <li>\n                  <a href=\"#I\">I</a>\n                </li>\n                <li>\n                  <a href=\"#J\">J</a>\n                </li>\n                <li>\n                  <a href=\"#K\">K</a>\n                </li>\n                <li>\n                  <a href=\"#L\">L</a>\n                </li>\n                <li>\n                  <a href=\"#M\">M</a>\n                </li>\n                <li>\n                  <a href=\"#N\">N</a>\n                </li>\n                <li>\n                  <a href=\"#O\">O</a>\n                </li>\n                <li>\n                  <a href=\"#P\">P</a>\n                </li>\n                <li>\n                  <a href=\"#Q\">Q</a>\n                </li>\n                <li>\n                  <a href=\"#R\">R</a>\n                </li>\n                <li>\n                  <a href=\"#S\">S</a>\n                </li>\n                <li>\n                  <a href=\"#T\">T</a>\n                </li>\n                <li>\n                  <a href=\"#U\">U</a>\n                </li>\n                <li>\n                  <a href=\"#V\">V</a>\n                </li>\n                <li>\n                  <a href=\"#W\">W</a>\n                </li>\n                <li>\n                  <a href=\"#X\">X</a>\n                </li>\n                <li>\n                  <a href=\"#Y\">Y</a>\n                </li>\n                <li>\n                  <a href=\"#Z\">Z</a>\n                </li>\n              </ul>\n            </nav>\n          </header>\n          <section class=\"uk-card-body\" id=\"A\">\n            <div uk-grid>\n              <div class=\"uk-width-1-1 uk-width-1-6@m\">\n                <h2 class=\"uk-text-center\">A</h2>\n              </div>\n              <div class=\"uk-width-1-1 uk-width-expand@m\">\n                <ul class=\"uk-grid-small uk-child-width-1-2 uk-child-width-1-4@s uk-child-width-1-5@m\" uk-grid>\n                  <li>\n                    <a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large\"\n                      href=\"#\">\n                      <div class=\"tm-ratio tm-ratio-4-3\">\n                        <div class=\"tm-media-box\">\n                          <figure class=\"tm-media-box-wrap\">\n                            <img class=\"item-brand\" src=\"assets/images/brands/apple.svg\" alt=\"Apple\">\n                          </figure>\n                        </div>\n                      </div>\n                      <div class=\"uk-margin-small-top uk-text-truncate\">Apple</div>\n                    </a>\n                  </li>\n                  <li>\n                    <a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large\"\n                      href=\"#\">\n                      <div class=\"tm-ratio tm-ratio-4-3\">\n                        <div class=\"tm-media-box\">\n                          <figure class=\"tm-media-box-wrap\">\n                            <img class=\"item-brand\" src=\"assets/images/brands/samsung.svg\" alt=\"Samsung\">\n                          </figure>\n                        </div>\n                      </div>\n                      <div class=\"uk-margin-small-top uk-text-truncate\">Samsung</div>\n                    </a>\n                  </li>\n                  <li>\n                    <a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large\"\n                      href=\"#\">\n                      <div class=\"tm-ratio tm-ratio-4-3\">\n                        <div class=\"tm-media-box\">\n                          <figure class=\"tm-media-box-wrap\">\n                            <img class=\"item-brand\" src=\"assets/images/brands/sony.svg\" alt=\"Sony\">\n                          </figure>\n                        </div>\n                      </div>\n                      <div class=\"uk-margin-small-top uk-text-truncate\">Sony</div>\n                    </a>\n                  </li>\n                  <li>\n                    <a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large\"\n                      href=\"#\">\n                      <div class=\"tm-ratio tm-ratio-4-3\">\n                        <div class=\"tm-media-box\">\n                          <figure class=\"tm-media-box-wrap\">\n                            <img class=\"item-brand\" src=\"assets/images/brands/microsoft.svg\" alt=\"Microsoft\">\n                          </figure>\n                        </div>\n                      </div>\n                      <div class=\"uk-margin-small-top uk-text-truncate\">Microsoft</div>\n                    </a>\n                  </li>\n                  <li>\n                    <a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large\"\n                      href=\"#\">\n                      <div class=\"tm-ratio tm-ratio-4-3\">\n                        <div class=\"tm-media-box\">\n                          <figure class=\"tm-media-box-wrap\">\n                            <img class=\"item-brand\" src=\"assets/images/brands/intel.svg\" alt=\"Intel\">\n                          </figure>\n                        </div>\n                      </div>\n                      <div class=\"uk-margin-small-top uk-text-truncate\">Intel</div>\n                    </a>\n                  </li>\n                  <li>\n                    <a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large\"\n                      href=\"#\">\n                      <div class=\"tm-ratio tm-ratio-4-3\">\n                        <div class=\"tm-media-box\">\n                          <figure class=\"tm-media-box-wrap\">\n                            <img class=\"item-brand\" src=\"assets/images/brands/hp.svg\" alt=\"HP\">\n                          </figure>\n                        </div>\n                      </div>\n                      <div class=\"uk-margin-small-top uk-text-truncate\">HP</div>\n                    </a>\n                  </li>\n                  <li>\n                    <a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large\"\n                      href=\"#\">\n                      <div class=\"tm-ratio tm-ratio-4-3\">\n                        <div class=\"tm-media-box\">\n                          <figure class=\"tm-media-box-wrap\">\n                            <img class=\"item-brand\" src=\"assets/images/brands/lg.svg\" alt=\"LG\">\n                          </figure>\n                        </div>\n                      </div>\n                      <div class=\"uk-margin-small-top uk-text-truncate\">LG</div>\n                    </a>\n                  </li>\n                  <li>\n                    <a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large\"\n                      href=\"#\">\n                      <div class=\"tm-ratio tm-ratio-4-3\">\n                        <div class=\"tm-media-box\">\n                          <figure class=\"tm-media-box-wrap\">\n                            <img class=\"item-brand\" src=\"assets/images/brands/lenovo.svg\" alt=\"Lenovo\">\n                          </figure>\n                        </div>\n                      </div>\n                      <div class=\"uk-margin-small-top uk-text-truncate\">Lenovo</div>\n                    </a>\n                  </li>\n                  <li>\n                    <a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large\"\n                      href=\"#\">\n                      <div class=\"tm-ratio tm-ratio-4-3\">\n                        <div class=\"tm-media-box\">\n                          <figure class=\"tm-media-box-wrap\">\n                            <img class=\"item-brand\" src=\"assets/images/brands/asus.svg\" alt=\"ASUS\">\n                          </figure>\n                        </div>\n                      </div>\n                      <div class=\"uk-margin-small-top uk-text-truncate\">ASUS</div>\n                    </a>\n                  </li>\n                  <li>\n                    <a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large\"\n                      href=\"#\">\n                      <div class=\"tm-ratio tm-ratio-4-3\">\n                        <div class=\"tm-media-box\">\n                          <figure class=\"tm-media-box-wrap\">\n                            <img class=\"item-brand\" src=\"assets/images/brands/acer.svg\" alt=\"Acer\">\n                          </figure>\n                        </div>\n                      </div>\n                      <div class=\"uk-margin-small-top uk-text-truncate\">Acer</div>\n                    </a>\n                  </li>\n                  <li>\n                    <a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large\"\n                      href=\"#\">\n                      <div class=\"tm-ratio tm-ratio-4-3\">\n                        <div class=\"tm-media-box\">\n                          <figure class=\"tm-media-box-wrap\">\n                            <img class=\"item-brand\" src=\"assets/images/brands/dell.svg\" alt=\"Dell\">\n                          </figure>\n                        </div>\n                      </div>\n                      <div class=\"uk-margin-small-top uk-text-truncate\">Dell</div>\n                    </a>\n                  </li>\n                  <li>\n                    <a class=\"uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large\"\n                      href=\"#\">\n                      <div class=\"tm-ratio tm-ratio-4-3\">\n                        <div class=\"tm-media-box\">\n                          <figure class=\"tm-media-box-wrap\">\n                            <img class=\"item-brand\" src=\"assets/images/brands/canon.svg\" alt=\"Canon\">\n                          </figure>\n                        </div>\n                      </div>\n                      <div class=\"uk-margin-small-top uk-text-truncate\">Canon</div>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </section>\n          <section class=\"uk-card-body\" id=\"B\">\n            <div uk-grid>\n              <div class=\"uk-width-1-1 uk-width-1-6@m\">\n                <h2 class=\"uk-text-center\">B</h2>\n              </div>\n              <div class=\"uk-width-1-1 uk-width-expand@m\">\n              </div>\n            </div>\n\n            </section>\n          <section class=\"uk-card-body\" id=\"C\">\n            <div uk-grid>\n              <div class=\"uk-width-1-1 uk-width-1-6@m\">\n                <h2 class=\"uk-text-center\">C</h2>\n              </div>\n              <div class=\"uk-width-1-1 uk-width-expand@m\">\n              </div>\n            </div>\n          </section>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/cart/cart.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/pages/cart/cart.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"uk-section uk-section-small\">\n  <div class=\"uk-container\">\n    <div class=\"uk-grid-medium uk-child-width-1-1\" uk-grid>\n\n      <app-cart-heading></app-cart-heading>\n\n      <div>\n        <div class=\"uk-grid-medium\" uk-grid>\n          <div class=\"uk-width-1-1 uk-width-expand@m\">\n            <app-cart-products></app-cart-products>\n\n          </div>\n          <div class=\"uk-width-1-1 tm-aside-column uk-width-1-4@m\">\n\n            <app-cart-checkout></app-cart-checkout>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/catalog/catalog.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/pages/catalog/catalog.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"uk-section uk-section-small\">\n  <div class=\"uk-container\">\n    <div class=\"uk-grid-medium uk-child-width-1-1\" uk-grid>\n      <app-catalog-heading></app-catalog-heading>\n      <div>\n        <app-catalog-body></app-catalog-body>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/category/category.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/pages/category/category.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"uk-section uk-section-small\">\n\t<div class=\"uk-container\">\n\t\t<div class=\"uk-grid-medium uk-child-width-1-1\" uk-grid>\n\t\t\t<app-category-heading></app-category-heading>\n\t\t\t<div>\n\t\t\t\t<div class=\"uk-grid-medium\" uk-grid>\n\t\t\t\t\t<aside class=\"uk-width-1-4 tm-aside-column tm-filters\" id=\"filters\"\n\t\t\t\t\t\tuk-offcanvas=\"overlay: true; container: false;\">\n\t\t\t\t\t\t<div class=\"uk-offcanvas-bar uk-padding-remove\">\n\t\t\t\t\t\t\t<app-category-leftsidebar></app-category-leftsidebar>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</aside>\n\t\t\t\t\t<div class=\"uk-width-expand\">\n\t\t\t\t\t\t<div class=\"uk-grid-medium uk-child-width-1-1\" uk-grid>\n\n\n\t\t\t\t\t\t\t<app-category-body></app-category-body>\n\n\n\t\t\t\t\t\t\t<app-pagination></app-pagination>\n\n\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/checkout/checkout.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/pages/checkout/checkout.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"uk-section uk-section-small\">\n    <div class=\"uk-container\">\n      <div class=\"uk-grid-medium uk-child-width-1-1\" uk-grid>\n        \n        <app-checkout-heading></app-checkout-heading>\n        \n        \n        <section>\n          <div class=\"uk-grid-medium\" uk-grid>\n            <form class=\"uk-form-stacked uk-width-1-1 tm-checkout uk-width-expand@m\">\n              <div class=\"uk-grid-medium uk-child-width-1-1\" uk-grid>\n                \n                <app-checkout-contactinfo></app-checkout-contactinfo>\n\n<app-checkout-shipping></app-checkout-shipping>\n\n\n                                                      </div>\n                                                    </form>\n                                                    <div class=\"uk-width-1-1 uk-width-1-4@m tm-aside-column\">\n                                                      <div class=\"uk-card uk-card-default uk-card-small tm-ignore-container\" uk-sticky=\"offset: 30; bottom: true; media: @m;\">\n                                                        <section class=\"uk-card-body\">\n                                                          <h4>Items in order</h4>\n                                                          <div class=\"uk-grid-small\" uk-grid>\n                                                            <div class=\"uk-width-expand\">\n                                                              <div class=\"uk-text-small\">Apple MacBook Pro 15&quot; Touch Bar MPTU2LL/A 256GB (Silver)</div>\n                                                              <div class=\"uk-text-meta\">1 × $1599.00</div>\n                                                            </div>\n                                                            <div class=\"uk-text-right\">\n                                                              <div>$1599.00</div>\n                                                            </div>\n                                                          </div>\n                                                          <div class=\"uk-grid-small\" uk-grid>\n                                                            <div class=\"uk-width-expand\">\n                                                              <div class=\"uk-text-small\">Apple MacBook 12&quot; MNYN2LL/A 512GB (Rose Gold)</div>\n                                                              <div class=\"uk-text-meta\">1 × $1549.00</div>\n                                                            </div>\n                                                            <div class=\"uk-text-right\">\n                                                              <div>$1549.00</div>\n                                                            </div>\n                                                          </div>\n                                                        </section>\n                                                        <section class=\"uk-card-body\">\n                                                          <div class=\"uk-grid-small\" uk-grid>\n                                                            <div class=\"uk-width-expand\">\n                                                              <div class=\"uk-text-muted\">Shipping</div>\n                                                            </div>\n                                                            <div class=\"uk-text-right\">\n                                                              <div>Pick up from store</div>\n                                                              <div class=\"uk-text-meta\">Free, tomorrow</div>\n                                                            </div>\n                                                          </div>\n                                                          <div class=\"uk-grid-small\" uk-grid>\n                                                            <div class=\"uk-width-expand\">\n                                                              <div class=\"uk-text-muted\">Payment</div>\n                                                            </div>\n                                                            <div class=\"uk-text-right\">\n                                                              <div>Online by card</div>\n                                                            </div>\n                                                          </div>\n                                                        </section>\n                                                        <section class=\"uk-card-body\">\n                                                          <div class=\"uk-grid-small\" uk-grid>\n                                                            <div class=\"uk-width-expand\">\n                                                              <div class=\"uk-text-muted\">Subtotal</div>\n                                                            </div>\n                                                            <div class=\"uk-text-right\">\n                                                              <div>$3148</div>\n                                                            </div>\n                                                          </div>\n                                                          <div class=\"uk-grid-small\" uk-grid>\n                                                            <div class=\"uk-width-expand\">\n                                                              <div class=\"uk-text-muted\">Discount</div>\n                                                            </div>\n                                                            <div class=\"uk-text-right\">\n                                                              <div class=\"uk-text-danger\">−$29</div>\n                                                            </div>\n                                                          </div>\n                                                        </section>\n                                                        <section class=\"uk-card-body\">\n                                                          <div class=\"uk-grid-small uk-flex-middle\" uk-grid>\n                                                            <div class=\"uk-width-expand\">\n                                                              <div class=\"uk-text-muted\">Total</div>\n                                                            </div>\n                                                            <div class=\"uk-text-right\">\n                                                              <div class=\"uk-text-lead uk-text-bolder\">$3119</div>\n                                                            </div>\n                                                          </div>\n                                                          <button class=\"uk-button uk-button-primary uk-margin-small uk-width-1-1\">checkout</button>\n                                                        </section>\n                                                      </div>\n                                                    </div>\n                                                  </div>\n                                                </section>\n                                              </div>\n                                            </div>\n                                          </section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/compare/compare.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/pages/compare/compare.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"uk-section uk-section-small\">\n  <div class=\"uk-container\">\n    <div class=\"uk-grid-medium uk-child-width-1-1\" uk-grid>\n      <app-compare-heading></app-compare-heading>\n      <div>\n        <div class=\"uk-card uk-card-default uk-overflow-auto tm-ignore-container\">\n          <table class=\"uk-table uk-table-divider tm-compare-table\">\n            <thead>\n              <tr class=\"uk-child-width-1-4\">\n                <td class=\"uk-table-middle uk-text-center tm-compare-column\">\n                  <input class=\"tm-checkbox\" id=\"show-difference\" type=\"checkbox\">\n                  <label for=\"show-difference\">Show differences only</label>\n                </td>\n                <td class=\"tm-compare-table-column\">\n                  <div class=\"uk-height-1-1\">\n                    <div class=\"uk-grid-small uk-child-width-1-1 uk-height-1-1\" uk-grid>\n                      <div class=\"uk-text-center\">\n                        <a class=\"uk-text-small uk-text-danger\" href=\"#\">\n                          <span uk-icon=\"icon: close; ratio: .75;\"></span>\n                          <span class=\"uk-margin-xsmall-left tm-pseudo\">Delete</span>\n                        </a>\n                      </div>\n                      <div>\n                        <div class=\"uk-grid-small uk-height-1-1\" uk-grid=\"uk-grid\">\n                          <div class=\"uk-width-1-3\">\n                            <div class=\"tm-ratio tm-ratio-4-3\">\n                              <a class=\"tm-media-box\" href=\"product\">\n                                <figure class=\"tm-media-box-wrap\">\n                                  <img src=\"assets/images/products/1/1-small.jpg\"\n                                    alt=\"Apple MacBook Pro 15&quot; Touch Bar MPTU2LL/A 256GB (Silver)\" />\n                                </figure>\n                              </a>\n                            </div>\n                          </div>\n                          <div class=\"uk-width-expand\">\n                            <div class=\"tm-product-card-body uk-padding-remove uk-height-1-1\">\n                              <div class=\"tm-product-card-info\">\n                                <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n                                <a class=\"tm-product-card-title\" href=\"product\">Apple MacBook Pro 15&quot; Touch\n                                  Bar MPTU2LL/A 256GB (Silver)</a>\n                              </div>\n                              <div class=\"tm-product-card-shop\">\n                                <div class=\"tm-product-card-prices\">\n                                  <del class=\"uk-text-meta\">$1899.00</del>\n                                  <div class=\"tm-product-card-price\">$1599.00</div>\n                                </div>\n                                <div class=\"tm-product-card-add\">\n                                  <button\n                                    class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                                    <span class=\"tm-product-add-button-icon\" uk-icon=\"cart\"></span>\n                                    <span class=\"tm-product-card-add-button-text\">add to cart</span>\n                                  </button>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </td>\n                <td class=\"tm-compare-table-column\">\n                  <div class=\"uk-height-1-1\">\n                    <div class=\"uk-grid-small uk-child-width-1-1 uk-height-1-1\" uk-grid>\n                      <div class=\"uk-text-center\">\n                        <a class=\"uk-text-small uk-text-danger\" href=\"#\">\n                          <span uk-icon=\"icon: close; ratio: .75;\"></span>\n                          <span class=\"uk-margin-xsmall-left tm-pseudo\">Delete</span>\n                        </a>\n                      </div>\n                      <div>\n                        <div class=\"uk-grid-small uk-height-1-1\" uk-grid=\"uk-grid\">\n                          <div class=\"uk-width-1-3\">\n                            <div class=\"tm-ratio tm-ratio-4-3\">\n                              <a class=\"tm-media-box\" href=\"product\">\n                                <figure class=\"tm-media-box-wrap\">\n                                  <img src=\"assets/images/products/2/2-small.jpg\"\n                                    alt=\"Apple MacBook 12&quot; MNYN2LL/A 512GB (Rose Gold)\" />\n                                </figure>\n                              </a>\n                            </div>\n                          </div>\n                          <div class=\"uk-width-expand\">\n                            <div class=\"tm-product-card-body uk-padding-remove uk-height-1-1\">\n                              <div class=\"tm-product-card-info\">\n                                <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n                                <a class=\"tm-product-card-title\" href=\"product\">Apple MacBook 12&quot; MNYN2LL/A\n                                  512GB (Rose Gold)</a>\n                              </div>\n                              <div class=\"tm-product-card-shop\">\n                                <div class=\"tm-product-card-prices\">\n                                  <div class=\"tm-product-card-price\">$1549.00</div>\n                                </div>\n                                <div class=\"tm-product-card-add\">\n                                  <button\n                                    class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                                    <span class=\"tm-product-add-button-icon\" uk-icon=\"cart\"></span>\n                                    <span class=\"tm-product-card-add-button-text\">add to cart</span>\n                                  </button>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </td>\n                <td class=\"tm-compare-table-column\">\n                  <div class=\"uk-height-1-1\">\n                    <div class=\"uk-grid-small uk-child-width-1-1 uk-height-1-1\" uk-grid>\n                      <div class=\"uk-text-center\">\n                        <a class=\"uk-text-small uk-text-danger\" href=\"#\">\n                          <span uk-icon=\"icon: close; ratio: .75;\"></span>\n                          <span class=\"uk-margin-xsmall-left tm-pseudo\">Delete</span>\n                        </a>\n                      </div>\n                      <div>\n                        <div class=\"uk-grid-small uk-height-1-1\" uk-grid=\"uk-grid\">\n                          <div class=\"uk-width-1-3\">\n                            <div class=\"tm-ratio tm-ratio-4-3\">\n                              <a class=\"tm-media-box\" href=\"product\">\n                                <figure class=\"tm-media-box-wrap\">\n                                  <img src=\"assets/images/products/6/6-small.jpg\"\n                                    alt=\"Apple MacBook Air 13&quot; MQD32LL/A 128GB (Silver)\" />\n                                </figure>\n                              </a>\n                            </div>\n                          </div>\n                          <div class=\"uk-width-expand\">\n                            <div class=\"tm-product-card-body uk-padding-remove uk-height-1-1\">\n                              <div class=\"tm-product-card-info\">\n                                <div class=\"uk-text-meta uk-margin-xsmall-bottom\">Laptop</div>\n                                <a class=\"tm-product-card-title\" href=\"product\">Apple MacBook Air 13&quot;\n                                  MQD32LL/A 128GB (Silver)</a>\n                              </div>\n                              <div class=\"tm-product-card-shop\">\n                                <div class=\"tm-product-card-prices\">\n                                  <div class=\"tm-product-card-price\">$849.00</div>\n                                </div>\n                                <div class=\"tm-product-card-add\">\n                                  <button\n                                    class=\"uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart\">\n                                    <span class=\"tm-product-add-button-icon\" uk-icon=\"cart\"></span>\n                                    <span class=\"tm-product-card-add-button-text\">add to cart</span>\n                                  </button>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th colspan=\"4\">\n                  <h3 class=\"uk-margin-remove\">Performance</h3>\n                </th>\n              </tr>\n              <tr>\n                <th>Processor</th>\n                <td>Intel&nbsp;Core i7&nbsp;Quad-Core</td>\n                <td>Intel&nbsp;Core i5&nbsp;Dual-Core</td>\n                <td>Intel&nbsp;Core i5&nbsp;Dual-Core</td>\n              </tr>\n              <tr>\n                <th>Base Clock Speed</th>\n                <td>2.8&nbsp;GHz</td>\n                <td>1.3&nbsp;GHz</td>\n                <td>1.8&nbsp;GHz</td>\n              </tr>\n              <tr>\n                <th>Maximum Boost Speed</th>\n                <td>3.8&nbsp;GHz</td>\n                <td>3.2&nbsp;GHz</td>\n                <td>2.9&nbsp;GHz</td>\n              </tr>\n              <tr>\n                <th>Total Installed Memory</th>\n                <td>16&nbsp;GB</td>\n                <td>8&nbsp;GB</td>\n                <td>8&nbsp;GB</td>\n              </tr>\n              <tr>\n                <th>Memory Type</th>\n                <td>LPDDR3&nbsp;SDRAM</td>\n                <td>LPDDR3&nbsp;SDRAM</td>\n                <td>LPDDR3&nbsp;SDRAM</td>\n              </tr>\n              <tr>\n                <th>Memory Speed</th>\n                <td>2133&nbsp;MHz</td>\n                <td>1866&nbsp;MHz</td>\n                <td>1600&nbsp;MHz</td>\n              </tr>\n              <tr>\n                <th>Onboard Memory</th>\n                <td>16&nbsp;GB</td>\n                <td>8&nbsp;GB</td>\n                <td>8&nbsp;GB</td>\n              </tr>\n              <tr>\n                <th>Available Memory Slots</th>\n                <td>—</td>\n                <td>—</td>\n                <td>—</td>\n              </tr>\n              <tr>\n                <th>Graphics Type</th>\n                <td>Hybrid</td>\n                <td>Integrated</td>\n                <td>Integrated</td>\n              </tr>\n              <tr>\n                <th>GPU</th>\n                <td>AMD Radeon&nbsp;Pro 555 with 2&nbsp;GB&nbsp;GDDR5 VRAM,<br>Intel HD Graphics&nbsp;630</td>\n                <td>Intel HD Graphics&nbsp;615</td>\n                <td>Intel HD Graphics&nbsp;6000</td>\n              </tr>\n            </tbody>\n            <tbody>\n              <tr>\n                <th colspan=\"4\">\n                  <h3 class=\"uk-margin-remove\">Display</h3>\n                </th>\n              </tr>\n              <tr>\n                <th>Graphics Type</th>\n                <td>IPS</td>\n                <td>IPS</td>\n                <td>Not specified</td>\n              </tr>\n              <tr>\n                <th>Size</th>\n                <td>15.4\"</td>\n                <td>12\"</td>\n                <td>13.3\"</td>\n              </tr>\n              <tr>\n                <th>Aspect Ratio</th>\n                <td>16:10</td>\n                <td>16:10</td>\n                <td>16:10</td>\n              </tr>\n              <tr>\n                <th>Native Resolution</th>\n                <td>2880×1800</td>\n                <td>2304×1440</td>\n                <td>1440×900</td>\n              </tr>\n              <tr>\n                <th>Touchscreen</th>\n                <td>—</td>\n                <td>—</td>\n                <td>—</td>\n              </tr>\n              <tr>\n                <th>Finish</th>\n                <td>Glossy</td>\n                <td>Glossy</td>\n                <td>Glossy</td>\n              </tr>\n              <tr>\n                <th>Brightness</th>\n                <td>500&nbsp;cd/m<sup>2</sup>\n                </td>\n                <td>Not specified</td>\n                <td>Not specified</td>\n              </tr>\n              <tr>\n                <th>Viewing Angle</th>\n                <td>Not specified</td>\n                <td>Not specified</td>\n                <td>Not specified</td>\n              </tr>\n              <tr>\n                <th>Refresh Rate</th>\n                <td>Not specified</td>\n                <td>Not specified</td>\n                <td>Not specified</td>\n              </tr>\n              <tr>\n                <th>Response Time</th>\n                <td>Not specified</td>\n                <td>Not specified</td>\n                <td>Not specified</td>\n              </tr>\n              <tr>\n                <th>Adaptive Sync Technology</th>\n                <td>Not specified</td>\n                <td>Not specified</td>\n                <td>Not specified</td>\n              </tr>\n              <tr>\n                <th>External Resolution</th>\n                <td>Not specified</td>\n                <td>Not specified</td>\n                <td>Not specified</td>\n              </tr>\n            </tbody>\n            <tbody>\n              <tr>\n                <th colspan=\"4\">\n                  <h3 class=\"uk-margin-remove\">Drives</h3>\n                </th>\n              </tr>\n              <tr>\n                <th>Available Slots</th>\n                <td>—</td>\n                <td>—</td>\n                <td>—</td>\n              </tr>\n              <tr>\n                <th>Total Capacity</th>\n                <td>256&nbsp;GB</td>\n                <td>512&nbsp;GB</td>\n                <td>128&nbsp;GB</td>\n              </tr>\n              <tr>\n                <th>Solid State Storage</th>\n                <td>1 × 256&nbsp;GB&nbsp;Integrated PCIe</td>\n                <td>1 × 512&nbsp;GB&nbsp;Integrated PCIe</td>\n                <td>1 × 128&nbsp;GB&nbsp;Integrated PCIe</td>\n              </tr>\n              <tr>\n                <th>Optical Drive</th>\n                <td>—</td>\n                <td>—</td>\n                <td>—</td>\n              </tr>\n            </tbody>\n            <tbody>\n              <tr>\n                <th colspan=\"4\">\n                  <h3 class=\"uk-margin-remove\">Input/ Output Connectors</h3>\n                </th>\n              </tr>\n              <tr>\n                <th>Ports</th>\n                <td>4 × Thunderbolt 3&nbsp;via USB Type-C</td>\n                <td>1 × USB 3.1 Gen 1&nbsp;Type-C</td>\n                <td>2 × USB 3.1 Gen 1&nbsp;Type-A,<br>1 × Thunderbolt 2</td>\n              </tr>\n              <tr>\n                <th>Display</th>\n                <td>4 × DisplayPort&nbsp;via Type-C</td>\n                <td>1 × DisplayPort&nbsp;1.2&nbsp;via Optional Cable,<br>1 × HDMI&nbsp;via Optional Cable,<br>1 ×\n                  VGA&nbsp;via Optional Cable</td>\n                <td>1 × Mini DisplayPort&nbsp;via Thunderbolt Port</td>\n              </tr>\n              <tr>\n                <th>Audio</th>\n                <td>1 × 1/8\" (3.5&nbsp;mm) Headphone Output,<br>2 × Integrated Speaker,<br>3 × Integrated Microphone\n                </td>\n                <td>1 × 1/8\" (3.5&nbsp;mm) Headphone Output,<br>2 × Integrated Speaker,<br>2 × Integrated Microphone\n                </td>\n                <td>1 × 1/8\" (3.5&nbsp;mm) Headphone Output,<br>2 × Integrated Speaker,<br>2 × Integrated Microphone\n                </td>\n              </tr>\n              <tr>\n                <th>Expansion Slots</th>\n                <td>—</td>\n                <td>—</td>\n                <td>—</td>\n              </tr>\n              <tr>\n                <th>Media Card Slots</th>\n                <td>—</td>\n                <td>—</td>\n                <td>SD/SDHC/SDXC</td>\n              </tr>\n            </tbody>\n            <tbody>\n              <tr>\n                <th colspan=\"4\">\n                  <h3 class=\"uk-margin-remove\">Communications</h3>\n                </th>\n              </tr>\n              <tr>\n                <th>Network</th>\n                <td>—</td>\n                <td>—</td>\n                <td>—</td>\n              </tr>\n              <tr>\n                <th>Modem</th>\n                <td>—</td>\n                <td>—</td>\n                <td>—</td>\n              </tr>\n              <tr>\n                <th>Wi-Fi</th>\n                <td>802.11ac; Dual-Band</td>\n                <td>802.11ac; Dual-Band</td>\n                <td>802.11ac; Dual-Band</td>\n              </tr>\n              <tr>\n                <th>Bluetooth</th>\n                <td>Bluetooth 4.2</td>\n                <td>Bluetooth 4.2</td>\n                <td>Bluetooth 4.0</td>\n              </tr>\n              <tr>\n                <th>Mobile Broadband</th>\n                <td>—</td>\n                <td>—</td>\n                <td>—</td>\n              </tr>\n              <tr>\n                <th>GPS</th>\n                <td>Not specified</td>\n                <td>—</td>\n                <td>Not specified</td>\n              </tr>\n              <tr>\n                <th>NFC</th>\n                <td>Not specified</td>\n                <td>—</td>\n                <td>Not specified</td>\n              </tr>\n              <tr>\n                <th>Webcam</th>\n                <td>User-Facing: 720p Video</td>\n                <td>User-Facing: 480p Video</td>\n                <td>User-Facing: 720p Video</td>\n              </tr>\n            </tbody>\n            <tbody>\n              <tr>\n                <th colspan=\"4\">\n                  <h3 class=\"uk-margin-remove\">Battery</h3>\n                </th>\n              </tr>\n              <tr>\n                <th>Battery Chemistry</th>\n                <td>Lithium-Ion Polymer</td>\n                <td>Lithium-Ion Polymer</td>\n                <td>Lithium-Ion Polymer</td>\n              </tr>\n              <tr>\n                <th>Watt Hours / Type</th>\n                <td>76&nbsp;Wh&nbsp;Non-Removable</td>\n                <td>41.4&nbsp;Wh&nbsp;Non-Removable</td>\n                <td>54&nbsp;Wh&nbsp;Non-Removable</td>\n              </tr>\n              <tr>\n                <th>Cells</th>\n                <td>Not specified</td>\n                <td>Not specified</td>\n                <td>Not specified</td>\n              </tr>\n              <tr>\n                <th>Output Voltage</th>\n                <td>Not specified</td>\n                <td>Not specified</td>\n                <td>Not specified</td>\n              </tr>\n              <tr>\n                <th>Maximum Runtime</th>\n                <td>10&nbsp;Hours</td>\n                <td>10&nbsp;Hours</td>\n                <td>12&nbsp;Hours</td>\n              </tr>\n              <tr>\n                <th>Power Requirements</th>\n                <td>100-240&nbsp;VAC, 50-60&nbsp;Hz</td>\n                <td>100-240&nbsp;VAC, 50-60&nbsp;Hz</td>\n                <td>100-240&nbsp;VAC, 50-60&nbsp;Hz</td>\n              </tr>\n              <tr>\n                <th>Power Supply</th>\n                <td>1 × 87&nbsp;W</td>\n                <td>1 × 29&nbsp;W</td>\n                <td>1 × 45&nbsp;W</td>\n              </tr>\n            </tbody>\n            <tbody>\n              <tr>\n                <th colspan=\"4\">\n                  <h3 class=\"uk-margin-remove\">General</h3>\n                </th>\n              </tr>\n              <tr>\n                <th>Operating System</th>\n                <td>macOS High Sierra</td>\n                <td>macOS High Sierra</td>\n                <td>macOS High Sierra</td>\n              </tr>\n              <tr>\n                <th>Security</th>\n                <td>Not specified</td>\n                <td>Not specified</td>\n                <td>Not specified</td>\n              </tr>\n              <tr>\n                <th>Keyboard</th>\n                <td>Keys: 64,<br>Type: Standard Notebook Keyboard,<br>Features: Backlight</td>\n                <td>Keys: 78,<br>Type: Standard Notebook Keyboard,<br>Features: Backlight</td>\n                <td>Keys: 78,<br>Type: Standard Notebook Keyboard,<br>Features: Backlight</td>\n              </tr>\n              <tr>\n                <th>Pointing Device</th>\n                <td>Force Touch Trackpad</td>\n                <td>Force Touch Trackpad</td>\n                <td>TouchPad</td>\n              </tr>\n              <tr>\n                <th>Dimensions (W × H × D)</th>\n                <td>13.8 × 0.6 × 9.5\"&nbsp;/&nbsp;35.1 × 1.5 × 24.1&nbsp;cm</td>\n                <td>11.0 × 0.5 × 7.7\"&nbsp;/&nbsp;27.9 × 1.3 × 19.6&nbsp;cm</td>\n                <td>12.8 × 0.7 × 8.9\"&nbsp;/&nbsp;32.5 × 1.8 × 22.6&nbsp;cm</td>\n              </tr>\n              <tr>\n                <th>Weight</th>\n                <td>4.02&nbsp;lb&nbsp;/&nbsp;1.82&nbsp;kg</td>\n                <td>2.03&nbsp;lb&nbsp;/&nbsp;.92&nbsp;kg</td>\n                <td>2.96&nbsp;lb&nbsp;/&nbsp;1.34&nbsp;kg</td>\n              </tr>\n              <tr>\n                <th>Warranty Length</th>\n                <td>Limited 1-Year Warranty</td>\n                <td>Limited 1-Year Warranty</td>\n                <td>Limited 1-Year Warranty</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/contact/contact.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/pages/contact/contact.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"uk-section uk-section-small\">\n\t<div class=\"uk-container\">\n\t\t<div class=\"uk-grid-medium uk-child-width-1-1\" uk-grid>\n\t\t\t<div class=\"uk-text-center\">\n\t\t\t\t<ul class=\"uk-breadcrumb uk-flex-center uk-margin-remove\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"index\">Home</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<span>Contacts</span>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<h1 class=\"uk-margin-small-top uk-margin-remove-bottom\">Contacts</h1>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<div class=\"uk-grid-medium\" uk-grid>\n\t\t\t\t\t<section class=\"uk-width-1-1 uk-width-expand@m\">\n\t\t\t\t\t\t<article class=\"uk-card uk-card-default uk-card-small uk-card-body uk-article tm-ignore-container\">\n\t\t\t\t\t\t\t<div class=\"tm-wrapper\">\n\t\t\t\t\t\t\t\t<figure class=\"tm-ratio tm-ratio-16-9 js-map\" data-latitude=\"59.9356728\" data-longitude=\"30.3258604\" data-zoom=\"14\"></figure>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"uk-child-width-1-1 uk-child-width-1-2@s uk-margin-top\" uk-grid>\n\t\t\t\t\t\t\t\t<section>\n\t\t\t\t\t\t\t\t\t<h3>Store</h3>\n\t\t\t\t\t\t\t\t\t<ul class=\"uk-list\">\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"uk-link-heading\" href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-margin-small-right\" uk-icon=\"receiver\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-pseudo\">8 800 799 99 99</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"uk-link-heading\" href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-margin-small-right\" uk-icon=\"mail\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tm-pseudo\">example@example.com</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-margin-small-right\" uk-icon=\"location\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>St.&nbsp;Petersburg, Nevsky&nbsp;Prospect&nbsp;28</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"uk-margin-small-right\" uk-icon=\"clock\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Daily 10:00–22:00</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t<section>\n\t\t\t\t\t\t\t\t\t<h3>Feedback</h3>\n\t\t\t\t\t\t\t\t\t<dl class=\"uk-description-list\">\n\t\t\t\t\t\t\t\t\t\t<dt>Cooperation</dt>\n\t\t\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"uk-link-muted\" href=\"#\">cooperation@example.com</a>\n\t\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t\t\t<dt>Partners</dt>\n\t\t\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"uk-link-muted\" href=\"#\">partners@example.com</a>\n\t\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t\t\t<dt>Press</dt>\n\t\t\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"uk-link-muted\" href=\"#\">press@example.com</a>\n\t\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t<section class=\"uk-width-1-1\">\n\t\t\t\t\t\t\t\t\t<h2 class=\"uk-text-center\">Contact Us</h2>\n\t\t\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t\t\t<div class=\"uk-grid-small uk-child-width-1-1\" uk-grid>\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-form-label uk-form-label-required\">Name</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"uk-input\" type=\"text\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-form-label uk-form-label-required\">Email</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"uk-input\" type=\"email\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-form-label\">Topic</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"uk-select\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Customer service</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Tech support</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Other</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-form-label\">Message</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"uk-textarea\" rows=\"5\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"uk-button uk-button-primary\">Send</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</article>\n\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t<aside class=\"uk-width-1-4 uk-visible@m tm-aside-column\">\n\t\t\t\t\t\t\t\t<section class=\"uk-card uk-card-default uk-card-small\" uk-sticky=\"offset: 90; bottom: true;\">\n\t\t\t\t\t\t\t\t\t<nav>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"uk-nav uk-nav-default tm-nav\">\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"about\">About</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"uk-active\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"contact\">Contacts</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"blog\">Blog</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"news\">News</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"faq\">FAQ</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"delivery\">Delivery</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t</aside>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/delivery/delivery.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/pages/delivery/delivery.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"uk-section uk-section-small\">\n\t<div class=\"uk-container\">\n\t\t<div class=\"uk-grid-medium uk-child-width-1-1\" uk-grid>\n\t\t\t<app-delivery-heading></app-delivery-heading>\n\t\t\t<div>\n\t\t\t\t<div class=\"uk-grid-medium\" uk-grid>\n\t\t\t\t\t<section class=\"uk-width-1-1 uk-width-expand@m\">\n\t\t\t\t\t\t<article class=\"uk-card uk-card-default uk-card-small uk-card-body uk-article tm-ignore-container\">\n\t\t\t\t\t\t\t<h2>Pickup from store in St. Petersburg</h2>\n\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet venenatis est. Phasellus vitae mauris imperdiet, condimentum eros vel, ullamcorper turpis. Maecenas sed libero quis orci egestas vehicula fermentum id diam.</p>\n\t\t\t\t\t\t\t<figure>\n\t\t\t\t\t\t\t\t<div class=\"uk-text-bolder\">Store Name</div>\n\t\t\t\t\t\t\t\t<div>St.&nbsp;Petersburg, Nevsky&nbsp;Prospect&nbsp;28</div>\n\t\t\t\t\t\t\t\t<div>Daily 10:00–22:00</div>\n\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t\t<div class=\"tm-wrapper\">\n\t\t\t\t\t\t\t\t<figure class=\"tm-ratio tm-ratio-16-9 js-map\" data-latitude=\"59.9356728\" data-longitude=\"30.3258604\" data-zoom=\"14\"></figure>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<h2>Delivery in St. Petersburg</h2>\n\t\t\t\t\t\t\t<p>Nullam massa sem, mollis ut luctus at, tincidunt a lorem. Aliquam sed dictum elit, quis consequat metus. Proin in mauris finibus urna lacinia laoreet sed id orci. Pellentesque volutpat tellus sit amet enim rutrum, vel eleifend metus consectetur. Sed lacinia urna a neque maximus placerat. Praesent blandit hendrerit dui non placerat.</p>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>Fusce eget lorem ex. Vivamus nisl eros, condimentum at mollis id, tempor a risus. Integer pellentesque bibendum est, dapibus lacinia lacus.</li>\n\t\t\t\t\t\t\t\t<li>Vivamus tellus nibh, mattis at aliquam et, vestibulum aliquet leo. Nunc cursus lectus ex, laoreet commodo ligula posuere nec.</li>\n\t\t\t\t\t\t\t\t<li>Suspendisse potenti. Vivamus fermentum vitae lacus ut vulputate. Mauris sed consectetur nibh.</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<h2>Regional Delivery</h2>\n\t\t\t\t\t\t\t<p>Aliquam erat volutpat. Pellentesque sit amet risus odio. Vestibulum id porta libero, non interdum libero. Integer pretium tempus viverra. Nulla iaculis sed tellus vel luctus. Curabitur maximus quis nibh mattis pulvinar. Mauris convallis dapibus justo, at fringilla erat porta at. Vivamus at ante nec augue convallis consectetur at vitae orci.</p>\n\t\t\t\t\t\t\t<p>Sed a rhoncus felis, quis efficitur orci. Maecenas imperdiet non sapien a sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce pretium ipsum posuere, congue leo sit amet, finibus sem. Morbi aliquam pellentesque egestas. Curabitur sit amet commodo ipsum.</p>\n\t\t\t\t\t\t</article>\n          </section>\n          \n          <app-news-rightsidebar></app-news-rightsidebar>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/faq/faq.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/pages/faq/faq.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"uk-section uk-section-small\">\n\t<div class=\"uk-container\">\n\t\t<div class=\"uk-grid-medium uk-child-width-1-1\" uk-grid>\n\t\t\t<app-faq-heading></app-faq-heading>\n\t\t\t<div>\n\t\t\t\t<div class=\"uk-grid-medium\" uk-grid>\n\t\t\t\t\t<section class=\"uk-width-1-1 uk-width-expand@m\">\n\t\t\t\t\t\t<article class=\"uk-card uk-card-default uk-card-small uk-card-body uk-article tm-ignore-container\">\n\t\t\t\t\t\t\t<ul class=\"uk-list-divider uk-list-large\" uk-accordion=\"multiple: true\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a class=\"uk-accordion-title\" href=\"#\">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</a>\n\t\t\t\t\t\t\t\t\t<div class=\"uk-accordion-content\">\n\t\t\t\t\t\t\t\t\t\t<p>Vivamus imperdiet venenatis est. Phasellus vitae mauris imperdiet, condimentum eros vel, ullamcorper turpis. Maecenas sed libero quis orci egestas vehicula fermentum id diam. In sodales quam quis mi mollis eleifend id sit amet velit. Sed ultricies condimentum magna, vel commodo dolor luctus in. Aliquam et orci nibh. Nunc purus metus, aliquam vitae venenatis sit amet, porta non est. Proin vehicula nisi eu molestie varius. Pellentesque semper ex diam, at tristique ipsum varius sed. Pellentesque non metus ullamcorper, iaculis nibh quis, facilisis lorem. Sed malesuada eu lacus sit amet feugiat. Aenean iaculis dui sed quam consectetur elementum.</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a class=\"uk-accordion-title\" href=\"#\">Nullam massa sem, mollis ut luctus at, tincidunt a lorem?</a>\n\t\t\t\t\t\t\t\t\t<div class=\"uk-accordion-content\">\n\t\t\t\t\t\t\t\t\t\t<p>Aliquam sed dictum elit, quis consequat metus. Proin in mauris finibus urna lacinia laoreet sed id orci. Pellentesque volutpat tellus sit amet enim rutrum, vel eleifend metus consectetur. Sed lacinia urna a neque maximus placerat. Praesent blandit hendrerit dui non placerat. Sed malesuada sem sit amet arcu faucibus, sit amet accumsan nisl laoreet. Quisque auctor sit amet nisl rhoncus interdum. Nullam euismod odio sem, quis pulvinar purus gravida eget. Nullam molestie, lacus vel vehicula elementum, massa arcu bibendum lacus, vitae tempus justo orci id lectus. Duis justo neque, elementum eget ante in, condimentum condimentum ante. Maecenas quis eleifend risus. In hac habitasse platea dictumst. Nunc posuere ultrices dolor, at auctor lacus dignissim ut. Donec viverra imperdiet nisi, sit amet mattis massa pellentesque ac.</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a class=\"uk-accordion-title\" href=\"#\">Aliquam pretium diam et ullamcorper malesuada?</a>\n\t\t\t\t\t\t\t\t\t<div class=\"uk-accordion-content\">\n\t\t\t\t\t\t\t\t\t\t<p>Praesent feugiat lectus faucibus tellus congue pharetra. In viverra vehicula pellentesque. Etiam consectetur ultricies magna at bibendum. Sed posuere libero ut nulla ornare, faucibus pellentesque odio pulvinar. Vestibulum feugiat ex id ex elementum egestas. Integer laoreet mollis risus, id efficitur neque. Pellentesque quis dolor faucibus, ultrices tellus id, vestibulum neque. Sed eros purus, dignissim id fermentum ut, lacinia laoreet odio. Sed mi erat, aliquet at facilisis quis, laoreet in massa. Pellentesque eu massa accumsan, iaculis erat eu, tincidunt sem. Quisque id orci id dui congue pretium. Pellentesque iaculis, dolor aliquet tempor laoreet, enim metus tincidunt massa, ut porttitor sem dui sit amet arcu. Vestibulum sodales laoreet enim, sit amet vestibulum nisl porttitor a.</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a class=\"uk-accordion-title\" href=\"#\">Etiam suscipit at nisi eget auctor?</a>\n\t\t\t\t\t\t\t\t\t<div class=\"uk-accordion-content\">\n\t\t\t\t\t\t\t\t\t\t<p>Mauris id pellentesque metus. In quis arcu sed enim maximus pellentesque et eget velit. Etiam euismod enim vitae condimentum tristique.</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a class=\"uk-accordion-title\" href=\"#\">Sed porta diam eget enim bibendum laoreet?</a>\n\t\t\t\t\t\t\t\t\t<div class=\"uk-accordion-content\">\n\t\t\t\t\t\t\t\t\t\t<p>Donec molestie sem et tellus vestibulum venenatis. Quisque iaculis ornare luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi velit nibh, ullamcorper eu imperdiet id, rutrum quis mi. Donec eu aliquet lorem. Nulla at lectus turpis. Sed et diam ac lorem iaculis lacinia.</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</article>\n          </section>\n          \n          <app-news-rightsidebar></app-news-rightsidebar>\n          \n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/favorites/favorites.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/pages/favorites/favorites.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"uk-section uk-section-small\">\n  <div class=\"uk-container\">\n    <div class=\"uk-grid-medium\" uk-grid>\n      <div class=\"uk-width-1-1 uk-width-1-4@m tm-aside-column\">\n\n\n        <app-account-leftsidebar></app-account-leftsidebar>\n\n      </div>\n      <div class=\"uk-width-1-1 uk-width-expand@m\">\n        <div class=\"uk-card uk-card-default uk-card-small tm-ignore-container\">\n          <header class=\"uk-card-header\">\n            <h1 class=\"uk-h2\">Favorites</h1>\n          </header>\n          <div class=\"uk-grid-collapse tm-products-list\" uk-grid>\n\n            <app-favorite-products></app-favorite-products>\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/landingpage/landingpage.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/pages/landingpage/landingpage.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slideshow-items></app-slideshow-items>\n<app-basic-categories></app-basic-categories>\n<app-trending-items></app-trending-items>\n<app-popular-brands></app-popular-brands>\n<app-blogs></app-blogs>\n<app-about-n-latest-news></app-about-n-latest-news>\n<app-subscription></app-subscription>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/news/news.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/pages/news/news.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"uk-section uk-section-small\">\n\t<div class=\"uk-container\">\n\t\t<div class=\"uk-grid-medium uk-child-width-1-1\" uk-grid>\n\t\t\t<div class=\"uk-text-center\">\n\t\t\t\t<ul class=\"uk-breadcrumb uk-flex-center uk-margin-remove\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"index\">Home</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<span>News</span>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<h1 class=\"uk-margin-small-top uk-margin-remove-bottom\">News</h1>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<div class=\"uk-grid-medium\" uk-grid>\n\t\t\t\t\t<section class=\"uk-width-1-1 uk-width-expand@m\">\n\t\t\t\t\t\t<section class=\"uk-card uk-card-default uk-card-small uk-card-body tm-ignore-container\">\n\t\t\t\t\t\t\t<ul class=\"uk-list uk-list-large uk-list-divider\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<article class=\"uk-article\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"uk-article-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-article-meta uk-margin-xsmall-bottom\">\n\t\t\t\t\t\t\t\t\t\t\t\t<time>June 4, 2018</time>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"uk-link-heading\" href=\"article\">Highlights from WWDC</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-margin-small-top\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales eget ipsum id aliquam. Nam consectetur interdum nibh eget sodales. Cras volutpat efficitur ornare.</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</article>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<article class=\"uk-article\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"uk-article-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-article-meta uk-margin-xsmall-bottom\">\n\t\t\t\t\t\t\t\t\t\t\t\t<time>June 4, 2018</time>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"uk-link-heading\" href=\"article\">Apple introduces macOS Mojave</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-margin-small-top\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales eget ipsum id aliquam. Nam consectetur interdum nibh eget sodales. Cras volutpat efficitur ornare.</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</article>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<article class=\"uk-article\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"uk-article-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-article-meta uk-margin-xsmall-bottom\">\n\t\t\t\t\t\t\t\t\t\t\t\t<time>May 29, 2018</time>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"uk-link-heading\" href=\"article\">iOS 11.4 brings stereo pairs and multi-room audio with AirPlay 2</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-margin-small-top\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales eget ipsum id aliquam. Nam consectetur interdum nibh eget sodales. Cras volutpat efficitur ornare.</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</article>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</section>\n          </section>\n          <app-news-rightsidebar></app-news-rightsidebar>\n          \n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/notfound/notfound.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/pages/notfound/notfound.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"uk-section uk-section-small\">\n\t<div class=\"uk-container\">\n\t\t<div class=\"uk-text-center\">\n\t\t\t<h1 class=\"uk-heading-hero\">404</h1>\n\t\t\t<div class=\"uk-text-lead\">Page not found</div>\n\t\t\t<div class=\"uk-margin-top\">Looks like the page you're trying to visit doesn't exist.<br>\n\t\t\t\t\t<a href=\"index\">Go back to Homepage</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/personal/personal.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/pages/personal/personal.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"uk-section uk-section-small\">\n  <div class=\"uk-container\">\n    <div class=\"uk-grid-medium\" uk-grid>\n      <div class=\"uk-width-1-1 uk-width-1-4@m tm-aside-column\">\n\n\n        <app-account-leftsidebar></app-account-leftsidebar>\n\n      </div>\n      <div class=\"uk-width-1-1 uk-width-expand@m\">\n\n        <app-personal-info></app-personal-info>\n\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/product/product.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/pages/product/product.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"uk-section uk-section-small\">\n  <div class=\"uk-container\">\n    <div class=\"uk-grid-medium uk-child-width-1-1\" uk-grid>\n\n      <app-product-heading></app-product-heading>\n      <div>\n        <div class=\"uk-grid-medium uk-child-width-1-1\" uk-grid>\n          <div>\n            <div class=\"uk-card uk-card-default uk-card-small tm-ignore-container\">\n              <div class=\"uk-grid-small uk-grid-collapse uk-grid-match\" uk-grid>\n\n                <div class=\"uk-width-1-1 uk-width-expand@m\">\n                  <app-product-image></app-product-image>\n                </div>\n\n                <div class=\"uk-width-1-1 uk-width-1-3@m tm-product-info\">\n                  <app-product-info></app-product-info>\n                </div>\n\n                <div class=\"uk-width-1-1 tm-product-description\" id=\"description\">\n                  <header>\n                    <nav class=\"tm-product-nav\"\n                      uk-sticky=\"offset: 60; bottom: #description; cls-active: tm-product-nav-fixed;\">\n                      <ul class=\"uk-subnav uk-subnav-pill js-product-switcher\" uk-switcher=\"connect: .js-tabs\">\n                        <li>\n                          <a class=\"js-scroll-to-description\" href=\"#description\">Overview</a>\n                        </li>\n                        <li>\n                          <a class=\"js-scroll-to-description\" href=\"#description\">Specifications</a>\n                        </li>\n                        <li>\n                          <a class=\"js-scroll-to-description\" href=\"#description\">Accessories\n                            <span>(9)</span>\n                          </a>\n                        </li>\n                        <li>\n                          <a class=\"js-scroll-to-description\" href=\"#description\">Reviews\n                            <span>(2)</span>\n                          </a>\n                        </li>\n                        <li>\n                          <a class=\"js-scroll-to-description\" href=\"#description\">Q&A</a>\n                        </li>\n                      </ul>\n                    </nav>\n                  </header>\n\n\n\n                  <div class=\"uk-card-body\">\n                    <div class=\"uk-switcher js-product-switcher js-tabs\">\n                      <app-product-overview></app-product-overview>\n                      <app-product-specifications></app-product-specifications>\n                      <app-product-accessories></app-product-accessories>\n                      <app-product-reviews></app-product-reviews>\n                      <app-product-qna></app-product-qna>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- Related items-->\n          <app-product-relateditems></app-product-relateditems>\n        </div>\n        <app-product-newreview></app-product-newreview>\n\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/settings/settings.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/pages/settings/settings.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"uk-section uk-section-small\">\n\t<div class=\"uk-container\">\n\t\t<div class=\"uk-grid-medium\" uk-grid>\n\t\t\t<div class=\"uk-width-1-1 uk-width-1-4@m tm-aside-column\">\n        \n        \n        <app-account-leftsidebar></app-account-leftsidebar>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"uk-width-1-1 uk-width-expand@m\">\n\t\t\t\t\t<div class=\"uk-card uk-card-default uk-card-small tm-ignore-container\">\n\t\t\t\t\t\t<header class=\"uk-card-header\">\n\t\t\t\t\t\t\t<h1 class=\"uk-h2\">Settings</h1>\n\t\t\t\t\t\t</header>\n\t\t\t\t\t\t<div class=\"uk-card-body\">\n\t\t\t\t\t\t\t<form class=\"uk-form-stacked\">\n\t\t\t\t\t\t\t\t<div class=\"uk-grid-medium uk-child-width-1-1\" uk-grid>\n\t\t\t\t\t\t\t\t\t<fieldset class=\"uk-fieldset\">\n\t\t\t\t\t\t\t\t\t\t<legend class=\"uk-h4\">Email</legend>\n\t\t\t\t\t\t\t\t\t\t<div class=\"uk-grid-small uk-child-width-1-1\" uk-grid>\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-form-label\">Current Email</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"uk-input uk-form-width-large\" type=\"email\" value=\"example@example.com\" disabled>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-form-label\">New Email</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"uk-input uk-form-width-large\" type=\"email\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"uk-button uk-button-primary\">update email</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t\t\t\t\t\t<fieldset class=\"uk-fieldset\">\n\t\t\t\t\t\t\t\t\t\t\t\t<legend class=\"uk-h4\">Password</legend>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-grid-small uk-child-width-1-1\" uk-grid>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-form-label\">Current Password</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"uk-input uk-form-width-large\" type=\"password\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-form-label\">New Password</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"uk-input uk-form-width-large\" type=\"password\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uk-form-label\">Confirm Password</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"uk-input uk-form-width-large\" type=\"password\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"uk-button uk-button-primary\">update password</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<fieldset class=\"uk-fieldset\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<legend class=\"uk-h4\">Email Notifications</legend>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"uk-list uk-margin-remove\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"tm-checkbox\" id=\"notification-1\" type=\"checkbox\" name=\"notification\" value=\"1\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"notification-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Weekly Newsletter</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"tm-checkbox\" id=\"notification-2\" type=\"checkbox\" name=\"notification\" value=\"1\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"notification-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>New Product Announcements</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"tm-checkbox\" id=\"notification-3\" type=\"checkbox\" name=\"notification\" value=\"1\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"notification-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Product Specials</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/subcategory/subcategory.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/core/pages/subcategory/subcategory.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"uk-section uk-section-small\">\n  <div class=\"uk-container\">\n    <div class=\"uk-grid-medium uk-child-width-1-1\" uk-grid> \n      <app-subcategory-heading></app-subcategory-heading>\n\n      <div>\n        <div class=\"uk-grid-medium\" uk-grid>\n          <aside class=\"uk-width-1-4 tm-aside-column tm-filters\" id=\"filters\"\n            uk-offcanvas=\"overlay: true; container: false;\">\n            <div class=\"uk-offcanvas-bar uk-padding-remove\">\n\n              <app-subcategory-leftsidebar></app-subcategory-leftsidebar>\n            </div>\n          </aside>\n          <div class=\"uk-width-expand\">\n            <div class=\"uk-grid-medium uk-child-width-1-1\" uk-grid>\n\n              <app-category-body></app-category-body>\n\n\n              <app-pagination></app-pagination>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: 'users',
        loadChildren: './modules/users/users.module#UsersModule'
    }, {
        path: 'brands',
        loadChildren: './modules/brands/brands.module#BrandsModule'
    },
    {
        path: 'homes',
        loadChildren: './modules/homes/homes.module#HomesModule'
    },
    {
        path: '',
        loadChildren: './modules/core/core.module#CoreModule'
    },
    // {
    //   path: '',
    //   //redirectTo: 'homes',
    //   redirectTo: '',
    //   pathMatch: 'full'
    // },
    {
        path: '**',
        redirectTo: '',
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'webinfer-affiliate';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/core/core.module */ "./src/app/modules/core/core.module.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _modules_core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/modules/core/components/footer/footer.component.less":
/*!**********************************************************************!*\
  !*** ./src/app/modules/core/components/footer/footer.component.less ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/core/components/footer/footer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/core/components/footer/footer.component.ts ***!
  \********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.less */ "./src/app/modules/core/components/footer/footer.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/modules/core/components/nav/nav.component.less":
/*!****************************************************************!*\
  !*** ./src/app/modules/core/components/nav/nav.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/core/components/nav/nav.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/core/components/nav/nav.component.ts ***!
  \**************************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavComponent = class NavComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/components/nav/nav.component.html"),
        styles: [__webpack_require__(/*! ./nav.component.less */ "./src/app/modules/core/components/nav/nav.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavComponent);



/***/ }),

/***/ "./src/app/modules/core/components/pagination/pagination.component.less":
/*!******************************************************************************!*\
  !*** ./src/app/modules/core/components/pagination/pagination.component.less ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/components/pagination/pagination.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/core/components/pagination/pagination.component.ts ***!
  \****************************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaginationComponent = class PaginationComponent {
    constructor() { }
    ngOnInit() {
    }
};
PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagination',
        template: __webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/components/pagination/pagination.component.html"),
        styles: [__webpack_require__(/*! ./pagination.component.less */ "./src/app/modules/core/components/pagination/pagination.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PaginationComponent);



/***/ }),

/***/ "./src/app/modules/core/components/sub-footer/sub-footer.component.less":
/*!******************************************************************************!*\
  !*** ./src/app/modules/core/components/sub-footer/sub-footer.component.less ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb21wb25lbnRzL3N1Yi1mb290ZXIvc3ViLWZvb3Rlci5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/components/sub-footer/sub-footer.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/core/components/sub-footer/sub-footer.component.ts ***!
  \****************************************************************************/
/*! exports provided: SubFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubFooterComponent", function() { return SubFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SubFooterComponent = class SubFooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
SubFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sub-footer',
        template: __webpack_require__(/*! raw-loader!./sub-footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/components/sub-footer/sub-footer.component.html"),
        styles: [__webpack_require__(/*! ./sub-footer.component.less */ "./src/app/modules/core/components/sub-footer/sub-footer.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SubFooterComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/about-n-latest-news/about-n-latest-news.component.less":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/about-n-latest-news/about-n-latest-news.component.less ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2Fib3V0LW4tbGF0ZXN0LW5ld3MvYWJvdXQtbi1sYXRlc3QtbmV3cy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/containers/about-n-latest-news/about-n-latest-news.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/core/containers/about-n-latest-news/about-n-latest-news.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AboutNLatestNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutNLatestNewsComponent", function() { return AboutNLatestNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutNLatestNewsComponent = class AboutNLatestNewsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutNLatestNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-n-latest-news',
        template: __webpack_require__(/*! raw-loader!./about-n-latest-news.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/about-n-latest-news/about-n-latest-news.component.html"),
        styles: [__webpack_require__(/*! ./about-n-latest-news.component.less */ "./src/app/modules/core/containers/about-n-latest-news/about-n-latest-news.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutNLatestNewsComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/about/about-heading/about-heading.component.less":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/core/containers/about/about-heading/about-heading.component.less ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2Fib3V0L2Fib3V0LWhlYWRpbmcvYWJvdXQtaGVhZGluZy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/containers/about/about-heading/about-heading.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/core/containers/about/about-heading/about-heading.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AboutHeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutHeadingComponent", function() { return AboutHeadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutHeadingComponent = class AboutHeadingComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutHeadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-heading',
        template: __webpack_require__(/*! raw-loader!./about-heading.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/about/about-heading/about-heading.component.html"),
        styles: [__webpack_require__(/*! ./about-heading.component.less */ "./src/app/modules/core/containers/about/about-heading/about-heading.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutHeadingComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/about/stats/stats.component.less":
/*!**************************************************************************!*\
  !*** ./src/app/modules/core/containers/about/stats/stats.component.less ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2Fib3V0L3N0YXRzL3N0YXRzLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/core/containers/about/stats/stats.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/core/containers/about/stats/stats.component.ts ***!
  \************************************************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StatsComponent = class StatsComponent {
    constructor() { }
    ngOnInit() {
    }
};
StatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stats',
        template: __webpack_require__(/*! raw-loader!./stats.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/about/stats/stats.component.html"),
        styles: [__webpack_require__(/*! ./stats.component.less */ "./src/app/modules/core/containers/about/stats/stats.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StatsComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/about/store/store.component.less":
/*!**************************************************************************!*\
  !*** ./src/app/modules/core/containers/about/store/store.component.less ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2Fib3V0L3N0b3JlL3N0b3JlLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/core/containers/about/store/store.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/core/containers/about/store/store.component.ts ***!
  \************************************************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StoreComponent = class StoreComponent {
    constructor() { }
    ngOnInit() {
    }
};
StoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-store',
        template: __webpack_require__(/*! raw-loader!./store.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/about/store/store.component.html"),
        styles: [__webpack_require__(/*! ./store.component.less */ "./src/app/modules/core/containers/about/store/store.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StoreComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/about/team/team.component.less":
/*!************************************************************************!*\
  !*** ./src/app/modules/core/containers/about/team/team.component.less ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2Fib3V0L3RlYW0vdGVhbS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/containers/about/team/team.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/core/containers/about/team/team.component.ts ***!
  \**********************************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TeamComponent = class TeamComponent {
    constructor() { }
    ngOnInit() {
    }
};
TeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-team',
        template: __webpack_require__(/*! raw-loader!./team.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/about/team/team.component.html"),
        styles: [__webpack_require__(/*! ./team.component.less */ "./src/app/modules/core/containers/about/team/team.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TeamComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/account/account-leftsidebar/account-leftsidebar.component.less":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/account/account-leftsidebar/account-leftsidebar.component.less ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2FjY291bnQvYWNjb3VudC1sZWZ0c2lkZWJhci9hY2NvdW50LWxlZnRzaWRlYmFyLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/core/containers/account/account-leftsidebar/account-leftsidebar.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/account/account-leftsidebar/account-leftsidebar.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: AccountLeftsidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountLeftsidebarComponent", function() { return AccountLeftsidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AccountLeftsidebarComponent = class AccountLeftsidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
AccountLeftsidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account-leftsidebar',
        template: __webpack_require__(/*! raw-loader!./account-leftsidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/account/account-leftsidebar/account-leftsidebar.component.html"),
        styles: [__webpack_require__(/*! ./account-leftsidebar.component.less */ "./src/app/modules/core/containers/account/account-leftsidebar/account-leftsidebar.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AccountLeftsidebarComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/account/account-orders/account-orders.component.less":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/core/containers/account/account-orders/account-orders.component.less ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2FjY291bnQvYWNjb3VudC1vcmRlcnMvYWNjb3VudC1vcmRlcnMuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/core/containers/account/account-orders/account-orders.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/core/containers/account/account-orders/account-orders.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AccountOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountOrdersComponent", function() { return AccountOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AccountOrdersComponent = class AccountOrdersComponent {
    constructor() { }
    ngOnInit() {
    }
};
AccountOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account-orders',
        template: __webpack_require__(/*! raw-loader!./account-orders.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/account/account-orders/account-orders.component.html"),
        styles: [__webpack_require__(/*! ./account-orders.component.less */ "./src/app/modules/core/containers/account/account-orders/account-orders.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AccountOrdersComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/basic-categories/basic-categories.component.less":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/core/containers/basic-categories/basic-categories.component.less ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2Jhc2ljLWNhdGVnb3JpZXMvYmFzaWMtY2F0ZWdvcmllcy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/containers/basic-categories/basic-categories.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/core/containers/basic-categories/basic-categories.component.ts ***!
  \****************************************************************************************/
/*! exports provided: BasicCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicCategoriesComponent", function() { return BasicCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BasicCategoriesComponent = class BasicCategoriesComponent {
    constructor() { }
    ngOnInit() {
    }
};
BasicCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-basic-categories',
        template: __webpack_require__(/*! raw-loader!./basic-categories.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/basic-categories/basic-categories.component.html"),
        styles: [__webpack_require__(/*! ./basic-categories.component.less */ "./src/app/modules/core/containers/basic-categories/basic-categories.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BasicCategoriesComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/blogs/blogs.component.less":
/*!********************************************************************!*\
  !*** ./src/app/modules/core/containers/blogs/blogs.component.less ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2Jsb2dzL2Jsb2dzLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/core/containers/blogs/blogs.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/core/containers/blogs/blogs.component.ts ***!
  \******************************************************************/
/*! exports provided: BlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return BlogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BlogsComponent = class BlogsComponent {
    constructor() { }
    ngOnInit() {
    }
};
BlogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blogs',
        template: __webpack_require__(/*! raw-loader!./blogs.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/blogs/blogs.component.html"),
        styles: [__webpack_require__(/*! ./blogs.component.less */ "./src/app/modules/core/containers/blogs/blogs.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BlogsComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/cart/cart-checkout/cart-checkout.component.less":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/core/containers/cart/cart-checkout/cart-checkout.component.less ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2NhcnQvY2FydC1jaGVja291dC9jYXJ0LWNoZWNrb3V0LmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/core/containers/cart/cart-checkout/cart-checkout.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/core/containers/cart/cart-checkout/cart-checkout.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CartCheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartCheckoutComponent", function() { return CartCheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CartCheckoutComponent = class CartCheckoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
CartCheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart-checkout',
        template: __webpack_require__(/*! raw-loader!./cart-checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/cart/cart-checkout/cart-checkout.component.html"),
        styles: [__webpack_require__(/*! ./cart-checkout.component.less */ "./src/app/modules/core/containers/cart/cart-checkout/cart-checkout.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CartCheckoutComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/cart/cart-heading/cart-heading.component.less":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/core/containers/cart/cart-heading/cart-heading.component.less ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2NhcnQvY2FydC1oZWFkaW5nL2NhcnQtaGVhZGluZy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/containers/cart/cart-heading/cart-heading.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/core/containers/cart/cart-heading/cart-heading.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CartHeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartHeadingComponent", function() { return CartHeadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CartHeadingComponent = class CartHeadingComponent {
    constructor() { }
    ngOnInit() {
    }
};
CartHeadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart-heading',
        template: __webpack_require__(/*! raw-loader!./cart-heading.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/cart/cart-heading/cart-heading.component.html"),
        styles: [__webpack_require__(/*! ./cart-heading.component.less */ "./src/app/modules/core/containers/cart/cart-heading/cart-heading.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CartHeadingComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/cart/cart-products/cart-products.component.less":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/core/containers/cart/cart-products/cart-products.component.less ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2NhcnQvY2FydC1wcm9kdWN0cy9jYXJ0LXByb2R1Y3RzLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/core/containers/cart/cart-products/cart-products.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/core/containers/cart/cart-products/cart-products.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CartProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartProductsComponent", function() { return CartProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CartProductsComponent = class CartProductsComponent {
    constructor() { }
    ngOnInit() {
    }
};
CartProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart-products',
        template: __webpack_require__(/*! raw-loader!./cart-products.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/cart/cart-products/cart-products.component.html"),
        styles: [__webpack_require__(/*! ./cart-products.component.less */ "./src/app/modules/core/containers/cart/cart-products/cart-products.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CartProductsComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/catalog/catalog-body/catalog-body.component.less":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/core/containers/catalog/catalog-body/catalog-body.component.less ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2NhdGFsb2cvY2F0YWxvZy1ib2R5L2NhdGFsb2ctYm9keS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/containers/catalog/catalog-body/catalog-body.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/core/containers/catalog/catalog-body/catalog-body.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CatalogBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogBodyComponent", function() { return CatalogBodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CatalogBodyComponent = class CatalogBodyComponent {
    constructor() { }
    ngOnInit() {
    }
};
CatalogBodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-catalog-body',
        template: __webpack_require__(/*! raw-loader!./catalog-body.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/catalog/catalog-body/catalog-body.component.html"),
        styles: [__webpack_require__(/*! ./catalog-body.component.less */ "./src/app/modules/core/containers/catalog/catalog-body/catalog-body.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CatalogBodyComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/catalog/catalog-heading/catalog-heading.component.less":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/catalog/catalog-heading/catalog-heading.component.less ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2NhdGFsb2cvY2F0YWxvZy1oZWFkaW5nL2NhdGFsb2ctaGVhZGluZy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/containers/catalog/catalog-heading/catalog-heading.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/core/containers/catalog/catalog-heading/catalog-heading.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CatalogHeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogHeadingComponent", function() { return CatalogHeadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CatalogHeadingComponent = class CatalogHeadingComponent {
    constructor() { }
    ngOnInit() {
    }
};
CatalogHeadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-catalog-heading',
        template: __webpack_require__(/*! raw-loader!./catalog-heading.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/catalog/catalog-heading/catalog-heading.component.html"),
        styles: [__webpack_require__(/*! ./catalog-heading.component.less */ "./src/app/modules/core/containers/catalog/catalog-heading/catalog-heading.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CatalogHeadingComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/category/category-body/category-body.component.less":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/core/containers/category/category-body/category-body.component.less ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2NhdGVnb3J5L2NhdGVnb3J5LWJvZHkvY2F0ZWdvcnktYm9keS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/containers/category/category-body/category-body.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/core/containers/category/category-body/category-body.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CategoryBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryBodyComponent", function() { return CategoryBodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoryBodyComponent = class CategoryBodyComponent {
    constructor() { }
    ngOnInit() {
    }
};
CategoryBodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-body',
        template: __webpack_require__(/*! raw-loader!./category-body.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/category/category-body/category-body.component.html"),
        styles: [__webpack_require__(/*! ./category-body.component.less */ "./src/app/modules/core/containers/category/category-body/category-body.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CategoryBodyComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/category/category-heading/category-heading.component.less":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/category/category-heading/category-heading.component.less ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2NhdGVnb3J5L2NhdGVnb3J5LWhlYWRpbmcvY2F0ZWdvcnktaGVhZGluZy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/containers/category/category-heading/category-heading.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/category/category-heading/category-heading.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: CategoryHeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryHeadingComponent", function() { return CategoryHeadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoryHeadingComponent = class CategoryHeadingComponent {
    constructor() { }
    ngOnInit() {
    }
};
CategoryHeadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-heading',
        template: __webpack_require__(/*! raw-loader!./category-heading.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/category/category-heading/category-heading.component.html"),
        styles: [__webpack_require__(/*! ./category-heading.component.less */ "./src/app/modules/core/containers/category/category-heading/category-heading.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CategoryHeadingComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/category/category-leftsidebar/category-leftsidebar.component.less":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/category/category-leftsidebar/category-leftsidebar.component.less ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2NhdGVnb3J5L2NhdGVnb3J5LWxlZnRzaWRlYmFyL2NhdGVnb3J5LWxlZnRzaWRlYmFyLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/core/containers/category/category-leftsidebar/category-leftsidebar.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/category/category-leftsidebar/category-leftsidebar.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CategoryLeftsidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryLeftsidebarComponent", function() { return CategoryLeftsidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoryLeftsidebarComponent = class CategoryLeftsidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
CategoryLeftsidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-leftsidebar',
        template: __webpack_require__(/*! raw-loader!./category-leftsidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/category/category-leftsidebar/category-leftsidebar.component.html"),
        styles: [__webpack_require__(/*! ./category-leftsidebar.component.less */ "./src/app/modules/core/containers/category/category-leftsidebar/category-leftsidebar.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CategoryLeftsidebarComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/checkout/checkout-contactinfo/checkout-contactinfo.component.less":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/checkout/checkout-contactinfo/checkout-contactinfo.component.less ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2NoZWNrb3V0L2NoZWNrb3V0LWNvbnRhY3RpbmZvL2NoZWNrb3V0LWNvbnRhY3RpbmZvLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/core/containers/checkout/checkout-contactinfo/checkout-contactinfo.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/checkout/checkout-contactinfo/checkout-contactinfo.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CheckoutContactinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutContactinfoComponent", function() { return CheckoutContactinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CheckoutContactinfoComponent = class CheckoutContactinfoComponent {
    constructor() { }
    ngOnInit() {
    }
};
CheckoutContactinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout-contactinfo',
        template: __webpack_require__(/*! raw-loader!./checkout-contactinfo.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/checkout/checkout-contactinfo/checkout-contactinfo.component.html"),
        styles: [__webpack_require__(/*! ./checkout-contactinfo.component.less */ "./src/app/modules/core/containers/checkout/checkout-contactinfo/checkout-contactinfo.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CheckoutContactinfoComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/checkout/checkout-heading/checkout-heading.component.less":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/checkout/checkout-heading/checkout-heading.component.less ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2NoZWNrb3V0L2NoZWNrb3V0LWhlYWRpbmcvY2hlY2tvdXQtaGVhZGluZy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/containers/checkout/checkout-heading/checkout-heading.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/checkout/checkout-heading/checkout-heading.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: CheckoutHeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutHeadingComponent", function() { return CheckoutHeadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CheckoutHeadingComponent = class CheckoutHeadingComponent {
    constructor() { }
    ngOnInit() {
    }
};
CheckoutHeadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout-heading',
        template: __webpack_require__(/*! raw-loader!./checkout-heading.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/checkout/checkout-heading/checkout-heading.component.html"),
        styles: [__webpack_require__(/*! ./checkout-heading.component.less */ "./src/app/modules/core/containers/checkout/checkout-heading/checkout-heading.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CheckoutHeadingComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/checkout/checkout-payment/checkout-payment.component.less":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/checkout/checkout-payment/checkout-payment.component.less ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2NoZWNrb3V0L2NoZWNrb3V0LXBheW1lbnQvY2hlY2tvdXQtcGF5bWVudC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/containers/checkout/checkout-payment/checkout-payment.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/checkout/checkout-payment/checkout-payment.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: CheckoutPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPaymentComponent", function() { return CheckoutPaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CheckoutPaymentComponent = class CheckoutPaymentComponent {
    constructor() { }
    ngOnInit() {
    }
};
CheckoutPaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout-payment',
        template: __webpack_require__(/*! raw-loader!./checkout-payment.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/checkout/checkout-payment/checkout-payment.component.html"),
        styles: [__webpack_require__(/*! ./checkout-payment.component.less */ "./src/app/modules/core/containers/checkout/checkout-payment/checkout-payment.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CheckoutPaymentComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/checkout/checkout-rightsidebar/checkout-rightsidebar.component.less":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/checkout/checkout-rightsidebar/checkout-rightsidebar.component.less ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2NoZWNrb3V0L2NoZWNrb3V0LXJpZ2h0c2lkZWJhci9jaGVja291dC1yaWdodHNpZGViYXIuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/core/containers/checkout/checkout-rightsidebar/checkout-rightsidebar.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/checkout/checkout-rightsidebar/checkout-rightsidebar.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: CheckoutRightsidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutRightsidebarComponent", function() { return CheckoutRightsidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CheckoutRightsidebarComponent = class CheckoutRightsidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
CheckoutRightsidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout-rightsidebar',
        template: __webpack_require__(/*! raw-loader!./checkout-rightsidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/checkout/checkout-rightsidebar/checkout-rightsidebar.component.html"),
        styles: [__webpack_require__(/*! ./checkout-rightsidebar.component.less */ "./src/app/modules/core/containers/checkout/checkout-rightsidebar/checkout-rightsidebar.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CheckoutRightsidebarComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/checkout/checkout-shipping/checkout-shipping.component.less":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/checkout/checkout-shipping/checkout-shipping.component.less ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2NoZWNrb3V0L2NoZWNrb3V0LXNoaXBwaW5nL2NoZWNrb3V0LXNoaXBwaW5nLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/core/containers/checkout/checkout-shipping/checkout-shipping.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/checkout/checkout-shipping/checkout-shipping.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: CheckoutShippingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutShippingComponent", function() { return CheckoutShippingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CheckoutShippingComponent = class CheckoutShippingComponent {
    constructor() { }
    ngOnInit() {
    }
};
CheckoutShippingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout-shipping',
        template: __webpack_require__(/*! raw-loader!./checkout-shipping.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/checkout/checkout-shipping/checkout-shipping.component.html"),
        styles: [__webpack_require__(/*! ./checkout-shipping.component.less */ "./src/app/modules/core/containers/checkout/checkout-shipping/checkout-shipping.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CheckoutShippingComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/compare/compare-heading/compare-heading.component.less":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/compare/compare-heading/compare-heading.component.less ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2NvbXBhcmUvY29tcGFyZS1oZWFkaW5nL2NvbXBhcmUtaGVhZGluZy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/containers/compare/compare-heading/compare-heading.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/core/containers/compare/compare-heading/compare-heading.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CompareHeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareHeadingComponent", function() { return CompareHeadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CompareHeadingComponent = class CompareHeadingComponent {
    constructor() { }
    ngOnInit() {
    }
};
CompareHeadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-compare-heading',
        template: __webpack_require__(/*! raw-loader!./compare-heading.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/compare/compare-heading/compare-heading.component.html"),
        styles: [__webpack_require__(/*! ./compare-heading.component.less */ "./src/app/modules/core/containers/compare/compare-heading/compare-heading.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CompareHeadingComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/delivery/delivery-heading/delivery-heading.component.less":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/delivery/delivery-heading/delivery-heading.component.less ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2RlbGl2ZXJ5L2RlbGl2ZXJ5LWhlYWRpbmcvZGVsaXZlcnktaGVhZGluZy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/containers/delivery/delivery-heading/delivery-heading.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/delivery/delivery-heading/delivery-heading.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DeliveryHeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryHeadingComponent", function() { return DeliveryHeadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DeliveryHeadingComponent = class DeliveryHeadingComponent {
    constructor() { }
    ngOnInit() {
    }
};
DeliveryHeadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delivery-heading',
        template: __webpack_require__(/*! raw-loader!./delivery-heading.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/delivery/delivery-heading/delivery-heading.component.html"),
        styles: [__webpack_require__(/*! ./delivery-heading.component.less */ "./src/app/modules/core/containers/delivery/delivery-heading/delivery-heading.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DeliveryHeadingComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/faq/faq-heading/faq-heading.component.less":
/*!************************************************************************************!*\
  !*** ./src/app/modules/core/containers/faq/faq-heading/faq-heading.component.less ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2ZhcS9mYXEtaGVhZGluZy9mYXEtaGVhZGluZy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/containers/faq/faq-heading/faq-heading.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/core/containers/faq/faq-heading/faq-heading.component.ts ***!
  \**********************************************************************************/
/*! exports provided: FaqHeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqHeadingComponent", function() { return FaqHeadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FaqHeadingComponent = class FaqHeadingComponent {
    constructor() { }
    ngOnInit() {
    }
};
FaqHeadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-faq-heading',
        template: __webpack_require__(/*! raw-loader!./faq-heading.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/faq/faq-heading/faq-heading.component.html"),
        styles: [__webpack_require__(/*! ./faq-heading.component.less */ "./src/app/modules/core/containers/faq/faq-heading/faq-heading.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FaqHeadingComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/favorites/favorite-products/favorite-products.component.less":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/favorites/favorite-products/favorite-products.component.less ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2Zhdm9yaXRlcy9mYXZvcml0ZS1wcm9kdWN0cy9mYXZvcml0ZS1wcm9kdWN0cy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/containers/favorites/favorite-products/favorite-products.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/favorites/favorite-products/favorite-products.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: FavoriteProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteProductsComponent", function() { return FavoriteProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FavoriteProductsComponent = class FavoriteProductsComponent {
    constructor() { }
    ngOnInit() {
    }
};
FavoriteProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorite-products',
        template: __webpack_require__(/*! raw-loader!./favorite-products.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/favorites/favorite-products/favorite-products.component.html"),
        styles: [__webpack_require__(/*! ./favorite-products.component.less */ "./src/app/modules/core/containers/favorites/favorite-products/favorite-products.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FavoriteProductsComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/header-container/header-container.component.less":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/core/containers/header-container/header-container.component.less ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL2hlYWRlci1jb250YWluZXIvaGVhZGVyLWNvbnRhaW5lci5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/containers/header-container/header-container.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/core/containers/header-container/header-container.component.ts ***!
  \****************************************************************************************/
/*! exports provided: HeaderContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderContainerComponent", function() { return HeaderContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");




let HeaderContainerComponent = class HeaderContainerComponent {
    constructor(router, dataService) {
        this.router = router;
        this.dataService = dataService;
    }
    ngOnInit() {
    }
};
HeaderContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-container',
        template: __webpack_require__(/*! raw-loader!./header-container.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/header-container/header-container.component.html"),
        styles: [__webpack_require__(/*! ./header-container.component.less */ "./src/app/modules/core/containers/header-container/header-container.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
], HeaderContainerComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/news/news-rightsidebar/news-rightsidebar.component.less":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/news/news-rightsidebar/news-rightsidebar.component.less ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL25ld3MvbmV3cy1yaWdodHNpZGViYXIvbmV3cy1yaWdodHNpZGViYXIuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/core/containers/news/news-rightsidebar/news-rightsidebar.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/core/containers/news/news-rightsidebar/news-rightsidebar.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: NewsRightsidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsRightsidebarComponent", function() { return NewsRightsidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NewsRightsidebarComponent = class NewsRightsidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NewsRightsidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news-rightsidebar',
        template: __webpack_require__(/*! raw-loader!./news-rightsidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/news/news-rightsidebar/news-rightsidebar.component.html"),
        styles: [__webpack_require__(/*! ./news-rightsidebar.component.less */ "./src/app/modules/core/containers/news/news-rightsidebar/news-rightsidebar.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NewsRightsidebarComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/personal-info/personal-info.component.less":
/*!************************************************************************************!*\
  !*** ./src/app/modules/core/containers/personal-info/personal-info.component.less ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL3BlcnNvbmFsLWluZm8vcGVyc29uYWwtaW5mby5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/containers/personal-info/personal-info.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/core/containers/personal-info/personal-info.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PersonalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoComponent", function() { return PersonalInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PersonalInfoComponent = class PersonalInfoComponent {
    constructor() { }
    ngOnInit() {
    }
};
PersonalInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personal-info',
        template: __webpack_require__(/*! raw-loader!./personal-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/personal-info/personal-info.component.html"),
        styles: [__webpack_require__(/*! ./personal-info.component.less */ "./src/app/modules/core/containers/personal-info/personal-info.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PersonalInfoComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/popular-brands/popular-brands.component.less":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/core/containers/popular-brands/popular-brands.component.less ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL3BvcHVsYXItYnJhbmRzL3BvcHVsYXItYnJhbmRzLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/core/containers/popular-brands/popular-brands.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/core/containers/popular-brands/popular-brands.component.ts ***!
  \************************************************************************************/
/*! exports provided: PopularBrandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularBrandsComponent", function() { return PopularBrandsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PopularBrandsComponent = class PopularBrandsComponent {
    constructor() { }
    ngOnInit() {
    }
};
PopularBrandsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popular-brands',
        template: __webpack_require__(/*! raw-loader!./popular-brands.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/popular-brands/popular-brands.component.html"),
        styles: [__webpack_require__(/*! ./popular-brands.component.less */ "./src/app/modules/core/containers/popular-brands/popular-brands.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PopularBrandsComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/product/product-accessories/product-accessories.component.less":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/product/product-accessories/product-accessories.component.less ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL3Byb2R1Y3QvcHJvZHVjdC1hY2Nlc3Nvcmllcy9wcm9kdWN0LWFjY2Vzc29yaWVzLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/core/containers/product/product-accessories/product-accessories.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/product/product-accessories/product-accessories.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ProductAccessoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAccessoriesComponent", function() { return ProductAccessoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductAccessoriesComponent = class ProductAccessoriesComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductAccessoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-accessories',
        template: __webpack_require__(/*! raw-loader!./product-accessories.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/product/product-accessories/product-accessories.component.html"),
        styles: [__webpack_require__(/*! ./product-accessories.component.less */ "./src/app/modules/core/containers/product/product-accessories/product-accessories.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductAccessoriesComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/product/product-heading/product-heading.component.less":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/product/product-heading/product-heading.component.less ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL3Byb2R1Y3QvcHJvZHVjdC1oZWFkaW5nL3Byb2R1Y3QtaGVhZGluZy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/containers/product/product-heading/product-heading.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/core/containers/product/product-heading/product-heading.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ProductHeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductHeadingComponent", function() { return ProductHeadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductHeadingComponent = class ProductHeadingComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductHeadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-heading',
        template: __webpack_require__(/*! raw-loader!./product-heading.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/product/product-heading/product-heading.component.html"),
        styles: [__webpack_require__(/*! ./product-heading.component.less */ "./src/app/modules/core/containers/product/product-heading/product-heading.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductHeadingComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/product/product-image/product-image.component.less":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/core/containers/product/product-image/product-image.component.less ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL3Byb2R1Y3QvcHJvZHVjdC1pbWFnZS9wcm9kdWN0LWltYWdlLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/core/containers/product/product-image/product-image.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/core/containers/product/product-image/product-image.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ProductImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductImageComponent", function() { return ProductImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductImageComponent = class ProductImageComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-image',
        template: __webpack_require__(/*! raw-loader!./product-image.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/product/product-image/product-image.component.html"),
        styles: [__webpack_require__(/*! ./product-image.component.less */ "./src/app/modules/core/containers/product/product-image/product-image.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductImageComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/product/product-info/product-info.component.less":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/core/containers/product/product-info/product-info.component.less ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL3Byb2R1Y3QvcHJvZHVjdC1pbmZvL3Byb2R1Y3QtaW5mby5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/containers/product/product-info/product-info.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/core/containers/product/product-info/product-info.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProductInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductInfoComponent", function() { return ProductInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductInfoComponent = class ProductInfoComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-info',
        template: __webpack_require__(/*! raw-loader!./product-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/product/product-info/product-info.component.html"),
        styles: [__webpack_require__(/*! ./product-info.component.less */ "./src/app/modules/core/containers/product/product-info/product-info.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductInfoComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/product/product-newreview/product-newreview.component.less":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/product/product-newreview/product-newreview.component.less ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL3Byb2R1Y3QvcHJvZHVjdC1uZXdyZXZpZXcvcHJvZHVjdC1uZXdyZXZpZXcuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/core/containers/product/product-newreview/product-newreview.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/product/product-newreview/product-newreview.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ProductNewreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductNewreviewComponent", function() { return ProductNewreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductNewreviewComponent = class ProductNewreviewComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductNewreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-newreview',
        template: __webpack_require__(/*! raw-loader!./product-newreview.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/product/product-newreview/product-newreview.component.html"),
        styles: [__webpack_require__(/*! ./product-newreview.component.less */ "./src/app/modules/core/containers/product/product-newreview/product-newreview.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductNewreviewComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/product/product-overview/product-overview.component.less":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/product/product-overview/product-overview.component.less ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL3Byb2R1Y3QvcHJvZHVjdC1vdmVydmlldy9wcm9kdWN0LW92ZXJ2aWV3LmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/core/containers/product/product-overview/product-overview.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/product/product-overview/product-overview.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ProductOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductOverviewComponent", function() { return ProductOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductOverviewComponent = class ProductOverviewComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-overview',
        template: __webpack_require__(/*! raw-loader!./product-overview.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/product/product-overview/product-overview.component.html"),
        styles: [__webpack_require__(/*! ./product-overview.component.less */ "./src/app/modules/core/containers/product/product-overview/product-overview.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductOverviewComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/product/product-qna/product-qna.component.less":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/core/containers/product/product-qna/product-qna.component.less ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL3Byb2R1Y3QvcHJvZHVjdC1xbmEvcHJvZHVjdC1xbmEuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/core/containers/product/product-qna/product-qna.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/core/containers/product/product-qna/product-qna.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProductQnaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductQnaComponent", function() { return ProductQnaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductQnaComponent = class ProductQnaComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductQnaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-qna',
        template: __webpack_require__(/*! raw-loader!./product-qna.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/product/product-qna/product-qna.component.html"),
        styles: [__webpack_require__(/*! ./product-qna.component.less */ "./src/app/modules/core/containers/product/product-qna/product-qna.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductQnaComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/product/product-relateditems/product-relateditems.component.less":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/product/product-relateditems/product-relateditems.component.less ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL3Byb2R1Y3QvcHJvZHVjdC1yZWxhdGVkaXRlbXMvcHJvZHVjdC1yZWxhdGVkaXRlbXMuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/core/containers/product/product-relateditems/product-relateditems.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/product/product-relateditems/product-relateditems.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ProductRelateditemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRelateditemsComponent", function() { return ProductRelateditemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductRelateditemsComponent = class ProductRelateditemsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductRelateditemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-relateditems',
        template: __webpack_require__(/*! raw-loader!./product-relateditems.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/product/product-relateditems/product-relateditems.component.html"),
        styles: [__webpack_require__(/*! ./product-relateditems.component.less */ "./src/app/modules/core/containers/product/product-relateditems/product-relateditems.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductRelateditemsComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/product/product-reviews/product-reviews.component.less":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/product/product-reviews/product-reviews.component.less ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL3Byb2R1Y3QvcHJvZHVjdC1yZXZpZXdzL3Byb2R1Y3QtcmV2aWV3cy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/containers/product/product-reviews/product-reviews.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/core/containers/product/product-reviews/product-reviews.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ProductReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReviewsComponent", function() { return ProductReviewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductReviewsComponent = class ProductReviewsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductReviewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-reviews',
        template: __webpack_require__(/*! raw-loader!./product-reviews.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/product/product-reviews/product-reviews.component.html"),
        styles: [__webpack_require__(/*! ./product-reviews.component.less */ "./src/app/modules/core/containers/product/product-reviews/product-reviews.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductReviewsComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/product/product-specifications/product-specifications.component.less":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/product/product-specifications/product-specifications.component.less ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL3Byb2R1Y3QvcHJvZHVjdC1zcGVjaWZpY2F0aW9ucy9wcm9kdWN0LXNwZWNpZmljYXRpb25zLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/core/containers/product/product-specifications/product-specifications.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/product/product-specifications/product-specifications.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ProductSpecificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSpecificationsComponent", function() { return ProductSpecificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductSpecificationsComponent = class ProductSpecificationsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductSpecificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-specifications',
        template: __webpack_require__(/*! raw-loader!./product-specifications.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/product/product-specifications/product-specifications.component.html"),
        styles: [__webpack_require__(/*! ./product-specifications.component.less */ "./src/app/modules/core/containers/product/product-specifications/product-specifications.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductSpecificationsComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/slideshow-items/slideshow-items.component.less":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/core/containers/slideshow-items/slideshow-items.component.less ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL3NsaWRlc2hvdy1pdGVtcy9zbGlkZXNob3ctaXRlbXMuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/core/containers/slideshow-items/slideshow-items.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/core/containers/slideshow-items/slideshow-items.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SlideshowItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideshowItemsComponent", function() { return SlideshowItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SlideshowItemsComponent = class SlideshowItemsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SlideshowItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slideshow-items',
        template: __webpack_require__(/*! raw-loader!./slideshow-items.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/slideshow-items/slideshow-items.component.html"),
        styles: [__webpack_require__(/*! ./slideshow-items.component.less */ "./src/app/modules/core/containers/slideshow-items/slideshow-items.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SlideshowItemsComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/subcategory/subcategory-heading/subcategory-heading.component.less":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/subcategory/subcategory-heading/subcategory-heading.component.less ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL3N1YmNhdGVnb3J5L3N1YmNhdGVnb3J5LWhlYWRpbmcvc3ViY2F0ZWdvcnktaGVhZGluZy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/containers/subcategory/subcategory-heading/subcategory-heading.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/subcategory/subcategory-heading/subcategory-heading.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: SubcategoryHeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryHeadingComponent", function() { return SubcategoryHeadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SubcategoryHeadingComponent = class SubcategoryHeadingComponent {
    constructor() { }
    ngOnInit() {
    }
};
SubcategoryHeadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subcategory-heading',
        template: __webpack_require__(/*! raw-loader!./subcategory-heading.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/subcategory/subcategory-heading/subcategory-heading.component.html"),
        styles: [__webpack_require__(/*! ./subcategory-heading.component.less */ "./src/app/modules/core/containers/subcategory/subcategory-heading/subcategory-heading.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SubcategoryHeadingComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/subcategory/subcategory-leftsidebar/subcategory-leftsidebar.component.less":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/subcategory/subcategory-leftsidebar/subcategory-leftsidebar.component.less ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL3N1YmNhdGVnb3J5L3N1YmNhdGVnb3J5LWxlZnRzaWRlYmFyL3N1YmNhdGVnb3J5LWxlZnRzaWRlYmFyLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/core/containers/subcategory/subcategory-leftsidebar/subcategory-leftsidebar.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/core/containers/subcategory/subcategory-leftsidebar/subcategory-leftsidebar.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: SubcategoryLeftsidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryLeftsidebarComponent", function() { return SubcategoryLeftsidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SubcategoryLeftsidebarComponent = class SubcategoryLeftsidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
SubcategoryLeftsidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subcategory-leftsidebar',
        template: __webpack_require__(/*! raw-loader!./subcategory-leftsidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/subcategory/subcategory-leftsidebar/subcategory-leftsidebar.component.html"),
        styles: [__webpack_require__(/*! ./subcategory-leftsidebar.component.less */ "./src/app/modules/core/containers/subcategory/subcategory-leftsidebar/subcategory-leftsidebar.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SubcategoryLeftsidebarComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/subscription/subscription.component.less":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/core/containers/subscription/subscription.component.less ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL3N1YnNjcmlwdGlvbi9zdWJzY3JpcHRpb24uY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/core/containers/subscription/subscription.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/core/containers/subscription/subscription.component.ts ***!
  \********************************************************************************/
/*! exports provided: SubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionComponent", function() { return SubscriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SubscriptionComponent = class SubscriptionComponent {
    constructor() { }
    ngOnInit() {
    }
};
SubscriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subscription',
        template: __webpack_require__(/*! raw-loader!./subscription.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/subscription/subscription.component.html"),
        styles: [__webpack_require__(/*! ./subscription.component.less */ "./src/app/modules/core/containers/subscription/subscription.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SubscriptionComponent);



/***/ }),

/***/ "./src/app/modules/core/containers/trending-items/trending-items.component.less":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/core/containers/trending-items/trending-items.component.less ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb250YWluZXJzL3RyZW5kaW5nLWl0ZW1zL3RyZW5kaW5nLWl0ZW1zLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/core/containers/trending-items/trending-items.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/core/containers/trending-items/trending-items.component.ts ***!
  \************************************************************************************/
/*! exports provided: TrendingItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingItemsComponent", function() { return TrendingItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TrendingItemsComponent = class TrendingItemsComponent {
    constructor() { }
    ngOnInit() {
    }
};
TrendingItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trending-items',
        template: __webpack_require__(/*! raw-loader!./trending-items.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/containers/trending-items/trending-items.component.html"),
        styles: [__webpack_require__(/*! ./trending-items.component.less */ "./src/app/modules/core/containers/trending-items/trending-items.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TrendingItemsComponent);



/***/ }),

/***/ "./src/app/modules/core/core-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/core/core-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/landingpage/landingpage.component */ "./src/app/modules/core/pages/landingpage/landingpage.component.ts");
/* harmony import */ var _pages_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/catalog/catalog.component */ "./src/app/modules/core/pages/catalog/catalog.component.ts");
/* harmony import */ var _pages_category_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/category/category.component */ "./src/app/modules/core/pages/category/category.component.ts");
/* harmony import */ var _pages_subcategory_subcategory_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/subcategory/subcategory.component */ "./src/app/modules/core/pages/subcategory/subcategory.component.ts");
/* harmony import */ var _pages_product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/product/product.component */ "./src/app/modules/core/pages/product/product.component.ts");
/* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/cart/cart.component */ "./src/app/modules/core/pages/cart/cart.component.ts");
/* harmony import */ var _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/checkout/checkout.component */ "./src/app/modules/core/pages/checkout/checkout.component.ts");
/* harmony import */ var _pages_compare_compare_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/compare/compare.component */ "./src/app/modules/core/pages/compare/compare.component.ts");
/* harmony import */ var _pages_brand_brand_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/brand/brand.component */ "./src/app/modules/core/pages/brand/brand.component.ts");
/* harmony import */ var _pages_account_account_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/account/account.component */ "./src/app/modules/core/pages/account/account.component.ts");
/* harmony import */ var _pages_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/favorites/favorites.component */ "./src/app/modules/core/pages/favorites/favorites.component.ts");
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/settings/settings.component */ "./src/app/modules/core/pages/settings/settings.component.ts");
/* harmony import */ var _pages_personal_personal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/personal/personal.component */ "./src/app/modules/core/pages/personal/personal.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/modules/core/pages/about/about.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/modules/core/pages/contact/contact.component.ts");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/blog/blog.component */ "./src/app/modules/core/pages/blog/blog.component.ts");
/* harmony import */ var _pages_news_news_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/news/news.component */ "./src/app/modules/core/pages/news/news.component.ts");
/* harmony import */ var _pages_article_article_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/article/article.component */ "./src/app/modules/core/pages/article/article.component.ts");
/* harmony import */ var _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/faq/faq.component */ "./src/app/modules/core/pages/faq/faq.component.ts");
/* harmony import */ var _pages_delivery_delivery_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/delivery/delivery.component */ "./src/app/modules/core/pages/delivery/delivery.component.ts");
/* harmony import */ var _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/notfound/notfound.component */ "./src/app/modules/core/pages/notfound/notfound.component.ts");
























const routes = [
    {
        path: '',
        component: _pages_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_3__["LandingpageComponent"]
    },
    {
        path: 'index',
        component: _pages_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_3__["LandingpageComponent"]
    },
    {
        path: 'catalog',
        component: _pages_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_4__["CatalogComponent"]
    },
    {
        path: 'category',
        component: _pages_category_category_component__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"]
    },
    {
        path: 'subcategory',
        component: _pages_subcategory_subcategory_component__WEBPACK_IMPORTED_MODULE_6__["SubcategoryComponent"]
    },
    {
        path: 'product',
        component: _pages_product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"]
    },
    {
        path: 'cart',
        component: _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"]
    },
    {
        path: 'checkout',
        component: _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__["CheckoutComponent"]
    },
    {
        path: 'compare',
        component: _pages_compare_compare_component__WEBPACK_IMPORTED_MODULE_10__["CompareComponent"]
    },
    {
        path: 'brand',
        component: _pages_brand_brand_component__WEBPACK_IMPORTED_MODULE_11__["BrandComponent"]
    },
    {
        path: 'account',
        component: _pages_account_account_component__WEBPACK_IMPORTED_MODULE_12__["AccountComponent"]
    },
    {
        path: 'favorites',
        component: _pages_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_13__["FavoritesComponent"]
    },
    {
        path: 'personal',
        component: _pages_personal_personal_component__WEBPACK_IMPORTED_MODULE_15__["PersonalComponent"]
    },
    {
        path: 'settings',
        component: _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_14__["SettingsComponent"]
    },
    {
        path: 'about',
        component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"]
    },
    {
        path: 'contact',
        component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"]
    },
    {
        path: 'blog',
        component: _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_18__["BlogComponent"]
    },
    {
        path: 'news',
        component: _pages_news_news_component__WEBPACK_IMPORTED_MODULE_19__["NewsComponent"]
    },
    {
        path: 'article',
        component: _pages_article_article_component__WEBPACK_IMPORTED_MODULE_20__["ArticleComponent"]
    },
    {
        path: 'faq',
        component: _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_21__["FaqComponent"]
    },
    {
        path: 'delivery',
        component: _pages_delivery_delivery_component__WEBPACK_IMPORTED_MODULE_22__["DeliveryComponent"]
    },
    {
        path: 'notfound',
        component: _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_23__["NotfoundComponent"]
    },
    {
        path: '**',
        component: _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_23__["NotfoundComponent"]
    }
];
let CoreRoutingModule = class CoreRoutingModule {
};
CoreRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CoreRoutingModule);



/***/ }),

/***/ "./src/app/modules/core/core.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/core/core.module.ts ***!
  \*********************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _containers_header_container_header_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/header-container/header-container.component */ "./src/app/modules/core/containers/header-container/header-container.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/modules/core/components/nav/nav.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/modules/core/components/footer/footer.component.ts");
/* harmony import */ var _components_sub_footer_sub_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sub-footer/sub-footer.component */ "./src/app/modules/core/components/sub-footer/sub-footer.component.ts");
/* harmony import */ var _containers_about_n_latest_news_about_n_latest_news_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers/about-n-latest-news/about-n-latest-news.component */ "./src/app/modules/core/containers/about-n-latest-news/about-n-latest-news.component.ts");
/* harmony import */ var _containers_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/blogs/blogs.component */ "./src/app/modules/core/containers/blogs/blogs.component.ts");
/* harmony import */ var _containers_popular_brands_popular_brands_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containers/popular-brands/popular-brands.component */ "./src/app/modules/core/containers/popular-brands/popular-brands.component.ts");
/* harmony import */ var _containers_trending_items_trending_items_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./containers/trending-items/trending-items.component */ "./src/app/modules/core/containers/trending-items/trending-items.component.ts");
/* harmony import */ var _containers_basic_categories_basic_categories_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./containers/basic-categories/basic-categories.component */ "./src/app/modules/core/containers/basic-categories/basic-categories.component.ts");
/* harmony import */ var _containers_slideshow_items_slideshow_items_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./containers/slideshow-items/slideshow-items.component */ "./src/app/modules/core/containers/slideshow-items/slideshow-items.component.ts");
/* harmony import */ var _pages_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/landingpage/landingpage.component */ "./src/app/modules/core/pages/landingpage/landingpage.component.ts");
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core-routing.module */ "./src/app/modules/core/core-routing.module.ts");
/* harmony import */ var _containers_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./containers/subscription/subscription.component */ "./src/app/modules/core/containers/subscription/subscription.component.ts");
/* harmony import */ var _containers_catalog_catalog_heading_catalog_heading_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./containers/catalog/catalog-heading/catalog-heading.component */ "./src/app/modules/core/containers/catalog/catalog-heading/catalog-heading.component.ts");
/* harmony import */ var _pages_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/catalog/catalog.component */ "./src/app/modules/core/pages/catalog/catalog.component.ts");
/* harmony import */ var _containers_catalog_catalog_body_catalog_body_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./containers/catalog/catalog-body/catalog-body.component */ "./src/app/modules/core/containers/catalog/catalog-body/catalog-body.component.ts");
/* harmony import */ var _pages_category_category_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/category/category.component */ "./src/app/modules/core/pages/category/category.component.ts");
/* harmony import */ var _containers_category_category_heading_category_heading_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./containers/category/category-heading/category-heading.component */ "./src/app/modules/core/containers/category/category-heading/category-heading.component.ts");
/* harmony import */ var _containers_category_category_leftsidebar_category_leftsidebar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./containers/category/category-leftsidebar/category-leftsidebar.component */ "./src/app/modules/core/containers/category/category-leftsidebar/category-leftsidebar.component.ts");
/* harmony import */ var _containers_category_category_body_category_body_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./containers/category/category-body/category-body.component */ "./src/app/modules/core/containers/category/category-body/category-body.component.ts");
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/pagination/pagination.component */ "./src/app/modules/core/components/pagination/pagination.component.ts");
/* harmony import */ var _pages_subcategory_subcategory_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/subcategory/subcategory.component */ "./src/app/modules/core/pages/subcategory/subcategory.component.ts");
/* harmony import */ var _containers_subcategory_subcategory_heading_subcategory_heading_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./containers/subcategory/subcategory-heading/subcategory-heading.component */ "./src/app/modules/core/containers/subcategory/subcategory-heading/subcategory-heading.component.ts");
/* harmony import */ var _containers_subcategory_subcategory_leftsidebar_subcategory_leftsidebar_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./containers/subcategory/subcategory-leftsidebar/subcategory-leftsidebar.component */ "./src/app/modules/core/containers/subcategory/subcategory-leftsidebar/subcategory-leftsidebar.component.ts");
/* harmony import */ var _pages_product_product_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/product/product.component */ "./src/app/modules/core/pages/product/product.component.ts");
/* harmony import */ var _containers_product_product_heading_product_heading_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./containers/product/product-heading/product-heading.component */ "./src/app/modules/core/containers/product/product-heading/product-heading.component.ts");
/* harmony import */ var _containers_product_product_image_product_image_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./containers/product/product-image/product-image.component */ "./src/app/modules/core/containers/product/product-image/product-image.component.ts");
/* harmony import */ var _containers_product_product_info_product_info_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./containers/product/product-info/product-info.component */ "./src/app/modules/core/containers/product/product-info/product-info.component.ts");
/* harmony import */ var _containers_product_product_overview_product_overview_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./containers/product/product-overview/product-overview.component */ "./src/app/modules/core/containers/product/product-overview/product-overview.component.ts");
/* harmony import */ var _containers_product_product_specifications_product_specifications_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./containers/product/product-specifications/product-specifications.component */ "./src/app/modules/core/containers/product/product-specifications/product-specifications.component.ts");
/* harmony import */ var _containers_product_product_accessories_product_accessories_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./containers/product/product-accessories/product-accessories.component */ "./src/app/modules/core/containers/product/product-accessories/product-accessories.component.ts");
/* harmony import */ var _containers_product_product_reviews_product_reviews_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./containers/product/product-reviews/product-reviews.component */ "./src/app/modules/core/containers/product/product-reviews/product-reviews.component.ts");
/* harmony import */ var _containers_product_product_qna_product_qna_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./containers/product/product-qna/product-qna.component */ "./src/app/modules/core/containers/product/product-qna/product-qna.component.ts");
/* harmony import */ var _containers_product_product_relateditems_product_relateditems_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./containers/product/product-relateditems/product-relateditems.component */ "./src/app/modules/core/containers/product/product-relateditems/product-relateditems.component.ts");
/* harmony import */ var _containers_product_product_newreview_product_newreview_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./containers/product/product-newreview/product-newreview.component */ "./src/app/modules/core/containers/product/product-newreview/product-newreview.component.ts");
/* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/cart/cart.component */ "./src/app/modules/core/pages/cart/cart.component.ts");
/* harmony import */ var _containers_cart_cart_heading_cart_heading_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./containers/cart/cart-heading/cart-heading.component */ "./src/app/modules/core/containers/cart/cart-heading/cart-heading.component.ts");
/* harmony import */ var _containers_cart_cart_products_cart_products_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./containers/cart/cart-products/cart-products.component */ "./src/app/modules/core/containers/cart/cart-products/cart-products.component.ts");
/* harmony import */ var _containers_cart_cart_checkout_cart_checkout_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./containers/cart/cart-checkout/cart-checkout.component */ "./src/app/modules/core/containers/cart/cart-checkout/cart-checkout.component.ts");
/* harmony import */ var _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/checkout/checkout.component */ "./src/app/modules/core/pages/checkout/checkout.component.ts");
/* harmony import */ var _containers_checkout_checkout_heading_checkout_heading_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./containers/checkout/checkout-heading/checkout-heading.component */ "./src/app/modules/core/containers/checkout/checkout-heading/checkout-heading.component.ts");
/* harmony import */ var _containers_checkout_checkout_contactinfo_checkout_contactinfo_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./containers/checkout/checkout-contactinfo/checkout-contactinfo.component */ "./src/app/modules/core/containers/checkout/checkout-contactinfo/checkout-contactinfo.component.ts");
/* harmony import */ var _containers_checkout_checkout_shipping_checkout_shipping_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./containers/checkout/checkout-shipping/checkout-shipping.component */ "./src/app/modules/core/containers/checkout/checkout-shipping/checkout-shipping.component.ts");
/* harmony import */ var _containers_checkout_checkout_payment_checkout_payment_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./containers/checkout/checkout-payment/checkout-payment.component */ "./src/app/modules/core/containers/checkout/checkout-payment/checkout-payment.component.ts");
/* harmony import */ var _containers_checkout_checkout_rightsidebar_checkout_rightsidebar_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./containers/checkout/checkout-rightsidebar/checkout-rightsidebar.component */ "./src/app/modules/core/containers/checkout/checkout-rightsidebar/checkout-rightsidebar.component.ts");
/* harmony import */ var _pages_compare_compare_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./pages/compare/compare.component */ "./src/app/modules/core/pages/compare/compare.component.ts");
/* harmony import */ var _containers_compare_compare_heading_compare_heading_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./containers/compare/compare-heading/compare-heading.component */ "./src/app/modules/core/containers/compare/compare-heading/compare-heading.component.ts");
/* harmony import */ var _pages_brand_brand_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./pages/brand/brand.component */ "./src/app/modules/core/pages/brand/brand.component.ts");
/* harmony import */ var _pages_account_account_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./pages/account/account.component */ "./src/app/modules/core/pages/account/account.component.ts");
/* harmony import */ var _containers_account_account_orders_account_orders_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./containers/account/account-orders/account-orders.component */ "./src/app/modules/core/containers/account/account-orders/account-orders.component.ts");
/* harmony import */ var _containers_account_account_leftsidebar_account_leftsidebar_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./containers/account/account-leftsidebar/account-leftsidebar.component */ "./src/app/modules/core/containers/account/account-leftsidebar/account-leftsidebar.component.ts");
/* harmony import */ var _containers_favorites_favorite_products_favorite_products_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./containers/favorites/favorite-products/favorite-products.component */ "./src/app/modules/core/containers/favorites/favorite-products/favorite-products.component.ts");
/* harmony import */ var _pages_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./pages/favorites/favorites.component */ "./src/app/modules/core/pages/favorites/favorites.component.ts");
/* harmony import */ var _pages_personal_personal_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./pages/personal/personal.component */ "./src/app/modules/core/pages/personal/personal.component.ts");
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./pages/settings/settings.component */ "./src/app/modules/core/pages/settings/settings.component.ts");
/* harmony import */ var _containers_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./containers/personal-info/personal-info.component */ "./src/app/modules/core/containers/personal-info/personal-info.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/modules/core/pages/about/about.component.ts");
/* harmony import */ var _containers_about_team_team_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./containers/about/team/team.component */ "./src/app/modules/core/containers/about/team/team.component.ts");
/* harmony import */ var _containers_about_stats_stats_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./containers/about/stats/stats.component */ "./src/app/modules/core/containers/about/stats/stats.component.ts");
/* harmony import */ var _containers_about_store_store_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./containers/about/store/store.component */ "./src/app/modules/core/containers/about/store/store.component.ts");
/* harmony import */ var _containers_about_about_heading_about_heading_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./containers/about/about-heading/about-heading.component */ "./src/app/modules/core/containers/about/about-heading/about-heading.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/modules/core/pages/contact/contact.component.ts");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./pages/blog/blog.component */ "./src/app/modules/core/pages/blog/blog.component.ts");
/* harmony import */ var _pages_news_news_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./pages/news/news.component */ "./src/app/modules/core/pages/news/news.component.ts");
/* harmony import */ var _containers_news_news_rightsidebar_news_rightsidebar_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./containers/news/news-rightsidebar/news-rightsidebar.component */ "./src/app/modules/core/containers/news/news-rightsidebar/news-rightsidebar.component.ts");
/* harmony import */ var _pages_article_article_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./pages/article/article.component */ "./src/app/modules/core/pages/article/article.component.ts");
/* harmony import */ var _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./pages/faq/faq.component */ "./src/app/modules/core/pages/faq/faq.component.ts");
/* harmony import */ var _containers_faq_faq_heading_faq_heading_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./containers/faq/faq-heading/faq-heading.component */ "./src/app/modules/core/containers/faq/faq-heading/faq-heading.component.ts");
/* harmony import */ var _pages_delivery_delivery_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./pages/delivery/delivery.component */ "./src/app/modules/core/pages/delivery/delivery.component.ts");
/* harmony import */ var _containers_delivery_delivery_heading_delivery_heading_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./containers/delivery/delivery-heading/delivery-heading.component */ "./src/app/modules/core/containers/delivery/delivery-heading/delivery-heading.component.ts");
/* harmony import */ var _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./pages/notfound/notfound.component */ "./src/app/modules/core/pages/notfound/notfound.component.ts");













































































let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_containers_header_container_header_container_component__WEBPACK_IMPORTED_MODULE_3__["HeaderContainerComponent"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _components_sub_footer_sub_footer_component__WEBPACK_IMPORTED_MODULE_9__["SubFooterComponent"], _containers_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_18__["SubscriptionComponent"],
            _containers_about_n_latest_news_about_n_latest_news_component__WEBPACK_IMPORTED_MODULE_10__["AboutNLatestNewsComponent"], _containers_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_11__["BlogsComponent"], _containers_popular_brands_popular_brands_component__WEBPACK_IMPORTED_MODULE_12__["PopularBrandsComponent"], _containers_trending_items_trending_items_component__WEBPACK_IMPORTED_MODULE_13__["TrendingItemsComponent"], _containers_basic_categories_basic_categories_component__WEBPACK_IMPORTED_MODULE_14__["BasicCategoriesComponent"],
            _containers_slideshow_items_slideshow_items_component__WEBPACK_IMPORTED_MODULE_15__["SlideshowItemsComponent"], _pages_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_16__["LandingpageComponent"], _pages_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_20__["CatalogComponent"], _containers_catalog_catalog_heading_catalog_heading_component__WEBPACK_IMPORTED_MODULE_19__["CatalogHeadingComponent"],
            _containers_catalog_catalog_body_catalog_body_component__WEBPACK_IMPORTED_MODULE_21__["CatalogBodyComponent"],
            _pages_category_category_component__WEBPACK_IMPORTED_MODULE_22__["CategoryComponent"],
            _containers_category_category_heading_category_heading_component__WEBPACK_IMPORTED_MODULE_23__["CategoryHeadingComponent"],
            _containers_category_category_leftsidebar_category_leftsidebar_component__WEBPACK_IMPORTED_MODULE_24__["CategoryLeftsidebarComponent"],
            _containers_category_category_body_category_body_component__WEBPACK_IMPORTED_MODULE_25__["CategoryBodyComponent"],
            _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_26__["PaginationComponent"],
            _pages_subcategory_subcategory_component__WEBPACK_IMPORTED_MODULE_27__["SubcategoryComponent"],
            _containers_subcategory_subcategory_heading_subcategory_heading_component__WEBPACK_IMPORTED_MODULE_28__["SubcategoryHeadingComponent"],
            _containers_subcategory_subcategory_leftsidebar_subcategory_leftsidebar_component__WEBPACK_IMPORTED_MODULE_29__["SubcategoryLeftsidebarComponent"],
            _pages_product_product_component__WEBPACK_IMPORTED_MODULE_30__["ProductComponent"],
            _containers_product_product_heading_product_heading_component__WEBPACK_IMPORTED_MODULE_31__["ProductHeadingComponent"],
            _containers_product_product_image_product_image_component__WEBPACK_IMPORTED_MODULE_32__["ProductImageComponent"],
            _containers_product_product_info_product_info_component__WEBPACK_IMPORTED_MODULE_33__["ProductInfoComponent"],
            _containers_product_product_overview_product_overview_component__WEBPACK_IMPORTED_MODULE_34__["ProductOverviewComponent"],
            _containers_product_product_specifications_product_specifications_component__WEBPACK_IMPORTED_MODULE_35__["ProductSpecificationsComponent"],
            _containers_product_product_accessories_product_accessories_component__WEBPACK_IMPORTED_MODULE_36__["ProductAccessoriesComponent"],
            _containers_product_product_reviews_product_reviews_component__WEBPACK_IMPORTED_MODULE_37__["ProductReviewsComponent"],
            _containers_product_product_qna_product_qna_component__WEBPACK_IMPORTED_MODULE_38__["ProductQnaComponent"],
            _containers_product_product_relateditems_product_relateditems_component__WEBPACK_IMPORTED_MODULE_39__["ProductRelateditemsComponent"],
            _containers_product_product_newreview_product_newreview_component__WEBPACK_IMPORTED_MODULE_40__["ProductNewreviewComponent"],
            _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_41__["CartComponent"],
            _containers_cart_cart_heading_cart_heading_component__WEBPACK_IMPORTED_MODULE_42__["CartHeadingComponent"],
            _containers_cart_cart_products_cart_products_component__WEBPACK_IMPORTED_MODULE_43__["CartProductsComponent"],
            _containers_cart_cart_checkout_cart_checkout_component__WEBPACK_IMPORTED_MODULE_44__["CartCheckoutComponent"],
            _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_45__["CheckoutComponent"],
            _containers_checkout_checkout_heading_checkout_heading_component__WEBPACK_IMPORTED_MODULE_46__["CheckoutHeadingComponent"], _containers_checkout_checkout_contactinfo_checkout_contactinfo_component__WEBPACK_IMPORTED_MODULE_47__["CheckoutContactinfoComponent"], _containers_checkout_checkout_shipping_checkout_shipping_component__WEBPACK_IMPORTED_MODULE_48__["CheckoutShippingComponent"], _containers_checkout_checkout_payment_checkout_payment_component__WEBPACK_IMPORTED_MODULE_49__["CheckoutPaymentComponent"],
            _containers_checkout_checkout_rightsidebar_checkout_rightsidebar_component__WEBPACK_IMPORTED_MODULE_50__["CheckoutRightsidebarComponent"], _pages_compare_compare_component__WEBPACK_IMPORTED_MODULE_51__["CompareComponent"], _containers_compare_compare_heading_compare_heading_component__WEBPACK_IMPORTED_MODULE_52__["CompareHeadingComponent"], _pages_brand_brand_component__WEBPACK_IMPORTED_MODULE_53__["BrandComponent"], _pages_account_account_component__WEBPACK_IMPORTED_MODULE_54__["AccountComponent"],
            _containers_account_account_orders_account_orders_component__WEBPACK_IMPORTED_MODULE_55__["AccountOrdersComponent"], _containers_account_account_leftsidebar_account_leftsidebar_component__WEBPACK_IMPORTED_MODULE_56__["AccountLeftsidebarComponent"], _pages_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_58__["FavoritesComponent"], _containers_favorites_favorite_products_favorite_products_component__WEBPACK_IMPORTED_MODULE_57__["FavoriteProductsComponent"],
            _pages_personal_personal_component__WEBPACK_IMPORTED_MODULE_59__["PersonalComponent"], _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_60__["SettingsComponent"], _containers_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_61__["PersonalInfoComponent"], _pages_about_about_component__WEBPACK_IMPORTED_MODULE_62__["AboutComponent"], _containers_about_team_team_component__WEBPACK_IMPORTED_MODULE_63__["TeamComponent"], _containers_about_stats_stats_component__WEBPACK_IMPORTED_MODULE_64__["StatsComponent"], _containers_about_store_store_component__WEBPACK_IMPORTED_MODULE_65__["StoreComponent"], _containers_about_about_heading_about_heading_component__WEBPACK_IMPORTED_MODULE_66__["AboutHeadingComponent"], _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_67__["ContactComponent"], _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_68__["BlogComponent"], _pages_news_news_component__WEBPACK_IMPORTED_MODULE_69__["NewsComponent"], _containers_news_news_rightsidebar_news_rightsidebar_component__WEBPACK_IMPORTED_MODULE_70__["NewsRightsidebarComponent"], _pages_article_article_component__WEBPACK_IMPORTED_MODULE_71__["ArticleComponent"], _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_72__["FaqComponent"], _containers_faq_faq_heading_faq_heading_component__WEBPACK_IMPORTED_MODULE_73__["FaqHeadingComponent"], _pages_delivery_delivery_component__WEBPACK_IMPORTED_MODULE_74__["DeliveryComponent"], _containers_delivery_delivery_heading_delivery_heading_component__WEBPACK_IMPORTED_MODULE_75__["DeliveryHeadingComponent"], _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_76__["NotfoundComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _core_routing_module__WEBPACK_IMPORTED_MODULE_17__["CoreRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_6__["ClickOutsideModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ],
        exports: [_containers_header_container_header_container_component__WEBPACK_IMPORTED_MODULE_3__["HeaderContainerComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _components_sub_footer_sub_footer_component__WEBPACK_IMPORTED_MODULE_9__["SubFooterComponent"], _containers_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_18__["SubscriptionComponent"], _containers_about_n_latest_news_about_n_latest_news_component__WEBPACK_IMPORTED_MODULE_10__["AboutNLatestNewsComponent"],
            _containers_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_11__["BlogsComponent"], _containers_popular_brands_popular_brands_component__WEBPACK_IMPORTED_MODULE_12__["PopularBrandsComponent"], _containers_trending_items_trending_items_component__WEBPACK_IMPORTED_MODULE_13__["TrendingItemsComponent"], _containers_basic_categories_basic_categories_component__WEBPACK_IMPORTED_MODULE_14__["BasicCategoriesComponent"], _containers_slideshow_items_slideshow_items_component__WEBPACK_IMPORTED_MODULE_15__["SlideshowItemsComponent"],
            _pages_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_16__["LandingpageComponent"], _pages_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_20__["CatalogComponent"], _containers_catalog_catalog_heading_catalog_heading_component__WEBPACK_IMPORTED_MODULE_19__["CatalogHeadingComponent"], _containers_catalog_catalog_body_catalog_body_component__WEBPACK_IMPORTED_MODULE_21__["CatalogBodyComponent"],
            _pages_category_category_component__WEBPACK_IMPORTED_MODULE_22__["CategoryComponent"], _containers_category_category_heading_category_heading_component__WEBPACK_IMPORTED_MODULE_23__["CategoryHeadingComponent"], _containers_category_category_leftsidebar_category_leftsidebar_component__WEBPACK_IMPORTED_MODULE_24__["CategoryLeftsidebarComponent"],
            _containers_category_category_body_category_body_component__WEBPACK_IMPORTED_MODULE_25__["CategoryBodyComponent"], _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_26__["PaginationComponent"], _containers_checkout_checkout_heading_checkout_heading_component__WEBPACK_IMPORTED_MODULE_46__["CheckoutHeadingComponent"],
            _containers_subcategory_subcategory_heading_subcategory_heading_component__WEBPACK_IMPORTED_MODULE_28__["SubcategoryHeadingComponent"], _containers_subcategory_subcategory_leftsidebar_subcategory_leftsidebar_component__WEBPACK_IMPORTED_MODULE_29__["SubcategoryLeftsidebarComponent"], _pages_product_product_component__WEBPACK_IMPORTED_MODULE_30__["ProductComponent"], _containers_product_product_heading_product_heading_component__WEBPACK_IMPORTED_MODULE_31__["ProductHeadingComponent"],
            _containers_product_product_image_product_image_component__WEBPACK_IMPORTED_MODULE_32__["ProductImageComponent"], _containers_product_product_info_product_info_component__WEBPACK_IMPORTED_MODULE_33__["ProductInfoComponent"], _containers_product_product_overview_product_overview_component__WEBPACK_IMPORTED_MODULE_34__["ProductOverviewComponent"], _containers_product_product_specifications_product_specifications_component__WEBPACK_IMPORTED_MODULE_35__["ProductSpecificationsComponent"],
            _containers_product_product_reviews_product_reviews_component__WEBPACK_IMPORTED_MODULE_37__["ProductReviewsComponent"], _containers_product_product_qna_product_qna_component__WEBPACK_IMPORTED_MODULE_38__["ProductQnaComponent"], _containers_product_product_relateditems_product_relateditems_component__WEBPACK_IMPORTED_MODULE_39__["ProductRelateditemsComponent"], _containers_product_product_newreview_product_newreview_component__WEBPACK_IMPORTED_MODULE_40__["ProductNewreviewComponent"],
            _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_41__["CartComponent"], _containers_cart_cart_checkout_cart_checkout_component__WEBPACK_IMPORTED_MODULE_44__["CartCheckoutComponent"], _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_45__["CheckoutComponent"],
            _containers_cart_cart_heading_cart_heading_component__WEBPACK_IMPORTED_MODULE_42__["CartHeadingComponent"], _containers_cart_cart_products_cart_products_component__WEBPACK_IMPORTED_MODULE_43__["CartProductsComponent"], _containers_checkout_checkout_contactinfo_checkout_contactinfo_component__WEBPACK_IMPORTED_MODULE_47__["CheckoutContactinfoComponent"],
            _containers_checkout_checkout_shipping_checkout_shipping_component__WEBPACK_IMPORTED_MODULE_48__["CheckoutShippingComponent"], _containers_checkout_checkout_payment_checkout_payment_component__WEBPACK_IMPORTED_MODULE_49__["CheckoutPaymentComponent"],
            _containers_checkout_checkout_rightsidebar_checkout_rightsidebar_component__WEBPACK_IMPORTED_MODULE_50__["CheckoutRightsidebarComponent"], _pages_compare_compare_component__WEBPACK_IMPORTED_MODULE_51__["CompareComponent"], _containers_compare_compare_heading_compare_heading_component__WEBPACK_IMPORTED_MODULE_52__["CompareHeadingComponent"],
            _pages_brand_brand_component__WEBPACK_IMPORTED_MODULE_53__["BrandComponent"], _pages_account_account_component__WEBPACK_IMPORTED_MODULE_54__["AccountComponent"], _containers_account_account_orders_account_orders_component__WEBPACK_IMPORTED_MODULE_55__["AccountOrdersComponent"], _containers_account_account_leftsidebar_account_leftsidebar_component__WEBPACK_IMPORTED_MODULE_56__["AccountLeftsidebarComponent"], _pages_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_58__["FavoritesComponent"],
            _containers_favorites_favorite_products_favorite_products_component__WEBPACK_IMPORTED_MODULE_57__["FavoriteProductsComponent"], _pages_personal_personal_component__WEBPACK_IMPORTED_MODULE_59__["PersonalComponent"], _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_60__["SettingsComponent"], _containers_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_61__["PersonalInfoComponent"], _pages_about_about_component__WEBPACK_IMPORTED_MODULE_62__["AboutComponent"], _containers_about_team_team_component__WEBPACK_IMPORTED_MODULE_63__["TeamComponent"], _containers_about_stats_stats_component__WEBPACK_IMPORTED_MODULE_64__["StatsComponent"], _containers_about_store_store_component__WEBPACK_IMPORTED_MODULE_65__["StoreComponent"], _containers_about_about_heading_about_heading_component__WEBPACK_IMPORTED_MODULE_66__["AboutHeadingComponent"], _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_67__["ContactComponent"], _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_68__["BlogComponent"], _pages_news_news_component__WEBPACK_IMPORTED_MODULE_69__["NewsComponent"], _containers_news_news_rightsidebar_news_rightsidebar_component__WEBPACK_IMPORTED_MODULE_70__["NewsRightsidebarComponent"], _pages_article_article_component__WEBPACK_IMPORTED_MODULE_71__["ArticleComponent"], _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_72__["FaqComponent"], _containers_faq_faq_heading_faq_heading_component__WEBPACK_IMPORTED_MODULE_73__["FaqHeadingComponent"], _pages_delivery_delivery_component__WEBPACK_IMPORTED_MODULE_74__["DeliveryComponent"], _containers_delivery_delivery_heading_delivery_heading_component__WEBPACK_IMPORTED_MODULE_75__["DeliveryHeadingComponent"], _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_76__["NotfoundComponent"]]
    })
], CoreModule);



/***/ }),

/***/ "./src/app/modules/core/pages/about/about.component.less":
/*!***************************************************************!*\
  !*** ./src/app/modules/core/pages/about/about.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/pages/about/about.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/core/pages/about/about.component.ts ***!
  \*************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.less */ "./src/app/modules/core/pages/about/about.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutComponent);



/***/ }),

/***/ "./src/app/modules/core/pages/account/account.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/modules/core/pages/account/account.component.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9wYWdlcy9hY2NvdW50L2FjY291bnQuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/core/pages/account/account.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/core/pages/account/account.component.ts ***!
  \*****************************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AccountComponent = class AccountComponent {
    constructor() { }
    ngOnInit() {
    }
};
AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: __webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/account/account.component.html"),
        styles: [__webpack_require__(/*! ./account.component.less */ "./src/app/modules/core/pages/account/account.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AccountComponent);



/***/ }),

/***/ "./src/app/modules/core/pages/article/article.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/modules/core/pages/article/article.component.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9wYWdlcy9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/core/pages/article/article.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/core/pages/article/article.component.ts ***!
  \*****************************************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ArticleComponent = class ArticleComponent {
    constructor() { }
    ngOnInit() {
    }
};
ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-article',
        template: __webpack_require__(/*! raw-loader!./article.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/article/article.component.html"),
        styles: [__webpack_require__(/*! ./article.component.less */ "./src/app/modules/core/pages/article/article.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ArticleComponent);



/***/ }),

/***/ "./src/app/modules/core/pages/blog/blog.component.less":
/*!*************************************************************!*\
  !*** ./src/app/modules/core/pages/blog/blog.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9wYWdlcy9ibG9nL2Jsb2cuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/core/pages/blog/blog.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/core/pages/blog/blog.component.ts ***!
  \***********************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BlogComponent = class BlogComponent {
    constructor() { }
    ngOnInit() {
    }
};
BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blog',
        template: __webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/blog/blog.component.html"),
        styles: [__webpack_require__(/*! ./blog.component.less */ "./src/app/modules/core/pages/blog/blog.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BlogComponent);



/***/ }),

/***/ "./src/app/modules/core/pages/brand/brand.component.less":
/*!***************************************************************!*\
  !*** ./src/app/modules/core/pages/brand/brand.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9wYWdlcy9icmFuZC9icmFuZC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/pages/brand/brand.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/core/pages/brand/brand.component.ts ***!
  \*************************************************************/
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
BrandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-brand',
        template: __webpack_require__(/*! raw-loader!./brand.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/brand/brand.component.html"),
        styles: [__webpack_require__(/*! ./brand.component.less */ "./src/app/modules/core/pages/brand/brand.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BrandComponent);



/***/ }),

/***/ "./src/app/modules/core/pages/cart/cart.component.less":
/*!*************************************************************!*\
  !*** ./src/app/modules/core/pages/cart/cart.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9wYWdlcy9jYXJ0L2NhcnQuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/core/pages/cart/cart.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/core/pages/cart/cart.component.ts ***!
  \***********************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CartComponent = class CartComponent {
    constructor() { }
    ngOnInit() {
    }
};
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/cart/cart.component.html"),
        styles: [__webpack_require__(/*! ./cart.component.less */ "./src/app/modules/core/pages/cart/cart.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CartComponent);



/***/ }),

/***/ "./src/app/modules/core/pages/catalog/catalog.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/modules/core/pages/catalog/catalog.component.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9wYWdlcy9jYXRhbG9nL2NhdGFsb2cuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/core/pages/catalog/catalog.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/core/pages/catalog/catalog.component.ts ***!
  \*****************************************************************/
/*! exports provided: CatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogComponent", function() { return CatalogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CatalogComponent = class CatalogComponent {
    constructor() { }
    ngOnInit() {
    }
};
CatalogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-catalog',
        template: __webpack_require__(/*! raw-loader!./catalog.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/catalog/catalog.component.html"),
        styles: [__webpack_require__(/*! ./catalog.component.less */ "./src/app/modules/core/pages/catalog/catalog.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CatalogComponent);



/***/ }),

/***/ "./src/app/modules/core/pages/category/category.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/modules/core/pages/category/category.component.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9wYWdlcy9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/pages/category/category.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/core/pages/category/category.component.ts ***!
  \*******************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoryComponent = class CategoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category',
        template: __webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/category/category.component.html"),
        styles: [__webpack_require__(/*! ./category.component.less */ "./src/app/modules/core/pages/category/category.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CategoryComponent);



/***/ }),

/***/ "./src/app/modules/core/pages/checkout/checkout.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/modules/core/pages/checkout/checkout.component.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9wYWdlcy9jaGVja291dC9jaGVja291dC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/pages/checkout/checkout.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/core/pages/checkout/checkout.component.ts ***!
  \*******************************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CheckoutComponent = class CheckoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: __webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/checkout/checkout.component.html"),
        styles: [__webpack_require__(/*! ./checkout.component.less */ "./src/app/modules/core/pages/checkout/checkout.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CheckoutComponent);



/***/ }),

/***/ "./src/app/modules/core/pages/compare/compare.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/modules/core/pages/compare/compare.component.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9wYWdlcy9jb21wYXJlL2NvbXBhcmUuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/core/pages/compare/compare.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/core/pages/compare/compare.component.ts ***!
  \*****************************************************************/
/*! exports provided: CompareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareComponent", function() { return CompareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CompareComponent = class CompareComponent {
    constructor() { }
    ngOnInit() {
    }
};
CompareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-compare',
        template: __webpack_require__(/*! raw-loader!./compare.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/compare/compare.component.html"),
        styles: [__webpack_require__(/*! ./compare.component.less */ "./src/app/modules/core/pages/compare/compare.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CompareComponent);



/***/ }),

/***/ "./src/app/modules/core/pages/contact/contact.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/modules/core/pages/contact/contact.component.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/core/pages/contact/contact.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/core/pages/contact/contact.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.less */ "./src/app/modules/core/pages/contact/contact.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ContactComponent);



/***/ }),

/***/ "./src/app/modules/core/pages/delivery/delivery.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/modules/core/pages/delivery/delivery.component.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9wYWdlcy9kZWxpdmVyeS9kZWxpdmVyeS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/pages/delivery/delivery.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/core/pages/delivery/delivery.component.ts ***!
  \*******************************************************************/
/*! exports provided: DeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryComponent", function() { return DeliveryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DeliveryComponent = class DeliveryComponent {
    constructor() { }
    ngOnInit() {
    }
};
DeliveryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delivery',
        template: __webpack_require__(/*! raw-loader!./delivery.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/delivery/delivery.component.html"),
        styles: [__webpack_require__(/*! ./delivery.component.less */ "./src/app/modules/core/pages/delivery/delivery.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DeliveryComponent);



/***/ }),

/***/ "./src/app/modules/core/pages/faq/faq.component.less":
/*!***********************************************************!*\
  !*** ./src/app/modules/core/pages/faq/faq.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9wYWdlcy9mYXEvZmFxLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/core/pages/faq/faq.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/core/pages/faq/faq.component.ts ***!
  \*********************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FaqComponent = class FaqComponent {
    constructor() { }
    ngOnInit() {
    }
};
FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-faq',
        template: __webpack_require__(/*! raw-loader!./faq.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/faq/faq.component.html"),
        styles: [__webpack_require__(/*! ./faq.component.less */ "./src/app/modules/core/pages/faq/faq.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FaqComponent);



/***/ }),

/***/ "./src/app/modules/core/pages/favorites/favorites.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/modules/core/pages/favorites/favorites.component.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9wYWdlcy9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/core/pages/favorites/favorites.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/core/pages/favorites/favorites.component.ts ***!
  \*********************************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FavoritesComponent = class FavoritesComponent {
    constructor() { }
    ngOnInit() {
    }
};
FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorites',
        template: __webpack_require__(/*! raw-loader!./favorites.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/favorites/favorites.component.html"),
        styles: [__webpack_require__(/*! ./favorites.component.less */ "./src/app/modules/core/pages/favorites/favorites.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FavoritesComponent);



/***/ }),

/***/ "./src/app/modules/core/pages/landingpage/landingpage.component.less":
/*!***************************************************************************!*\
  !*** ./src/app/modules/core/pages/landingpage/landingpage.component.less ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9wYWdlcy9sYW5kaW5ncGFnZS9sYW5kaW5ncGFnZS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/pages/landingpage/landingpage.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/core/pages/landingpage/landingpage.component.ts ***!
  \*************************************************************************/
/*! exports provided: LandingpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageComponent", function() { return LandingpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LandingpageComponent = class LandingpageComponent {
    constructor() { }
    ngOnInit() {
    }
};
LandingpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landingpage',
        template: __webpack_require__(/*! raw-loader!./landingpage.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/landingpage/landingpage.component.html"),
        styles: [__webpack_require__(/*! ./landingpage.component.less */ "./src/app/modules/core/pages/landingpage/landingpage.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LandingpageComponent);



/***/ }),

/***/ "./src/app/modules/core/pages/news/news.component.less":
/*!*************************************************************!*\
  !*** ./src/app/modules/core/pages/news/news.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9wYWdlcy9uZXdzL25ld3MuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/core/pages/news/news.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/core/pages/news/news.component.ts ***!
  \***********************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NewsComponent = class NewsComponent {
    constructor() { }
    ngOnInit() {
    }
};
NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: __webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/news/news.component.html"),
        styles: [__webpack_require__(/*! ./news.component.less */ "./src/app/modules/core/pages/news/news.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NewsComponent);



/***/ }),

/***/ "./src/app/modules/core/pages/notfound/notfound.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/modules/core/pages/notfound/notfound.component.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9wYWdlcy9ub3Rmb3VuZC9ub3Rmb3VuZC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/pages/notfound/notfound.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/core/pages/notfound/notfound.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotfoundComponent = class NotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notfound',
        template: __webpack_require__(/*! raw-loader!./notfound.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/notfound/notfound.component.html"),
        styles: [__webpack_require__(/*! ./notfound.component.less */ "./src/app/modules/core/pages/notfound/notfound.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NotfoundComponent);



/***/ }),

/***/ "./src/app/modules/core/pages/personal/personal.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/modules/core/pages/personal/personal.component.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9wYWdlcy9wZXJzb25hbC9wZXJzb25hbC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/pages/personal/personal.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/core/pages/personal/personal.component.ts ***!
  \*******************************************************************/
/*! exports provided: PersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalComponent", function() { return PersonalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PersonalComponent = class PersonalComponent {
    constructor() { }
    ngOnInit() {
    }
};
PersonalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personal',
        template: __webpack_require__(/*! raw-loader!./personal.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/personal/personal.component.html"),
        styles: [__webpack_require__(/*! ./personal.component.less */ "./src/app/modules/core/pages/personal/personal.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PersonalComponent);



/***/ }),

/***/ "./src/app/modules/core/pages/product/product.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/modules/core/pages/product/product.component.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9wYWdlcy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/core/pages/product/product.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/core/pages/product/product.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductComponent = class ProductComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/product/product.component.html"),
        styles: [__webpack_require__(/*! ./product.component.less */ "./src/app/modules/core/pages/product/product.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductComponent);



/***/ }),

/***/ "./src/app/modules/core/pages/settings/settings.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/modules/core/pages/settings/settings.component.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/pages/settings/settings.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/core/pages/settings/settings.component.ts ***!
  \*******************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsComponent = class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/settings/settings.component.html"),
        styles: [__webpack_require__(/*! ./settings.component.less */ "./src/app/modules/core/pages/settings/settings.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SettingsComponent);



/***/ }),

/***/ "./src/app/modules/core/pages/subcategory/subcategory.component.less":
/*!***************************************************************************!*\
  !*** ./src/app/modules/core/pages/subcategory/subcategory.component.less ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9wYWdlcy9zdWJjYXRlZ29yeS9zdWJjYXRlZ29yeS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/pages/subcategory/subcategory.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/core/pages/subcategory/subcategory.component.ts ***!
  \*************************************************************************/
/*! exports provided: SubcategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryComponent", function() { return SubcategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SubcategoryComponent = class SubcategoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
SubcategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subcategory',
        template: __webpack_require__(/*! raw-loader!./subcategory.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/core/pages/subcategory/subcategory.component.html"),
        styles: [__webpack_require__(/*! ./subcategory.component.less */ "./src/app/modules/core/pages/subcategory/subcategory.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SubcategoryComponent);



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let DataService = class DataService {
    constructor(httpClient, route) {
        this.httpClient = httpClient;
        this.route = route;
        this.homes$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ loading: false, data: [] });
    }
    gethomes$() {
        return this.homes$.asObservable();
    }
    loadHomes(filters) {
        this.homes$.next({ loading: true, data: [] });
        this.httpClient.get('assets/mocks/homes.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((homes) => {
            if (filters.homeType.length) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(homes.filter(listing => filters.homeType.includes(listing.type)));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(homes);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000)).subscribe((homes) => {
            this.homes$.next({ loading: false, data: homes });
        });
    }
    getFiltersFromUrlQueryParams() {
        return this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(params => {
            if (Array.isArray(params['home-type'])) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
                    homeType: params['home-type']
                });
            }
            if (typeof params['home-type'] === 'string') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
                    homeType: [params['home-type']]
                });
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
                homeType: []
            });
        }));
    }
};
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], DataService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Angular7\webinferaffiliate\saurabhtiwariin.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map