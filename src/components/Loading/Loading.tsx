import React from 'react'

interface LoaderProps {
    size: "xs" | "sm" | "md" | "lg",
    color?: string
}

const Loader = ({ size = "md", color = "#17181C" }: LoaderProps) => {
  return (
    <div 
        className={`loader ${size}`} 
        style={{ 
            borderRightColor: color,
        }}>
        
    </div>
  )
}

export default Loader