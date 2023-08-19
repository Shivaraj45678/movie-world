import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  audioList = [
    {
      url: "https://pwdown.info/9990/03%20Tum%20Saath%20Ho%20-%20Tamasha%20(Arijit%20Singh)%20320Kbps.mp3",
      title: "shiva",
      cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    },
    {
      url: "https://pwdown.info/9990/01%20Matargashti%20(Tamasha)%20Mohit%20Chauhan%20320Kbps.mp3",
      title: "Sample 2",
      cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    },
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
      title: "Sample 3",
      cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    }
  ];
  title = 'hello';

  play() {
    console.log("play");
  }
}
