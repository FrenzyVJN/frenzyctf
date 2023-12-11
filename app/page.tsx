import React from 'react';
import './globals.css';
import Header from './components/header';
function LandingPage() {
    return (
        <div className="bg-gradient-to-b from-slate-50 p-5 to-slate-400 min-h-screen flex flex-col  items-center text-center">
            <Header />
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800">EditaCTF</h1>
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
