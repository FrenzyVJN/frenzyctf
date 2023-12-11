// pages/scoreboard.tsx
import React from 'react';
import Header from '../components/header';
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
    <div className="bg-gradient-to-b p-5 from-slate-50 to-slate-400 min-h-screen">
      <Header />
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
