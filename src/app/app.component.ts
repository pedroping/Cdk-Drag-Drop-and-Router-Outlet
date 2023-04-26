import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .content {
        min-height: calc(100vh - 64px);
        display: flex;
      }
      .active {
        border-color: #fff;
      }
      a {
        margin-left: 15px;
      }
    `,
  ],
})
export class AppComponent {
  isButtonVisible = false;
}
