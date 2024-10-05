import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCarouselComponent } from '@shamrock/ui';
import { imageData } from '@shamrock/ui';
import { AboutSectionComponent } from '@shamrock/ui';
import { MeetTeamComponent } from '@shamrock/ui';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [
    CommonModule,
    ImageCarouselComponent,
    AboutSectionComponent,
    MeetTeamComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  carouselData: imageData[] = [
    {
      image: './assets/home/skateboardArticleHeader.png',
      altText:
        'Engineering of Skateboarding article, with header, body text, and image',
      heading: 'Learn About the Engineering of Skateboarding',
      description: 'Article available in the May 2024 issue!',
      darkText: false,
    },
    {
      image: './assets/home/shamrockMay2024Cover.png',
      altText:
        'Shamrock May 2024 Cover, featuring a person skateboarding towards the viewer',
      heading: 'May 2024 Issue Out Now!',
      description: 'Read it over on the Issues tab',
      darkText: true,
    },
    {
      image: './assets/home/trailReviewArticle.png',
      altText: 'Heading of trail review article',
      heading: 'Columbia Trail Reviews',
      description:
        'Learn about 6 great trails across Columbia, in the May 2024 issue!',
      darkText: false,
    },
  ];
}
