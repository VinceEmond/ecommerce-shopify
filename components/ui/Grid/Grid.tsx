import { FC, ReactNode } from "react"
import s from "./Grid.module.css" // "s" is short for style

const Grid: FC<ReactNode> = ({children}) => {

  return (
    <div className={s.root}>
      {children}
    </div>
  )
}

export default Grid