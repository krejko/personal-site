import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { SideProjectsComponent } from './side-projects/side-projects.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

/** config angular i18n **/
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ProjectModalComponent } from './projects/project-modal/project-modal.component';
import { FooterComponent } from './footer/footer.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    OrganizationsComponent,
    SideProjectsComponent,
    TestimonialsComponent,
    ProjectModalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
