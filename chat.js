function send() {
    let message = document.getElementById("text").value;
    document.getElementById("text").value = "";
    (async () => {
        let response = await fetch('chat.php?message=' + message);
        let answer = await response.text();
        document.getElementById('messages').innerText = answer;
    }
    )();
}

function get() {
    (async () => {
        let response = await fetch('chat.php');
        let answer = await response.text();
        document.getElementById('messages').innerText = answer;
    }
    )();
}

get();

setInterval(get, 1000);