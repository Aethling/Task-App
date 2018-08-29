import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCheckSquare from '@fortawesome/fontawesome-free-solid/faCheckSquare';

const ButtonContainer = (props) => {
  return (
    <div>

    	<span className="icon has-text-info fa-2x">
		  <FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>
		</span>
    </div>
  )
}

export default ButtonContainer;