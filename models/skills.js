const skills = [
    {skill: 'Javascript', done: true},
    {skill: 'HTML', done: false},
    {skill: 'CSS', done: false}
  ];
  
  module.exports = {
    getAll: function() {
      return todos;
    }
  };

  function getAll() {
	return skills;
  }
 
  function getOne(id) {
	// Use the Array.prototype.find iterator method
	return skills.find(skill => skill.id === parseInt(id));
  }

  function create(skill) {
	// Add the id
	todo.id = Date.now() % 1000000;
	// New todos wouldn't be done :)
	todo.done = false;
	todos.push(skill);
  }


  function deleteOne(id) {
	// Find the index based on the id of the todo object
	const idx = skills.findIndex(skill => skill.id === parseInt(id));
	todos.splice(idx, 1);
  }