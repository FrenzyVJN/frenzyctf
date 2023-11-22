// pages/scoreboard.tsx
import React from 'react';
import Link from 'next/link';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import '../globals.css'; // Include your global styles

// Dummy data for demonstration purposes
const teams = [
  { name: 'Team A', score: 150 },
  { name: 'Team B', score: 120 },
  { name: 'Team C', score: 100 },
  // Add more teams as needed
];

const Scoreboard: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-400 min-h-screen">
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
        <h1 className="text-3xl md:text-4xl mx-auto font-bold text-gray-800">FrenzyCTF</h1>
      </header>

      <main className="container mx-auto mt-5">
        <h1 className="text-4xl font-bold mb-8 text-center">Scoreboard</h1>
        <div className="rounded-xl w-3/4 mx-auto overflow-hidden bg-white border border-black">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-b from-slate-200 to-slate-400">
                <th className="py-2 px-4 border-b">Rank</th>
                <th className="py-2 px-4 border-b">Team</th>
                <th className="py-2 px-4 border-b">Score</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 text-center border-b">{index + 1}</td>
                  <td className="py-2 px-4 text-center border-b">{team.name}</td>
                  <td className="py-2 px-4 text-center border-b">{team.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Scoreboard;
