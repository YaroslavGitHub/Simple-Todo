import {NgModule} from '@angular/core'
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule]
})

export class SharedModule {

}
