const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

  //   write your code here
function hasKey(key) {
    // Check if the key exists in the global object sampleObject
    if (sampleObject.hasOwnProperty(key)) {
        return true;
    } else {
        return false;
    
}
// Define the global object sampleObject
const sampleObject = {
    red: "#FF0000",
    green: "#00FF00",
    white: "#FFFFFF"
};

}
// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
