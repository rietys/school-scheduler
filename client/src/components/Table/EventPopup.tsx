import './EventPopup.scss'

interface EventPopupProps {
  onClose: () => void;
}

export default function EventPopup({ onClose }: EventPopupProps) {
    
    return (
        <div className="event-popup-pad">
          <div className='event-popup'>
            <button onClick={onClose} className='exit-button'>X</button>
          </div>
        </div>
    )
  }