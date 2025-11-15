import { Component, OnInit } from '@angular/core';
import { CardsComponent } from '../../shared/components/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';

import { PhotosService } from '../../shared/services/photos.service';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-portfolio',
  imports: [CardsComponent, HttpClientModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  images: any[] = [];
  projectList: any[] = [];
  projectDescription: any;

  constructor(
    private photoService: PhotosService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.dataService.fetchProjectDescription().subscribe((res: any) => {
      this.projectDescription = res?.description.map((val: any) => val.id);
      this.projectDescription = this.projectDescription.filter(
        (val: any) => val
      );
    });
    this.photoService.getPortfolioImages().subscribe({
      next: (urls) => {
        const response = urls;
        response.forEach((url: string) => {
          this.images.push(url);
        });

        this.images.splice(0, 1);
      },
      error: (err) => console.error('Failed to fetch projectList', err),
    });
  }
}
