//1
function Task(title,description)
{
    this.title=title;
    this.description=description;
    this.completed= false;
    this.subTasks=[];
}
//2
Task.prototype.complete=function()
{
    this.completed=true;
    console.log("Task marked as completed");
};

//3
Task.prototype.addSubTask=function(subTaskTitle)
{
    this.subTasks[this.subTasks.length]=new Task(subTaskTitle,"Learn JavaScript");
    console.log("Subtask added");
};

//4
function TaskManager()
{
    this.tasks=[];
}

//5
TaskManager.prototype.addTask=function(title,description)
{
    let newTask=new Task(title,description);
    this.tasks.push(newTask);
    console.log("Task Added");
    return newTask;
};
 
const taskManager = new TaskManager();

const task1= taskManager.addTask("Do JS assignments","Daily practice problems");
task1.addSubTask("Learn Constructor concept");
task1.addSubTask("Watch recording for better understanding");

const task2= taskManager.addTask("Create a project ","Apply your knowledge & skills");

//6 Anonymous function
TaskManager.prototype.onTaskComplete=function(taskTitle)
{
    
        //event handling
        setTimeout(function(){
            console.log(`Task "${taskTitle}" completed!`);
        },1000);

};

taskManager.onTaskComplete(task1.title);

//7 recursive function
TaskManager.prototype.completeAllTasks=function(taskList)
{
    for(let i=0;i<taskList.length;i++)
    {
        taskList[i].complete();
        if(taskList[i].subTasks.length>0)
        {
            this.completeAllTasks(taskList[i].subTasks);
        }
    }
};
taskManager.completeAllTasks(taskManager.tasks);

//8 pure function
function getCompletedTaskCount(tasks)
{
    let count=0;
    for(let i=0;i<tasks.length;i++)
    {
        if(tasks[i].completed)
        {
            count++;
        }
    }
    return count;
}
console.log("Completed Tasks:",getCompletedTaskCount(taskManager.tasks));
//9 impure function
TaskManager.prototype.removeCompletedTasks=function()
{
    const initialLength = this.tasks.length;
    let activeTasks=[];
    for(let i=0;i<this.tasks.length;i++)
    {
        if(!this.tasks[i].completed)
        {
            activeTasks[activeTasks.length]=this.tasks[i];
        }
    }
    this.tasks=activeTasks;
    console.log(`Removed ${initialLength-this.tasks.length} complete tasks`);
};
taskManager.removeCompletedTasks();

//10 this 
const standalone = task1.complete;
standalone();

const arrowFunction=()=>
{
    console.log(this);
};
arrowFunction();
