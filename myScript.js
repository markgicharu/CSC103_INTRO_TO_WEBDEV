/*function validateForm() {
    var x = document.forms["myForm"]["yourName"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
}*/

//this changes the text of the submit button
/*function changeText() {
    x = document.getElementById("mySelect");
    x.options[x.selectedIndex].text = "Submitted";
}*/


//this confirms user input upon submit press button
function confirmInput() {
    yourName = document.forms[0].yourName.value;
    alert(yourName + " Your comment has been submitted");
}

/*this resets everything when you click the reset button
var resetForm
function resetAll() {
    reset = document.forms[0].;
}*/


function resetform() {
document.getElementById("myForm").reset();
}