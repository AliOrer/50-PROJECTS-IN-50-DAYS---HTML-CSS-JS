const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = "Super saian is the best form of Goku. He is the strongest warrior in the universe and he can defeat any enemy with his incredible power and speed. His transformations are legendary and his battles are epic. Goku is a true hero and an inspiration to all.";

let idx =1;
let speed = 300/ speedEl.value 

writeText();

function writeText(){
    textEl.innerText = text.slice(0, idx);
    idx++
    if(idx > text.length){
        idx = 1
    }

    setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)