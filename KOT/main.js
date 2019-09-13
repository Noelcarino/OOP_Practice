var game;

$(document).ready( startApp );

function startApp(){
    game = new KingOfTokyo('#gameArea');
    game.addMonster('gigazaur', 'images/gigazaur.jpeg');
    game.addMonster('cyberkitty', 'images/kitty.jpeg');
    game.addEventListeners();
}  