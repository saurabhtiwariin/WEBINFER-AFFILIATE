import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { CategoryComponent } from './pages/category/category.component';
import { SubcategoryComponent } from './pages/subcategory/subcategory.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CompareComponent } from './pages/compare/compare.component';
import { BrandComponent } from './pages/brand/brand.component';
import { AccountComponent } from './pages/account/account.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { PersonalComponent } from './pages/personal/personal.component';

const routes: Routes = [
{
    path: '',
    component: LandingpageComponent
},
{
  path: 'catalog',
  component: CatalogComponent
},
{
  path: 'category',
  component: CategoryComponent
},
{
  path: 'subcategory',
  component: SubcategoryComponent
},
{
  path: 'product',
  component: ProductComponent
},
{
  path: 'cart',
  component: CartComponent
},
{
  path: 'checkout',
  component: CheckoutComponent
},
{
  path: 'compare',
  component: CompareComponent
},
{
  path: 'brand',
  component: BrandComponent
},
{
  path: 'account',
  component: AccountComponent
},
{
  path: 'favorites',
  component: FavoritesComponent
},
{
  path: 'personal',
  component: PersonalComponent
},
{
  path: 'settings',
  component: SettingsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
