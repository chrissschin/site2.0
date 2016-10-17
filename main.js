

var brightFutureArr = ['T', 'TH', 'THE', 'THE B','THE BR', 'THE BRI', 'THE BRIG', 'THE BRIGH', 'THE BRIGHT', 'THE BRIGHT F', 'THE BRIGHT FU', 'THE BRIGHT FUT', 'THE BRIGHT FUTU', 'THE BRIGHT FUTUR', 'THE BRIGHT FUTURE', 'THE BRIGHT FUTURE.',];
var backImagesArr = ['url(dumb.gif)', 'url(dumb.gif)','url(dumb.gif)','url(dumb.gif)','url(dumb.gif)','url(dumb.gif)','url(lost.gif)', 'url(lost.gif)','url(lost.gif)','url(lost.gif)','url(lost.gif)','url(lost.gif)','url(lost.gif)','url(lost.gif)','url(car.gif)','url(car.gif)' ,'url(car.gif)','url(car.gif)' ,'url(roof.gif)', 'url(roof.gif)','url(roof.gif)','url(roof.gif)','url(roof.gif)','url(roof.gif)', 'url(roof.gif)'   ];
var index = 0;
var backImageIndex = 0;
var brightFuture = document.getElementById('bright-future');
var backImage = document.getElementById('main-body');



setInterval(function() {

    var currBrightFutureArr = brightFutureArr[index++];


    brightFuture.innerHTML = currBrightFutureArr;


    if (index == brightFutureArr.length) {
        index = 0;
    }


	var currBackImg = backImagesArr[backImageIndex++];

	backImage.style.backgroundImage = currBackImg;
	if ( backImageIndex == backImagesArr.length ) {
		backImageIndex = 0;
	}



}, 500);
