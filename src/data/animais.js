export const animais = [
  {
    id: '1',
    nome: 'Rex',
    especie: 'Cachorro',
    raca: 'Vira-lata (SRD)',
    idade: 3,
    sexo: 'Macho',
    porte: 'Médio',
    imagem: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85',
    descricao: 'Rex é companheiro, brincalhão e está procurando uma família que lhe dê muito carinho.'
  },
  {
    id: '2',
    nome: 'Luna',
    especie: 'Gato',
    raca: 'Sem raça definida',
    idade: 2,
    sexo: 'Fêmea',
    porte: 'Pequeno',
    imagem: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=900&q=85',
    descricao: 'Luna é uma gatinha curiosa e carinhosa, pronta para conhecer seu novo lar.'
  },
  {
    id: '3',
    nome: 'Mel',
    especie: 'Cachorro',
    raca: 'Vira-lata (SRD)',
    idade: 1,
    sexo: 'Fêmea',
    porte: 'Pequeno',
    imagem: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=900&q=85',
    descricao: 'Mel é doce e cheia de energia. Adora companhia e momentos de brincadeira.'
  },
  {
    id: '4',
    nome: 'Thor',
    especie: 'Cachorro',
    raca: 'Vira-lata (SRD)',
    idade: 4,
    sexo: 'Macho',
    porte: 'Grande',
    imagem: 'https://www.bnews.com.br/media/uploads/outubro_2023/conheca_6_racas_distintas_de_cachorros_brasileiros.jpg',
    descricao: 'Thor é um cão leal que procura um lar acolhedor para chamar de seu.'
  },
  {
    id: '5',
    nome: 'Mimi',
    especie: 'Gato',
    raca: 'Sem raça definida',
    idade: 1,
    sexo: 'Fêmea',
    porte: 'Pequeno',
    imagem: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=85',
    descricao: 'Mimi é uma gatinha delicada e curiosa, ideal para quem quer uma companheira.'
  },
  {
    id: '6',
    nome: 'Bob',
    especie: 'Cachorro',
    raca: 'Vira-lata (SRD)',
    idade: 2,
    sexo: 'Macho',
    porte: 'Médio',
    imagem: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=85',
    descricao: 'Bob é amigável e gosta de estar perto das pessoas. Está esperando uma família.'
  }
];

export function buscarAnimalPorId(id) {
  return animais.find((animal) => animal.id === id);
}
