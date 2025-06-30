"use client"

import { EventDetailModal } from "@/components/agenda/event-detail-modal"
import { useEventDetailModal } from "@/contexts/modal-context"

export function GlobalModals() {
  const { isOpen, event, close } = useEventDetailModal()

  return (
    <EventDetailModal 
      event={event}
      isOpen={isOpen}
      onClose={close}
    />
  )
}