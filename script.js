//Variables for "remove and complete list"

var ul=document.querySelector('#addedTaskList');
 var lis;
 var doneLis=document.querySelector('#completedTask');

 //Date time
 var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// document.querySelector('#date').textContent=date
var time = today.getHours() + ":" + today.getMinutes()/* + ":" + today.getSeconds()*/;

 // Add task
function addTask(){ 
    var task=document.querySelector('#input').value
 //Create all elements  
    if(task!=''){
   var listElement= document.createElement('li')
   listElement.style="list-style:none;"
   listElement.classList.add('task')

   var checkBox= document.createElement('input')
   checkBox.type="checkbox"
   checkBox.setAttribute("type", "checkbox");
   checkBox.classList.add('float-left')


   var addlabel= document.createElement('label')
   addlabel.style="width:100%"
   addlabel.textContent=task
   addlabel.appendChild(checkBox)

   //add time with tasks
var p=document.createElement('p')
p.textContent=time
p.style="padding:0;margin:0"
p.classList.add('float-right')
addlabel.appendChild(p)

//add date
document.querySelector('#date').textContent=date




   // Arrange them
   //listElement.appendChild(checkBox)
   listElement.appendChild(addlabel) 
   

   
   
   // Appending it in final place

   document.querySelector('#addedTaskList').appendChild(listElement)
   
   
   //default set
   document.querySelector('input').value=''
        }  
}


function removeTask(){
    //remove and complete list
     lis=ul.children

    for (let index = 0; index < lis.length; index++){
            while(lis[index] && lis[index].children[0].children[0].checked){
                let doneContent = document.createElement('li')
                doneContent.classList.add('completedCross')
                doneContent.textContent=lis[index].children[0].textContent
                console.log(doneContent);
                doneLis.appendChild(doneContent)
                ul.removeChild(lis[index])
            }        
        }
    }


     //clear all
   function clearAll(){
    var lisComplete=doneLis.children
    // for (let index = 0; index < lisComplete.length; index++) {
    //     console.log(lisComplete.length);
    //     doneLis.removeChild(lisComplete[index])
        
    // }
    while (doneLis.hasChildNodes()) {
        doneLis.removeChild(doneLis.firstChild);
     }
}  


    //Enter to click
var input = document.getElementById("input");
input.addEventListener("keyup", function    (event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("submit").click();
  }
});




   //Dark mode
   function darkMode(){
    var mode = document.querySelector('#mode').textContent   
    if(mode=="Dark mode"){
        document.body.classList.add('text-light')
        document.body.style="background-color:#343A40;"
        document.querySelector('#completeDark').style="background-color:#343A40;"
        document.querySelector('#input').style="background-color:#343A40;color:#fff;"
        document.querySelector('#mode').textContent="Day mode"   
  }else{
        document.body.classList.remove('text-light')
        document.body.style="background-color:#fff;"
        document.querySelector('#completeDark').style="background-color:#fff;"
        document.querySelector('#input').style="background-color:#fff;color:#070707;"
        document.getElementsByClassName('btn').style="color:#6C757D"
        document.querySelector('#mode').textContent="Dark mode"   
         }

   }

   // Confirm
window.onbeforeunload = function () {
    return "Really?"
   }


  