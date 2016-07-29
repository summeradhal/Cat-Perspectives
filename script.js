var cards=[
'<img src="Images/floatcat.jpg">',
'<img src="Images/fatcat.jpg">',
'<img src="Images/deathstarcat.jpg">',
'<img src="Images/pizzacat.jpg">'
];



// All code will wait until the DOM is ready!
$(document).ready(function(){
	var gridSize =6;

	

	var mgHTML = '';
	var cardCounter=0;
	
	var aCard=[];

	for(var i=0;i<cards.length;i++){
		aCard.push(cards[i]);
		aCard.push(cards[i]);
	}

function shuffleCards(){

for(var i=0;i<cards.length;i++){
	var card1=Math.floor(Math.random()*cards.length);
	var card2=Math.floor(Math.random()*cards.length);
	var temp=aCard[card1];
	aCard[card1]=aCard[card2];
	aCard[card2]=temp;
}

};

	shuffleCards();

	for(var i = 0; i < gridSize; i++){
		
		mgHTML += '<div class="mgTile col-sm-3">';
			mgHTML += '<div class="mgTileInner">';
				mgHTML += '<div class="mgFront">'+aCard[i]+'</div>';
				mgHTML += '<div class="mgBack"></div>';
			mgHTML += '</div>';
		mgHTML += '</div>';
	};

$('.mg-contents').html(mgHTML);



$('.mgTileInner').click(function(){
	$(this).toggleClass('flip');
	cardsUp=$('.mgTileInner.flip').length;
	console.log(cardsUp);
	var cardsUp=$('.flip');
	if(cardsUp.length==2){

	}if(cardsUp.find('img')[0].src==cardsUp.find('img')[1].src){
		//the pics are the same this is a match!
	cardsUp.addClass('matched');



	}else{
		//the user has flipped two cardsa nd they dont match
		//flip cards back over 
		$(cardsUp).delay(1000).removeClass('flip');

	}   


	});





    animateDiv();
    
});


function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.weirdCat').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.weirdCat').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = .5;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}



