import React from 'react';
import './style.css';
import ProtoType from 'prop-types';
function AddButton({ handleAddList }) {
	return <button className='AddButton-Class' onClick={handleAddList}></button>;
}

AddButton.propTypes = {
	handleAddList: ProtoType.func.isRequired,
};

export default AddButton;
