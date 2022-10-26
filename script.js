window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        //prevent page from reloading when submit button is clicked
        e.preventDefault();


        list_el.appendChild(document.createElement('ol'))
        new_list_el = document.querySelector("#tasks ol")
        console.log(new_list_el)

        //create a variable and assign the value of task input
        const task = input.value;

        if(!task.trim()){
            document.getElementById('warning-text').innerHTML = "<small style='color:red;'>Field is Empty</small>"
            return //stop the rest of the code from running
        }else{
            document.getElementById('warning-text').innerHTML = ""
            //present to remove the warning text after proper submission
        }
        //create a div document and assign it to task_el
        const task_el = document.createElement('li');
        //assign the class task to the element...
        task_el.classList.add('task');
        //same workflow as above
        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');
       
        //make the task_content_el a child of the task_el(div)
        task_el.appendChild(task_content_el);

        //create an input field to store the task values
        const task_input_el = document.createElement('input')

        

        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        //assign the task to the input field created above
        task_input_el.value = task;

        task_input_el.setAttribute("readonly","readonly");
        task_content_el.appendChild(task_input_el);

        const task_action_el = document.createElement('div');
        task_action_el.classList.add('actions');
        
        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('Edit');
        task_edit_el.innerText = 'Edit';

        const task_del_el = document.createElement('button');
        task_del_el.classList.add('Delete');
        task_del_el.innerText = 'Delete';

        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_del_el);

        task_el.appendChild(task_action_el);

        input.value = '';

        new_list_el.appendChild(task_el);

        task_edit_el.addEventListener('click', (e) =>{
            console.log(task_edit_el.innerText.toLowerCase())
            if(task_edit_el.innerText.toLowerCase() == "edit"){
                task_edit_el.innerText= "save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            }else{
                task_edit_el.innerText="edit";
                task_input_el.setAttribute("readonly","readonly");
            }
        });
        task_del_el.addEventListener('click', (e)=> {
            new_list_el.removeChild(task_el);
        });



    });
});