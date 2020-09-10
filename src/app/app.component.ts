import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tbankform';
  tabmenu = 'User';
  onActivate(event: any) {
    // console.log(event);
    if (event.page) {
      this.tabmenu = event.page;
    }
    window.scroll(0, 0);
  }
}
