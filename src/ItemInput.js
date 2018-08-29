import React from 'react';

const ItemInput = (props) => {
	if (props.isEditing) {
	  return (
	    <span>
	    	<input type="text" 
				className="editInput" 
				defaultValue={props.task}
				onChange={props.handleEdit}/>
	    </span>
	  )
	}
		return (
			<span className="theTask">
				{props.task}
			</span>
		);
}

export default ItemInput;