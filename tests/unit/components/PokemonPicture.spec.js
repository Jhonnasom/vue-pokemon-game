import { shallowMount } from '@vue/test-utils';
import PokemonPicture from '@/components/PokemonPicture';

describe('PokemonPicture Component', () => { 
  test('debe de hacer match con el snapshot', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: false
      }
    })
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('debe de mostrar la imagen oculta y el pokemon 100', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: false

      }
    })

    const [img1, img2] = wrapper.findAll('img');

    expect(img1.exists()).toBeTruthy();
    expect(img2).toBe(undefined);

    // Esto es para evaluar las clases de un elemento
    expect(img1.classes('hidden-pokemon')).toBeTruthy();

    expect(img1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg');
  });

  test('debe de mostrar el pokemon si el pokemon existe', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: true

      }
    })

    const img1 = wrapper.find('img');

    expect(img1.exists()).toBeTruthy();
  
    // Esto es para evaluar las clases de un elemento
    expect(img1.classes('hidden-pokemon')).toBe(false);
    expect(img1.classes('fade-in')).toBe(true);
   });
});