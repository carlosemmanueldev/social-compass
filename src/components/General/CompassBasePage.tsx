import { ReactNode } from 'react'
import SideMenu from '../SideMenu/SideMenu'

interface CompassBasePageProps{
    children: ReactNode
}
const CompassBasePage = ({ children }: CompassBasePageProps) => {
  return (
        <div className="base-page">
            <SideMenu/>

            <div className="base-page_children">
                { children }
            </div>
        </div>
  )
}

export default CompassBasePage