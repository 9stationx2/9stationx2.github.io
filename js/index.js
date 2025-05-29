(function(){
    const spanEl = document.querySelector("section h2 span");
    const txtArr = [" ", "about 1 DO"];

    let index = 0;
    let currentTxt = txtArr[index].split("");

    function writeTxt() {
        spanEl.textContent += currentTxt.shift();
        if(currentTxt.length !== 0) {
            setTimeout(writeTxt, 100);
        }else {
            currentTxt = spanEl.textContent.split("");
            setTimeout(deleteTxt, 3000);
        }
    }

    function deleteTxt(){
        currentTxt.pop();
        spanEl.textContent = currentTxt.join("");
        if(currentTxt.length !== 0) {
                setTimeout(deleteTxt, 100);
            }else {
                index = (index + 1) % txtArr.length;
                currentTxt = txtArr[index].split("");
                // setTimeout(writeTxt, 1000);
                console.log(currentTxt);
                writeTxt();
            }
    }
    
    writeTxt();
})();
