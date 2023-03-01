import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../models/content.model';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent {
  newContent: Content = new Content();
  @Output() contentAdded = new EventEmitter<Content>();

  addContent() {
    this.contentAdded.emit(this.newContent);
    this.newContent = new Content();
  }
}
