var bin = "" ; var num = Number(prompt("Digite um número: "))
for(q = 0; num >= 1; q++) { bin = (num % 2) + bin ; num = Math.floor(num / 2) }
alert(bin)