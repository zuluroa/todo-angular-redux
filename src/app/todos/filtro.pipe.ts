import { Pipe, PipeTransform } from '@angular/core';
import { filtroValidos } from '../filtro/filtro.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform( todos: Todo[], filtro: filtroValidos ): Todo[] {


    switch( filtro ) {

      case 'COMPLETADOS':
        return todos.filter( todo => todo.completado );
      
      case 'PENDIENTES':
        return todos.filter( todo => !todo.completado );

      default:
        return todos;
    }


  }

}