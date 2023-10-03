import React from 'react'


interface Props{
    onToggleMenu: () => void;
    isMenuOpen: boolean;
}


const lineStyles = {
	all: "h-[2px] bg-blue-500 rounded-md transition-all ease-in-out duration-500 absolute",
	line1: "w-9 top-0 origin-center",
	line2: "w-6 top-1/2 -translate-y-1/2",
	line3: "w-9 bottom-0 origin-center",
};

const hamburgerButtonStyles =
	"relative flex flex-col justify-between z-50 h-6 md:hidden transition-all ease-in-out duration-500 relative w-9 outline-none";


const Hamburger = ({onToggleMenu, isMenuOpen}:Props) => {
  return (
    <button
			className={`${hamburgerButtonStyles} ${
				isMenuOpen && "rotate-[180deg]"
			}`}
			onClick={onToggleMenu}
		>
			<span
				className={`${lineStyles.all} ${lineStyles.line1} ${
					isMenuOpen && "top-1/2 -translate-y-1/2 rotate-45 w-8"
				} `}
			></span>
			<span
				className={`${lineStyles.all} ${lineStyles.line2}  ${
					isMenuOpen && "opacity-0"
				}`}
			></span>
			<span
				className={`${lineStyles.all} ${lineStyles.line3} ${
					isMenuOpen && "bottom-1/2 translate-y-1/2 -rotate-45 w-8"
				}`}
			></span>
		</button>
  )
}

export default Hamburger