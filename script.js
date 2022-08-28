const sliders = document.querySelectorAll("input[type='range']");

sliders.forEach(function (sliders) {
    sliders.addEventListener("input", tipPercentage);
});

const bill_Input = document.getElementById("bill");
// bill_Input.addEventListener("click",calculateTip);

var tip_percent;
var no_of_people;
let bill ;


function tipPercentage() {

    tip_percent = document.getElementById("tip").value;

    no_of_people = document.getElementById("no-of-people").value;

    document.getElementById("tip-percent").textContent = `\ ${tip_percent}%`;

    document.getElementById("split-num").textContent = no_of_people;


}
function calculateTip() {
    let bill = parseFloat(bill_Input.value);

    tipPercentage();

    bill_Input.value = bill.toFixed(2);

    let total_tip = parseFloat((bill * (tip_percent / 100)).toFixed(2));

    let total = parseFloat((bill + total_tip).toFixed(2));

    let tip_per_person = (total_tip / no_of_people).toFixed(2);

    let total_per_person = (total / no_of_people).toFixed(2);

    document.getElementById("tip-amount").textContent = `\₹ ${total_tip}`;

    document.getElementById("total-amount").textContent = `\₹ ${total}`;

    document.getElementById("tip-per-person").textContent = `\₹ ${tip_per_person} `;

    document.getElementById("total-per-person").textContent = `\₹ ${total_per_person}`;
}

calculateTip();

function reset() {
    bill = parseFloat(bill_Input.value);
    bill_Input.value = bill.toFixed(2);

    document.getElementById("tip-amount").textContent = `\₹ 0`;

    document.getElementById("total-amount").textContent = `\₹ 0`;

    document.getElementById("tip-per-person").textContent = `\₹ 0 `;

    document.getElementById("total-per-person").textContent = `\₹ 0`;
}
reset();