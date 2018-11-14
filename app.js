function onReady() {
  let id = 0;
  let toDos = [];

  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {return;}

    toDos.push({
      title: newToDoText.value,
      complete:false,
      id: id
    });
    id++;

    newToDoText.value = '';

    renderTheUI();
  }

function deleteToDo(id) {
  return toDos.filter(toDo => toDo.id !== id);
}

function renderTheUI() {
  const toDoList = document.getElementById('toDoList');

  toDoList.textContent = '';

  toDos.forEach(function(toDo){
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    newLi.textContent = toDo.title;

    toDoList.appendChild(newLi);
    newLi.appendChild(checkbox);

    let deleteButton = document.createElement('button');

    let deleteContent = document.createTextNode('Delete');

    newLi.appendChild(deleteButton);

    deleteButton.appendChild(deleteContent);

    deleteButton.addEventListener('click', () => {
      toDos = deleteToDo(toDo.id);
      renderTheUI();

    });
  });
}

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();

}

window.onload = function() {
  onReady();
};
