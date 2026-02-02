import { useState } from 'react';
import './Table.scss'
import ColumnMarker from './ColumnMarker.tsx'
import EventPopup from './EventPopup.tsx'
import LessonPopup from './LessonPopup.tsx';

import tableData from '../TestTable.json'



export default function Table() { 

  const tableBody: { lesson_id: string}[][] = tableData.table_rows_elements;
  const [addPopupIsopen, setAddPopupIsopen] = useState<boolean>(false);
  
  function ChangeAddPopup(){
    setAddPopupIsopen(!addPopupIsopen);
  };

  const ClosePopup = () => {
    setAddPopupIsopen(false);
  };

  return (
    <>
      {/* <table> 
          <col/>
          <ColumnMarker />
          <tr>
            <td className='add-cell'><button onClick={ChangeAddPopup} className='add-button'>+</button></td>
            <td>Mon</td>
            <td>Tue</td>
            <td>Wed</td>
            <td>Thu</td>
            <td>Fri</td>
            <td>Sat</td>
            <td>Sun</td>
          </tr>
          <tr>
            <td>10:00</td>
            <td>
              <LessonPopup id={0}/>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>11:00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div className='test'>
                test block
              </div>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>12:00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>13:00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>14:00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>15:00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
      </table>
      {addPopupIsopen && <EventPopup onClose={ClosePopup}/>} */}
      <table>
        <colgroup>
          <col/>
          <ColumnMarker />
        </colgroup>
        
        <thead>
          <tr>
            <td className='add-cell'><button onClick={ChangeAddPopup} className='add-button'>+</button></td>
            <td>Mon</td>
            <td>Tue</td>
            <td>Wed</td>
            <td>Thu</td>
            <td>Fri</td>
            <td>Sat</td>
            <td>Sun</td>
          </tr>
        </thead>
        
        <tbody>
          {
            tableBody.map((row) =>
              <tr>
                <td></td>
                {row.map((element) =>  element.lesson_id === "" 
                ? <td></td> 
                : <td><LessonPopup id={parseInt(element.lesson_id)}/></td>
                )}
              </tr>
            )
          }
        </tbody>
      </table>
      {addPopupIsopen && <EventPopup onClose={ClosePopup}/>}
    </>
  )
}
