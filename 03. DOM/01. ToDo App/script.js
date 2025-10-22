let ctr = 1;

function addTodo() {
    let content = document.querySelector("input").value;
    const newTodo = document.createElement("div");
    newTodo.setAttribute("id", ctr);

    newTodo.innerHTML = `<div>${content}</div> 
                        <button onclick="deleteTodo(${ctr})">delete</button><br/>`;
    document.querySelector("body").appendChild(newTodo);

    ctr++;
}

function deleteTodo(idx) {
    const element = document.getElementById(idx);
    element.parentNode.removeChild(element);
    console.log("delete called");
}