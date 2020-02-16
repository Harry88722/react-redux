import React from 'react';
import update_person from './actions/personAction';
import update_game from './actions/gameAction'
import fetch_user from './actions/userAction'
import {connect} from 'react-redux';



function App(props) {
  return (
    <div >
      <h1> Redux tutorial</h1>
      person name : {props.person.name} <br/>
      person game : {props.game.name}<br/>

      <button onClick={props.updatePerson}>updat here</button>
      <button onClick={props.updategame}>updat here</button><br/>
      users:<button onClick={props.fetchusers}> fetch user</button>
      {
        props.users.length === 0 ? <p>no user</p>:
        props.users.map(users=><p>{users.id}--{users.first_name}</p>)
      }
    </div>
  );
}
const mapStateToProps= (state) =>{
  return {
    game:state.game,
    person:state.person,
    users:state.users
  }
}
const mapDispatchToProps=dispatch =>{
  return{
    updategame: ()=>{dispatch(update_game)},
    updatePerson: ()=>{dispatch(update_person)},
    fetchusers:()=>{dispatch(fetch_user)}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
