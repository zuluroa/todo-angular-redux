
import { Action, createReducer, on } from '@ngrx/store';
import { setFiltro, filtroValidos } from './filtro.actions';


export const initialState: filtroValidos = 'TODOS';

const _filtroReducer = createReducer<filtroValidos,Action>(
  initialState,
  on( setFiltro , (state, { filtro }) => filtro),
);

export function filtroReducer(state: any, action: any) {
  return _filtroReducer(state, action);
}