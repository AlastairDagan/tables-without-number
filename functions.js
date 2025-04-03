function rollTable(table) {
    // Calculate the total weight
    const totalWeight = table.reduce((acc, item) => acc + item.weight, 0);
        //console.log(totalWeight)
    // Generate a random number between 0 and totalWeight
    let randomNum = Math.random() * totalWeight;
        //console.log(randomNum)
    // Iterate through the table to find which item was rolled
    for (let item of table) {
        randomNum -= item.weight;
        if (randomNum <= 0) {
            return item.value();
        }
    }
}

function rollObj(obj) {
    // Calculate the total weight
    
    for(let key in obj){
        let table = obj[key];        
        const totalWeight = table.reduce((acc, item) => acc + item.weight, 0);
        let randomNum = Math.random() * totalWeight;

        for (let item of table)  {
            randomNum -= item.weight;
            if (randomNum <= 0) {
                // return item.value();
                console.log(`${key} : ${item.value()}`)
                // let result = item.value()
                break;
            }
        }
    }    
}


function random(arr){
    console.log(arr[Math.floor(Math.random() * arr.length)])
}

function roll(obj1, obj2) {
    const container = document.getElementById("container");

    if (document.getElementById("box")) {
        document.getElementById("box").remove();
    }

    let box = document.createElement("div");
    box.id = "box";
    container.appendChild(box);

    // Will call to object with proper keys to use in HTML
    for (let prop in obj1) {
        let arr1 = obj1[prop];
        let outerDiv = document.createElement("div");

        outerDiv.classList.add("outerDiv");
        outerDiv.id = "outerDiv";
        outerDiv.innerHTML = arr1;
        box.appendChild(outerDiv);

        let arr2 = obj2[prop];
        let value = arr2[Math.floor(Math.random() * arr2.length)];

        let innerDiv = document.createElement("div");
        innerDiv.innerHTML = value;
        innerDiv.classList.add("innerDiv");

        // Store the array and property in data attributes
        // console.log(innerDiv.dataset)
        innerDiv.dataset.prop = prop;
        innerDiv.dataset.array = JSON.stringify(arr2);
        

        // Add click event to reroll the value
        outerDiv.addEventListener("click", function (event) {
            //event.stopPropagation(); // Prevent triggering the outerDiv click
            rerollInnerDiv(outerDiv.firstElementChild);
        });

        outerDiv.appendChild(innerDiv);
    }
}

// function rerollInnerDiv(innerDiv) {
//     let arr = JSON.parse(innerDiv.dataset.array); // Retrieve the array from the data attribute
//     let newValue = arr[Math.floor(Math.random() * arr.length)];
//     innerDiv.innerHTML = newValue; // Update the innerHTML with the new value
// }

function rerollInnerDiv(innerDiv) {
    let arr = JSON.parse(innerDiv.dataset.array); // Retrieve the array from the data attribute
    let newValue = arr[Math.floor(Math.random() * arr.length)];
    if(newValue == innerDiv.innerHTML){
        newValue = arr[Math.floor(Math.random() * arr.length)];
    }
    innerDiv.innerHTML = newValue; // Update the innerHTML with the new value
}