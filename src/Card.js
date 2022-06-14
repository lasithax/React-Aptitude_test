import React from "react";
import "./style.css"

export default function Card(props){
    
    function openUserView(id){
        props.toggleView(props.id)
    }

    return(
    <div className="card" onClick={()=>openUserView(props.id)}>
        <img src={props.avatar} className="card--avatar"></img>
        
        <subtext className="card--firstname">{props.firstname}</subtext>
        
        <subtext className="card--email">{props.email}</subtext>
    </div>
    );
}