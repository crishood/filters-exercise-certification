import {Component, input, output} from '@angular/core';
import {Question} from '../data.models';


@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css'],
    imports: []
})
export class QuestionComponent {

  question = input.required<Question>()
  correctAnswer = input<string>();
  userAnswer = input<string>();
  change = output<string>();
  currentSelection!: string;


  getButtonClass(answer: string): string {
    if (! this.userAnswer()) {
        if (this.currentSelection == answer)
          return "tertiary";
    } else {
      if (this.userAnswer() == this.correctAnswer() && this.userAnswer() == answer)
        return "tertiary";
      if (answer == this.correctAnswer())
        return "secondary";
    }
    return "primary";
  }


  buttonClicked(answer: string): void {
    this.currentSelection = answer;
    this.change.emit(answer);
  }
}
