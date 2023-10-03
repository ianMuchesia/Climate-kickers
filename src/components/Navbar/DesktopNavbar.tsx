import React from 'react'
import NavLinks from './NavLinks';
import data from '../../data';
import FadeDown from '../../Animations/FadeDown';



const {pageSections} = data
const DesktopNavbar = () => {

  let currentDelay = 0.15;


  return (
    <div className="items-center hidden space-x-8 text-sm md:flex">	<ol className="flex space-x-[22px]">
				{pageSections.map((section, index) => {
					currentDelay += 0.15;
					return (
						<li key={index}>
						 <FadeDown delay={currentDelay}>
								<NavLinks name={section} />
                </FadeDown>
						</li>
					);
				})}
			</ol>
      <FadeDown delay={0.75}>

{/*       
      <button
          className="py-2 px-[50px] text-sm bg-black-500 border rounded-lg border-black-300 hover:bg-black-400 transition duration-300 ease-in-out"
          
        >Contact Me</button> */}
        </FadeDown>
      </div>
  )
}

export default DesktopNavbar