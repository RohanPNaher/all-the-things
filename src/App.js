import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import ManliestThings from './pages/ManliestThings/ManliestThings'
import FunctionalThings from './pages/FunctionalThings/FunctionalThings'
import StyledThings from './pages/StyledThings/StyledThings'
import SillyThings from './pages/SillyThings/SIllyThings'
import DeliciousThings from './pages/DeliciousThings/DeliciousThings'
import RyansThings from './pages/RyansThings/RyansThings'
import BizarreThings from './pages/BizarreThings/BizarreThings'
import PizzasThings from './pages/PizzasThings/PizzasThings'
import Landing from './pages/Landing/Landing'

const App = () => {
  const [shahzadsThings, setShazadsThings] = useState([
    {
      name: 'functional programming',
      image: 'https://imgs.xkcd.com/comics/functional.png',
      attributes: ['efficient', 'reusability', 'not a taco', 'beautiful'],
    },
    {
      name: 'React hooks',
      image:
        'https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      attributes: [
        'useEffect',
        'useState',
        'not a taco',
        "state's best friend",
      ],
    },
    {
      name: 'BluBlockers',
      image:
        'https://susanmaryetta.files.wordpress.com/2011/06/blublocker-the-hangover.png?w=584',
      attributes: [
        'very attractive',
        'useful probably!',
        'good for viewing tacos',
        'such hip',
        'worn by all the cool kids',
      ],
    },
    {
      name: 'Healthy food',
      image: 'https://i.imgur.com/gRxOxsA.jpg',
      attributes: [
        'makes you live a long time',
        'consistent poops',
        'probably tacos sometimes!',
        'farm to market',
      ],
    },
  ])

  const [bensThings, setBensThings] = useState([
    {
      name: 'banana',
      image:
        'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      attributes: [
        'potassium-rich',
        'yellow when good',
        'not a taco',
        'ring ring ring ring ring ring ring',
      ],
    },
    {
      name: 'turkey',
      image:
        'https://images.unsplash.com/photo-1560011961-4ab41261de01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      attributes: [
        'such gobbles',
        'good when stuffed',
        'not a taco',
        'why gravy exists',
      ],
    },
    {
      name: 'taco',
      image:
        'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
      attributes: [
        'yummy in my tummy',
        'salsas may vary',
        'definitely a taco',
        'very edible',
      ],
    },
    {
      name: 'linux',
      image: 'https://i.imgur.com/3BmfSOA.png',
      attributes: ['not a taco', 'not Windows', 'not macOS', 'Penguins?'],
    },
  ])

  const [davidsThings, setDavidsThings] = useState([
    {
      name: 'waffle',
      image:
        'https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
      attributes: ['tasty', 'fluffy', 'breakfast', 'yummy'],
    },
    {
      name: 'giraffe',
      image:
        'https://images.unsplash.com/photo-1538127426967-75a6c73f6d20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      attributes: [
        'tall',
        'cool',
        'fun',
        'animal',
        "(David doesn't acually own a giraffe)",
      ],
    },
    {
      name: 'Liam',
      image: 'https://i.imgur.com/l2qX34X.jpg',
      attributes: ['fluffy', 'happy', 'sleepy', 'dumb'],
    },
    {
      name: 'Poptart®',
      image: 'https://i.imgur.com/q9zgcaP.jpg',
      attributes: ['pastry?', 'food?', 'edible?', 'Horrible when toasted!'],
    },
  ])

  const [huntersThings, setHuntersThings] = useState([
    {
      name: "energy drinks",
      image: "https://imgs.xkcd.com/comics/functional.png",  
      attributes: ["efficient", "reusability", "not a taco", "beautiful"],
    },
  ])

  const [rohansThings, setRohansThings] = useState([
    {
      name: "Brownies",
      image: "https://i.imgur.com/lQGCzwV.jpeg",  
      attributes: ["delicious", "beautiful", 'life changing'],
    },
    {
      name: "Crab",
      image: "https://i.imgur.com/STWFApf.gif",  
      attributes: ["delicious", "dangerous", 'crustaceous'],
    },
    {
      name: "Burger Cat",
      image: "https://i.imgur.com/3zYSpb2.jpeg",  
      attributes: ["Not delicious", "majestic", 'do not eat'],
    },
  ])

  const [goslingsThings, setGoslingsThings] = useState([
    {
      name: "Drive",
      image: "https://media.instylejackets.com/wp-content/uploads/2015/07/Film-Drive-Scorpion-Ryan-Gosling-Satin-Jacket-570x760.jpg",  
      attributes: ['Life Changing'],
    },
    {
      name: "Blade Runner",
      image: "https://i.ytimg.com/vi/hbpREOCDCSY/maxresdefault.jpg",  
      attributes: ['Life Changing'],
    },
    {
      name: "La La Land",
      image: "https://media.self.com/photos/5830f9039757aade7c08daa9/4:3/w_2560%2Cc_limit/LLL_D41-D42_06803_R.jpg",  
      attributes: ['Life Changing'],
    },
])

  const [janaThings, setjanaThings] = useState ([ 
    { 
      name: "Butterfly",
      image: "https://i.imgur.com/Bxe4ysr.jpg",
      attributes: ["fast", "elusive", "colorful"]
    },
    { 
      name: "Burrito",
      image: "https://i.imgur.com/XtOmjYl.jpg",
      attributes: ["delicious", "cheesy", "messy", "This is making me hungry"]
    },
  ])

  const [pizzasThings, setPizzasThings] = useState([
    {
      name: "New York",
      image: "https://images.firstwefeast.com/complex/images/c_limit,f_auto,fl_lossy,q_auto,w_1100/New_York_style_Liz_Barrett_zgqgjj/new-york-slice.jpg",  
      attributes: ["By the slice"],
    },
    {
      name: "Neapolitan",
      image: "https://images.firstwefeast.com/complex/images/c_limit,f_auto,fl_lossy,q_auto,w_1100/Neapolitan_Liz_Barrett_dnwsmz/neapolitan-pizza.jpg",  
      attributes: ["Classic"],
    },
    {
      name: "Grandma",
      image: "https://images.firstwefeast.com/complex/images/c_limit,f_auto,fl_lossy,q_auto,w_1100/o-5_d656yo/di-fara.jpg",  
      attributes: ["Sheet tray representer"],
    },
    {
      name: "Detroit Style",
      image: "https://images.firstwefeast.com/complex/images/c_limit,f_auto,fl_lossy,q_auto,w_1100/3286242811_82e61ce28b_b_sehvya/detroit-style-pizza.jpg",  
      attributes: ["King of nicely fried crust"],
    },
  ])

  return (
    <Routes>
      {/* All the <Route> components should live here */}
      <Route path="/" element={<Landing />} />
      <Route
        path="/the-functional-things"
        element={<FunctionalThings things={shahzadsThings} />}
      />
      <Route
        path="/the-manliest-things"
        element={<ManliestThings things={bensThings} />}
      />
      <Route
        path="/the-well-styled-things"
        element={<StyledThings things={davidsThings} />}
      />
      <Route
        path="/the-silly-things"
        element={<SillyThings things={huntersThings} />}
      />
      <Route
        path="/the-delicious-things"
        element={<DeliciousThings things={rohansThings} />}
      />
      <Route
        path="/the-ryans-things"
        element={<RyansThings things={goslingsThings} />}
      />
      <Route 
        path="/the-bizarre-things"
        element={<BizarreThings things={janaThings}/>}
      />
      <Route 
        path="/the-pizzas-things"
        element={<PizzasThings things={pizzasThings}/>}
      />
    </Routes>
  )
}

export default App
