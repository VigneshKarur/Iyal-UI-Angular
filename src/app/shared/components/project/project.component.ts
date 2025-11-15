import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { PhotosService } from '../../services/photos.service';
import { CardsComponent } from '../cards/cards.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-project',
  imports: [CommonModule, RouterModule, CardsComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit {
  projectId!: string;
  coverImage!: string;
  images: any = [];
  slides: any = [];
  projectDescription: any;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotosService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('project')!;
    this.dataService.fetchProjectDescription().subscribe((res: any) => {
      this.projectDescription = res?.description.filter((val: any) => {
        return (
          val.id?.split(' ').join('').toLowerCase() ===
          this.projectId.split(' ').join('').toLowerCase()
        );
      })[0];
      this.projectDescription = this.splitObjectText(this.projectDescription);
    });
    this.photoService.getprojectImages(this.projectId).subscribe({
      next: (urls) => {
        urls.forEach((val) => {
          this.images.push(val);
        });
        this.images.forEach((val: string, index: number) => {
          this.slides[index] = { image: val, caption: '' };
        });
        this.images.splice(0, 1);
        this.slides.splice(0, 1);
      },
      error: (err) => console.error('Failed to fetch images', err),
    });
    this.photoService.getPortfolioImages().subscribe({
      next: (urls) => {
        const response = JSON.parse(urls);
        const images: string[] = [];
        response.forEach((url: string) => {
          images.push(url);
        });
        images.splice(0, 1);
        this.coverImage = images[history.state.index];
      },
      error: (err) => console.error('Failed to fetch images', err),
    });
  }
  originalOrder = (): number => 0;

  splitObjectText(value: any) {
    const result = Object.entries(this.projectDescription).map(
      ([key, value]) => {
        const formattedKey = key
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, (str) => str.toUpperCase())
          .trim();
        return { key: formattedKey, value };
      }
    );
    return result;
  }
  splitText(value: string) {
    return value
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  }
}
