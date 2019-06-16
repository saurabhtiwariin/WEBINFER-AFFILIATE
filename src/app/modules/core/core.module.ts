import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './containers/header-container/header-container.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { ClickOutsideModule } from 'ng-click-outside';
import { FilterHomeTypeFormComponent } from '../homes/components/filter-home-type-form/filter-home-type-form.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { SubFooterComponent } from './components/sub-footer/sub-footer.component';
import { HomeFiltersComponent } from '../homes/filters/home-filters/home-filters.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { AboutNLatestNewsComponent } from './containers/about-n-latest-news/about-n-latest-news.component';
import { BlogsComponent } from './containers/blogs/blogs.component';
import { PopularBrandsComponent } from './containers/popular-brands/popular-brands.component';
import { TrendingItemsComponent } from './containers/trending-items/trending-items.component';
import { BasicCategoriesComponent } from './containers/basic-categories/basic-categories.component';
import { SlideshowItemsComponent } from './containers/slideshow-items/slideshow-items.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [HeaderContainerComponent, NavComponent, FooterComponent, SubFooterComponent, SubscriptionComponent, 
    AboutNLatestNewsComponent, BlogsComponent, PopularBrandsComponent, TrendingItemsComponent, BasicCategoriesComponent, 
    SlideshowItemsComponent, LandingpageComponent
    ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    ClickOutsideModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [HeaderContainerComponent,FooterComponent,SubFooterComponent,SubscriptionComponent,AboutNLatestNewsComponent,
    BlogsComponent,PopularBrandsComponent,TrendingItemsComponent,BasicCategoriesComponent,SlideshowItemsComponent,
    LandingpageComponent]
})
export class CoreModule { }
