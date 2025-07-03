'use client'

import React, { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { EventDetail } from '@/data/event-details'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface EventDetailModalProps {
  event: EventDetail | null
  isOpen: boolean
  onClose: () => void
}

export function EventDetailModal({ event, isOpen, onClose }: EventDetailModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Focus management
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus()
    }
  }, [isOpen])

  // Keyboard handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Click outside to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen || !event) return null

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onClick={handleBackdropClick}
    >
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div 
            ref={modalRef}
            className="relative w-full max-w-2xl bg-[#0a0f1e] border border-gray-700 rounded-2xl shadow-2xl"
            style={{ backgroundColor: '#0a0f1e' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-gray-700">
              <div className="flex-1 pr-4">
                <h2 
                  id="modal-title"
                  className="text-2xl font-bold text-white leading-tight"
                >
                  {event.title}
                </h2>
                {event.who && (
                  <p className="text-gray-300 mt-2 font-medium" aria-label={`Presented by ${event.who}`}>
                    {event.who}
                  </p>
                )}
              </div>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="flex-shrink-0 p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-label="Close event details modal"
              >
                <X size={24} aria-hidden="true" />
              </button>
            </div>

            {/* Content */}
            <div 
              id="modal-description"
              className="p-6 max-h-[70vh] overflow-y-auto"
              role="document"
              aria-label="Event details content"
            >
              {/* Event Info */}
              <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6" aria-label="Event information">
                {event.date && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">Date</h3>
                    <p className="text-white" aria-label={`Event date: ${event.date}`}>{event.date}</p>
                  </div>
                )}
                {event.time && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">Time</h3>
                    <p className="text-white" aria-label={`Event time: ${event.time}`}>{event.time}</p>
                  </div>
                )}
                {event.location && (
                  <div className="sm:col-span-2">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">Location</h3>
                    <p className="text-white" aria-label={`Event location: ${event.location}`}>{event.location}</p>
                  </div>
                )}
              </section>

              {/* Tags */}
              {event.tags && event.tags.length > 0 && (
                <section className="mb-6" aria-label="Event tags">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2" role="list" aria-label="Event categories">
                    {event.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm font-medium"
                        role="listitem"
                        aria-label={`Category: ${tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Description */}
              {event.description && (
                <section className="mb-6" aria-label="Event overview">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Overview</h3>
                  <div className="text-gray-200 leading-relaxed space-y-4">
                    {event.description.split('\n').map((paragraph, index) => (
                      paragraph.trim() ? (
                        <p key={index}>{paragraph.trim()}</p>
                      ) : null
                    ))}
                  </div>
                </section>
              )}

              {/* Synopsis */}
              {event.synopsis && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Synopsis</h4>
                  <div className="text-gray-200 leading-relaxed space-y-4">
                    {event.synopsis.split('\n').map((paragraph, index) => (
                      paragraph.trim() ? (
                        <p key={index}>{paragraph.trim()}</p>
                      ) : null
                    ))}
                  </div>
                </div>
              )}

              {/* Meeting Link */}
              {event.meetingLink && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Join Online</h4>
                  <a 
                    href={event.meetingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Join via SG-Teams
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}

              {/* Who Should Join */}
              {event.whoShouldJoin && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Who Should Join</h4>
                  <div className="text-gray-200 leading-relaxed space-y-4">
                    {event.whoShouldJoin.split('\n').map((paragraph, index) => (
                      paragraph.trim() ? (
                        <p key={index}>{paragraph.trim()}</p>
                      ) : null
                    ))}
                  </div>
                </div>
              )}

              {/* What to Expect */}
              {event.whatToExpect && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">What to Expect</h4>
                  <div className="text-gray-200 leading-relaxed space-y-4">
                    {event.whatToExpect.split('\n').map((paragraph, index) => (
                      paragraph.trim() ? (
                        <p key={index}>{paragraph.trim()}</p>
                      ) : null
                    ))}
                  </div>
                </div>
              )}

              {/* Key Takeaways */}
              {event.keyTakeaways && event.keyTakeaways.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Key Takeaways</h4>
                  <div className="space-y-2">
                    {event.keyTakeaways.map((takeaway, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                        <p className="text-gray-200 leading-relaxed">{takeaway}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Speaker Bio */}
              {event.speakerBio && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">About the Speaker</h4>
                  <div className="text-gray-200 leading-relaxed space-y-4">
                    {event.speakerBio.split('\n').map((paragraph, index) => (
                      paragraph.trim() ? (
                        <p key={index}>{paragraph.trim()}</p>
                      ) : null
                    ))}
                  </div>
                </div>
              )}

              {/* Agenda */}
              {event.agenda && event.agenda.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                    {event.title.includes('Fireside') ? 'Discussion Points' : 'Agenda'}
                  </h4>
                  <div className="space-y-3">
                    {event.agenda.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs font-semibold mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-gray-200 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Image */}
              {event.imageUrl && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Event Image</h4>
                  <div className="relative w-full h-48 bg-gray-800 rounded-lg overflow-hidden">
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              )}

            </div>

            {/* Footer */}
            <div className="border-t border-gray-700 p-6">
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="px-6 py-2 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold rounded-lg transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}