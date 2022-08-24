import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'legal-notice', component: LegalNoticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
