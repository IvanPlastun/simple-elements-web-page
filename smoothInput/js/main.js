let text = document.getElementById('text'),
    input = document.getElementById('input'),
    inputWrap = document.getElementById('input-wrap'),
    inputPadding = parseInt(window.getComputedStyle(input,null).getPropertyValue('padding-left').slice(0, 2)),
    inputWidth,
    textWidth;

input.addEventListener('keyup', function() {
    text.innerText = this.value;
    textWidth = text.offsetWidth;
    inputWidth = Math.abs(input.clientWidth - inputPadding);
    if(textWidth > inputWidth) {
        inputWrap.classList.add('input-wrap--shadow');
    } else {
        if(inputWrap.classList.contains('input-wrap--shadow')) {
            inputWrap.classList.remove('input-wrap--shadow');
        }
    }
});
