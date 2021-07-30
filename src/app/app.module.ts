import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BiographyComponent } from './biography/biography.component';
import { ThisSiteComponent } from './this-site/this-site.component';
import { RotcrierComponent } from './rotcrier/rotcrier.component';
import { SkillsComponent } from './skills/skills.component';

const appRoutes: Routes = [
  { path: 'biography', component: BiographyComponent },
  { path: 'this-site', component: ThisSiteComponent },
  { path: 'rotcrier', component: RotcrierComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '',   redirectTo: '/biography', pathMatch: 'full' },
  { path: '**', redirectTo: '/biography', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BiographyComponent,
    ThisSiteComponent,
    RotcrierComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
