
let counter = 0;
let but1 = document.querySelector("#but1");
let but2 = document.querySelector("#but2");
let result = document.getElementById("result");

//functionality 



addFunc = () =>{
    
 counter +=1;
 result.textContent = counter;
 
}

minFunc = () =>{
    counter -=1;
    result.textContent = counter; 
    

    }
    