import "./reserve.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpen, artistid }) => {
    const [selectedEvent, setSelectedEvent] = useState([]);
    const { data, isLoading } = useFetch(`/artists/event/${artistid}`);
    const { dates } = useContext(SearchContext);

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
    
        const date = new Date(start.getTime());
        
        const dates = [];
    
        while (date <= end) {
            dates.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }
    
        return dates;
    };
    
    const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);
    
    const isAvailable = (ticket) => {
        const isFound = ticket.unavailableDates.some((date) =>
            alldates.includes(new Date(date).getTime())
        );
    
        return !isFound;
    };
    
    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedEvent(
            checked
            ? [...selectedEvent, value]
            : selectedEvent.filter((item) => item !== value)
        );
    };
    
    const navigate = useNavigate();
    
    const handleClick = async () => {
        try {
            await Promise.all(
                selectedEvent.map((eventId) => {
                    return axios.put(`/events/availability/${eventId}`, {
                        dates: alldates,
                    });
                })
            );
            setOpen(false);
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="reserve">
            <div className="rContainer">
                <FontAwesomeIcon
                    icon={faTimesCircle}
                    className="rClose"
                    onClick={() => setOpen(false)}
                />
                <span>Select your category: </span>
                    {data.map((item) => (
                        <div className="rItem" key={item._id}>
                               <div className="rItemInfo">
                                    <div className="rTitle">{item.title}</div>
                                <div className="rDesc">{item.desc}</div>
                                <div className="rMax">Max people: <b>{item.maxPeople}</b></div>
                                <div className="rPrice">{item.price}</div>
                            </div>
                            <div className="rSelectEvent">
                                {item.tickets.map((ticket) => (
                                    <div key={ticket._id} className="event">
                                        <label>{ticket.number}</label>
                                        <input
                                            type="checkbox"
                                            value={ticket._id}
                                            onClick={handleSelect}
                                            disabled={!isAvailable(ticket)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                <button onClick={handleClick} className="rButton">Reserve Now!</button>
            </div>
        </div>
    );
}

export default Reserve;
