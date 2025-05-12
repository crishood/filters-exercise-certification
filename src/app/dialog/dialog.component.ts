import {Component, ElementRef, input, viewChild} from '@angular/core';

@Component({
  selector: 'app-dialog',
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

  title = input.required<string>();
  private dialogRef = viewChild<ElementRef<HTMLDialogElement>>("dialog");

  openModal(): void {
    this.dialogRef()?.nativeElement.showModal();
  }

  close(): void {
    this.dialogRef()?.nativeElement.close();
  }
}
