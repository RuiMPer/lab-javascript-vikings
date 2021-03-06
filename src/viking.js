// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health
        this.strength = strength
    }
    attack () {
        return this.strength
    }
    receiveDamage(damage) {
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier{
    constructor (name, health, strength){
    super(health, strength)
    this.name = name
    } receiveDamage (damage) {
        this.health = this.health - damage
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        } 
        return `${this.name} has received ${damage} points of damage`
    } battleCry () {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health <= 0) {
            return `A Saxon has died in combat`
        } 
        return `A Saxon has received ${damage} points of damage`
    }
}

// War
class War {
    constructor () {
        this.vikingArmy = []
        this.saxonArmy = []
    } addViking (viking) {
        this.vikingArmy.push(viking)
    } addSaxon (saxon) {
        this.saxonArmy.push(saxon)
    } 
    // soldierAttack (attackingSoldierArmy, defendingSoldierArmy) {
    //     const randomAttackingSoldierIndex = Math.floor(attackingSoldierArmy.length * Math.random())
    //     const randomDefendingSoldierIndex = Math.floor(defendingSoldierArmy.length * Math.random())

    //     const randomAttackingSoldier = attackingSoldierArmy[randomAttackingSoldierIndex]
    //     const randomDefendingSoldier = attackingSoldierArmy[randomDefendingSoldierIndex]

    //     let attack = randomDefendingSoldier.receiveDamage(randomAttackingSoldier.strength)

    //     if (randomDefendingSoldier.health <= 0) {
    //         defendingSoldierArmy.splice(randomDefendingSoldierIndex, 1)
    //     }

    //     return attack
    // }

    // vikingAttack () {
    //     return this.soldierAttack (this.vikingArmy, this.saxonArmy)
    // }
    // saxonAttack () {
    //     return this.soldierAttack (this.saxonArmy, this.vikingArmy)
    // }
       
    vikingAttack () {
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let saxon = this.saxonArmy[randomSaxonIndex];
        let viking = this.vikingArmy[Math.floor(Math.random()) * this.vikingArmy.length]
        let result = saxon.receiveDamage(viking.strength)
        if (result === `A Saxon has died in combat`) {
            this.saxonArmy.splice(randomSaxonIndex, 1)
        } 
        return result      
    }  saxonAttack () {
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let saxon = this.saxonArmy[Math.floor(Math.random()) * this.saxonArmy.length]
        let viking = this.vikingArmy[randomVikingIndex];
        let result = viking.receiveDamage(saxon.strength)
        if (result === `${viking.name} has died in act of combat`) {
            this.vikingArmy.splice(randomVikingIndex, 1)
        } 
        return result  

    } showStatus () {
        if (this.saxonArmy.length <= 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length <= 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
