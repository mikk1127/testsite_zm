var myHeading = document.querySelector("h1");
myHeading.textContent = "MOEA "+"Water Resourcce";

var myImage = document.querySelector("img");
myImage.onclick = function(){
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/Wra_logo.png"){
        myImage.setAttribute("src", "images/logo.png");
    }else{
        myImage.setAttribute("src", "images/Wra_logo.png");
    }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");


function setUserName(){
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Welcome to Website, ' + myName;
    }
}

myButton.onclick = function(){
    setUserName();
};
