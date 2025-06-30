"use client"

import React, { createContext, useContext, useState, useCallback } from 'react'
import { EventDetail } from '@/data/event-details'

interface ModalState {
  eventDetail: {
    isOpen: boolean
    event: EventDetail | null
  }
}

interface ModalContextType {
  state: ModalState
  openEventDetailModal: (event: EventDetail) => void
  closeEventDetailModal: () => void
  closeAllModals: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

interface ModalProviderProps {
  children: React.ReactNode
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [state, setState] = useState<ModalState>({
    eventDetail: {
      isOpen: false,
      event: null
    }
  })

  const openEventDetailModal = useCallback((event: EventDetail) => {
    setState(prev => ({
      ...prev,
      eventDetail: {
        isOpen: true,
        event
      }
    }))
  }, [])

  const closeEventDetailModal = useCallback(() => {
    setState(prev => ({
      ...prev,
      eventDetail: {
        isOpen: false,
        event: null
      }
    }))
  }, [])

  const closeAllModals = useCallback(() => {
    setState({
      eventDetail: {
        isOpen: false,
        event: null
      }
    })
  }, [])

  const value: ModalContextType = {
    state,
    openEventDetailModal,
    closeEventDetailModal,
    closeAllModals
  }

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}

// Convenience hooks for specific modals
export function useEventDetailModal() {
  const { state, openEventDetailModal, closeEventDetailModal } = useModal()
  return {
    isOpen: state.eventDetail.isOpen,
    event: state.eventDetail.event,
    open: openEventDetailModal,
    close: closeEventDetailModal
  }
}