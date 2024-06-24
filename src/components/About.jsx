import React from 'react'
import logo from "../assets/foodies.png"
const About = () => {
  return (  
    <div  className='flex  m-4  h-[75vh] items-center justify-around'>
      <div className='text-black basis-[50vw]'>
          <h1  className='font-cursive mb-4 text-center'>Foodies</h1>
          <p className='font-sans tracking-tight leading-8 text-lg text-justify'>Welcome to ℱℴℴ𝒹𝒾ℯ𝓈, your ultimate destination for culinary inspiration and delicious recipes! Foodies began with a simple yet profound idea: to make the world of cooking accessible, exciting, and enjoyable for everyone. What started as a humble blog sharing beloved family recipes has blossomed into a vibrant community where food lovers can explore diverse cuisines, master new cooking techniques, and share their passion for all things food.</p>
      </div>
      <img src={logo} className='w-[35%]'/>
    </div>
  )
}

export default About
