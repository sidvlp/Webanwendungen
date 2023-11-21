import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-edit-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-dialog.component.html',
  styleUrl: './edit-dialog.component.css'
})
export class EditDialogComponent {
  editForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      autor: [data.autor, Validators.required],
      titel: [data.titel, Validators.required],
      jahr: [data.jahr, Validators.required],
      seiten: [data.seiten, Validators.required],
      verlag: [data.verlag, Validators.required],
    });
  }

  saveChanges() {
    if (this.editForm.valid) {
      this.dialogRef.close(this.editForm.value);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
