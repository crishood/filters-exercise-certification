import {Component, input} from '@angular/core';
import {Results} from '../data.models';

import { QuestionComponent } from '../question/question.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-answers',
    templateUrl: './answers.component.html',
    styleUrls: ['./answers.component.css'],
    imports: [QuestionComponent, RouterLink]
})
export class AnswersComponent {

  data = input.required<Results>();

}
