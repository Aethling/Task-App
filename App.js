import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import Title from './Title';
import RenderItems from './RenderItems';

class App extends Component {
	state = {
		pendingTask: '',
		completedList: false,
		priorityList: false,
		todos: [
			{
				task: "Feed Chillberto",
				isCompleted: false,
				isPriority: true,
				isEditing: false
			},
			{
				task: "Sweep the Floor",
				isCompleted: false,
				isPriority: false,
				isEditing: false
			}
		]
	};

	handlePendingTask = e =>
		this.setState({pendingTask: e.target.value});

	addTask = e => {
		e.preventDefault();
		this.setState({
			todos: [
			{
				task: this.state.pendingTask,
				isCompleted: false,
				isPriority: false,
				isEditing: false
			},
				...this.state.todos
			],
			pendingTask: ''
		});
	};
	deleteItemAt = index =>
		this.setState({
			todos: [
				...this.state.todos.slice(0, index),
				...this.state.todos.slice(index + 1)
			]
		});
	handleEditAt = indexToChange =>
		this.setState({
			todos: this.state.todos.map((todo, index) => {
				if (indexToChange === index) {
					return {
						...todo,
						isEditing: !todo.isEditing
					};
				}
				return todo;
			})
		});


	toggleComplete = (indexToChange) =>
		this.setState({
			todos: this.state.todos.map((todo, index) => {
				if(indexToChange === index) {
					return {
						...todo,
						isCompleted: !todo.isCompleted
					};
				}
					return todo;
			})
		});

	setNameAt = (indexToChange, text) => 
		this.setState({
			todos: this.state.todos.map((todo, index) => {
				if (indexToChange === index) {
					return {
						...todo,
						task: text
					};
				}
				return todo;	
			})
		});
	togglePriority = (indexToChange) =>
		this.setState({
			todos: this.state.todos.map((todo, index) => {
				if (indexToChange === index) {
					return {
						...todo,
						isPriority: !todo.isPriority
					};
				}
					return todo;
			})
		});
	toggleCompletedList = () =>
		this.setState({
			completedList: !this.state.completedList
		});
	togglePriorityList = () =>
		this.setState({
			priorityList: !this.state.priorityList
		});
	setAllList = () =>
		this.setState({
			completedList: false,
			priorityList: false
		})

  render() {
    return (
      <div>
        <Title addTask={this.addTask}
        		handlePendingTask={this.handlePendingTask}
        		pendingTask={this.state.pendingTask}
        		toggleCompletedList={this.toggleCompletedList}
        		togglePriorityList={this.togglePriorityList}
        		setAllList={this.setAllList}
        		/>

        <RenderItems todos={this.state.todos}
        			deleteItemAt={this.deleteItemAt}
        			handleEditAt={this.handleEditAt}
        			setNameAt={this.setNameAt}
        			toggleEdit={this.toggleEdit}
        			togglePriority={this.togglePriority}
        			toggleComplete={this.toggleComplete}
        			isCompletedList={this.state.completedList}
        			isPriorityList={this.state.priorityList}/>
      </div>
    );
  }
}

export default App;
