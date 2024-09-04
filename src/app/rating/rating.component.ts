import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  @Input() rating: number = 0;
  @Input() starCount: number = 5;
  @Input() color: string = 'gold'; // You can set the color of stars
  @Output() ratingUpdated = new EventEmitter<number>();

  stars: boolean[] = [];
  constructor() {
    this.stars = Array(this.starCount).fill(false);
  }

  ngOnChanges(): void {
    this.fillStars(this.rating);
  }

  fillStars(rating: number) {
    this.stars = this.stars.map((_, index) => index < rating);
  }

  onClick(rating: number): void {
    this.ratingUpdated.emit(rating);
    this.fillStars(rating);
  }

}
