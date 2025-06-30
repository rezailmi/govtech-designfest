"use client"

import { useState, useRef } from "react"

interface DraggableStickerProps {
  children: React.ReactNode
  initialX: number
  initialY: number
  className?: string
  style?: React.CSSProperties
  onPositionChange?: (x: number, y: number) => void
}

export function DraggableSticker({ 
  children, 
  initialX, 
  initialY, 
  className = "",
  style = {},
  onPositionChange
}: DraggableStickerProps) {
  const [position, setPosition] = useState({ x: initialX, y: initialY })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const stickerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    
    const newX = e.clientX - dragStart.x
    const newY = e.clientY - dragStart.y
    
    setPosition({ x: newX, y: newY })
    onPositionChange?.(newX, newY)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    setIsDragging(true)
    setDragStart({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y
    })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    
    const touch = e.touches[0]
    const newX = touch.clientX - dragStart.x
    const newY = touch.clientY - dragStart.y
    
    setPosition({ x: newX, y: newY })
    onPositionChange?.(newX, newY)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 1
    let newX = position.x
    let newY = position.y

    switch (e.key) {
      case 'ArrowLeft':
        newX = position.x - step
        break
      case 'ArrowRight':
        newX = position.x + step
        break
      case 'ArrowUp':
        newY = position.y - step
        break
      case 'ArrowDown':
        newY = position.y + step
        break
      default:
        return
    }

    e.preventDefault()
    setPosition({ x: newX, y: newY })
    onPositionChange?.(newX, newY)
  }

  return (
    <div
      ref={stickerRef}
      className={`absolute select-none ${isDragging ? 'cursor-grabbing z-50' : 'cursor-grab z-40'} ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) ${isDragging ? 'scale(1.05)' : 'scale(1)'}`,
        transition: isDragging ? 'none' : 'transform 0.2s ease-out',
        ...style
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label="Draggable sticker - use arrow keys to move or drag with mouse/touch"
    >
      {children}
    </div>
  )
}