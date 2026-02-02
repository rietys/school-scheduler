import { useState } from 'react'
import './LessonPopup.scss'
import Data from '../Test.json'

export default function LessonPopup({id}: {id: number}) {

    const[popedup, setPopedup] = useState<boolean>(false);

    function ChangePopup(){
        setPopedup(!popedup);
    }

    const studentId: number = Data.lessons[id].student_id
    console.log(id)

    return (
        <>
            {!popedup &&
                <button onClick={ChangePopup}className='popeddown'>
                    {Data.students[studentId].first_name}
                    <br></br>
                    {Data.students[studentId].last_name}
                </button>
            }
            {popedup &&
                <button onClick={ChangePopup}className='popedup'>
                    {Data.students[studentId].first_name}
                    <br></br>
                    {Data.students[studentId].last_name}
                </button>
            }
        </>
    )
}