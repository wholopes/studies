var salarioBruto = 5445;
var filhos = 0;

if (filhos > 0) {
    descFilhos = filhos * 189.59
} else {descFilhos = 0};

if (salarioBruto <= 1045) {
    inss = salarioBruto * 0.075;
} else if (salarioBruto > 1045 && salarioBruto <= 2089.6) {
    inss = salarioBruto * 0.09;
} else if (salarioBruto > 2089.60 && salarioBruto <= 3134.4) {
    inss = salarioBruto * 0.12;
} else if (salarioBruto > 3134.4 && salarioBruto <= 6101.06) {
    inss =  salarioBruto * 0.14;
}

var salBase = salarioBruto - inss - descFilhos;

if (salBase >= 1903.99 && salBase <= 2826.65) {
    IRPF = (salBase * 0.075) - 142.8;
} else if (salBase > 2826.55 && salBase <= 3751.05) {
    IRPF = (salBase * 0.15) - 354.8;
} else if (salBase > 3751.05 && salBase <= 4664.68) {
    IRPF = (salBase * 0.225) - 636.13;
} else if (salBase > 4664.68) {
    IRPF = (salBase * 0.275) - 869.36;
}

console.log("O valor devido de imposto de renda pessoa física é de R$ " + IRPF.toFixed(2) + ".");