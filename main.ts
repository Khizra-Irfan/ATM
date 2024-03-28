#! /usr/bin/env node

import inquirer from "inquirer";
    

let myBalance = 50000;   //Dollar
let myPin = 2468;

let pinAnswer = await inquirer.prompt([
    {
        name: "pinCode",
        message: "Enter your pin code",
        type: "number",
    }
]);

if(pinAnswer.pinCode === myPin){
    console.log("Correct Pin Code!");
    
    let operationAns = await inquirer.prompt([
        {
           name: "operation",
           message: "What do you want to do?",
           type: "list",
           choices: ["withdraw", "check balance", "fast cash"],
        }
    ])
    console.log(operationAns);
    if (operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt([
            {
               name: "amount",
               message: "Enter your amount",
               type: "number", 
            }
        ])
        if(myBalance >= amountAns.amount){
        myBalance -= amountAns.amount;
        
        console.log(`Your remaining balance is ${myBalance}`);
        }

        else{
        console.log("Insufficient balance");
        }
    }
    else if(operationAns.operation === "check balance"){
        console.log(`Your balance is ${myBalance}`);
        
    }
    else if(operationAns.operation === "fast cash"){
            let myAmounts = await inquirer.prompt([
                {
                   name: "cash",
                   message: "Please select anyone amount",
                   type: "list", 
                   choices: ["1000", "2000", "5000", "10000"]
                }
            ]);
            let selectedAmount = myAmounts.cash
            if(myBalance >= selectedAmount){
               myBalance -=selectedAmount;
               console.log("Selected Amount :" + myAmounts.cash);
               console.log("Your remaining balance is :" + myBalance);
            }else {
                console.log("Insufficient balance");
                
            }
    }
}
    
else {
    console.log("Incorrect Pin Code!");
     }