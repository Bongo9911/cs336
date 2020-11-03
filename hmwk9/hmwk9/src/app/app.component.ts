import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hmwk9';
  target: number;
  accuracy: number = 1;
  guess: number;
  feedback : string[] = [];
  correct: boolean;
  count: number = 0;

  submit() {
    this.count++; //increases count of guesses
    const correctAnswer = Math.sqrt(this.target);
    const guess = Number(this.guess);
    if (Math.abs(guess - correctAnswer) / correctAnswer <= this.accuracy / 100) { //correct answer
      this.feedback.push(this.guess + " is close enough! The correct answer was: " + correctAnswer);
      this.correct = true;
    } else if (guess < correctAnswer) { //answer is too low
      this.feedback.push(this.guess + " is too low, guess a higher number");
    } else {    // answer is too high.
      this.feedback.push(this.guess + " is too high, guess a lower number");
    }
    console.log(this.guess);
  }

  //Sets the target to a random number between 50 and 250
  randomize() { 
    this.target = Math.floor(Math.random() * (250 - 50 + 1) ) + 50;
  }

  reset() {
    this.guess = null;
    this.feedback = [];
    this.correct = false;
    this.count = 0;
  }
}
