'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Button from './Button'

function Filter() {
	const searchParams = useSearchParams()
	const router = useRouter()
	const pathname = usePathname()

	const activeFilter = searchParams.get('capacity') ?? 'all'

	function handleFilter(filter) {
		const params = new URLSearchParams(searchParams)
		params.set('capacity', filter)
		router.replace(`${pathname}?${params.toString()}`, { scroll: false })
	}

	return (
		<div className='flex border border-primary-800 '>
			
			<Button
				handleFilter={handleFilter}
				activeFilter={activeFilter}
				filter='all'
			>
				All cabins
			</Button>
			<Button
				handleFilter={handleFilter}
				activeFilter={activeFilter}
				filter='small'
			>
				1&mdash;3 quests
			</Button>
			<Button
				handleFilter={handleFilter}
				activeFilter={activeFilter}
				filter='medium'
			>
				4&mdash;7 quests
			</Button>
			<Button
				handleFilter={handleFilter}
				activeFilter={activeFilter}
				filter='large'
			>
				8&mdash;12 quests
			</Button>
		</div>
	)
}

export default Filter
