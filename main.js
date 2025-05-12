let btn = document.getElementById ("btn")
let username = document.getElementById ("username")
let textarea = document.getElementById ("textarea")
let userInfo = document.getElementById ("user-post" )
let img =document.getElementById("img")




let usernames = []; 

document.getElementById("btn").addEventListener("click", () => {
    let username = document.getElementById("username").value.trim();
    let textarea = document.getElementById("textarea").value.trim();
    let img = document.getElementById("img").value.trim();
    let errorMessage = "";
    if (username.length <= 4) {
        errorMessage += "Username must be more than 4 letters. ";
    }
    if (usernames.includes(username)) {
        errorMessage += "Username already exists. ";
    }
    if (textarea.length <= 6) {
        errorMessage += "Textarea must be more than 6 letters. ";
    }
    if (!img) {
        errorMessage += "Image URL is required. ";
    }

    if (errorMessage) {
        alert(errorMessage); 
    } else {
     
        usernames.push(username); 
        fetch('https://682199fd259dad2655afc11d.mockapi.io/post', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                textarea: textarea,
                img: img
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
      
      

      
    }
});



fetch('https://682199fd259dad2655afc11d.mockapi.io/post')
 .then((response) => response.json())
 .then((data) => {
    data.forEach(element => {
        let text = document.createElement("h4");
        text.className="user-name"
        let post = document.createElement("p");
        let img = document.createElement("img");
        let del = document.createElement("button");
        del.className="btn-del"

        text.innerText = element.username;
        post.innerText = element.textarea;
        img.src = element.img;
        img.style.width = "30vw";
        img.style.height = "30vh";
        img.style.width 
        del.innerText = "Delete";
        del.style.width = "15vw";
        del.style.height = "5vh";
        del.style.backgroundColor = "rgb(248, 240, 229)";

 

        del.addEventListener("click", () => {
            fetch(`https://682199fd259dad2655afc11d.mockapi.io/post/${element.id}`, {
                method: "DELETE",
            });

           
            userInfo.removeChild(text);
            userInfo.removeChild(post);
            userInfo.removeChild(img);
            userInfo.removeChild(del);
        });
        userInfo.appendChild(text);
        userInfo.appendChild(post);
        userInfo.appendChild(img);
        userInfo.appendChild(del);
    });
});
