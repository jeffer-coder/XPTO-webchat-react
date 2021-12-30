import React from 'react';
import { AiFillBulb, AiFillAlert, AiFillApi,AiFillHourglass } from 'react-icons/ai'
import { FaUserFriends } from 'react-icons/fa'
import { RiMessage2Fill } from 'react-icons/ri'
function App() {
	return (
		<div className="h-screen p-10 bg-app-self flex w-screen">
			<div className='xpto flex h-full w-full  auto mx-auto'>

				<div className='h-full flex flex-col justify-between p-2 rounded-tl rounded-bl w-20 bg-app-dark'>
					<div className='flex w-full bg-app-purple py-2 rounded mt-2 justify-center'><AiFillHourglass className='text-app-white text-center text-3xl' /></div>
					<div className='lex w-full h-full'>
						<div>
							<div className='flex flex-col mt-3'>
								<ul>
									<li className='w-full rounded-lg py-3 bg-app-dark-mion flex justify-center'><FaUserFriends className='text-2xl text-app-white' /></li>
									<li className='w-full rounded-lg mt-2 py-3 bg-app-dark-mion flex justify-center'><FaUserFriends className='text-2xl text-app-white' /></li>
								</ul>
							</div>
						</div>
					</div>
					<div className='relative'>
						<img className='rounded-full border border-app-dark' alt='' src='https://randomuser.me/api/portraits/women/81.jpg' />
						<div className='absolute rounded-full -top-0 w-4 h-4 -right-1 my-1 border-2 border-app-dark bg-app-green z-2'></div>
					</div>
				</div>
				<div className='w-80 rounded-tr rounded-br h-full bg-app-dark-sulf'></div>
				<div className='h-full flex flex-col  ml-1 w-full'>
					<div className="h-full w-full rounded-t bg-app-dark"></div>
					<div className='h-16 rounded-b bg-app-white w-full'></div>
				</div>

			</div>
		</div>
	);
}

export default App;
