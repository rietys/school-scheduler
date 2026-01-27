import './StudentsPopup.scss'
import Data from '../Test.json'

interface StudentsPopupProps {
  onClose: () => void;
}

export default function StudentsPopup({ onClose }: StudentsPopupProps) {
    
  return (
      <div className="popup-pad">
        <button onClick={onClose} className='exit-button'>X</button>
        <div className='popup'>
          {
              (Data.students).map((student) => 
              <span className='student-block'>
                <p className='student-name'>{student.first_name} {student.last_name}</p>
                <p className='sudent-status'>{student.status}</p>
              </span>
            )
          }
        </div>
      </div>
  )
}