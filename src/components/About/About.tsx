import {Cake, User, Location, Sms, Call} from 'iconsax-react'
import Box from '../../components/UI/Box'
import {formatDate} from "../../utils/Time.ts";

function About({user}) {
    const parsedDate = formatDate(user.birthdate);

    return (
        <Box classes="about">
            <h4>Sobre</h4>

            <div className="about_item">
                <User size="20"/>
                <p className="about_item_p">{user.sex ? user.sex : "Não Informado"}</p>
            </div>

            <div className="about_line"/>

            <div className="about_item">
                <Cake size="20"/>
                <p className="about_item_p">{parsedDate ? `Nascido em ${parsedDate}` : "Não Informado"}</p>
            </div>

            <div className="about_line"/>

            <div className="about_item">
                <Location size="20"/>
                <p className="about_item_p">{user.address ? user.address : "Não Informado"}</p>
            </div>

            <div className="about_line"/>

            <div className="about_item">
                <Sms size="20"/>
                <p className="about_item_p">{user.email ? user.email : "Não Informado"}</p>
            </div>

            <div className="about_line"/>

            <div className="about_item">
                <Call size="20"/>
                <p className="about_item_p">{user.phone ? user.phone : "Não Informado"}</p>
            </div>
        </Box>
    )
}

export default About;