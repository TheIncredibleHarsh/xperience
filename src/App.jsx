import { createContext, useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DesktopIcon from './shared/components/desktop-icon'

function App() {
  const [count, setCount] = useState(0)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [draggable, setDraggable] = useState(undefined)
  const [dragging, setDragging] = useState(false)
  const [currentSelection, setCurrentSelection] = useState(null)
  const SelectionContext = createContext({});

  const handleMouseDown = (e) => {
    e.preventDefault();
    const draggableElement = e.target.parentElement
    setDraggable(draggableElement)
    setDragging(true)
  }

  const handleMouseUp = (e) => {
    e.preventDefault();
    setDragging(false)
  }

  const handleMouseMove = (e) => {
    if (dragging) {
      const dx = e.clientX
      const dy = e.clientY
      draggable.style.left = `${dx}px`
      draggable.style.top = `${dy}px`
    }
  }

  return (
    <SelectionContext.Provider value={currentSelection}>

    <div class="h-screen bg-[url(wallpaper-wide.jpg)] bg-cover">
        <div class="h-full w-full p-4 gap-y-6 flex flex-col" onMouseMove={handleMouseMove}>
          <DesktopIcon type="my-computer" label="My Computer" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onClick={setCurrentSelection} />
          <DesktopIcon type="notepad" label="Notepad" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}/>
          <DesktopIcon type="internet" label="internet explorer" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}/>
          <DesktopIcon type="mp" label="media player" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}/>
          <DesktopIcon type="calculator" label="calculator" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}/>
        </div>
      <div class="h-[35px] w-full bg-gradient-to-b from-[#539ef3] to-[6px] to-[#245ddb] fixed bottom-0 
                  border border-slate-300 flex flex-row justify-between">
          <div class="bg-gradient-to-l from-[#21641b] to-30% to-[#1cb31d] 
                      h-full w-[150px] rounded-r-2xl relative">
                      <div class="z-50 h-full flex flex-row pr-10 justify-center">
                          <img src="start-button.png" height="25" class="object-scale-down"></img>
                          <span class="font-bold text-slate-50 text-xl italic drop-shadow-md px-1">
                                  start
                            </span>
                      </div>
          </div>
          <div class="w-[150px] bg-[#0d9aee] right-0 bg-gradient-to-r from-[#0c4161] to-[5px] to-[#0d9aee] 
                      flex flex-row items-center justify-center">
              <span class="text-slate-50 text-sm">3:24</span>
          </div>
      </div>
    </div>
    </SelectionContext.Provider>

  )
}

export default App
