const ContextMenu = ({mouseX, mouseY}) => {

    const listItems = [
        {icon: null, value: 'Open',            onClick: () => {}},
        {icon: null, value: 'Run as...',       onClick: () => {}},
        {icon: null, value: null,            onClick: () => {}},
        {icon: null, value: 'Send To',         onClick: () => {}},
        {icon: null, value: null,            onClick: () => {}},
        {icon: null, value: 'Cut',             onClick: () => {}},
        {icon: null, value: 'Copy',            onClick: () => {}},
        {icon: null, value: null,            onClick: () => {}},
        {icon: null, value: 'Create Shortcut', onClick: () => {}},
        {icon: null, value: 'Delete',          onClick: () => {}},
        {icon: null, value: 'Rename',          onClick: () => {}},
        {icon: null, value: null,            onClick: () => {}},
        {icon: null, value: 'Properties',      onClick: () => {}},
    ]

    const generateListItems = () => {
        return listItems.map((item, index) => {
            return (
                <li class="flex flex-row items-center h-[20px] hover:bg-[rgba(0,0,255,0.4)] hover:cursor-pointer px-2" key={index}>
                    {item.icon ? <img src={item.icon} height="5" class="object-scale-down"></img> : <div class="w-[10px] h-[5px]"></div>}
                    {item.value ? <span class="text-black text-sm">{item.value}</span> : <hr class="w-full h-[1px] border-t border-slate-300" />}
                </li>
            )
        })
    }

    return (
        <div id="context-menu" class={`absolute w-fit h-fit bg-white z-10 py-2`} style={{top: `${mouseY}px`, left: `${mouseX}px`}}>
            <ul>
                {
                    generateListItems()
                }
            </ul>
        </div>
    )
}

export default ContextMenu