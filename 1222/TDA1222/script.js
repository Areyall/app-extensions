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
    editButton.innerHTML = `<svg version="1.1" id="Layer_1" 
    viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">
<g id="XMLID_23_">
   <path id="XMLID_24_" d="M75,180v60c0,8.284,6.716,15,15,15h60c3.978,0,7.793-1.581,10.606-4.394l164.999-165
       c5.858-5.858,5.858-15.355,0-21.213l-60-60C262.794,1.581,258.978,0,255,0s-7.794,1.581-10.606,4.394l-165,165
       C76.58,172.206,75,176.022,75,180z M105,186.213L255,36.213L293.787,75l-150,150H105V186.213z"/>
   <path id="XMLID_27_" d="M315,150.001c-8.284,0-15,6.716-15,15V300H30V30H165c8.284,0,15-6.716,15-15s-6.716-15-15-15H15
       C6.716,0,0,6.716,0,15v300c0,8.284,6.716,15,15,15h300c8.284,0,15-6.716,15-15V165.001C330,156.716,323.284,150.001,315,150.001z"
       />
</g>
</svg>`;
    if (!JSON.parse(value)) {
      editButton.style.visibility = 'visible';
    } else {
      editButton.style.visibility = 'hidden';
      taskInnerDiv.classList.add('completed');
    }
    taskInnerDiv.appendChild(editButton);
    taskInnerDiv.innerHTML += `<button class='delete'><svg  id="Capa_1"
    viewBox="0 0 490 490" style="enable-background:new 0 0 491.412 491.412;" xml:space="preserve">
<g>
   <path d="M61.006,113.013h269.508c31.195,0,56.512-25.299,56.512-56.504C387.025,25.299,361.709,0,330.514,0H61.006
       C29.793,0,4.49,25.299,4.49,56.509C4.49,87.714,29.793,113.013,61.006,113.013z"/>
   <path d="M61.006,290.612h146.32c25.637-55.316,81.551-93.845,146.416-93.845c6.793,0,13.445,0.554,20.016,1.375
       c-10.363-12.452-25.781-20.547-43.244-20.547H61.006c-31.213,0-56.516,25.293-56.516,56.504
       C4.49,265.31,29.793,290.612,61.006,290.612z"/>
   <path d="M192.451,355.185H61.006c-31.213,0-56.516,25.299-56.516,56.51c0,31.211,25.303,56.502,56.516,56.502h174.881
       c-26.955-28.857-43.598-67.464-43.598-109.983C192.289,357.193,192.434,356.207,192.451,355.185z"/>
   <path d="M353.742,225.017c-73.439,0-133.197,59.755-133.197,133.197c0,73.439,59.758,133.198,133.197,133.198
       c73.443,0,133.18-59.759,133.18-133.198C486.922,284.771,427.185,225.017,353.742,225.017z M353.742,451.053
       c-51.193,0-92.848-41.652-92.848-92.839c0-51.186,41.654-92.83,92.848-92.83c51.195,0,92.832,41.645,92.832,92.83
       C446.574,409.4,404.938,451.053,353.742,451.053z"/>
   <path d="M409.387,302.56c-9.461-9.46-24.785-9.46-34.234,0l-21.41,21.415L332.33,302.56c-9.461-9.46-24.787-9.46-34.246,0
       c-9.463,9.454-9.463,24.796,0,34.239l21.412,21.415l-21.412,21.412c-9.463,9.454-9.463,24.792,0,34.245
       c4.721,4.732,10.92,7.092,17.123,7.092c6.199,0,12.385-2.359,17.123-7.092l21.412-21.411l21.41,21.411
       c4.727,4.732,10.926,7.092,17.109,7.092c6.201,0,12.402-2.359,17.125-7.092c9.459-9.453,9.459-24.791,0-34.245l-21.412-21.412
       l21.412-21.415C418.846,327.355,418.846,312.014,409.387,302.56z"/>
</g>
</svg></button>`;
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
      removeTasks(parent.id);
      parent.remove();
      count -= 1;
      console.log(e.parentElement)
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
