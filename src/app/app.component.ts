import { Component, OnInit, VERSION } from "@angular/core";
import { map, take } from "rxjs/operators";
import { ObservableTestService } from "./services/observableTest.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;
  str = "hey anil how are you?";
  intervalArray: Array<any> = [];
  getRespone: Array<string> = [];
  bmi;
  constructor(private _observeService: ObservableTestService) {}
  ngOnInit() {
    this._observeService
      .getFromPromise()
      .pipe(
        map(res => {
          return `${res} Bro!!`;
        })
      )
      .subscribe(res => {
        this.str = `${res} ${this.str
          .split(" ")
          .slice(1)
          .join(" ")}`;
      });
    this._observeService
      .getFromInterval()
      .pipe(
        take(5),
        map(res => {
          return res + 10;
        })
      )
      .subscribe(res => {
        this.intervalArray.push(res);
      });
    //this._observeService.getOf().subscribe(x=>console.log(x));
     this._observeService.getCombineLatest().subscribe((x)=>{
     this.bmi=x; 
     console.log(x)});
  }
}
