class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'não possui um ataque definido';
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  const herois = [
    new Heroi('Arthur', 35, 'guerreiro'),
    new Heroi('Merlin', 180, 'mago'),
    new Heroi('Po', 12, 'monge'),
    new Heroi('Benimaru', 28, 'ninja')
  ];

  for (const heroi of herois) {
    heroi.atacar();
  }