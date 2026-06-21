"use client" 
  
  
export function Figma() {
  return (
    <div className="relative p-2 md:p-10 flex flex-col h-[600px] items-center justify-center overflow-hidden">
     
      <div className="w-full shadow-2xl overflow-hidden border">
        <iframe
          className="h-[800px]  w-full"
          src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/U1DOlVERUhmkEKjQ8LSy68/Portfolio?node-id=73-4369&t=MpNKwRJeJOBN6XIV-1"
          allowFullScreen
        />
      </div>
    </div>
  )
}

