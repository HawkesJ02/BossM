// SECTION Const

const heroes = [
  {
      name: 'Robin Redbrick',
      img: 'https://images.unsplash.com/photo-1570989086575-503363bb091b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      type: 'rabbit',
      damage: 5,
      health: 100
  },
  {
      name: 'Unshelfed Elf',
      img: 'https://images.unsplash.com/photo-1604868379657-dd7c35f6c4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      type: 'elf',
      damage: 10,
      health: 50
  }
]


const boss = {
  health: 100,
  maxHealth: 100,
  damage: 5,
  level: 1
}
// SECTION VARS

let bossTemplate = boss
let heroesTemplate = heroes

// SECTION Functions


function attackBoss(){
  let totalAttack = 0
   heroes.forEach(hero => totalAttack += hero.damage);
  bossTemplate.health -= totalAttack
  console.log(bossTemplate);
heroesAttacked()
}

function heroesAttacked(){
let totalAttack = 0
heroesTemplate.forEach (hero => hero.health -= boss.damage)
  console.log(heroesTemplate);
}

function drawHeroes(){
let heroElm = document.getElementById('Unshelfed Elf')

}

setInterval(attackBoss, 1000)
