import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar typescript',
    descricao: 'Assistir a aula 3',
    prioridade: 'importante',
    status: 'pendente'
  },

  {
    titulo: 'Pagar a conta de luz',
    descricao: 'Pegar fatura no app',
    prioridade: 'urgente',
    status: 'concluido'
  },

  {
    titulo: 'Ir para a academia',
    descricao: 'Treino A',
    prioridade: 'importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            prioridade={t.prioridade}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
