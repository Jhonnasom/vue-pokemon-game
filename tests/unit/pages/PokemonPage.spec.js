import { shallowMount,mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonPage Component', () => { 
  let wrapper

  beforeEach(() => { 
    wrapper = shallowMount(PokemonPage)
  })
  
  test('debe de hacer match con el snaptshot ', () => { 
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('debe de llamar mixPokemonArray al montar', () => {
    
    const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
    const wrapper = shallowMount(PokemonPage)

    expect(mixPokemonArraySpy).toHaveBeenCalled()
  })
  
  test('debe de hacer match con el snaptshot cuando cargan los pokemons', () => {
      
      const wrapper = mount(PokemonPage, { 
        data() { 
          return { 
            pokemonArr: pokemons,
            pokemon: pokemons[0],
            showPokemon: false,
            showAnswer: false,
            message: ''
          }
        }
      })
  
      expect(wrapper.html()).toMatchSnapshot()
  })
  test('debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {
    const wrapper = shallowMount(PokemonPage, { 
      data() { 
        return { 
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: ''
        }
      }
    })

    const picture = wrapper.find('pokemon-picture-stub')
    const options = wrapper.find('pokemon-options-stub')
    // PokemonPicture debe de existir
     expect(picture.exists()).toBeTruthy()
    //  PokemonOptions deben de existir
    expect(options.exists()).toBeTruthy()

    // PokemonPicture attribute pokemonId===5
    expect(picture.attributes('pokemonid')).toBe('5')

    // PokemonOptions attribute pokemons to be true
    expect(options.attributes('pokemons')).toBeTruthy()

   })
  
 })