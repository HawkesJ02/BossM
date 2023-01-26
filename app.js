// SECTION Const

const heroes = [
  {
      name: 'Robin Redbrick',
      img: 'https://images.unsplash.com/photo-1570989086575-503363bb091b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      type: 'rabbit',
      damage: 5,
      health: 100,
      lvl: 1,
  },
  {
      name: 'Unshelfed Elf',
      img: 'https://images.unsplash.com/photo-1604868379657-dd7c35f6c4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      type: 'elf',
      damage: 10,
      health: 50,
      lvl: 12,
  }
]


const boss = {
  name:'Cthulhu',
  img:'https://images.unsplash.com/photo-1551899714-406fb07fb6ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2971&q=80',
  health: 100,
  maxHealth: 100,
  damage: 5,
  level: 0,
}
// SECTION VARS

let bossTemplate = boss
let heroesTemplate = heroes

// SECTION Functions


function attackBoss(){
  let totalAttack = 0
  heroes.forEach(h =>{if(h.health == 0){ h.damage = 0 }} )
  heroes.forEach(hero => totalAttack += hero.damage * ((hero.lvl / 100) + 1));
  bossTemplate.health -= totalAttack.toFixed(0)
  console.log(bossTemplate);
heroesAttacked()
bossRevive()
drawBoss()
}

function bossRevive(){
  if (boss.health <= 0) {
    boss.level++
    heroes.forEach(h => h.lvl++ )
    boss.maxHealth = boss.maxHealth + (boss.level + 10)
    boss.health = boss.maxHealth

  }
}

function heroesAttacked(){
let totalAttack = 0
heroesTemplate.forEach (hero => hero.health -= boss.damage)
  heroes.forEach(h => {if(h.health < 0){h.health = 0}})
  console.log(heroesTemplate);
  drawHeroes()
}





// SECTION Draw  

function drawHeroes(){
  let rabbitElem = document.getElementById('rabbit')
rabbitElem.innerHTML = `<h2>${heroes[0].name}</h2>
<h3>HEALTH: ${heroes[0].health}</h3>
<h3>GOLD:</h3>
<h3>LVL: ${heroes[0].lvl}</h3>`

  let elfElem = document.getElementById('elf')
elfElem.innerHTML = `<h2>${heroes[1].name}</h2>
<h3>HEALTH: ${heroes[1].health}</h3>
<h3>GOLD:</h3>
<h3>LVL: ${heroes[1].lvl}</h3>`

  
}


function drawBoss(){
  let bossElem = document.getElementById('boss')
  let bossh1 = bossElem.querySelector('h1')
  let bossh2 = bossElem.querySelector('h2')
  bossh1.innerText = `${boss.name} lvl ${boss.level + 1}`
  bossh2.innerText = `${boss.health}/${boss.maxHealth}`
}
setInterval(attackBoss, 1000)
drawHeroes()
drawBoss()