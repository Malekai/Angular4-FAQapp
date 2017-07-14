import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/Question';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  // We are emitting data from this component as our model
  @Output() questionAdded = new EventEmitter<Question>();
  text:string;
  answer:string;

  constructor() { }

  ngOnInit() {
  }

  addQuestion() {
  	// Use event emitter here
  	// Emitting text input data using our model as baseline template
  	this.questionAdded.emit({text:this.text, answer:this.answer, hide:true})
  }

}
