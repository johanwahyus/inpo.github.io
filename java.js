// foto pertama

var textBox = document.getElementById("textBox");
var imgBox = document.getElementById("imgBox");

textBox.onkeyup = textBox.onkeypress = function(){
    document.getElementById("prevText").innerHTML = this.value;
}

var loadFile = function(event){
imgBox.style.backgroundImage = "url(" +URL.createObjectURL(event.target.files[0])+ ")";
}

// foto kedua

var textBox1 = document.getElementById("textBox1");
var imgBox1 = document.getElementById("imgBox1");

textBox1.onkeyup = textBox1.onkeypress = function(){
    document.getElementById("prevText1").innerHTML = this.value;
}

var loadFile1 = function(event){
imgBox1.style.backgroundImage = "url(" +URL.createObjectURL(event.target.files[0])+ ")";
}