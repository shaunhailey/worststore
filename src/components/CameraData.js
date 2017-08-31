import React from 'react'
import ReactDOM from 'react-dom'
import Img from '../Images/bad_camera.jpeg'
import Img2 from '../Images/camera-costume-1.jpg'
import Img3 from '../Images/embedded_camera_arm_tattoo.jpg'

const cameraItems = [
  {
    Name: 'The Big Camera',
    Image: <img src={Img} alt="Img" />,
    Description: 'Perfect for when you need a big ole camera.',
    Price: '$149.74',
    id: 4
  },
  {
    Name: 'Wearable Camera',
    Image: <img src={Img2} alt="Img2" />,
    Description: 'See the camera, be the camera, embody the Worste camera.',
    Price: '$3.50',
    id: 5
  },
  {
    Name: 'Camera tatoo',
    Image: <img src={Img3} alt="Img3" />,
    Description: 'Rep your Worste Camera style with the Worste tatoo ever!',
    Price: 'Commensurate with hipness',
    id: 6
  }
]

export default cameraItems
