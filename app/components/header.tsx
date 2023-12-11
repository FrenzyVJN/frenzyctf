import Link from "next/link";
function Header() {
    return ( 
        <header className="p-4 flex justify-between items-center flex-col">
        <div className='header border px-2 border-black rounded-xl w-fit flex flex-col mt-3 mb-5 md:gap-8 justify-center md:flex-row'>
          <Link href="/" passHref>
            <h3 className='text-xl text-bold mb-2 md:mb-0'>Home</h3>
          </Link>
          <Link href="/rules" passHref>
            <h3 className='text-xl text-bold mb-2 md:mb-0'>Rules</h3>
          </Link>
          <Link href="/scoreboard" passHref>
            <h3 className='text-xl text-bold mb-2 md:mb-0'>Scoreboard</h3>
          </Link>
          <Link href="/teams" passHref>
            <h3 className='text-xl text-bold mb-2 md:mb-0'>Teams</h3>
          </Link>
          <Link href="/challenges" passHref>
            <h3 className='text-xl text-bold mb-2 md:mb-0'>Challenges</h3>
          </Link>
          <a href='https://discord.gg/hnCJAFT7ka' target="_blank" rel="noopener noreferrer">
            <h3 className='text-xl text-bold mb-2 md:mb-0'>Discord</h3>
          </a>
        </div>
      </header>
     );
}

export default Header;