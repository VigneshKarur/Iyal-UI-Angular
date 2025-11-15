import { Component } from '@angular/core';
import { CarouselComponent1 } from '../../shared/components/carousel/carousel.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent1],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
constructor(private router: Router) {}
  imageClick(e:any){
   this.router.navigate([`/portfolio/${e}`]);
  }
}
