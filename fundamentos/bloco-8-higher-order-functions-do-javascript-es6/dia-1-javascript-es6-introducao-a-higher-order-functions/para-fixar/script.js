const func1 = () => 'Acordando!!';

const func2 = () => 'Bora tomar café!!';

const func3 = () => 'Partiu dormir!!';

const doingThings = (faça) => {
  const result = faça();
  console.log(result);
}

doingThings(func1);
doingThings(func2);
doingThings(func3);
