// User se height puchhna
let height = prompt("Enter the height of the animal (Short/Tall):");

if (height === "Short") {
    let squeak = prompt("Can the animal squeak? (Yes/No):");
    
    if (squeak === "No") {
        console.log("Might be a Squirrel.");
    } else if (squeak === "Yes") {
        console.log("Might be a Rat.");
    } else {
        console.log("Invalid input for squeak.");
    }

} else if (height === "Tall") {
    let neck = prompt("What kind of neck? (Short/Long):");
    
    if (neck === "Short") {
        let nose = prompt("Is the nose short or long? (Short/Long):");

        if (nose === "Long") {
            console.log("Might be an Elephant.");
        } else if (nose === "Short") {
            let place = prompt("Is it on land or in water? (Land/Water):");

            if (place === "Land") {
                console.log("Might be a Rhinoceros.");
            } else if (place === "Water") {
                console.log("Might be a Hippo.");
            } else {
                console.log("Invalid input for place.");
            }
        } else {
            console.log("Invalid input for nose length.");
        }

    } else if (neck === "Long") {
        console.log("Might be a Giraffe.");
    } else {
        console.log("Invalid input for neck length.");
    }

} else {
    console.log("Invalid input for height.");
}
