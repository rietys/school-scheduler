import { useState } from 'react'
import './LessonPopup.scss'
import Data from '../Test.json'

export default function LessonPopup({id}: {id: number}) {

    const[popedup, setPopedup] = useState<boolean>(false);

    function ChangePopup(){
        setPopedup(!popedup);
    }

    console.log(Data.lessons[id])

    return (
        <>
            {!popedup &&
                <button onClick={ChangePopup}className='popeddown'>
                    {Data.lessons[id].student_name}
                </button>
            }
            {popedup &&
                <button onClick={ChangePopup}className='popedup'>
                    {Data.lessons[id].student_name}
                </button>
            }
        </>
    )
}