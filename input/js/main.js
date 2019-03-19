(() => {
    let letters = {},
        inp = document.getElementById('input-field'),
        val,
        oldval,
        lastChar;
    inp.addEventListener('keyup', function(event) {
        val = this.value;
        if(event.keyCode === 8) {
            lastChar = oldval.slice(-1).toUpperCase();
            letters[lastChar] = letters[lastChar] - 1;
            if(letters[lastChar] === 0) {
                delete letters[lastChar];
            }
        } else if(event.keyCode >= 65 && event.keyCode <= 90) {
            if(val.length) {
                strToArr(val);
            }
        }
        oldval = val;
        console.log(letters);
    });

    function strToArr(str) {
        let arr = str.split(''),
            letter = arr[arr.length - 1].toUpperCase();
        if(letters[letter]) {
            letters[letter] = letters[letter] + 1;
        } else {
            letters[letter] = 1;
        }
    }
})();