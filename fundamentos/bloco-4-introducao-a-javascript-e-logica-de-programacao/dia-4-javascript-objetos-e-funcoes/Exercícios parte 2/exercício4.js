function maiorNome(nomes) {
  let maiorPalavra = nomes[0];
  for (let index in nomes) {
    if (maiorPalavra.length < nomes[index].length) {
      maiorPalavra = nomes[index];
    }
  }
  return maiorPalavra;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));