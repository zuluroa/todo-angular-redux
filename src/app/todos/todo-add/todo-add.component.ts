import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { crear } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {


  txtInput!: FormControl;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('Hola',Validators.required);
   }

  ngOnInit(): void {
  }

  agregar(){
    if(this.txtInput.invalid){
      return;
    }
    this.store.dispatch(crear({ texto: this.txtInput.value }));
    this.txtInput.reset();
  }

}
