import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadedFeature = 'recipe';

  title(title: any) {
    throw new Error('Method not implemented.');
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
