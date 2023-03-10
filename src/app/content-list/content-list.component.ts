import { Component } from '@angular/core';



@Component({
  selector: 'app-content-list',
  template: `
    <div *ngFor="let content of contents; index as i">
      <app-content-card [content]="content"
        [style.border]="i === 0 ? '2px solid black' : '1px solid gray'"></app-content-card>
    </div>
  `
})
export class ContentListComponent {

}


