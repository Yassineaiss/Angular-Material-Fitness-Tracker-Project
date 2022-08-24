import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css'],
})
export class NewTrainingComponent implements OnInit {
  exercises!: Observable<Exercise[]>;
  constructor(
    private trainingService: TrainingService,
    private db: AngularFirestore
  ) {}

  // ngOnInit(): void {
  //   // this.exercises = this.trainingService.getAvailableExercises();
  //   this.db
  //     .collection('availableExercises')
  //     .snapshotChanges()
  //     .map(docArray =>{
  //       docArray.map(doc => {
  //         return {
  //           id:doc.payload.doc.id,
  //           ...doc.payload.doc.data()
  //         }
  //       })
  //     })
  //     .subscribe(result => {
  //       for (const res of result){
  //         console.log(res.payload.doc.data());
  //       }
  //     });
  // }

  ngOnInit(): void {
    this.exercises =this.db
      .collection('availableExercises')
      .snapshotChanges()
      .pipe(
        map((docArray) => {
          return docArray.map((doc: any) => {
            return {
              id: doc.payload.doc.id,

              name: doc.payload.doc.data().name,
              duration: doc.payload.doc.data().duration,
              calories: doc.payload.doc.data().calories,
            };
          });
        })
      )

  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }
}
