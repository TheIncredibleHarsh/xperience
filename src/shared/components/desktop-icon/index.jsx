import { useContext, useState } from 'react';

function DesktopIcon({type, label, onMouseDown, onMouseUp, onClick}) {
    const [isSelected, setIsSelected] = useState(false);

    const onClickHandler = (e) => {
        onClick(e.target.parentElement);
    }

    const {currentSelection, setCurrentSelection} = useContext(SelectionContext);

    useEffect(() => {
        if (currentSelection && currentSelection.id === `${type}-icon`) {
            setIsSelected(true);
        } else {
            setIsSelected(false);
        }
    }, []);

    return ( 
        <div class={`h-24 w-16 flex flex-col justify-center absolute
                    ${isSelected ? 'bg-[rgba(0,0,255,0.2)] rounded-sm' : 'bg-transparent'}`}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onClick={onClickHandler}
            id={`${type}-icon`}>
            <img src={`${type}.png`} height="25" className="object-scale-down"></img>
            <div class="text-center text-slate-50 text-sm">
                <span>{label}</span>
            </div>
        </div>
     );
}

export default DesktopIcon;