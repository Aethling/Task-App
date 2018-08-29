import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

const RenderItems = (props) => {
	if (props.isCompletedList) {
	  return (
	    <div>
	    	{props.todos.filter(todo => todo.isCompleted)
	    		.map((todo, index) => 
		    	<Item key={index} 
		    		task={todo.task}
		    		isCompleted={todo.isCompleted}
		    		handleCheckbox={() => props.toggleComplete(index)}
		    		isPriority={todo.isPriority}
		    		handleDeleteClick={() => props.deleteItemAt(index)}
		    		isEditing={todo.isEditing}
		    		handleEditClick={() => props.toggleEdit(index)}
		    		handleEdit={e => props.setNameAt(index, e.target.value)}
	    			handlePriorityClick={() => props.togglePriority(index)}/>
		    		)}
	    </div>
	  );
	} else if (props.isPriorityList) {
			return (
		    <div>
		    	{props.todos.filter(todo => todo.isPriority)
		    		.map((todo, index) => 
			    	<Item key={index} 
			    		task={todo.task}
			    		isCompleted={todo.isCompleted}
			    		handleCheckbox={() => props.toggleComplete(index)}
			    		isPriority={todo.isPriority}
			    		handleDeleteClick={() => props.deleteItemAt(index)}
			    		isEditing={todo.isEditing}
			    		handleEditClick={() => props.toggleEdit(index)}
			    		handleEdit={e => props.setNameAt(index, e.target.value)}
		    			handlePriorityClick={() => props.togglePriority(index)}/>
			    		)}
		    </div>	
			);
	} else {
			return (
	    <div>
	    	{props.todos.map((todo, index) =>
		    	<Item key={index} 
		    		task={todo.task}
		    		isCompleted={todo.isCompleted}
		    		handleCheckbox={() => props.toggleComplete(index)}
		    		isPriority={todo.isPriority}
		    		handleDeleteClick={() => props.deleteItemAt(index)}
		    		isEditing={todo.isEditing}
		    		handleEditClick={() => props.toggleEdit(index)}
		    		handleEdit={e => props.setNameAt(index, e.target.value)}
	    			handlePriorityClick={() => props.togglePriority(index)}/>
		    		)}
	    </div>	
		);
	}
}
	RenderItems.propTypes = {
		todos: PropTypes.array.isRequired
	}

export default RenderItems;