import { Component, Input, inject } from '@angular/core';
import { MatDialogActions, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { DatepickerDropdownPositionY, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { Firestore, getFirestore } from '@angular/fire/firestore';
import { initializeApp } from '@angular/fire/app';
import { doc, setDoc } from "firebase/firestore";

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatInputModule,
    MatFormFieldModule,
    MatButton,
    MatDialogTitle,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {
  @Input()
  yPosition: DatepickerDropdownPositionY = "above";

  user = new User();
  birthDate: Date;
  firestore: Firestore = inject(Firestore);

  constructor() {
    this.birthDate = new Date();
  }

  async saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current user is', this.user);

    await setDoc(doc(this.firestore, 'user', this.user.firstName), this.user.toJSON())
  }
}
