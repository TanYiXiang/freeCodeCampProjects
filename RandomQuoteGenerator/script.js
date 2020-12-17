import jquery from 'https://cdn.skypack.dev/jquery@3.5.1';

let lastNumber;
let lastColor;

const quotes = [ {
        "quote": "Forget all the reasons why it won't work and believe the one reason why it will",
        "author": "Unknown"
    },
    {
        "quote": "Always do what you are afraid to do",
        "author": "Ralph Waldo Emerson"
    },

    {
        "quote": "Don’t be intimidated by what you don’t know. That can be your greatest strength and ensure that you do things differently from everyone else.",
        "author": "Sara Blakely"
    },
    {
        "quote": "If you keep on doing what you've always done, you will keep getting what you've always gotten.",
        "author": "Unknown"
    },
    {
        "quote": " For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. John 3:16",
        "author": "Jesus Christ"
    },
    {
        "quote": "The surest way to find your dream job is to create it.",
        "author": "Unknown"
}];

const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

function getRandomNumber(){
  let num = Math.floor(Math.random() * 5);
  
  if(num == lastNumber){
    return getRandomNumber();
  };
  
  return num; 
}

function changeColor(){
   let num = Math.floor(Math.random() * colors.length);
   
   if (num == lastColor){
     return changeColor();
   }
  return num;
}

function quoteText(){
  let num = getRandomNumber();
  let color = changeColor();
  lastNumber = num;
  lastColor = color;
  
  let newColor = colors[color];
  let quoteText = quotes[num].quote;
  let authorText = "- " + String(quotes[num].author);
  
  let url = 'https://twitter.com/intent/tweet?text='
  + encodeURIComponent('"' + quoteText + '"' + authorText);
    
  $("#tweet-quote").attr('href',url);
  
  $('html body').animate(
    {
      backgroundColor: newColor,
    },
    1200
  );
  
   $( "#text" ).fadeTo( "slow" , 0.3, function() {
    $("#text").animate(
    {color:newColor,}, 500
    );
    $("#new-quote").animate(
    {backgroundColor:newColor,}, 500
    );
    $("#text").text(quoteText);
    $("#text").fadeTo("slow",1)
  });
  
  $( "#author" ).fadeTo( "slow" , 0.3, function() {
    $("#author").animate(
    {color:newColor,}, 500
    );
    $("#author").text(authorText);
    $("#author").fadeTo("slow",1)
  });

  $("#new-quote").blur();
}

$( document ).ready(quoteText());

$("#new-quote").click(function(){
 quoteText();
});