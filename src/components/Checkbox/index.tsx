// React Imports
import { useState } from "react"

// Styled Imports
import CheckboxStyled from './style'

// Component Imports
import { SvgChecked } from "../Svg/Checked"
import { SvgUnchecked } from "../Svg/Unchecked"

interface Props {
  wasChecked: (value: boolean) => void;
}

export function Checkbox({ wasChecked }: Props) {

  const [isChecked, setIsChecked] = useState(false)

  function handleChecked(value: React.ChangeEvent<HTMLInputElement>) {
    setIsChecked(value.target.checked);
    wasChecked(value.target.checked);
  }

  function handleClicked() {
    setIsChecked(!isChecked)
    wasChecked(!isChecked)
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