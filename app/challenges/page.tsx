/* @jsxImportSource react */
"use client"
/* @jsxImportSource react */
import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import '../globals.css'; // Include your global styles
import Header from '../components/header';
import './page.css'; // Ensure this file exists and contains your styles

// Dummy data for demonstration purposes
const challenges = [
  { id: 1, title: 'Web Exploitation', description: 'Explore the vulnerabilities in a web application.' },
  { id: 2, title: 'Crypto Puzzle', description: 'Decode a series of encrypted messages to find the flag.' },
  // Add more challenges as needed
];

const Challenges: React.FC = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<number | null>(null);
  const [challengeFlags, setChallengeFlags] = useState<{ [key: number]: string }>({});

  const openModal = (challengeId: number) => {
    setSelectedChallenge(challengeId);
  };

  const closeModal = () => {
    setSelectedChallenge(null);
  };

  const handleFlagSubmit = () => {
    console.log(`Flag submitted for Challenge ${selectedChallenge}: ${challengeFlags[selectedChallenge!]}`);
    closeModal();
  };

  const handleFlagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChallengeFlags({ ...challengeFlags, [selectedChallenge!]: e.target.value });
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 p-5 to-slate-400 min-h-screen">
      <Header />
      <main className="container flex flex-col md:ml-20 mt-10">
        <h1 className="text-4xl font-bold mb-8">Challenges</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="bg-white p-6 rounded-xl border border-black relative mb-6 md:mb-0">
              <h2 className="text-xl font-bold mb-2">{challenge.title}</h2>
              <p>{challenge.description}</p>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full"
                onClick={() => openModal(challenge.id)}
              >
                Solve Challenge
              </button>
            </div>
          ))}
        </div>

        <Modal
          isOpen={selectedChallenge !== null}
          onRequestClose={closeModal}
          contentLabel={`Flag Submission Modal for Challenge ${selectedChallenge}`}
          className="modal" // Add your custom modal styles here
          overlayClassName="overlay" // Add your custom overlay styles here
          ariaHideApp={false} // Disable this if it causes issues with your app
        >
          <h2 className="text-2xl font-bold mb-4">Enter Flag for Challenge {selectedChallenge}</h2>
          <input
            type="text"
            value={challengeFlags[selectedChallenge!] || ''}
            onChange={handleFlagInputChange}
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
