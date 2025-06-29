'use client'

import { useState } from "react"
import { keynotes } from "@/data/keynotes"
import { KeynoteCard } from "./keynote-card"
import { EventDetailModal } from "@/components/agenda/event-detail-modal"
import { getEventDetailsByTitle, type EventDetail } from "@/data/event-details"

export function KeynoteList() {
  const [selectedEvent, setSelectedEvent] = useState<EventDetail | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewDetails = (title: string) => {
    const eventDetail = getEventDetailsByTitle(title)
    setSelectedEvent(eventDetail)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedEvent(null)
  }

  return (
    <>
      <div className="space-y-4">
        {keynotes.map((keynote) => (
          <KeynoteCard 
            key={keynote.id} 
            keynote={keynote} 
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
      
      {/* Event Detail Modal */}
      <EventDetailModal 
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  )
}