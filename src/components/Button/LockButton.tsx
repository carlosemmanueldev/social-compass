import {useState} from "react";
import { LockSlash, Lock1 } from "iconsax-react";

function LockButton(){

    const [showPassword, setShowPassword] = useState(false);

    return(
        <button onClick={()=>setShowPassword(!showPassword)} >
            {
                showPassword ?
                <LockSlash size={24} color="#fff"/>
                :
                <Lock1 size={24} color="#fff"/>
            }
        </button>
    )
}

export default LockButton;