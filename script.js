const input=document.querySelector("#input-box");
const list=document.querySelector("#list-container");
const button=document.querySelector("button");

button.addEventListener("click",()=>{
    if (input.value===""){
        alert("write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=input.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    input.value="";
    savedate();
});

list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedate();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedate();
    }
    
},false);

function savedate(){
    localStorage.setItem("data",list.innerHTML);
}
function showtask(){
    list.innerHTML=localStorage.getItem("data");
}
showtask();