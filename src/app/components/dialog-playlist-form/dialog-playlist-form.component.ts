import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-playlist-form',
  templateUrl: './dialog-playlist-form.component.html',
  styleUrls: ['./dialog-playlist-form.component.sass']
})
export class DialogPlaylistFormComponent implements OnInit {

  formGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null),
    public: new FormControl(false, [Validators.required]),
  });

  constructor(
    public dialogRef: MatDialogRef<DialogPlaylistFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) this.setValues();
  }

  setValues() {
    this.formGroup.get('name').setValue(this.data.name);
    this.formGroup.get('description').setValue(this.data.description);
    this.formGroup.get('public').setValue(this.data.public);
  }

  onSubmit() {
    this.dialogRef.close(this.formGroup.getRawValue());
  }

  ngOnInit(): void {
  }

}
