import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './containers/header-container/header-container.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { ClickOutsideModule } from 'ng-click-outside';
import { FilterHomeTypeFormComponent } from '../homes/components/filter-home-type-form/filter-home-type-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { SubFooterComponent } from './components/sub-footer/sub-footer.component';
import { HomeFiltersComponent } from '../homes/filters/home-filters/home-filters.component';
import { AboutNLatestNewsComponent } from './containers/about-n-latest-news/about-n-latest-news.component';
import { BlogsComponent } from './containers/blogs/blogs.component';
import { PopularBrandsComponent } from './containers/popular-brands/popular-brands.component';
import { TrendingItemsComponent } from './containers/trending-items/trending-items.component';
import { BasicCategoriesComponent } from './containers/basic-categories/basic-categories.component';
import { SlideshowItemsComponent } from './containers/slideshow-items/slideshow-items.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { CoreRoutingModule } from './core-routing.module';
import { SubscriptionComponent } from './containers/subscription/subscription.component';
import { CatalogHeadingComponent } from './containers/catalog/catalog-heading/catalog-heading.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { CatalogBodyComponent } from './containers/catalog/catalog-body/catalog-body.component';
import { CategoryComponent } from './pages/category/category.component';
import { CategoryHeadingComponent } from './containers/category/category-heading/category-heading.component';
import { CategoryLeftsidebarComponent } from './containers/category/category-leftsidebar/category-leftsidebar.component';
import { CategoryBodyComponent } from './containers/category/category-body/category-body.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SubcategoryComponent } from './pages/subcategory/subcategory.component';
import { SubcategoryHeadingComponent } from './containers/subcategory/subcategory-heading/subcategory-heading.component';
import { SubcategoryLeftsidebarComponent } from './containers/subcategory/subcategory-leftsidebar/subcategory-leftsidebar.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductHeadingComponent } from './containers/product/product-heading/product-heading.component';
import { ProductImageComponent } from './containers/product/product-image/product-image.component';
import { ProductInfoComponent } from './containers/product/product-info/product-info.component';
import { ProductOverviewComponent } from './containers/product/product-overview/product-overview.component';
import { ProductSpecificationsComponent } from './containers/product/product-specifications/product-specifications.component';
import { ProductAccessoriesComponent } from './containers/product/product-accessories/product-accessories.component';
import { ProductReviewsComponent } from './containers/product/product-reviews/product-reviews.component';
import { ProductQnaComponent } from './containers/product/product-qna/product-qna.component';
import { ProductRelateditemsComponent } from './containers/product/product-relateditems/product-relateditems.component';
import { ProductNewreviewComponent } from './containers/product/product-newreview/product-newreview.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartHeadingComponent } from './containers/cart/cart-heading/cart-heading.component';
import { CartProductsComponent } from './containers/cart/cart-products/cart-products.component';
import { CartCheckoutComponent } from './containers/cart/cart-checkout/cart-checkout.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CheckoutHeadingComponent } from './containers/checkout/checkout-heading/checkout-heading.component';
import { CheckoutContactinfoComponent } from './containers/checkout/checkout-contactinfo/checkout-contactinfo.component';
import { CheckoutShippingComponent } from './containers/checkout/checkout-shipping/checkout-shipping.component';
import { CheckoutPaymentComponent } from './containers/checkout/checkout-payment/checkout-payment.component';
import { CheckoutRightsidebarComponent } from './containers/checkout/checkout-rightsidebar/checkout-rightsidebar.component';
import { CompareComponent } from './pages/compare/compare.component';
import { CompareHeadingComponent } from './containers/compare/compare-heading/compare-heading.component';
import { BrandComponent } from './pages/brand/brand.component';
import { AccountComponent } from './pages/account/account.component';
import { AccountOrdersComponent } from './containers/account/account-orders/account-orders.component';
import { AccountLeftsidebarComponent } from './containers/account/account-leftsidebar/account-leftsidebar.component';
import { FavoriteProductsComponent } from './containers/favorites/favorite-products/favorite-products.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { PersonalInfoComponent } from './containers/personal-info/personal-info.component';
import { AboutComponent } from './pages/about/about.component';
import { TeamComponent } from './containers/about/team/team.component';
import { StatsComponent } from './containers/about/stats/stats.component';
import { StoreComponent } from './containers/about/store/store.component';
import { AboutHeadingComponent } from './containers/about/about-heading/about-heading.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsRightsidebarComponent } from './containers/news/news-rightsidebar/news-rightsidebar.component';
import { ArticleComponent } from './pages/article/article.component';
import { FaqComponent } from './pages/faq/faq.component';
import { FaqHeadingComponent } from './containers/faq/faq-heading/faq-heading.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { DeliveryHeadingComponent } from './containers/delivery/delivery-heading/delivery-heading.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';


@NgModule({
  declarations: [HeaderContainerComponent, NavComponent, FooterComponent, SubFooterComponent, SubscriptionComponent,
    AboutNLatestNewsComponent, BlogsComponent, PopularBrandsComponent, TrendingItemsComponent, BasicCategoriesComponent,
    SlideshowItemsComponent, LandingpageComponent, CatalogComponent, CatalogHeadingComponent,
    CatalogBodyComponent,
    CategoryComponent,
    CategoryHeadingComponent,
    CategoryLeftsidebarComponent,
    CategoryBodyComponent,
    PaginationComponent,
    SubcategoryComponent,
    SubcategoryHeadingComponent,
    SubcategoryLeftsidebarComponent,
    ProductComponent,
    ProductHeadingComponent,
    ProductImageComponent,
    ProductInfoComponent,
    ProductOverviewComponent,
    ProductSpecificationsComponent,
    ProductAccessoriesComponent,
    ProductReviewsComponent,
    ProductQnaComponent,
    ProductRelateditemsComponent,
    ProductNewreviewComponent,
    CartComponent,
    CartHeadingComponent,
    CartProductsComponent,
    CartCheckoutComponent,
    CheckoutComponent,
    CheckoutHeadingComponent, CheckoutContactinfoComponent, CheckoutShippingComponent, CheckoutPaymentComponent,
    CheckoutRightsidebarComponent, CompareComponent, CompareHeadingComponent, BrandComponent, AccountComponent,
    AccountOrdersComponent, AccountLeftsidebarComponent, FavoritesComponent, FavoriteProductsComponent,
    PersonalComponent, SettingsComponent, PersonalInfoComponent, AboutComponent, TeamComponent, StatsComponent, StoreComponent, AboutHeadingComponent, ContactComponent, BlogComponent, NewsComponent, NewsRightsidebarComponent, ArticleComponent, FaqComponent, FaqHeadingComponent, DeliveryComponent, DeliveryHeadingComponent, NotfoundComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    ClickOutsideModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [HeaderContainerComponent, FooterComponent, SubFooterComponent, SubscriptionComponent, AboutNLatestNewsComponent,
    BlogsComponent, PopularBrandsComponent, TrendingItemsComponent, BasicCategoriesComponent, SlideshowItemsComponent,
    LandingpageComponent, CatalogComponent, CatalogHeadingComponent, CatalogBodyComponent,
    CategoryComponent, CategoryHeadingComponent, CategoryLeftsidebarComponent,
    CategoryBodyComponent, PaginationComponent, CheckoutHeadingComponent,
    SubcategoryHeadingComponent, SubcategoryLeftsidebarComponent, ProductComponent, ProductHeadingComponent,
    ProductImageComponent, ProductInfoComponent, ProductOverviewComponent, ProductSpecificationsComponent
    , ProductReviewsComponent, ProductQnaComponent, ProductRelateditemsComponent, ProductNewreviewComponent,
    CartComponent, CartCheckoutComponent, CheckoutComponent,
    CartHeadingComponent, CartProductsComponent, CheckoutContactinfoComponent,
    CheckoutShippingComponent, CheckoutPaymentComponent,
    CheckoutRightsidebarComponent, CompareComponent, CompareHeadingComponent,
    BrandComponent, AccountComponent, AccountOrdersComponent, AccountLeftsidebarComponent, FavoritesComponent,
    FavoriteProductsComponent, PersonalComponent, SettingsComponent, PersonalInfoComponent, AboutComponent, TeamComponent, StatsComponent, StoreComponent, AboutHeadingComponent, ContactComponent, BlogComponent, NewsComponent, NewsRightsidebarComponent, ArticleComponent, FaqComponent, FaqHeadingComponent, DeliveryComponent, DeliveryHeadingComponent, NotfoundComponent]
})
export class CoreModule { }
