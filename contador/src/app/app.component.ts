import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contador';

  @Input() valor: number = 0;

  incrementa() {
    this.valor++;
  }

  decrementa() {
    this.valor--;
  }
  
}
