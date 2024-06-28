import React from 'react'
import logo from "../assets/foodies.png"
const About = () => {
  return (  
    // <div  className='flex m-6 gap-6  h-[70vh] items-center lg:flex-nowrap flex-wrap justify-around' > 
    //   <div className='text-black '>
    //       <h1  className='font-cursive mb-4 text-center'>Foodies</h1>
    //       <p className='font-sans tracking-tight leading-8 text-lg text-justify'>Welcome to ℱℴℴ𝒹𝒾ℯ𝓈, your ultimate destination for culinary inspiration and delicious recipes! Foodies began with a simple yet profound idea: to make the world of cooking accessible, exciting, and enjoyable for everyone. What started as a humble blog sharing beloved family recipes has blossomed into a vibrant community where food lovers can explore diverse cuisines, master new cooking techniques, and share their passion for all things food.</p>
    //   </div>
    //   <img src={logo} className='w-[35%]'/>
    // </div>
    // <div className='border'>
    <div className='min-h-[84vh] flex justify-center items-center'>
      <div className='text-black '>
      <h1  className='font-cursive mb-4 text-center'>Foodies</h1>
         <p className='font-sans sm:tracking-widest sm:leading-loose sm:text-lg w-[80%] text-justify m-auto font-normal'>
         Welcome to ℱℴℴ𝒹𝒾ℯ𝓈, where food meets passion! We're a team of food enthusiasts who believe that good food has the power to bring people together. Our mission is to provide a platform where foodies can discover new recipes, explore different cuisines, and connect with like-minded individuals.
        Foodies can be found as your ultimate destination for culinary inspiration and delicious recipes! Foodies began with a simple yet profound idea: to make the world of cooking accessible, exciting, and enjoyable for everyone. What started as a humble blog sharing beloved family recipes has blossomed into a vibrant community where food lovers can explore diverse cuisines, master new cooking techniques, and share their passion for food.</p></div>
      <img src={logo} className='h-[84vh] z-[-1] opacity-20 absolute'/>

    </div>
      

    // </div>
  )
}

export default About
