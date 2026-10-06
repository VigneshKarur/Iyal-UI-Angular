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
  readonly destination = {
    lat: 11.0262361262501, 
    lng: 76.95096280641536
  };

  options: MapOptions = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 15,
    center: latLng(this.destination.lat, this.destination.lng)
  };

  layers: Layer[] = [
    marker([this.destination.lat, this.destination.lng], {
      icon: icon({
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
      })
    })
  ];

  getDirectionsUrl(origin?: string): string {
    const destination = `${this.destination.lat},${this.destination.lng}`;
    const params = new URLSearchParams({
      api: '1',
      destination,
      travelmode: 'driving'
    });

    if (origin) {
      params.set('origin', origin);
    }

    return `https://www.google.com/maps/dir/?${params.toString()}`;
  }

  openDirections(): void {
    const destination = `${this.destination.lat},${this.destination.lng}`;
    const defaultUrl = this.getDirectionsUrl();

    if (!('geolocation' in navigator)) {
      window.open(defaultUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const origin = `${position.coords.latitude},${position.coords.longitude}`;
        const url = this.getDirectionsUrl(origin);
        window.open(url, '_blank', 'noopener,noreferrer');
      },
      () => {
        window.open(defaultUrl, '_blank', 'noopener,noreferrer');
      }
    );
  }
}
