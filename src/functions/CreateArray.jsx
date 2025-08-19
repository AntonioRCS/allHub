// Make a array of 'loop' elements

const CreateArray = (loop) => {
	let rows = [];
	for (let i = 0; i < loop; i++) {
		rows.push(i);
	}
	return rows;
};

export default CreateArray;
