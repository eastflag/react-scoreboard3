import React, {useRef, useState} from 'react';

const AddPlayerForm = (props) => {
  const [value, setValue] = useState('');

  let formRef = useRef();
  let textRef = useRef();

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formRef.current.checkValidity());
    console.log(textRef.current.validity.valid);

    if (!formRef.current.checkValidity()) {
      return;
    }

    props.addPlayer(value);
    setValue('');
  }

  return (
    <form ref={formRef} className="form" onSubmit={handleSubmit} noValidate>
      <input ref={textRef} className="input" type="text" placeholder="enter a player's name"
             value={value} onChange={handleValueChange}
             required></input>
      <input className="input" type="submit" value="Add Player"></input>
    </form>
  )
}

export default AddPlayerForm;
