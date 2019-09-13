class KingOfTokyo{
    constructor( displayDom) {
        this.rollDice = this.rollDice.bind( this );
        this.dom = {
            container: $(displayDom),
            dice: null
        }
        this.monster = [];
        this.currentMonster = 0;
        this.dice = new Dice(1);
        var diceDomElement = this.dice.render();
        this.dom.container.append( diceDomElement );
        this.dom.dice = diceDomElement;
    }
    addEventListeners(){
        $("#rollDice").click( this.rollDice );
    }
    rollDice(){
        var diceValues = this.dice.rollAllDice();
        console.log(diceValues);

    }
    addMonster(name, image){
        var newMonster = new Monster( name, image, 10, 0);
        this.monster.push( newMonster );
        var domElement = newMonster.render();
        this.dom.container.append( domElement );
    }
    changePointsOfMonster( type, delta, monsterIndex) {
        if(monsterIndex===undefined){
            monsterIndex = this.currentMonster;
        }
        this.monster[ monsterIndex ].changePoints( type, delta);
    }
}