const newTaskInput = document.querySelector('#new-task input');
const tasksDiv = document.querySelector('#tasks');
let deleteTasks, editTasks, tasks;
let updateNote = '';
let count;

//Func onWindowLoad

window.onload = () => {
  updateNote = '';
  count = Object.keys(localStorage).length;
  displayTasks();
};

// Func to Display tasks

const displayTasks = () => {
  if (Object.keys(localStorage).length > 0) {
    tasksDiv.style.display = 'inline-block';
  } else {
    tasksDiv.style.display = 'none';
  }

  //   Clear the tasks

  tasksDiv.innerHTML = '';

  //Fetch keys in local storage

  let tasks = Object.keys(localStorage);

  tasks = tasks.sort();

  for (const key of tasks) {
    let classValue = '';

    // get all values
    let value = localStorage.getItem(key);
    let taskInnerDiv = document.createElement('div');
    taskInnerDiv.classList.add('task');
    taskInnerDiv.setAttribute('id', key);
    taskInnerDiv.innerHTML = `<span id="taskname">${key.split('_')[1]}</span>`;

    //

    let editButton = document.createElement('button');
    editButton.classList.add('edit');
    editButton.innerHTML = `iE`;
    if (!JSON.parse(value)) {
      editButton.style.visibility = 'visible';
    } else {
      editButton.style.visibility = 'hidden';
      taskInnerDiv.classList.add('completed');
    }
    taskInnerDiv.appendChild(editButton);
    taskInnerDiv.innerHTML += `<button class='delete'>iDel</button>`;
    tasksDiv.appendChild(taskInnerDiv);
  }
  //   Tasks completed
  tasks = document.querySelectorAll('.task');
  tasks.forEach((e, i) => {
    e.onclick = () => {
      if (e.classList.contains('completed')) {
        updateStorage(e.id.split('_')[0], e.innerText.split('\n')[0], false);
      } else {
        updateStorage(e.id.split('_')[0], e.innerText.split('\n')[0], true);
      }
    };
    // console.log(e.innerText.split('\n')[0])
  });

  // edit tasks

  editTasks = document.getElementsByClassName('edit');
  Array.from(editTasks).forEach((e, i) => {
    e.addEventListener('click', (el) => {
      el.stopPropagation();
      disableButton(true);
      let parent = e.parentElement;
      newTaskInput.value = parent.querySelector('#taskname').innerText;
      updateNote = parent.id;
      parent.remove();
    });
  });

  // delete tasks

  deleteTasks = document.getElementsByClassName('delete');
  Array.from(deleteTasks).forEach((e, i) => {
    e.addEventListener('click', (el) => {
      el.stopPropagation();
      //delete from local storage and remove div
      let parent = e.parentElement;
      removeTasks(parent, id);
      parent.remove();
      count -= 1;
    });
  });
};

// Disable edit button
const disableButton = (bool) => {
  let editButton = document.getElementsByClassName('edit');
  Array.from(editButton).forEach((e) => {
    e.disabled = bool;
  });
};

// Remove tasks from local storage

const removeTasks = (taskValue) => {
  localStorage.removeItem(taskValue);
  displayTasks();
};

//Add tasks to local storage

const updateStorage = (index, taskValue, completed) => {
  localStorage.setItem(`${index}_${taskValue}`, completed);
  displayTasks();
};

// Func to add new tasks
document.querySelector('#push').addEventListener('click', () => {
  // enable the edit btn
  disableButton(false);
  if (newTaskInput.value.length == 0) {
    alert('Enter a task');
  } else {
    // store localy and display from local storage
    if (updateNote == '') {
      updateStorage(count, newTaskInput.value, false);
    } else {
      // update task
      let existingCount = updateNote.split('_')[0];
      removeTasks(updateNote);
      updateStorage(existingCount, newTaskInput.value, false);
    }
    count += 1;
    newTaskInput.value = '';
  }
});
