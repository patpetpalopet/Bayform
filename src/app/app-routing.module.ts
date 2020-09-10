import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './components/portal/portal.component';
import { FormsComponent } from './components/forms/forms.component';
import { F001Component } from './components/f001/f001.component';
import { F001listComponent } from './components/f001list/f001list.component';
import { ApprovePortalComponent } from './components/approve-portal/approve-portal.component';
import { ApprovePageComponent } from './components/approve-page/approve-page.component';
import { OperationComponent } from './components/operation/operation.component';
import { ITAdminPoolComponent } from './components/itadmin-pool/itadmin-pool.component';
import { RepreApproverComponent } from './components/repre-approver/repre-approver.component';

const routes: Routes = [
  { path: 'portal', component: PortalComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'f001/form', component: F001Component },
  { path: 'f001/list', component: F001listComponent },
  { path: 'f001/view', component: F001listComponent },
  { path: 'operation', component: OperationComponent},
  { path: 'admin/poll', component: ITAdminPoolComponent},
  { path: 'approve', component: ApprovePortalComponent },
  { path: 'represent', component: RepreApproverComponent },
  { path: 'approve/:reqid/page', component: ApprovePageComponent },
  { path: '', redirectTo: 'portal', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

