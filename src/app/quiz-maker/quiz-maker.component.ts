import { Component, inject, OnInit } from '@angular/core';
import { Category, Difficulty, Question } from '../data.models';
import { filter, map, Observable } from 'rxjs';
import { QuizService } from '../quiz.service';
import { FormsModule } from '@angular/forms';
import { QuizComponent } from '../quiz/quiz.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-quiz-maker',
  imports: [FormsModule, QuizComponent, AsyncPipe],
  templateUrl: './quiz-maker.component.html',
  styleUrls: ['./quiz-maker.component.css'],
})
export class QuizMakerComponent implements OnInit {
  categories$: Observable<Category[]>;
  formatedCategories$: Observable<Category[]>;
  questions$!: Observable<Question[]>;
  subCategories$: Observable<Category[]>;
  selectedCategoryId: string;

  protected _quizService = inject(QuizService);

  ngOnInit(): void {
    this._setInitialValues();
  }

  public onCreateQuiz(cat: string, difficulty: string): void {
    this.questions$ = this._quizService.createQuiz(
      cat,
      difficulty as Difficulty
    );
  }

  public onSelectCategory(categoryId: string): void {
    this.subCategories$ = this.categories$.pipe(
      map((categories) => {
        const filteredCategories = categories.filter((category) => {
          const selectedCategory =
            categories
              .find((cat) => cat.id === parseInt(categoryId))
              ?.name.split(':')[0] || '';
          return category.name.includes(selectedCategory);
        });
        if (filteredCategories.length === 1) {
          this.selectedCategoryId = filteredCategories[0].id.toString();
        }
        return filteredCategories;
      })
    );
  }

  public onSelectSubCategory(categoryId: string) {
    this.selectedCategoryId = categoryId;
  }

  private _setInitialValues() {
    this.categories$ = this._quizService.getAllCategories();
    this.formatedCategories$ = this.categories$.pipe(
      map((categories) => {
        const newCategories = categories.map((category) => {
          const formatedCategory = {
            name: category.name.split(':')[0],
            id: category.id,
          };
          return formatedCategory;
        });
        return Array.from(
          new Map(
            newCategories.map((category) => [category.name, category])
          ).values()
        );
      })
    );
  }
}
