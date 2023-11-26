// React Imports
import { useState } from "react"

// Styled Imports
import CheckboxStyled from './style'

// Component Imports
import { SvgChecked } from "../Svg/Checked"
import { SvgUnchecked } from "../Svg/Unchecked"

export function Checkbox() {

  const [isChecked, setIsChecked] = useState(false)

  function handleChecked(value: React.ChangeEvent<HTMLInputElement>) {
    setIsChecked(value.target.checked)
  }

  function handleClicked() {
    setIsChecked(!isChecked)
  }

  return (
    <CheckboxStyled
      htmlFor=""
      onClick={handleClicked}
    >
      {isChecked === true ? (
        <SvgChecked />
      ) : (
        <SvgUnchecked />
      )}

      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChecked}
      />
    </CheckboxStyled>
  )
}