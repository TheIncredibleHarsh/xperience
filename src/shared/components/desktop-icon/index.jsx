import { useContext, useState, useEffect } from 'react';
import { SelectionContext } from '../../../shared/contexts/selectionContext';

function DesktopIcon({type, label, onMouseDown, onMouseUp, onClick, position}) {
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
    }, [currentSelection]);

    return ( 
        <div class={`h-24 w-16 flex flex-col justify-center absolute z-10
                    ${isSelected ? 'bg-[rgba(0,0,255,0.2)] rounded-sm' : 'bg-transparent'}`}
            style={{top: `${position*110}px`}}
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