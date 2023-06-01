function send() {
    let massage = document.getElementById("text").value;
    document.getElementById("text").value = "";
    console.log(massage);
}

function get() {
    let answer = "Hello";
    document.getElementById("messages").innerText = answer;
}

get();

setInterval(get, 1000);