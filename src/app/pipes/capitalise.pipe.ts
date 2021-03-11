import { SlicePipe } from "@angular/common";
import { Input, PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: "capitalise" })
export class CapitalisePipe implements PipeTransform {
  transform(val: string, args?: any) {
    if (val) {
      /* return val.split(" ").map((value)=>{ return value.charAt(0).toUpperCase()+value.slice(1)}).join(" "); */
      return val.charAt(0).toUpperCase() + val.slice(1);
    }
  }
}
