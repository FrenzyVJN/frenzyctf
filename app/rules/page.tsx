import Link from 'next/link';
import '../globals.css';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

function Rules() {
    return (
        <main className="flex flex-col items-center p-5 min-h-screen bg-gradient-to-b from-slate-50 to-slate-400">

            <div className='login flex ml-auto'>
                <Link href="/login" passHref>
                <FaSignInAlt className="text-2xl cursor-pointer mr-2" />
                </Link>
                <Link href="/register" passHref>
                <FaUserPlus className="text-2xl cursor-pointer" />
                </Link>
            </div>

            <div className='header border px-2 border-black rounded-xl w-1/2 flex flex-col mb-5 md:gap-8 justify-center md:flex-row'>
                <Link href="/rules" passHref>
                <h3 className='text-2xl text-bold mb-2 md:mb-0'>Rules</h3>
                </Link>
                <Link href="/scoreboard" passHref>
                <h3 className='text-2xl text-bold mb-2 md:mb-0'>Scoreboard</h3>
                </Link>
                <Link href="/teams" passHref>
                <h3 className='text-2xl text-bold mb-2 md:mb-0'>Teams</h3>
                </Link>
                <Link href="/challenges" passHref>
                <h3 className='text-2xl text-bold mb-2 md:mb-0'>Challenges</h3>
                </Link>
                <a href='https://discord.gg/hnCJAFT7ka' target="_blank" rel="noopener noreferrer">
                    <h3 className='text-2xl text-bold mb-2 md:mb-0'>Discord</h3>
                </a>
            </div>

            <h1 className='text-2xl md:text-4xl text-bold text-center'>FrenzyCTF</h1>
            <br />
            <div className='border border-black flex flex-col h-1/2 w-4/5 md:w-1/2 p-5 rounded-xl'>
                <h1 className='text-2xl font-bold mb-4'>Rules:</h1>
                <ol className='list-decimal ml-6'>
                    <li className='mb-2'>Participants must respect the terms of service and rules of the CTF platform.</li>
                    <li className='mb-2'>No malicious activities or attempts to harm the platform or other participants.</li>
                    <li className='mb-2'>Collaboration with other participants to solve challenges is allowed and encouraged.</li>
                    <li className='mb-2'>Participants must not share solutions or flags publicly.</li>
                    <li className='mb-2'>Flag sharing between teams is not allowed.</li>
                    <li className='mb-2'>Do not attempt to disrupt the availability of the CTF platform.</li>
                </ol>
            </div>
        </main>
    );
}

export default Rules;
