import './App.scss'
import { useState } from 'react';
import Table from './components/Table/Table'
import StudentsPopup from './components/StudentsPopup'

export default function App() {
  
  const [popupIsopen, setPopupIsopen] = useState<boolean>(false);

  function ChangePopup(){
    setPopupIsopen(!popupIsopen);
  };

  const ClosePopup = () => {
    setPopupIsopen(false);
  };

  return (
    <>
      <main>
        <div className='students-buttons'>
          <button onClick={ChangePopup} className='all-students-button'></button>
        </div>
        <Table />
        {popupIsopen && <StudentsPopup onClose={ClosePopup} />}
      </main>
    </>
  )
}