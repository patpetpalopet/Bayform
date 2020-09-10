import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SporestapiService } from './services/sporestapi.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopmenuComponent } from './components/topmenu/topmenu.component';
import { PortalComponent } from './components/portal/portal.component';
import { FormsComponent } from './components/forms/forms.component';
import { F001Component } from './components/f001/f001.component';
import { F001listComponent } from './components/f001list/f001list.component';
import { ApprovePortalComponent } from './components/approve-portal/approve-portal.component';
import { HttpClientModule } from '@angular/common/http';
import { ApprovePageComponent } from './components/approve-page/approve-page.component';
import { OperationComponent } from './components/operation/operation.component';
import { ITAdminPoolComponent } from './components/itadmin-pool/itadmin-pool.component';
import { RepreApproverComponent } from './components/repre-approver/repre-approver.component';

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    PortalComponent,
    FormsComponent,
    F001Component,
    F001listComponent,
    ApprovePortalComponent,
    ApprovePageComponent,
    OperationComponent,
    ITAdminPoolComponent,
    RepreApproverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SporestapiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
