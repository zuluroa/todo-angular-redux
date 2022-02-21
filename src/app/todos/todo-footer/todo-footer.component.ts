import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtroValidos } from 'src/app/filtro/filtro.actions';
import { setFiltro } from '../../filtro/filtro.actions';
import { limpiarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: filtroValidos = 'TODOS';

  filtros: filtroValidos[] = ['TODOS', 'COMPLETADOS' , 'PENDIENTES'];

  pendientes: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
   this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      this.pendientes   = state.todos.filter( todo => !todo.completado ).length;

    });
  }

  cambiarFiltro( filtro: filtroValidos ) {
    this.store.dispatch( setFiltro({ filtro }) );
  }

  limpiarCompletados() {
    this.store.dispatch( limpiarCompletados() )
  }

}
