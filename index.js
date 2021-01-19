var currTurn = 'X';
var clickedColor = "rgb(255, 255, 0)";

var winningCombination = "";

const combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
];

/*
 * Click listeners
 */
$('#drawer-icon').click(function() {
    $(this).siblings().slideToggle();
});

$('.xo-cell').on('click', clickCellFunction);

$('#reset-btn').click(function() {
 
    resetGame();
});



function clickCellFunction() {
    console.log("Resetting");
    if ($(this).text() == "") {
        xo_cellClicked(this);
        if (keepPlaying()) {
            toggleTurn();
        } else {
            endGame();
        }
        
    }
}


var toggleTurn = function() {
    if (currTurn == 'X') {
        currTurn = 'O';
    } else {
        currTurn = 'X';
    }
    $('#currTurn').text(currTurn);
}

var xo_cellClicked = function(cell) {
    $(cell).text(currTurn);
    $(cell).removeClass("xo-cell-notclicked");
    $(cell).removeClass("xo-cell-hover");
    $(cell).addClass("xo-cell-clicked");

}

var endGame = function() {
    $('.xo-cell').off('click');
    $('.xo-cell').removeClass('xo-cell-hover');
    $('#winnerAnnouncement').text("Congratulations: "+currTurn+"! You have won!");
}

var keepPlaying = function() {
    let result = true;
    combinations.forEach((curr) => {
        let a = $('.xo-cell').eq(curr[0]).text();
        let b = $('.xo-cell').eq(curr[1]).text();
        let c = $('.xo-cell').eq(curr[2]).text();

        if (a == b && b == c && c != "") {
            result = false;
//            winningCombination = curr;
        }
    });
    return result;
}

var resetGame = function () {
    $('.xo-cell').text("");
    $('.xo-cell').removeClass("xo-cell-clicked");
    $('.xo-cell').addClass("xo-cell-notclicked");
    $('.xo-cell').addClass("xo-cell-hover");
    $('.xo-cell').on('click', clickCellFunction);
    $('#winnerAnnouncement').text("");

}



