
let counter = 0;
let but1 = document.querySelector("#but1");
let but2 = document.querySelector("#but2");
let butreset = document.querySelector("#butreset");
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
    
    resetFunc = () =>{
        counter=0;
        result.textContent = counter; 
        console.log(counter);
    
        }
        

        // <!-- Nikola Stanin 21.04.2021. 13h25min -->