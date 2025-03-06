import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl: string ="assets/download.png";
  url = "https://www.bridgelabz.com";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";
  }

  onClick($event : MouseEvent)
  {
    console.log("Save button is clicked!", $event);
    window.open(this.url,"_blank");
  }
}
