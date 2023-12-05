import { ReactNode } from 'react'

interface BoxProps {
    children: ReactNode
    classes?: string
}

function Box({ children, classes }: BoxProps) {
  return (
    <div className={`box ${classes}`}>
        {children}
    </div>
  );
}

export default Box;