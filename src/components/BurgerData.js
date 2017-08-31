import React from 'react'
import ReactDOM from 'react-dom'
import Img from '../Images/bad_burger.jpg'
import Img2 from '../Images/hippo_burger.jpg'
import Img3 from '../Images/the-worst-burger-ever.jpg'

const burgerItems = [
  {
    Name: 'Basic burger',
    Image: <img src={Img} alt="Img" />,
    Description:
      'The Worste Basic Burger. Loaded with whatever was lying around that day, a true suprise in every bite.',
    Price: '$1',
    id: 1
  },
  {
    Name: 'Hippo burger',
    Image: <img src={Img2} alt="Img2" />,
    Description: 'The Worste Hippo Burger. It is a baby hippo on a bun, what more could you want?',
    Price: '$10 + however much the poacher charges',
    id: 2
  },
  {
    Name: 'The Worste Burger',
    Image: <img src={Img3} alt="Img3" />,
    Description: 'Our ultimate burger for the purest Worste experience ever.',
    Price: 'Eleventeen pesos',
    id: 3
  }
]

export default burgerItems
