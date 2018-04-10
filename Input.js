import React from 'react';

const Input = (props) => {
  return (
    <div>
		<div className="inputContainer">
			<form onSubmit={props.addTask}>
		        <input className="input" 
		        		type="text"
		        		placeholder="Enter a task..." 
		        		value={props.pendingTask}
		        		onChange={props.handlePendingTask}
		        		/>
		        <button className="button submit is-info is-inverted"
		        		type="submit"
		        		name="submit"
		        		value="submit">Enter</button>
	        </form>
	    </div>
    </div>
  )
}

export default Input;