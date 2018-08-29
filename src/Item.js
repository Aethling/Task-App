import React from 'react';
import PropTypes from 'prop-types';
import ItemInput from './ItemInput.js'
// import ButtonContainer from './ButtonContainer';

const Item = (props) => {

	const priorityStyle = { 
			color: props.isPriority ? "red" : "grey"
		}
	return (
		<div className="boxes">

			<span>
				<label>
		    		<input type="checkbox"
		    					onClick={props.handleCheckbox}/>
	    	</label>
			</span>
			<ItemInput handleEdit={props.handleEdit}
	    				isEditing={props.isEditing}
	    				task={props.task}/>
			<span>
				<button className="button taskButton is-info is-inverted"
						onClick={props.handlePriorityClick}
						style={priorityStyle}>!</button>
				<button className="button taskButton is-info is-inverted"
						onClick={props.handleEditClick}>{props.isEditing ? "Save" : "Edit"}</button>
				<button className="button taskButton is-info is-inverted"
						onClick={props.handleDeleteClick}>Delete</button>
			</span>
		</div>
	);
}

	Item.propTypes = {
		task: PropTypes.string
	}
export default Item;