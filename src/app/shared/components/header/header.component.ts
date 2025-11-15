import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  tabs = ['ABOUT', 'PORTFOLIO', 'CONTACT']
  openMenu = true;
  toggleButton(){
    this.openMenu = !this.openMenu
  }
}
