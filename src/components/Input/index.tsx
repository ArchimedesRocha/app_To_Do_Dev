// React Imports
import { useState } from "react"

// Styled Import
import InputStyled from "./style"

export function Input() {

  const [input, setInput] = useState("")

  return (
    <InputStyled
      type="text"
      value={input}
      className={input !== "" ? "contain" : ""}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}
    />
  )
}