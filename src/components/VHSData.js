import React from 'react'
import ReactDOM from 'react-dom'
import Img from '../Images/worst_movie_birdemic.jpg'
import Img2 from '../Images/worst_movie_ice.jpg'
import Img3 from '../Images/worst_movie_vapes.jpg'
import Img4 from '../Images/worst-movie.jpeg'

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
  },
  {
    Name: 'The Gingerbread Man',
    Image: <img src={Img4} alt="Img4" />,
    Description: "Busey's gonna Busey, just let it happen.",
    Price: '$50 in loose change only',
    id: 13
  }
]

export default VHSItems
