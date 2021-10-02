import { useContext } from 'react'
import './Footer.css'
import ThemeContext from '../../contexts/ThemeContext'

const Footer = () => {
    const themeColor = useContext(ThemeContext)
    return(
        <div className="Footer">
            <h5>Developed By Neo</h5>
            <button onClick={() => {themeColor.setActiveTheme('green')}} className="footerbtn green">Green</button>
            <button onClick={() => {themeColor.setActiveTheme('blue')}} className="footerbtn blue">Blue</button>
        </div>
    )
}

export default Footer