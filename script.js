window.onload = choosePic;

var myPix = new Array("img/7.jpg", "img/tres.jpg","img/6.jpg");

function choosePic() {
	randomNum = Math.floor((Math.random() * myPix.length));
	document.getElementById("myPicture").src = myPix[randomNum];
}

var target = document.getElementById('target');
var titles = [
    'Pies, ¿para qué los quiero si tengo alas pa volar?',
    'Donde no puedas amar, no te demores.',
    'Amurallar el propio sufrimiento es arriesgarte a que te devore desde el interior.',
    'Jamás en toda la vida, olvidaré tu presencia. Me acogiste destrozada y me devolviste íntegra, entera.',
    'Te necesito tanto que me duele el corazón.'
];

function newTitle () {
    var i = (Math.random() * titles.length) | 0;
    target.innerText = titles[i];
}

newTitle();