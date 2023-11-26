// React Imports
import { useState } from "react";

// Styled Imports
import CheckBox from "./style";
import { SvgChecked } from "../Svg/Checked";
import { SvgUnchecked } from "../Svg/Unchecked";

// Component Imports

export function Checkbox() {

  const [isChecked, setIsChecked] = useState(false);

  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setIsChecked(event.target.checked)
  }

  function handleLabelClick() {
    setIsChecked(!isChecked);
  }

  const labelClicked = isChecked ? 'unchecked' : 'checked';

  return (
    <CheckBox
      htmlFor=""
      className={labelClicked}
      onClick={(handleLabelClick)}
    >

      {isChecked ? (
        <SvgChecked />
      ) : (
        <SvgUnchecked />
      )}

      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChangeInput}
      />

    </CheckBox>
  )
}