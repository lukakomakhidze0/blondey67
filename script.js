const no = document.getElementById("no");
const yes = document.getElementById("yes");


no.addEventListener("mouseover", () => {

    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);

    no.style.left = x + "px";
    no.style.top = y + "px";

});


yes.addEventListener("click", () => {

    for(let i = 0; i < 50; i++){

        let heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random()*100 + "vw";
        heart.style.top = "90vh";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },2000);

    }

    setTimeout(()=>{
        alert("See You Soon Blondy ❤️🥰");
    },500);

});
