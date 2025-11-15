import { Component } from '@angular/core';
import { DisableRightClickDirective } from './shared/directives/disable-right-click.directive';
import { HeaderComponent } from './shared/components/header/header.component';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { LoaderService } from './core/services/loader.service';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { CommonModule } from '@angular/common';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  imports: [DisableRightClickDirective,HeaderComponent,RouterModule, LoaderComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'iyal-atelier';
  loading$: Observable<boolean>;

  constructor(private loaderService: LoaderService, private dataService: DataService) {
    this.loading$ = this.loaderService.loading$;
    this.dataService.fetchProjectDescription();
  }
}

