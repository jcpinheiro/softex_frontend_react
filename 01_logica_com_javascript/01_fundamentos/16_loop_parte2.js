
const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push( function() { console.log('i == ' + i)} )  
}

funcs[0]()
funcs[6]()
funcs[8]()