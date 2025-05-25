import { Component } from '@angular/core';
import { DisableRightClickDirective } from './shared/directives/disable-right-click.directive';


@Component({
  selector: 'app-root',
  imports: [DisableRightClickDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'iyal-atelier';
}
