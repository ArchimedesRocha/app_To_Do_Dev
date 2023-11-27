// React Imports
import { useState } from "react"

// Styled Import
import CreateTaskStyled from "./style"

export function CreateTask() {

  const [input, setInput] = useState("")

  return (

    <CreateTaskStyled>
      <div className="container">
        <input
          type="text"
          value={input}
          className={input !== "" ? "contain" : ""}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}
        />

        <button
          type="submit"
        >
          <span>Criar</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
            <g clip-path="url(#clip0_12_505)">
              <path d="M8.48373 1.45164C9.77565 1.45164 11.0386 1.83474 12.1128 2.5525C13.187 3.27025 14.0242 4.29043 14.5186 5.48401C15.013 6.6776 15.1424 7.99098 14.8903 9.25808C14.6383 10.5252 14.0161 11.6891 13.1026 12.6026C12.1891 13.5162 11.0252 14.1383 9.75807 14.3903C8.49097 14.6424 7.17759 14.513 5.984 14.0186C4.79042 13.5242 3.77025 12.687 3.05249 11.6128C2.33473 10.5386 1.95163 9.27566 1.95163 7.98374C1.95832 6.25338 2.64867 4.5958 3.87223 3.37224C5.09579 2.14868 6.75337 1.45833 8.48373 1.45164ZM8.48373 6.68116e-05C6.90611 0.00652074 5.36578 0.480235 4.05717 1.36141C2.74857 2.24258 1.73037 3.4917 1.13111 4.95108C0.531846 6.41046 0.378395 8.01468 0.690125 9.5612C1.00186 11.1077 1.76479 12.5272 2.88262 13.6405C4.00044 14.7538 5.42304 15.5109 6.97082 15.8163C8.51861 16.1217 10.1222 15.9617 11.5791 15.3565C13.036 14.7513 14.281 13.728 15.1568 12.4158C16.0326 11.1036 16.5 9.56136 16.5001 7.98374C16.5001 6.93255 16.2925 5.89171 15.8892 4.92096C15.486 3.9502 14.895 3.06863 14.1502 2.32685C13.4053 1.58507 12.5214 0.997679 11.549 0.598388C10.5766 0.199097 9.5349 -0.00423349 8.48373 6.68116e-05Z" fill="#F2F2F2" />
              <path d="M12.207 7.38129H8.9954V4.16968H7.91397V7.38129H4.69873V8.46271H7.91397V11.6743H8.9954V8.46271H12.207V7.38129Z" fill="#F2F2F2" />
            </g>
            <defs>
              <clipPath id="clip0_12_505">
                <rect width="16" height="16" fill="white" transform="translate(0.5)" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

    </CreateTaskStyled>
  )
}