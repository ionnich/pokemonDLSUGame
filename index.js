const trainer = {
  name: "Aaron",
  pokemon: [],
  catch(pokemon) {
    this.pokemon.push(pokemon);
    console.log(`${this.name} successfully caught ${pokemon.name}!`);
  }
};

const opponent = {
  name: "Villain",
  pokemon: [],
  catch(pokemon) {
    this.pokemon.push(pokemon);
    console.log(`${this.name} successfully caught ${pokemon.name}!`);
  }
};

function Pokemon(name, hp) {
  this.name = name;
  this.hp = hp;
  this.tackle = function (target) {
    console.log(`${this.name} used Tackle on ${target.name}!`);
    target.hp -= 10;
    if (target.hp <= 0) {
      console.log(`${target.name} fainted!`);
    } else {
      console.log(`${target.name}: ${target.hp + 10} hp >>> ${target.hp} hp`);
    }
  };
}

const pikachu = new Pokemon("Pikachu", 50);
const squirtle = new Pokemon("Squirtle", 60);

trainer.catch(pikachu);
opponent.catch(squirtle);

console.log();
console.log(`${opponent.name} blocks ${trainer.name}'s way!`);
console.log(trainer["name"] + " is forced to battle " + opponent.name + "!");

while (pikachu.hp > 0 && squirtle.hp > 0) {
  pikachu.hp > 0 && pikachu.tackle(squirtle);
  console.log();
  squirtle.hp > 0 && squirtle.tackle(pikachu);
  console.log();
}

if (pikachu.hp <= 0) {
  console.log(`${trainer.name} wins!`);
} else {
  console.log(`${opponent.name} wins!`);
}
