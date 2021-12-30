import React from 'react';
import {FaHatCowboy,FaUser,FaComment,FaCog, FaEnvelopeOpen} from 'react-icons/fa'
import {SiMinutemailer} from 'react-icons/si'

function App() {
	return (
		<div className="h-screen bg-slate-600 flex w-screen">
			<div className='bg-neutral-900 pt-0 p-1 round  flex flex-col justify-between items-center h-full w-16'>
				<div className='flex flex-col'>
				<div className='bg-indigo-600 rounded-sm mt-1 w-14 h-14 flex justify-center items-center '>
					<FaHatCowboy className='text-violet-50 bg-indigo-600 text-3xl' />
				</div>
				<ul className='flex flex-col justify-center'>

					<li className='btn-nav'>
						<FaComment className='text-xl'/>
					</li>

					<li className='btn-nav'>
						<FaUser className='text-xl'/>
					</li>

					<li className='btn-nav'>
						<FaEnvelopeOpen className='text-xl'/>
					</li>

					<li className='btn-nav'>
						<FaCog className='text-xl'/>
					</li>
					
				</ul>
				</div>

				<div className="relative mb-1 mt-1 w-14 h-14">
					<img className="rounded-full  shadow-sm" src="https://randomuser.me/api/portraits/women/81.jpg" alt="" />
					<div className="absolute -top-1 right-0 h-4 w-4 my-1 border-2 border-neutral-900 rounded-full bg-green-400 z-2"></div>
				</div>

			</div>
			
		</div>
	);
}

export default App;
