import Link from 'next/link'
import { auth } from '../_lib/auth'
import Image from 'next/image'

export default async function Navigation() {
	const session = await auth()

	return (
		<nav className='z-10 text-xl'>
			<ul className='flex gap-16 items-center'>
				<li>
					<Link
						href='/cabins'
						className='hover:text-accent-400 transition-colors'
					>
						Cabins
					</Link>
				</li>
				<li>
					<Link
						href='/about'
						className='hover:text-accent-400 transition-colors'
					>
						About
					</Link>
				</li>
				<li>
					{session?.user?.image ? (
						<Link
							href='/account'
							className='hover:text-accent-400 transition-colors flex gap-4 items-center'
						>
							<Image
								width={25}
								height={25}
								// src={session.user.image}
								className='h-8 rounded-full'
								alt={session.user.name}
								referrerPolicy='no-referrer'
							/>
							<span>Guest area</span>
						</Link>
					) : (
						<Link
							href='/account'
							className='hover:text-accent-400 transition-colors'
						>
							Guest area
						</Link>
					)}
				</li>
			</ul>
		</nav>
	)
}
