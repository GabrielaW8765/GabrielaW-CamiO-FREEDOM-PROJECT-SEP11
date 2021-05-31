alert("Welcome to our app!");
alert("We present to you......");
alert("FreeSpace!!!");

var myElement = document.getElementById('myElement');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);

// listen to events...
mc.on("panleft panright tap press", function(ev) {
    myElement.textContent = "Yo, you are on the "+ev.type +" side. YAY!! :D";
    
});

document.addEventListener("click", main);
function main(event) {
  var button = prompt("What is your Stress Level? From 1 - 3");
  if (button === '1') {
    alert("It's is time to play Bubble pop!!!");
     var a = document.createElement('a');
      var linkText = document.createTextNode("Level 1");
      a.appendChild(linkText);
      a.title = "Bubble Pop";
      a.href = "https://scratch.mit.edu/projects/64798962";
      document.body.appendChild(a);
  } 
  if (button === '2') {
   var books = prompt("Would you like to read Comedy or Fanasty?");
   if ((books === 'Comedy') || (books === 'comedy')){
    alert("Time to read some Comdey!! :)")
         var a = document.createElement('a');
      var linkText = document.createTextNode("Level 2");
      a.appendChild(linkText);
      a.title = "Comedy";
      a.href = "https://www.wattpad.com/stories/comedy";
      document.body.appendChild(a);
   }else{
    alert("Time to read some Fanasty!! :D");
         var a = document.createElement('a');
      var linkText = document.createTextNode("Level 2");
      a.appendChild(linkText);
      a.title = "Fanasty";
      a.href = "https://www.wattpad.com/stories/fantasy";
      document.body.appendChild(a);     
   };
  }
   if (button === '3') {
    alert("Let's listen to some music ~ :) ");
         var a = document.createElement('a');
      var linkText = document.createTextNode("Level 3");
      a.appendChild(linkText);
      a.title = "Music";
      a.href = "https://youtu.be/W6YI3ZFOL0A";
      document.body.appendChild(a);         
  }
};
// Level 1 https://gamejolt.net/?token=T8qv2KTQKV7sfhDYprEdB4KDecaGBF
//level 2  reading
//comdey https://www.wattpad.com/stories/comedy
//fanastay https://www.wattpad.com/stories/fantasy
// Level 3 https://youtu.be/W6YI3ZFOL0A