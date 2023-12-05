import { ReactNode } from 'react'
import Loader from '../Loading/Loading'

interface ButtonProps{
  children: ReactNode,
  onClick?: () => void,
  appearance?: "primary" | "secondary"
  loading: boolean
}

const Button = ({children, onClick, appearance = "primary", loading }:ButtonProps) => {
  return (
    <button
      type="button" 
      className={`button-default ${appearance}`} 
      onClick={onClick}
    >
      {
        loading ? 
        <div className="loader-container">
          <Loader size="sm"/> 
        </div> :
        children
      }
    </button>
  )
}

export default Button