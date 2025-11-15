import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CarouselComponent1 } from '../carousel/carousel.component';

@Component({
  selector: 'app-cards',
  imports: [
    CommonModule,
    GalleriaModule,
    DialogModule,
    ButtonModule,
    CarouselComponent1,
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent implements OnInit {
  @Input() openImage: boolean = false;
  @Input() images: string[] = [];
  @Input() coverImage: string = '';
  @Input() projectList: string[] = [];
  @Input() page: string = '';
  @Input() slides: any = [];

  displayCustom: boolean = false;
  activeIndex: number = 0;
  showImages: any = [];
  imagesReady = false;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.preloadImages(this.images).then(() => {
      this.imagesReady = true;
      this.gridOptions();
      this.cdr.detectChanges();
    });
  }

  gridOptions() {
    if (this.page === 'project') {
      return 'grid grid-cols-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 m-[0] xl:m-[11.25%] lg:m-[7.25%] md:m-[3.25%] sm:m-[1.25%] !mt-[2%]  sm:ml-0';
    } else {
      return 'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4';
    }
  }
  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 1 },
    { breakpoint: '768px', numVisible: 2 },
    { breakpoint: '560px', numVisible: 1 },
  ];

  imageClick(index: number) {
    if (this.openImage) {
      this.activeIndex = index;
      this.displayCustom = true;
    } else {
      this.router.navigate([`/portfolio/${this.projectList[index]}`], {
        state: { index: index },
      });
    }
  }
  preloadImages(imageUrls: string[]): Promise<void[]> {
    return Promise.all(
      imageUrls.map(
        (url) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve();
            img.onerror = () => resolve();
          })
      )
    );
  }
}
