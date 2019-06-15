import { Injectable } from '@angular/core';
import { Brand } from 'src/app/modules/brands/entity/brand';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { switchMap, delay, map } from 'rxjs/operators';
import { resolve, reject, Promise } from 'q';
import { promise } from 'protractor';

export interface DataState<T> {
  loading: boolean;
  data: T;
}

@Injectable({
  providedIn: 'root'
})
export class BrandService {


  private brandsUrl = "http://localhost:8080/apibrands";
  private brands$ = new BehaviorSubject({ loading: false, data: [] });

  constructor(private httpClient: HttpClient) { }

  getBrands$(): Observable<DataState<Brand[]>> {
    return this.brands$.asObservable();
  }

  loadBrands() {
    console.log("inside loadBrands... ")

    /*    
        return this.httpClient.get(this.brandsUrl)
          .toPromise()
          .then(response => {
            console.log(response._embedded.apibrands)  
            this.brands$.next({ loading: false, data: response._embedded.apibrands });
          });
    */

    this.brands$.next({ loading: true, data: [] });

    this.httpClient.get(this.brandsUrl).pipe(
      map(res => {  

        // important to get json properties from response
        let resStr = JSON.stringify(res);
        let resJSON = JSON.parse(resStr); 
        console.log(resJSON._embedded.apibrands)   
        return resJSON._embedded.apibrands;
      }),
      delay(1000)
    ).subscribe((brands: Brand[]) => {
      console.log("subscribed here..")
      this.brands$.next({ loading: false, data: brands });
    })
  }

  /*   
    private homes$ = new BehaviorSubject({ loading: false, data: [] });
  
    constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }
  
    gethomes$(): Observable<DataState<Home[]>> {
      return this.homes$.asObservable();
    }
  
    loadHomes(filters:Filters) {
      this.homes$.next({ loading: true, data: [] });
  
      this.httpClient.get<any[]>('assets/mocks/homes.json').pipe(
  
        switchMap((homes: Home[]) => {
  
          if (filters.homeType.length) {
           return of(homes.filter(listing => filters.homeType.includes(listing.type)));
         }
  
          return of(homes);
  
        }),
        
        delay(1000)
      ).subscribe((homes: Home[]) => {
  
        this.homes$.next({ loading: false, data: homes });
  
      });
    }
  
    getFiltersFromUrlQueryParams(): Observable<Filters> {
  
      return this.route.queryParams.pipe(
        switchMap(params => {
          if (Array.isArray(params['home-type'])) {
            return of({
              homeType: params['home-type']
            });
          }
  
          if (typeof params['home-type'] === 'string') {
            return of({
              homeType: [params['home-type']]
            });
          }
  
          return of({
            homeType: []
          });
        })
      );
  
    }
  */
}
