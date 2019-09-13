git class Board {
    constructor(){

    }
    createBoard(){
        console.log("..Board Created..");
        var body = $("body");

        var board = $("<div>")
            .addClass('board');
        var tileID = 1;
        for (var row = 1; row <= 6; row++){
            for (var column = 1; column <= 7; column++){
                var tile = $('<div>').addClass('tile').attr('id', tileID ).text(tileID);
                board.append(tile);
                tileID++;
            }
        }
        body.append(board);
    }
    render(){
        this.createBoard();
    }
}