import { Injectable } from "@angular/core";
import { combineLatest, interval, Observable, of, timer } from "rxjs";
import { fromPromise } from "rxjs/internal-compatibility";
import { map, first, startWith, delay } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class ObservableTestService {
  getFromPromise(): Observable<any> {
    return fromPromise(
      new Promise((res, rej) => {
        res("hi");
      })
    );
  }
  getFromInterval(): Observable<any> {
    return interval(2);
  }
  getOf():Observable<any> {
    /* first()(of(1, 2, 3)).subscribe(v => console.log(`value: ${v}`)); */
    const observ = [1, 5, 7].map(x =>
      of(x).pipe(
        delay(x),
        startWith(0)
      )
    );
    return combineLatest(observ);
  }
  getCombineLatest():Observable<any>{
    const weights = of(69.3, 68, 70.20, 71.80, 73.5);
    const height = of(5.6,5.8,5.9,5.2,6);
    return combineLatest(weights,height).pipe(
      map(([w,h])=>w/(h*h))
    )
  }
}
