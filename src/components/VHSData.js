import React from 'react'
import ReactDOM from 'react-dom'
import Img from '../Images/worst_movie_birdemic.jpg'
import Img2 from '../Images/worst_movie_ice.jpg'
import Img3 from '../Images/worst_movie_vapes.jpg'

const VHSItems = [
  {
    Name: 'Birdemic',
    Image: <img src={Img} alt="Img" />,
    Description: 'Too. Many. Birds. OMG.',
    Price: '$2',
    id: 10
  },
  {
    Name: 'Cool as Ice',
    Image: <img src={Img2} alt="Img2" />,
    Description: 'Vanilla Ice made a movie LOL',
    Price: '$78',
    id: 11
  },
  {
    Name: 'Planet of the Vapes',
    Image: <img src={Img3} alt="Img3" />,
    Description: 'Apes vape vapes wearing capes. Totally rulez',
    Price: '$3.76',
    id: 12
  }
]

export default VHSItems
