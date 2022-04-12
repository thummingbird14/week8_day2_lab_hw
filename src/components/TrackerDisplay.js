import PieChart from './PieChart';
import UserContext from '../context/UserContext';
import { useContext } from 'react';


export const TrackerDisplay = ({glasses}) => {

    const {name,goal} = useContext(UserContext);

    return (
        <>
            <p>{name}'s daily goal: {goal}</p>
            <p>Glasses drunk: {glasses}</p>
            <PieChart glasses={glasses} goal={goal} />
            { glasses >= goal ? "Goal reached! 🥳" : null }
            <br></br>
        </>
    )
}

export default TrackerDisplay;
