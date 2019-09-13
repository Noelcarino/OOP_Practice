var board;
$(document).ready( startApp );

function startApp(){
    board = new Board();
    connect4 = new ConnectFour();
    board.render();
    connect4.addEventListener();
}
