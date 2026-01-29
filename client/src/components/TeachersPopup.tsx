import './TeachersPopup.scss'
import Data from './Test.json'

interface TeachersPopupProps {
  onClose: () => void;
}

export default function TeachersPopup({ onClose }: TeachersPopupProps) {
    
  return (
      <div className="popup-pad">
        <button onClick={onClose} className='exit-button'>X</button>
        <div className='popup'>
          {
              (Data.students).map((student) => 
              <span className='student-block'>
                <p className='student-name'>{student.first_name}</p>
              </span>
            )
          }
        </div>
      </div>
  )
}