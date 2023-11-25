import React from 'react'
import Header from './Header'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './Home.css'



export default function Home() {
  const[text] = useTypewriter({
    words : ['Web Developer', 'Web Desiginer And WordPress Designer'],
    loop : {},
    typeSpeed : 150,
    deleteSpeed : 80,
    delaySpeed : 1500,
    
  });
  return (
    <div>
      <Header/>
      
      <div className="home">
        <div className="home-item container">
          <div className="row flex-column-reverse flex-sm-row">
            <div className=" col-md-8 col-sm-8">
              <div className="home-text">
                <h5>Hello, I am Rahul</h5>
                <h1>I Am a, <span>{text}</span> <Cursor/></h1>
                <button className='btn btn-warning'>Click Now</button>
                



              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="home-imge">
              <img src="img2/home.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
