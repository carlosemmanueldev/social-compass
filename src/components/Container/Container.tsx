import { ReactNode } from 'react'
import bgImage from "../../assets/images/login-side-img.png";

interface ContainerProps{
    children: ReactNode
}

function Container({ children }: ContainerProps) {
  return (
    <div className="login-page"> 
      <div className="login-page-info">
        <div className="login-page-info_container">
          {children}
        </div>
      </div>

    <div className="login-page_image">
          <img className="login-page_image_bg" src={bgImage} alt="Login" />
      </div>
    </div>
  );
}

export default Container;