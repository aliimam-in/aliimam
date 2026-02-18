import { useCallback, useRef } from "react"
import { debounce } from "@/src/lib/utils"
import { Search, X } from "lucide-react"

interface SearchBarProps {
  searchInput: string
  setSearchInput: (arg: string) => void
}

export function SearchBar({ searchInput, setSearchInput }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearch = useCallback(
    debounce(() => {
      if (!inputRef.current) return
      const inputValue = inputRef.current.value
      setSearchInput(inputValue)
    }, 200),
    []
  )

  const clearSearch = () => {
    if (!inputRef.current) return
    inputRef.current.value = ""
    setSearchInput("")
  }
  return (
    <div className="bg-background relative z-10 flex h-full w-full items-center border px-2 py-0.5">
      <Search className="text-muted-foreground w-4" />
      <input
        type="text"
        className={`h-auto w-full grow rounded-xl bg-transparent px-2 py-2 text-sm font-medium outline-none`}
        placeholder="Search..."
        ref={inputRef}
        onChange={() => handleSearch()}
      />
      {searchInput && (
        <button
          onClick={clearSearch}
          className="hover:bg-muted cursor-pointer p-1 transition-colors"
        >
          <X className="text-muted-foreground h-4 w-4" />
        </button>
      )}
    </div>
  )
}
