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
  imgUrl ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fyourstory.com%2Fcompanies%2Fbridgelabz-solutions&psig=AOvVaw3BbzY6Uk_fOvnh1HJyya5Q&ust=1741333931368000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDY08X89IsDFQAAAAAdAAAAABAE";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz";
  }
}
