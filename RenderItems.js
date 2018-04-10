import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

const RenderItems = (props) => {
  return (
    <div>
    	{props.todos.map((todo, index) =>
	    	<Item key={index} 
	    		task={todo.task}
	    		isCompleted={todo.isCompleted}
	    		isPriority={todo.isPriority}
	    		handleDeleteClick={() => props.deleteItemAt(index)}
	    		handleEditClick={() => props.handleEditAt(index)}
	    		isEditing={todo.isEditing}
	    		handleEdit={e => props.setNameAt(index, e.target.value)}
    			handleEditSave={() => props.toggleEdit(index)}
    			handlePriorityClick={() => props.togglePriority(index)}/>
	    		)};
    </div>
  )
}
	RenderItems.propTypes = {
		todos: PropTypes.array.isRequired
	}

export default RenderItems;