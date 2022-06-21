import React, { memo } from 'react';

const HabitAddForm = memo(props => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = e => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);

    // reset input
    // this.inputRef.current.value = '';
    // OR
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-bar"
        placeholder="Habit"
      />
      <button className="add-btn">Add</button>
    </form>
  );
});

export default HabitAddForm;
