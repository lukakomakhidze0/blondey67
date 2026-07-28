const yes = document.getElementById("yes");
const no = document.getElementById("no");
const answer = document.getElementById("answer");


function moveNo() {

    const x = Math.random() * (window.innerWidth - no.offsetWidth);
    const y = Math.random() * (window.innerHeight - no.offsetHeight);

    no.style.left = x + "px";
    no.style.top = y + "px";
}


no.addEventListener("mouseover", moveNo);

no.addEventListener("touchstart", function() {
    moveNo();
});


yes.addEventListener("click", function() {

    answer.innerHTML = "When? 😉❤️";

});
