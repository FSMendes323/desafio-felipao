const heroi = [{
    nome: "Spider-Man",
    XP: 950 
},{
  nome: "Hulk",
  XP: 1520
  },{
  nome:"Iron-Man",
  XP:4000
},{
  nome:"Black Phanter",
  XP:6200
},{
nome:"Black Widow",
XP:7001  
},{
  nome:"Doctor Strange",
  XP:8999
},{
  nome:"DeadPool",
  XP:10500
}];

for (let i = 0; i < heroi.length; i++) {
let nome = heroi[i].nome;  
let XP = heroi[i].XP;
let nivel = "";

console.log("O Herói de nome " + nome + " está no nível " + nivel) 

if (XP < 1000){
    console.log("Ferro");
} else if (XP >=1001 && XP <=2000){
    console.log("Bronze");
} else if (XP >=2001 && XP <=5000){
    console.log("Prata");
} else if (XP >=5001 && XP <=7000){
    console.log("Ouro");
} else if (XP >=7001 && XP <=8000){
    console.log("Platina");
} else if (XP >=8001 && XP <=9000){
    console.log("Ascendente");
} else if (XP >=9001 && XP <=10000){
    console.log("Imortal");
} else {
    console.log("Radiante");
  }
}


