let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: "Sim"
  };
  console.log("Bem vinda, " + info.personagem);
  console.log(info.recorrente);

  for (key in info) {
      console.log(key);
  }

  for (key in info) {
      console.log(info[key]);
  }


  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: "Sim"
  };
  let infos = {
    personagem: |"Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
  };
  for (key in info && key in infos) {
      console.log(info[ke] + " e " + infos[key]);
  }
  