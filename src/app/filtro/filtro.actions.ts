import { createAction, props } from '@ngrx/store';

export type filtroValidos = 'TODOS' | 'COMPLETADOS' | 'PENDIENTES';

export const setFiltro = createAction('[FILTRO] set FILTRO',
    props<{filtro: filtroValidos}>());