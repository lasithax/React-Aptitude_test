import React from "react";
import Card from "./Card.js";
import User from "./User.js";
import "./style.css"

function App() {
  const [userData,setUserData]=React.useState([])
  const [isUsersView,setIsUsersView]=React.useState(true)
  const [SelectedId,setSelectedId]=React.useState()

    React.useEffect(function() {
        console.log("Effect ran")
        fetch("https://reqres.in/api/users?page=1")
            .then(res => res.json())
            .then(data => setUserData(data.data))
    }, [])

    function toggleView(id){
      setIsUsersView(prevIsUsersView=> !prevIsUsersView)
      setSelectedId(id)
    }

    const cardElements=userData.map(n=>(
      <Card
        key={n.id}
        id={n.id}
        email={n.email}
        firstname={n.first_name}
        avatar={n.avatar}
        toggleView={toggleView}
      />
    ))

    return (
        isUsersView ? <section>
          <div className="usersview--header">
            <header>Title</header>
          </div>
          <div className="usersview--subHeader">
            <header>Users</header>
          </div>
          
          <div className="usersview--cards">
            {cardElements}
          </div>
        </section> : 
        
        <section>
          <div className="UserInfoView--header">
            <header onClick={toggleView} className="UserInfoView--backButton">Back</header>
          </div>
          <User
           id={SelectedId}
          />
          
        </section>
  );
}

export default App;
