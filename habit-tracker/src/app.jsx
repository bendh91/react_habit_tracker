import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Learning', count: 0 },
      { id: 3, name: 'Cording', count: 0 },
    ],
  };

  handleIncrement = habit => {
    // use habit basic Compoent
    // 기존 obj의 value를 직접 변경함 => ref의 변경이 일어나지 않음
    // Object는 값을 전달하지 않고 ref를 전달한다! => state.habits 와 habits 는 껍데기만 다를 뿐 같은 ref를 가리키고 있음
    // ... habits, state.habits의 값을 변경할 경우는 동일한 ref의 값을 변경하는 것이므로 habits, habits의 값 모두 변경됨
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++;

    // use habit pure component
    // PureComp의 경우 obj의 ref변화를 감지하므로,
    // habits array의 아이템 obj를 새로운 obj로 대체하여 ref변경을 유도하여 re-render를 실행하도록 함
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = habit => {
    // use habit basic Compoent
    // 기존 obj의 value를 직접 변경함 => ref의 변경이 일어나지 않음
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const _count = habits[index].count - 1;
    // habits[index].count = _count > 0 ? _count : 0;

    // use habit pure component
    // PureComp의 경우 obj의 ref변화를 감지하므로,
    // habits array의 아이템 obj를 새로운 obj로 대체하여 ref변경을 유도하여 re-render를 실행하도록 함
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id); // filter(조건문) => 조건문에 해당하는 값으로 구성된 새로운 배열을 return함
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits.splice(index, 1);
    this.setState({ habits });
  };

  handleAdd = name => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleReset = () => {
    // use habit basic Compoent
    // 기존 obj의 value를 직접 변경함 => ref의 변경이 일어나지 않음
    // const habits = this.state.habits.map(habit => {
    //   habit.count = 0;
    //   return habit;
    // });

    // use habit pure component
    // PureComp의 경우 obj의 ref변화를 감지하므로,
    // habits array의 아이템 obj를 새로운 obj로 대체하여 ref변경을 유도하여 re-render를 실행하도록 함
    const habits = this.state.habits.map(item => {
      if (item.count !== 0) {
        return { ...item, count: 0 };
      }
      return item;
    });
    this.setState({ habits });
  };

  render() {
    console.log('App');
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter(habit => habit.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
