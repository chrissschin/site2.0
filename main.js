

var brightFutureArr = ['T', 'TH', 'THE', 'THE B','THE BR', 'THE BRI', 'THE BRIG', 'THE BRIGH', 'THE BRIGHT', 'THE BRIGHT F', 'THE BRIGHT FU', 'THE BRIGHT FUT', 'THE BRIGHT FUTU', 'THE BRIGHT FUTUR', 'THE BRIGHT FUTURE', 'THE BRIGHT FUTURE.',];

var index = 0;
var brightFuture = document.getElementById('bright-future');
setInterval(function() {

    var currBrightFutureArr = brightFutureArr[index++];


    brightFuture.innerHTML = currBrightFutureArr;


    if (index == brightFutureArr.length) {
        index = 0;
    }

}, 500);
