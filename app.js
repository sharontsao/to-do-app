window.onload = function() {
  onReady();
};

function onReady() {
  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    //get the newToDoText
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // create a delete button for the li
   let deleteButton = document.createElement ('button');

   // delete button text
   let deleteContent = document.createTextNode ('Remove');

   // assign text inside delete button
   deleteButton.appendChild(deleteContent);

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    //set the title
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach delete button to the li
    newLi.appendChild(deleteButton);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

    deleteButton.addEventListener('click', event => {
      toDoList.removeChild(newLi);
  });
});
};
