// Component Imports
import { Input } from '../Input'
import { Button } from '../Button'

// Styled Import
import DashboardStyled from "./style"

export function Dashboard() {

  return (
    <DashboardStyled>
      <Input />
      <Button />
    </DashboardStyled>
  )
}