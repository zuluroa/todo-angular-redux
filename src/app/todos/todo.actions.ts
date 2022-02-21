import { createAction, props } from '@ngrx/store';

export const crear = createAction('[TODO] crear TODO',
    props<{texto: string}>());

export const toggle = createAction('[TODO] toggle TODO',
    props<{id: number}>());

export const editar = createAction('[TODO] editar TODO',
    props<{id: number, texto:string}>());

export const borrar = createAction('[TODO] borrar TODO',
    props<{id: number}>());

export const toggleTodo = createAction('[TODO] toggleTodo TODO',
    props<{completado: boolean}>());

export const limpiarCompletados = createAction('[TODO] limpiarCompletados TODO');