import { keynotes } from "@/data/keynotes"
import { KeynoteCard } from "./keynote-card"

export function KeynoteList() {
  return (
    <div className="space-y-4">
      {keynotes.map((keynote) => (
        <KeynoteCard key={keynote.id} keynote={keynote} />
      ))}
    </div>
  )
}