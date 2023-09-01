const inputField = document.createElement("input");
inputField.type = "text";
inputField.textContent = "showwww"
inputField.placeholder = "something type";
inputField.classList.add("online")
inputField.id = "online"
document.body.appendChild(inputField)

const light = document.createElement("button")

light.style.color = "";
light.textContent = "status"
document.body.appendChild(light)



var time = ""

const updateTime = ()=>{
    const data = new Date();
    const h = data.getHours();
    const m = data.getMinutes();
    let s = data.getSeconds();

     time = h+':'+m+':'+s; 
     light.textContent = time
}

inputField.addEventListener('mouseenter',()=>{
    light.style.backgroundColor = "green";
    updateTime();
    timeInterval = setInterval(updateTime,1000)
})
inputField.addEventListener('mouseleave',()=>{
    light.style.backgroundColor = "";
    clearInterval(timeInterval)
})
