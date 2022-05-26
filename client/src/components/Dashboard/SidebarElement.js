import React from 'react'
import "../../styles/Dashboard.css";



function SidebarElement(props) {
    function handleClick(){
        if(props.active !== props.feature){
            props.setActive(props.feature)
        }
    }

    return (
        <div className={(props.active === props.feature)?"features-active":"features"} onClick={handleClick}>
          <p>{props.feature}</p>
        </div>
    )
}

export default SidebarElement
