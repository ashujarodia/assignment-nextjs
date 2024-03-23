'use client';
import Image from 'next/image';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import adImage from '../assets/ad.png';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useState } from 'react';

export default function Home() {
	// Events array
	const events = [
		{
			_id: 1,
			name: 'Sacramento River Cats',
			image: image1,
			events: 48,
			sport: 'Baseball',
		},
		{
			_id: 2,
			name: 'Las Vegas Aviators',
			image: image2,
			events: 28,
			sport: 'Baseball',
		},
		{
			_id: 3,
			name: 'New jersey devils',
			image: image3,
			events: 15,
			sport: 'Ice Hockey',
		},
		{
			_id: 4,
			name: 'Las Vegas Aviators',
			image: image2,
			events: 28,
			sport: 'Baseball',
		},
	];

	//Collections array
	const collections = [
		{
			_id: 1,
			name: 'Las Vegas Aviators',
			image: image4,
			date: 'Oct 15',
			day: 'SUN',
			time: '4:30 PM',
			location: 'Las Vegas Ballpark, Las Vegas, Nevada',
			collection: 'Take Flight Collection',
		},
		{
			_id: 2,
			name: 'Sacramento River Cats',
			image: image5,
			date: 'Oct 15',
			day: 'SUN',
			time: '4:30 PM',
			location: 'Sutter Health Park, Sacramento, California',
			collection: 'Orange Collection',
		},
		{
			_id: 3,
			name: 'Las Vegas Aviators',
			image: image4,
			date: 'Oct 15',
			day: 'SUN',
			time: '4:30 PM',
			location: 'Las Vegas Ballpark, Las Vegas, Nevada',
			collection: 'Take Flight Collection',
		},
	];

	//For theme switching
	const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

	return (
		<main className={`min-h-screen ${isDarkMode ? 'bg-darkGray' : 'bg-customWhite'} py-12`}>
			{/* Toggle checkbox for theme */}
			<label className='inline-flex items-center cursor-pointer absolute right-3 top-6 z-50'>
				<input
					type='checkbox'
					value=''
					className='sr-only peer'
					checked={isDarkMode}
					onChange={() => setIsDarkMode(!isDarkMode)}
				/>
				<div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
				<span className='ms-3 text-sm font-medium text-gray-900 dark:text-gray-300'>{isDarkMode ? 'Dark' : 'Light'} mode</span>
			</label>

			{/* Events */}
			<div className='py-12 max-w-[90%] w-full mx-auto flex flex-col items-center'>
				<div className='w-full md:pl-3'>
					<h1 className={`border-b-2 border-[#738FFF] w-fit ${isDarkMode ? 'text-white' : 'text-black'} text-2xl mb-4 font-bold text-start`}>Sports</h1>
				</div>
				<div className='grid lg:grid-cols-5 gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
					{events?.map((event) => (
						<div
							className={`${isDarkMode ? 'bg-[#3B3E47]' : 'bg-white'} p-3 w-fit shadow-xl`}
							key={event._id}
						>
							<Image
								src={event.image}
								width={217}
								height={385}
								alt={event.name}
							/>
							<h2 className='text-lg font-bold text-white my-3'>{event.name}</h2>
							<div className={`${isDarkMode ? 'bg-darkGray' : 'bg-customWhite'} flex justify-between p-2`}>
								<div className='flex flex-col'>
									<span className={`${isDarkMode ? 'text-mediumGray' : 'text-[#525965]'} text-sm`}>Total Events</span>
									<span className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>{event.events} Events</span>
								</div>
								<div className='flex flex-col'>
									<span className={`${isDarkMode ? 'text-mediumGray' : 'text-[#525965]'} text-sm`}>Sport</span>
									<span className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>{event.sport}</span>
								</div>
							</div>
						</div>
					))}
					<div className={`${isDarkMode ? 'bg-[#3B3E47]' : 'bg-white'} p-3 w-60 shadow-xl`}>
						<div className='relative'>
							<Image
								src={adImage}
								width={217}
								height={218}
								alt='Advertisement'
							/>
							<span className='bg-black absolute top-0 right-0 text-white px-3'>Ad</span>
						</div>
						<h2 className={`text-lg font-bold text-center ${isDarkMode ? 'text-white' : 'text-black'} my-3`}>Advertisement title</h2>
						<p className={`text-sm ${isDarkMode ? 'text-white' : 'text-black'} `}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
							ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
				</div>
				<div className='w-full flex justify-center mt-8'>
					<button className='bg-[#2C9CF0] text-white px-4 py-2 hover:bg-opacity-90 duration-300'>Show More</button>
				</div>
			</div>

			{/* Collections */}
			<div className={`py-12 max-w-[90%] w-full mx-auto bg-gradient-to-b ${isDarkMode ? 'from-[#18282A] to-[#221A2C]' : 'from-[#F9F8FF] to-[#F3F9FF]'} relative px-8`}>
				<h1 className={`text-center font-bold text-3xl ${isDarkMode ? 'text-white' : 'text-black'}`}>Collection Spotlight</h1>
				<p className={`text-sm text-center ${isDarkMode ? 'text-white' : 'text-black'} my-3 md:max-w-[60%] mx-auto`}>
					Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab
					yours today!
				</p>
				<div className='hidden md:block'>
					<button className='border border-[#2C9CF0] text-[#2C9CF0] py-3 px-1 absolute right-4 top-1/2'>
						<IoIosArrowForward />
					</button>
					<button className='border border-[#2C9CF0] text-[#2C9CF0] py-3 px-1 absolute left-4 top-1/2'>
						<IoIosArrowBack />
					</button>
				</div>
				<div className='mt-12 grid md:grid-cols-3 gap-8  grid-cols-1 md:max-w-[60%]  mx-auto'>
					{collections?.map((collection) => (
						<div
							className={`${isDarkMode ? 'bg-[#3B3E47]' : 'bg-white'} p-3 w-fit shadow-xl relative`}
							key={collection._id}
						>
							<Image
								src={collection.image}
								width={226}
								height={400}
								alt='a'
							/>
							<div className='flex'>
								<div className={`${isDarkMode ? 'bg-[#221A2C]' : 'bg-[#F3F9FF]'} w-4 h-8 rounded-r-full absolute left-0`}></div>
								<div className='border-t border-dashed border-gray-400 my-4 w-full mx-4'></div>
								<div className={`${isDarkMode ? 'bg-[#221A2C]' : 'bg-[#F3F9FF]'} w-4 h-8 rounded-l-full absolute right-0`}></div>
							</div>
							<h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'} my-3 text-center`}>{collection.name}</h2>
							<p className={`${isDarkMode ? 'text-white' : 'text-black'}  text-center`}>
								{collection.date} | {collection.day} | {collection.time}
							</p>
							<p className={`${isDarkMode ? 'text-mediumGray' : 'text-[#525965]'}text-center text-sm mt-2 text-center`}>
								{collection.location}
							</p>
							<button className='bg-[#1D1D1F] w-full text-white mt-3 py-2 hover:bg-opacity-90 duration-300'>{collection.collection}</button>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
