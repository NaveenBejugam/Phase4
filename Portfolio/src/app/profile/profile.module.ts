import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { AboutComponent } from './about/about.component';

import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  declarations: [
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    IntroductionComponent,
    ContactComponent,
    EducationComponent,
    SkillsComponent,
  ],
  providers: [
     
  ]
})
export class profileModule { }