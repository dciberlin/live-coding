/*
Exercise
Create a client side application that displays a table of tasks with the following columns:
– Task name (string);
– Status: number of task done, a slash, the number of task planned, then a space, then the word task;
– Controls: contains three buttons for each row, Done, Increase task Count, and Delete.

When pressing the Done button, the Done and the Increase task Count buttons are replaced by the static text Finished.

When pressing Increase Task Count, the number of Task done is increased by 1 in the Status column. The initial value of the number of Task done is zero.

When pressing Delete, the corresponding row is removed from the table.

Create a form that allows you to add a new task. The task name can be any string, and the number of task planned can be an integer between 1 and 4.
http://www.zsoltnagy.eu/javascript-tech-interview-exercise-9-event-delegation-in-a-pomodoro-app/
*/


let tasks = [];
const taskForm = document.querySelector( '.add-task' );
const taskTableBody = document.querySelector( '.task-table-body' );

const addTask = function( event ) {
    event.preventDefault();
    const taskName = this.querySelector( '.task-name' ).value;
    const taskCount = this.querySelector( '.task-count' ).value;
    this.reset();
    tasks.push( { 
        taskName, 
        taskDone: 0,
        taskCount, 
        finished: false 
    } );
    renderTasks(taskTableBody, tasks );
}

taskForm.addEventListener( 'submit', addTask );


const renderTasks = function( tBodyNode, tasks = [] ) {
    tBodyNode.innerHTML = tasks.map( ( task, id ) => `
        <tr>
            <td class="cell-task-name">${task.taskName}</td>
            <td class="cell-pom-count">${task.taskDone} / ${task.taskCount} task</td>
            <td class="cell-pom-controls">
            ${ task.finished ? 'Finished' : `
                <button class="task-done" data-id="${id}">Done</button>
                <button class="increase-task" data-id="${id}">Increase Task Count</button>` 
            }
                <button class="delete-task" data-id="${id}">Delete Task</button>
            </td>
        </tr>
    ` ).join( '' );
}


const finishTask = ( tasks, taskId ) => {
    tasks[ taskId ].finished = true;
}

const increaseTaskDone = ( tasks, taskId ) => {
    tasks[ taskId ].done += 1;
}

const deleteTask = ( tasks, taskId ) => {
    tasks.splice( taskId, 1 );
}

/*
const handleTaskButtonClick = function( event ) {
    const classList = event.target.className;
    const taskId = event.target.dataset.id;
    switch ( true ) {
        case /js-task-done/.test( classList ):         
            finishTask( tasks, taskId ); 
            break;
        case /js-increase-pomodoro/.test( classList ): 
            increasePomodoroDone( tasks, taskId ); 
            break;
        case /js-delete-task/.test( classList ):      
            deleteTask( tasks, taskId ); 
            break;
    }
    renderTasks( pomodoroTableBody, tasks );
}
*/

const handleTaskButtonClick = function( event ) {
    const classList = event.target.className;
    const taskId = event.target.dataset.id;

    /task-done/.test( classList ) ? finishTask( tasks, taskId ) :
    /increase-task/.test( classList ) ? increaseTaskDone( tasks, taskId ) :
    /delete-task/.test( classList ) ? deleteTask( tasks, taskId ) : 
    null;

    renderTasks( taskTableBody, tasks );
}

taskTableBody.addEventListener( 'click', handleTaskButtonClick );

