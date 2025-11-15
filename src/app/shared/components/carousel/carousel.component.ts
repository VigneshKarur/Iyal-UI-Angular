import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  imports: [FormsModule, NgbCarouselModule, NgClass, NgIf, NgFor],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent1 {
  @Input() interval = 4000;
  @Input() page = '';
  @Input() slides: any = [
    { image: 'images/2.jpg', caption: 'Nanganallur' },
    { image: 'images/6.png', caption: 'House Of Rubbles' },
    { image: 'images/7.jpg', caption: 'KPS Enclave' },
    { image: 'images/8.jpg', caption: 'Pen MD Cabin' },
    { image: 'images/9.jpg', caption: 'Residence 12' },
    { image: 'images/11.jpg', caption: 'Sengunthar Conventional Center' },
    { image: 'images/12.jpg', caption: 'Veedu 11' },
    { image: 'images/1.jpg', caption: 'Agam Semi Urban Green Home' },
  ];
  @Output() imageClick = new EventEmitter<any>();

  constructor(private cdr: ChangeDetectorRef) {}
  ngOnChanges() {
    this.cdr.detectChanges();
  }
  onImageClick(e: any, project: string) {
    if (this.page === 'home') {
      this.imageClick.emit(project);
      return;
    }
    this.imageClick.emit(e);
  }
}
