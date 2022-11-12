document.querySelector("#submit").addEventListener("click", details)
    function details(event) {
        event.preventDefault()
        let name = document.querySelector("#name").value
        let email = document.querySelector("#email").value
        let password = document.querySelector("#password").value

        if(name == "Lokendra" && email == "lokendra1234@gmail.com" && password == 12345678){
            alert("login Succesfully")
            location.href ="Index.html"
        } else{
            alert("Invalid Details")
        }
    }