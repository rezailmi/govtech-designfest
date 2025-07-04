import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Parse markdown bold syntax (**text**) and convert to HTML
 * @param text - The text potentially containing **bold** syntax
 * @returns HTML string with <strong> tags
 */
export function parseMarkdownBold(text: string): string {
  // Replace **text** with <strong>text</strong>
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
} 