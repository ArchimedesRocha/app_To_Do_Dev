// Styled Imports
import ProgressStyled from "./style"


export function Progress() {
  return (
    <ProgressStyled>
      <div className="progress">
        <p>Tarefas criadas <span>5</span></p>
        <p>Concluídas <span>2 de 5</span></p>
      </div>
    </ProgressStyled>
  )
}