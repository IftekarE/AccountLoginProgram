//varaibles Start
var usernamehold = [];
var password = [];
var outcome = 0;
var count = 0;
var passstore = 0;
var userstore = 0;
var idhold0 = 0;
var meshold0 = 0;
//variables  END 
//logic code for the password the comparison START
function varify(inputtxt) { //based on the input of the user the function is carried out 
    if(outcome == 1){
    if(inputtxt.value.length == 0){
        meshold0 = "Please enter a Password";
        display();
    }else{
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,15}$/;// this is setting the passw varaible to any lowercase letter from a-z, uppercase form A - Z
            if(inputtxt.value.match(passw)) {//this is checikng to see if the input selected by the user matches the contents of the passw varable  
            outcome = 1;
            if(count != 1000){
                passstore = inputtxt.value;
                enter();
                meshold0 = "Your account is now registred";
                display();
                count = 0;
            }
            }else{ 
            meshold0 = "Password is not Strong, try again.";
            display();
            }
        }   
    }else{
        meshold0 = "Please enter a Username";
        display();
    }
}
//logic code for the password the comparison END 
//logic for username validation START 
function username(inputtxt){//this is what sets the username 
    //
    usernamehold = JSON.parse(localStorage.getItem("username")); 
    password = JSON.parse(localStorage.getItem("password")); 
    //
    if(inputtxt.value.length == 0){//checks to see if input is blank
        meshold0 = "Please enter a Username";
        display();
    }else{
        i = 0;
    if(usernamehold != null){
        do{
                if(usernamehold[i] == inputtxt.value){//checking to see if username already esist in record 
                    outcome = 4;
                    i = i++;
                }else{
                    outcome = 2;//inetillazing the username entry system 
                    i = i++;
                }
        }while(usernamehold[i - 1] == inputtxt.value)
            }else{
                outcome = 2;//inetillazing the username entry system 
            }
            if(outcome == 4){
                meshold0 = "An account by this Username already exists, please sign in.";//if username already exist giveing warning message 
                display();
                count = 1000;
                outcome = 1;
            }
            if(outcome == 2){
                userstore = inputtxt.value;
                outcome = 1;//inetilaizing password varafication code
        }
    }
}
//logic for username validation END
//account entry START
function enter(){//this only registers the account if both username and password have been entred
    if(passstore != 0){
        if(userstore != 0){

            var i = JSON.parse(localStorage.getItem("username")) || [];
            i.push(userstore); 
            localStorage.setItem("username", JSON.stringify(i));

            var i = JSON.parse(localStorage.getItem("password")) || [];
            i.push(passstore); 
            localStorage.setItem("password", JSON.stringify(i));

            passstore = 0;
            userstore = 0;
        }else{
            meshold0 = "You must fill in all boxes";
            display();
        }
    }else{
        meshold0 = "You must fill in all boxes";
        display();
    }
    passstore = 0;
    userstore = 0;
}
//account entry END
//logic for comparison START 
function usercheck(inputtxt){
    //
        usernamehold = JSON.parse(localStorage.getItem("username")); 
        password = JSON.parse(localStorage.getItem("password")); 
        console.log("Accounts: " + usernamehold);
        console.log("Passwords: " + password);
    //
    if(inputtxt.value.length == 0){//checks to see if input is blank
        meshold0 = "Please enter a Username";//checking to see if input box is empty 
        display();
    }else{
        count = 999;
        //comparison code elaborate START
            var arraylength = usernamehold.length;
            var i = 0;
                do{
                    if(usernamehold[i] == inputtxt.value){//locating the username 
                        count = i;//this will locate password 
                    }
                        i++;
                    }while(i < arraylength);//repeat until condition is met 
            var i = 0;
            do{
                if(usernamehold[i] != inputtxt.value){//this is checking if account exist 
                    i++;
                }else{
                    i = arraylength + 1;
                }
                }while(i < arraylength);//repeat until condition is met 
            if(i == arraylength){
                meshold0 = "This account does not exist please make one.";
                display();
            }
        //comparison code elaborate END
    }
}
function passcheck(inputtxt){
    if(inputtxt.value.length == 0){//checks to see if input is blank
        meshold0 = "Please enter a Password";
        display();
    }else{
    if(inputtxt.value == password[count]){//comparing the input to the archive to see if it matches 
        meshold0 = "You are now signed into " + usernamehold[count];//if it matches then will say you have loged in 
        display();
    }else{
        meshold0 = "Username or Password does not match, try again.";//if not it will say not matching
        display();
        }
    }
}
//logic for comparison END
//display START
function display(){//this is what displays the messages on screen 
    idhold0 = 0;
    idhold0 = document.getElementById("can0");// its telling the program where to display the message 
    idhold0.innerHTML = meshold0;
}
//display END