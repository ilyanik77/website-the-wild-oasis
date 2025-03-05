'use client'

import React, { useOptimistic } from 'react'
import { deleteBooking } from '../_lib/actions'
import ReservationCard from './ReservationCard'


const ReservationList = ({bookings}) => {

	const [optimisticBookings, optimisticDelete] = useOptimistic(bookings, (currentBookings, bookingId) => {
		return currentBookings.filter(booking => booking.id !== bookingId)
	})

	async function handleDelete(bookingId) {
		optimisticDelete(bookingId)
		await deleteBooking(bookingId)
	}

	return (
		<ul className='space-y-6'>
			{optimisticBookings.map(booking => (
				<ReservationCard
					booking={booking}
					key={booking.id}
					onDelete={handleDelete}
				/>
			))}
		</ul>
	)
}

export default ReservationList
