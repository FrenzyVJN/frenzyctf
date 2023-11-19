/* @jsxImportSource react */
"use client"
import "./page.css";
import React, { useState } from 'react';
import Link from 'next/link';
import Modal from 'react-modal';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import '../globals.css'; // Include your global styles

// Dummy data for demonstration purposes
const challenges = [
  { id: 1, title: 'Web Exploitation', description: 'Explore the vulnerabilities in a web application.' },
  { id: 2, title: 'Crypto Puzzle', description: 'Decode a series of encrypted messages to find the flag.' },
  // Add more challenges as needed
];


const Challenges: React.FC = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<number | null>(null);
  const [flagInput, setFlagInput] = useState('');

  const openModal = (challengeId: number) => {
    setSelectedChallenge(challengeId);
  };

  const closeModal = () => {
    setSelectedChallenge(null);
  };

  const handleFlagSubmit = () => {
    // Handle flag submission logic here
    // You can add your validation logic and show success/error messages
    console.log(`Flag submitted for Challenge ${selectedChallenge}: ${flagInput}`);
    closeModal();
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-400 min-h-screen">
      <header className="p-4 flex justify-between items-center flex-col">
        <h1 className="text-3xl md:text-4xl mx-auto font-bold text-gray-800">FrenzyCTF</h1>
        <div className='header border px-2 border-black rounded-xl w-fit flex flex-col mt-3 mb-5 md:gap-8 justify-center md:flex-row'>
          <Link href="/" passHref>
            <h3 className='text-2xl text-bold mb-2 md:mb-0'>Home</h3>
          </Link>
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
      </header>

      <main className="container mx-auto mt-10">
        <h1 className="text-4xl font-bold mb-8">Challenges</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map(challenge => (
            <div key={challenge.id} className="bg-white p-6 rounded-xl border border-black relative">
              <h2 className="text-xl font-bold mb-2">{challenge.title}</h2>
              <p>{challenge.description}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full" onClick={() => openModal(challenge.id)}>
                Solve Challenge
              </button>
            </div>
          ))}
        </div>

        <Modal
          isOpen={selectedChallenge !== null}
          onRequestClose={closeModal}
          contentLabel="Flag Submission Modal"
          className="modal"
          overlayClassName="overlay"
        >
          <h2 className="text-2xl font-bold mb-4">Enter Flag for Challenge {selectedChallenge}</h2>
          <input
            type="text"
            value={flagInput}
            onChange={(e) => setFlagInput(e.target.value)}
            placeholder="Enter flag here"
            className="border p-2 mb-4 w-full"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded-full" onClick={handleFlagSubmit}>
            Submit Flag
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-full ml-2" onClick={closeModal}>
            Cancel
          </button>
        </Modal>
      </main>
    </div>
  );
};

export default Challenges;
