
// BUILD AN ADVEMTURING PARTY!
// Create an adventuring party for an online RPG that allows multiple saved adventuring party compositions

// Party Name:
// Name

// Player Parameters:
// Name, Class (Role)


class Player {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    describe(){
        return `${this.name} plays ${this.role}.`;
    }
}

class Party {
    constructor(name) {
        this.name = name;
        this.players = [];
    }

    addPlayer(player) {
        if (player instanceof Player) {
            this.players.push(player);
        } else {
            throw new Error(`You can only add an instance of a Player. Arguments is not a Player: ${player}`);
        }
    }

    describe() {
        return `${this.name} has ${this.players.length} players.`;
    }
}

class Menu {
    constructor() {
        this.parties = [];
        this.selectedParty = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        
        while (selection !=0) {
            switch (selection) {
                case '1': 
                    this.createParty();
                    break;
                case '2':
                    this.viewParty();
                    break;
                case '3':
                    this.deleteParty();
                    break;
                case '4':
                    this.displayParties();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }

    showMainMenuOptions(){
        return prompt(`
            0) exit
            1) create new adventuring party
            2) view adventuring party
            3) delete adventuring party
            4) display all adventuring parties
        `);
    }

    showPartyMenuOptions(partyInfo) {
        return prompt(`
            0) back
            1) create player
            2) delete player
            --------------------
            ${partyInfo}
        `);
    }

    displayParties() {
        let partyString = '';
        for (let i = 0; i < this.parties.length; i++) {
            partyString += i + ') ' + this.parties[i].name + '\n';
        }
        alert(partyString);
    }

    createParty() {
        let name = prompt('Enter a name for your new adventuring party:');
        this.parties.push(new Party(name));
    }

    viewParty() {
        let index = prompt('Enter the idex of the adventuring party you wish to view:');
        if (index > -1 && index < this.parties.length) {
            this.selectedParty = this.parties[index];
            let description = 'Party Name: ' + this.selectedParty.name + '\n';
        
            for (let i = 0; i < this.selectedParty.players.length; i++) {
                description += i + ') ' + this.selectedParty.players[i].name 
                    + ' - ' + this.selectedParty.players[i].role + '\n';
            }

            let selection = this.showPartyMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createPlayer();
                    break;
                case '2':
                    this.deletePlayer();
            }
        }
    }

    deleteParty() {
        let index = prompt('Enter the index on the adventuring party you wish to delete');
        if (index > -1 && index < this.parties.length) {
            this.parties.splice(index, 1);
        }
    }

    createPlayer() {
        let name = prompt('Enter name for a new player:');
        let role = prompt('Enter role for a new player:');
        this.selectedParty.players.push(new Player(name, role));
        document.write(`${name} the ${role} of ${this.selectedParty.name} <br>`); // write player name and role party name // How to use -> of ${parties}
    }

    deletePlayer() {
        let index = prompt('Enter the index of the player you wish to delete:');
        if (index > -1 && index < this.selectedParty.players.length) {
            this.selectedParty.players.splice(index, 1);
        }
    }

    
}

let menu = new Menu();
menu.start();

// document.write(players); How do I show the final results?
// document.write(parties);
