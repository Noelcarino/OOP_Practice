class Umpire {
    constructor(){
        this.board = [
            [],
            [],
            [],
            [],
            [],
            []
        ];
    }
    checkNext(tile){
        console.log("helloasdf;lkasjdf");
        if (tile != 1 || 7 || 13 || 19 || 25 || 31){
            this.board.push()
            console.log("valid move");
            return true;
        } else {
            console.log("invalid move");
            return false;
        }
    }
}