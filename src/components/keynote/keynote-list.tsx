'use client'

import { keynotes } from "@/data/keynotes"
import { KeynoteCard } from "./keynote-card"
import { getEventDetailsByTitle } from "@/data/event-details"
import { useEventDetailModal } from "@/contexts/modal-context"

export function KeynoteList() {
  const { open } = useEventDetailModal()

  const handleViewDetails = (title: string) => {
    const eventDetail = getEventDetailsByTitle(title)
    if (eventDetail) {
      open(eventDetail)
    }
  }

  return (
    <div className="space-y-4">
      {keynotes.map((keynote) => (
        <KeynoteCard 
          key={keynote.id} 
          keynote={keynote} 
          onViewDetails={handleViewDetails}
        />
      ))}
    </div>
  )
}