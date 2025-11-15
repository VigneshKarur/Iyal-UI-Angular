import { Component } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { latLng, tileLayer, MapOptions, Layer, icon, marker } from 'leaflet';


@Component({
  selector: 'app-contact',
  imports: [LeafletModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  options: MapOptions = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 15,
    center: latLng(13.080506447827307, 80.1675523470297) // New York City example
  };
  layers: Layer[] = [
    marker([13.080506447827307, 80.1675523470297], {
      icon: icon({
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
      })
    })
  ];

}
