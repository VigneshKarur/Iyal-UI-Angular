import { NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [NgIf],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  @Input() isLoading = false;

  constructor(private cdr: ChangeDetectorRef) {}
  ngOnChanges(){
     this.cdr.detectChanges();
  }
}
