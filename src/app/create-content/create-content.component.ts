import { Component, OnInit } from '@angular/core';
import { ContentService } from '../favActor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contentItem: any;

  constructor(private themedService: ContentService) { }

  ngOnInit() {
    this.themedService.getItemById(1).subscribe(data => {
      this.contentItem = data;
    });
  }
}
