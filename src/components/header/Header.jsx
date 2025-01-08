import {
  faPerson,
  faMusic,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    person: 1,
    ticket: 1,
  });

  const navigate = useNavigate();
  
  const { user } = useContext(AuthContext);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const {dispatch} = useContext(SearchContext)


  const handleSearch = () => {
    dispatch({type:"NEW_SEARCH", payload: { destination,dates,options } });
    navigate("/artists", { state: { destination, dates, options } });
  };

  return (
    <div className="header">
      <div className="headerContainer">
            <h1 className="headerTitle">
            Make your events musical!!
            </h1>
            <p className="headerDesc">
              Get a vast number of artist to hire for your events.
            </p>
            {!user && 
            <button className="headerBtn">
                <Link to="/login" className="blink">Sign in</Link>
            </button> }
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faMusic} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Location?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.person} person · ${options.ticket} ticket`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Person</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.person <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("person", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.person}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("person", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Ticket</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.ticket <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("ticket", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.ticket}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("ticket", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    </div>
                )}
              </div>

              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
      </div>
    </div>
  );
};

export default Header;