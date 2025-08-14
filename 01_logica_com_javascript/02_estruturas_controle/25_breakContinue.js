const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

// igual ao código acima
/* 
for (let i=0; i < 5; i++) {
   console.log(`${x} = ${nums[x]}`)
} 
*/


for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
    // ... o código continua aqui
}

for (nota in notas) {
  if (nota != 5) {
     console.log(`${nota} = ${nums[nota]}`)
  }
}

externo:
for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}