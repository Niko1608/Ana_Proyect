import {
  Buttons,
  ContainerButton,
  ContainerFather,
  Texts,
  ImageCoffee,
} from '../../../styles/MenuStyles'
import { List, IconButton } from 'react-native-paper'
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native'

const Menu = () => {
  return (
    <ContainerFather>
      <ContainerButton>
        <TouchableOpacity>
          <Buttons>
            <ImageCoffee source={require('../../../assets/taza.png')} />
            <Texts>Espresso</Texts>
            <Texts>{'>'}</Texts>
          </Buttons>
        </TouchableOpacity>
        <TouchableOpacity>
          <Buttons>
            <ImageCoffee source={require('../../../assets/capuccino.png')} />
            <Texts>Cappuccino</Texts>
            <Texts>{'>'}</Texts>
          </Buttons>
        </TouchableOpacity>
        <TouchableOpacity>
          <Buttons>
            <ImageCoffee source={require('../../../assets/cafe.png')} />
            <Texts>Macciato</Texts>
            <Texts>{'>'}</Texts>
          </Buttons>
        </TouchableOpacity>
        <TouchableOpacity>
          <Buttons>
            <ImageCoffee source={require('../../../assets/cafe-helado.png')} />
            <Texts>Latte</Texts>
            <Texts>{'>'}</Texts>
          </Buttons>
        </TouchableOpacity>
        <TouchableOpacity>
          <Buttons>
            <ImageCoffee source={require('../../../assets/cafe1.png')} />
            <Texts>hola</Texts>
            <Texts>{'>'}</Texts>
          </Buttons>
        </TouchableOpacity>
      </ContainerButton>
    </ContainerFather>
  )
}

export default Menu
