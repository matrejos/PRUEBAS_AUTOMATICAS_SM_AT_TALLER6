import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ResembleComponent } from './resembleTests/resemble.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'resembleTests',
    component: ResembleComponent,
    data: { title: 'ResembleJS Tests List' }
  },
  { path: '',
    redirectTo: '/resembleTests',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ResembleComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }