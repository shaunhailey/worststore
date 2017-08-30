import React from 'react'
import ReactDOM from 'react-dom'

const burgerItems = [
  {
    Name: 'Basic burger',
    Image: '../Images/bad_burger.jpg',
    Description:
      'The Worste Basic Burger. Loaded with whatever was lying around that day, a true suprise in every bite.',
    Price: 1,
    id: 1
  },
  {
    Name: 'Hippo burger',
    Image: './Images/hippo_burger.jpg',
    Description: 'The Worste Hippo Burger. It is a baby hippo on a bun, what more could you want?',
    Price: 10 + 'however much the poacher charges',
    id: 2
  },
  {
    Name: 'The Worste Burger',
    Image: './Images/the-worst-burger-ever.jpg',
    Description: 'Our ultimate burger for the purest Worste experience ever.',
    Price: 'Eleventeen pesos',
    id: 3
  }
]

export default burgerItems
