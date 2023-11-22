import React from 'react';
import './globals.css';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import Link from 'next/link';

function LandingPage() {
    return (
        <div className="bg-gradient-to-b from-slate-50 to-slate-400 min-h-screen flex flex-col  items-center text-center">
            <div className='login flex ml-auto mt-5'>
                <Link href="/login" passHref>
                <FaSignInAlt className="text-2xl cursor-pointer mr-2" />
                </Link>
                <Link href="/register" passHref>
                <FaUserPlus className="text-2xl cursor-pointer" />
                </Link>
            </div>

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
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800">Capture The Flag</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">Test your cybersecurity skills in our exciting CTF competition!</p>

            <div className="md:w-2/3 lg:w-1/2 mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">What is Capture The Flag (CTF)?</h2>
                <p className="text-gray-700 mb-4">
                    Capture The Flag is a cybersecurity competition that challenges participants to solve security-related puzzles and challenges, known as flags.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Participate?</h2>
                <p className="text-gray-700 mb-4">
                    Sharpen your cybersecurity skills, learn new techniques, and compete with other security enthusiasts in a fun and educational environment.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-gray-800">How It Works</h2>
                <p className="text-gray-700 mb-4">
                    Join the competition, solve challenges to obtain flags, and climb the scoreboard. Participate individually or form a team for collaborative success.
                </p>
            </div>
        </div>
    );
}

export default LandingPage;
