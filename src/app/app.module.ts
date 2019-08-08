import { BrowserModule } from '@angular/platform-browser';

import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';

import { SearchService } from './search.service';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
 

@NgModule({
	
	    imports: [
        MDBBootstrapModule.forRoot(),
		    BrowserModule,

    RoutingModule
    ],
	
    schemas: [ NO_ERRORS_SCHEMA ],

  declarations: [

    AppComponent

  ],

  providers: [SearchService],

  bootstrap: [AppComponent]

})

export class AppModule { }