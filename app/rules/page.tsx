import Link from 'next/link';
import '../globals.css';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import Header from '../components/header';
function Rules() {
    return (
        <main className="flex flex-col items-center p-5 min-h-screen bg-gradient-to-b from-slate-50 to-slate-400">
            <Header />
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
