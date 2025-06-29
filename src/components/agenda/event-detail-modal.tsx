'use client'

import React from 'react'
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
  if (!isOpen || !event) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div 
            className="relative w-full max-w-2xl bg-[#0a0f1e] border border-gray-700 rounded-2xl shadow-2xl"
            style={{ backgroundColor: '#0a0f1e' }}
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-gray-700">
              <div className="flex-1 pr-4">
                <h2 className="text-2xl font-bold text-white leading-tight">
                  {event.title}
                </h2>
                {event.who && (
                  <p className="text-gray-300 mt-2 font-medium">{event.who}</p>
                )}
              </div>
              <button
                onClick={onClose}
                className="flex-shrink-0 p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              {/* Event Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {event.date && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">Date</h4>
                    <p className="text-white">{event.date}</p>
                  </div>
                )}
                {event.time && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">Time</h4>
                    <p className="text-white">{event.time}</p>
                  </div>
                )}
                {event.location && (
                  <div className="sm:col-span-2">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">Location</h4>
                    <p className="text-white">{event.location}</p>
                  </div>
                )}
              </div>

              {/* Tags */}
              {event.tags && event.tags.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              {event.description && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Overview</h4>
                  <p className="text-gray-200 leading-relaxed">{event.description}</p>
                </div>
              )}

              {/* Synopsis */}
              {event.synopsis && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Synopsis</h4>
                  <p className="text-gray-200 leading-relaxed">{event.synopsis}</p>
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
                  <p className="text-gray-200 leading-relaxed">{event.whoShouldJoin}</p>
                </div>
              )}

              {/* What to Expect */}
              {event.whatToExpect && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">What to Expect</h4>
                  <p className="text-gray-200 leading-relaxed">{event.whatToExpect}</p>
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
                  <p className="text-gray-200 leading-relaxed">{event.speakerBio}</p>
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
                  className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}