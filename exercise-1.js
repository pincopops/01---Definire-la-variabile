function canPlay() {
  let personName = 'Paul'
  if (true) {
    let personName = 'Paul';
  }

  personName += ' plays football'; // Argh! personName is not defined

  console.log(personName);
}

canPlay();