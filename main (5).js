function exercicio6() {
  
  var nota1 = 70;
  var nota2 = 85;
  var nota3 = 90;

 
  var media = (nota1 + nota2 + nota3) / 3;

 
  if (media >= 90) {
    console.log("Aluno foi aprovado com certificado!");
  } else if (media >= 60) {
    console.log("Aluno está apenas aprovado.");
  } else {
    console.log("Aluno está reprovado.");
  }
}


exercicio6();