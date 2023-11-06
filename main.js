const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
  if (inputBox.value === ''){
    alert('Cannot add on empty list')
  } else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let delbtn = document.createElement('button');
    delbtn.innerHTML = "Delete"
    li.appendChild(delbtn);
  }
  inputBox.value = '';
  saveData();
}

listContainer.addEventListener('click', function(e){
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "BUTTON"){
    e.target.parentElement.remove();
    saveData();
  }
}, false)

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
  listContainer.innerHTML = localStorage.getItem('data')
} 
showData();