// Component Import
import { TaskArea } from "../TaskArea"

// Styled Import
import ProgressStyled from "./style"

export function Progress() {
  return (
    <>
      <ProgressStyled>
        <div className="progress">
          <p>Tarefas criadas <span>0</span></p>
          <p>Concluídas <span>0 de 5</span></p>
        </div>
      </ProgressStyled>
      <TaskArea />
    </>
  )
}