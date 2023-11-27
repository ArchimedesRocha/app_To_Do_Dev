// Component Imports
import { Task } from '../Task'
import { Progress } from '../Progress';
import { CreateTask } from '../CreateTask';

// Image Import
import clipboard from '../../assets/clipboard.png'

// Styled Import
import ContentStyled from './style'

export function Content() {

  return (
    <ContentStyled>
      <CreateTask />
      <Progress />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <div className='without-task'>
        <img src={clipboard} alt="Icone de documento" />
        <div className="messages">
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </ContentStyled>
  )
}