import React from 'react';
import Statistics from "./Statistics";

const Header = (props) => {
  console.log(props);
  return (
    <header>
      <Statistics players={props.players}/>
      <h1>{ props.title }</h1>
    </header>
  )
}

export default Header;
