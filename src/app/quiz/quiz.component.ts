import {Component, inject, input} from '@angular/core';
import {Question} from '../data.models';
import {QuizService} from '../quiz.service';
import {Router} from '@angular/router';

import { QuestionComponent } from '../question/question.component';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css'],
    imports: [QuestionComponent]
})
export class QuizComponent {

  questions = input<Question[]>([]);

  userAnswers: string[] = new Array(5).fill("");
  quizService = inject(QuizService);
  router = inject(Router);

  submit(): void {
    this.quizService.computeScore(this.questions(), this.userAnswers);
    this.router.navigateByUrl("/result");
  }

  allAnswered(): boolean {
    return this.userAnswers.every(ans => ans != "");
  }

}
