const paiDoPai = document.getElementById("pai");
for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
    const currentChildren = pai.childNodes[index];
    if (currentChildren.id !== 'elementoOndeVoceEsta') {
      currentChildren.remove();
    }
  }

  const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
  segundoEUltimoFilhoDoFilho.remove();
