import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CapitalisePipe } from "./pipes/capitalise.pipe";
import { OnlyNumberDirective } from "./directives/onlyNumber.directive";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CapitalisePipe,
    OnlyNumberDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
