import './App.scss'
import { useState } from 'react';
import Table from './components/Table/Table'
import StudentsPopup from './components/StudentsPopup'
import TeachersPopup from './components/TeachersPopup'

export default function App() {
  
  const [studentsPopupIsopen, setStudentsPopupIsopen] = useState<boolean>(false);
  const [teachersPopupIsopen, setTeachersPopupIsopen] = useState<boolean>(false);

  function ChangeStudentsPopup(){
    setStudentsPopupIsopen(!studentsPopupIsopen);
  };

  function ChangeTeachersPopup(){
    setTeachersPopupIsopen(!teachersPopupIsopen);
  };

  const ClosePopup = () => {
    setStudentsPopupIsopen(false);
    setTeachersPopupIsopen(false);
  };

  return (
    <>
      <main>
        <div className='students-buttons'>
          <button onClick={ChangeTeachersPopup} className='teachers-button'></button>
          <button onClick={ChangeStudentsPopup} className='students-button'></button>
        </div>
        <Table />
        {studentsPopupIsopen && <StudentsPopup onClose={ClosePopup} />}
        {teachersPopupIsopen && <TeachersPopup onClose={ClosePopup} />}
      </main>
    </>
  )
}