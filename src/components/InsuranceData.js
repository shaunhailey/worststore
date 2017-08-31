import React from 'react'
import ReactDOM from 'react-dom'
import Img from '../Images/bad_insurance_guy.png'
import Img2 from '../Images/employee_kauffman.jpg'
import Img3 from '../Images/poor_insurance_guy.jpeg'

const insuranceItems = [
  {
    Name: 'Harvey Buttwhacker',
    Image: <img src={Img} alt="Img" />,
    Description:
      'Mr. Buttwhacker sells insurance (we think), but no one knows what kind. But we are sure he will tell you if you ask nicely.',
    Price: 'Probably, but who knows how much?',
    id: 7
  },
  {
    Name: 'Andy Kauffman',
    Image: <img src={Img2} alt="Img2" />,
    Description: 'Turns out he lived and decided to sell whole term life policies. Who knew?',
    Price: 'A dimebag and a box of envelopes (hourly)',
    id: 8
  },
  {
    Name: 'Seymour Butts',
    Image: <img src={Img3} alt="Img3" />,
    Description: 'That phone call really is for him. He is reportedly trustworthy.',
    Price: 'Will work for Cheetos and Pepsi',
    id: 9
  }
]

export default insuranceItems
