const inputBox = document.getElementById("list_id");
const listContainer = document.getElementById("list_container");
function addTask(){
    if(inputBox.value ===''){
        alert("you must write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}
    listContainer.addEventListener('click', function(e){
        if(e.target.tagName==='LI'){
             e.target.classList.toggle("completed");
          

            saveData();
        }else if(e.target.tagName==='SPAN'){
            e.target.parentElement.remove();
            saveData();
        }
    },false)

    function saveData(){
        localStorage.setItem("data", listContainer.innerHTML);
    }

    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");
    }
    showTask();

    //https://github.com/kranjali/Task-Manager-App---Javascript---fvjfrz65jfp6.git