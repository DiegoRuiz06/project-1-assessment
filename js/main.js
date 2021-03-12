/*----- cached element references -----*/
let $runningTotal = $('div');
let $plusBtn = $('#plus');
let $minusBtn = $('#minus');
let $inputSpace = $('input');

/*----- event listeners -----*/
$plusBtn.on('click', addInput)
$minusBtn.on('click', subtractInput)
$inputSpace.on('click', clearInput);

/*----- functions -----*/
function clearInput() {
    $inputSpace.val('');
}

function addInput() {
    let initialValue = parseInt($runningTotal.text());
    initialValue += parseInt($inputSpace.val());
    $runningTotal.text(initialValue);
}

function subtractInput() {
    let initialValue = parseInt($runningTotal.text());
    initialValue -= parseInt($inputSpace.val());
    $runningTotal.text(initialValue);
}

//I had recently reviewed jQuery because I didn't understand it the first time but after review I figrued it would make things easier. Idk why it clicked more than vanilla jaa