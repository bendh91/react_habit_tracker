import React, { Component } from 'react';
import HabitAddForm from './habitAddForm';
import Habit from './habit';

class Habits extends Component {
  handleIncrement = habit => {
    this.props.onIncrement(habit);
  };

  handleDecrement = habit => {
    this.props.onDecrement(habit);
  };

  handleDelete = habit => {
    this.props.onDelete(habit);
  };

  handleAdd = habit => {
    this.props.onAdd(habit);
  };

  handleReset = e => {
    this.props.onReset();
  };

  render() {
    console.log('Habits');
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul className="habit-ls" ref={this.habitsLs}>
          {this.props.habits.map(habit => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <div className="reset-container">
          <button className="reset-btn" onClick={this.handleReset}>
            Reset
          </button>
        </div>
      </>
    );
  }
}

export default Habits;
