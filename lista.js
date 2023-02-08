lista = [];
lista_com = Number(prompt("Diga o começo da sua lista"));
do
{
    lista_fim = Number(prompt("Agora diga o final da sua lista"));
}
while (lista_fim < lista_com)
for (n = lista_com; n <= lista_fim; n++)
{
    lista.push(n);
}
do
{
    num = Number(prompt("Digite uma posição (que não seja negativa) na sua lista que devolveremos o numero nesta posição"))
}
while (num < 0)
if (num > lista.length)
{
    num = num - lista.length;
}
num = num - 1;
alert(lista[num]);