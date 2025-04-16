

     
     let todoListHTML = '';
     let todoList=[];
     let inputName=document.querySelector('.input-todo');

     
    function renderTodoList(){
        let todoListHTML='';
        let html='';
        for(let i=0;i<todoList.length;i++){
            let todoObject=todoList[i];
            const {name,date}=todoObject;
            html += `
                <div>
                    ${name}
                </div>
                <div>
                    ${date}
                </div>
                <div>
                    <button class="delete-button" onclick="
                       todoList.splice(${i},1);
                       renderTodoList();
                    ">Delete</button>
                </div>
            
            `;
        }
        todoListHTML=html;
        document.querySelector('.todo-container').innerHTML=todoListHTML;
      }

      const error_msg = document.getElementById("error_msg");

      document.querySelector('.add-button').addEventListener('click',()=>{
        if(inputName.value === "" || inputName.value === null){
            error_msg.innerHTML = "Pease enter Todo";
        }else{
            renderTodoList();
            addTodo();
        }
      });


      function addTodo(){
          let name=inputName.value;
          let inputDate=document.querySelector('.input-date');
          let date=inputDate.value;

          todoList.push({
                name,
                date
          });
          renderTodoList();
          console.log(todoList);

          inputName.value='';
      }
   