import React from 'react';

const Button = (props) => {
  const handleClick = props.handleClick

  return (
    <div className="App">
      <button className="button-click" type="button" onClick={handleClick}>
        Send!
      </button>
    </div>
  );
};

export default Button;
