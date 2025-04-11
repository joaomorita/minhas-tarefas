import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: {
    itens: [
      new Tarefa(
        'Estudar Javascript',
        enums.Prioridade.IMPORTANTE,
        enums.Status.PENDENTE,
        '',
        0
      ),
      new Tarefa(
        'Estudar Typescript',
        enums.Prioridade.URGENTE,
        enums.Status.CONCLUIDA,
        'Rever aula 2 do módulo',
        1
      ),
      new Tarefa(
        'Ir para academia',
        enums.Prioridade.NORMAL,
        enums.Status.PENDENTE,
        'treino C',
        2
      )
    ]
  },
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },

    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexTarefaParaEditar = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexTarefaParaEditar >= 0) {
        state.itens[indexTarefaParaEditar] = action.payload
      }
    },

    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaJaExiste) {
        return alert('Essa tarefa já foi cadastrada.')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions

export default tarefasSlice.reducer
