class ConnectFour {
    constructor(){
        this.insertTile = this.insertTile.bind(this);
        this.returnTileID = this.returnTileID.bind(this);
        this.playerTurn = 1;
    }
    addEventListener(){
        var tileID = $('.tile');
        tileID.on('click', this.returnTileID );
    }
    returnTileID(){
        var umpire = new Umpire();
        var currentTile = $(event.target).attr('id');
        var validMove = umpire.checkNext(currentTile);
        if (validMove){
            this.insertTile(currentTile);
        }

        console.log('current tile - ', currentTile);
    }
    insertTile(tile){
        console.log('passed tile', tile);
        if (this.playerTurn === 1) {
            $(event.target).addClass('red');
            this.playerTurn = 2;
        } else {
            $(event.target).addClass('black');
            this.playerTurn = 1;
        }
    }
}