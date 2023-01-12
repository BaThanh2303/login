let ids = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);
 
var user1 = "logan", 
    pass1 = "12345"

let username = ids("username"),
    password = ids("password"),
    form = ids("form"),
    errorMsg = classes("error"),
    susscess = classes("fa-circle-xmark"),
    fails = classes("fa-circle-check");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
      
            loginLog(username, 0, "Username cannot be blank");
            loginLog(password, 1, "Password cannot be blank");
    });
    
    let loginLog = (ids, serial, message) => {
        if(ids.value.trim() === "") {
            errorMsg[serial].innerHTML = message;
            ids.style.border = "2px solid red";
    
            //icons
    
            fails[serial].style.opacity = "0";
            susscess[serial].style.opacity = "1";
        } else {
            errorMsg[serial].innerHTML = "";
            ids.style.border = "2px solid green";
    
            //icons
            fails[serial].style.opacity = "1";
            susscess[serial].style.opacity = "0"
        }
    };