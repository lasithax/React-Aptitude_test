import React from "react";
import "./style.css"

export default function User(props){

    const [selectedUserData,setSelectedUserData]=React.useState([])

    let link=`https://reqres.in/api/users/ ${props.id}`

    React.useEffect(function() {
        console.log("Effect 2 ran")
        fetch(link)
            .then(res => res.json())
            .then(data => setSelectedUserData(data.data))
    }, [])

    return(
        <div className="UserInfoView">

            <div>
                <img src={selectedUserData.avatar} className="UserInfoView--img"></img>
            </div>
            
            <div className="UserInfoView--SelectedUser">
                <div className="UserInfoView--fields">
                    <subtext>First Name</subtext>

                    <subtext>Last Name</subtext>

                    <subtext>Email</subtext>
                </div>
                <div className="UserInfoView--data">
                    <subtext>{selectedUserData.first_name}</subtext>

                    <subtext>{selectedUserData.last_name}</subtext>

                    <subtext>{selectedUserData.email}</subtext>
                </div>
            </div>

        </div>
    );
}