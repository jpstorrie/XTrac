import {useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function MyCalendar ( ) {
const [value, onChange] = useState(new Date());

const [option, optionSetter] = useState();

    return (
        <div>
            <Calendar calendarType="gregory" onChange={onChange} value={value}/>
        </div>
    )
}

export default MyCalendar;