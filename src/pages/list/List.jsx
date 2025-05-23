import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";

const List = () => {
  const location = useLocation();
  const [destination] = useState(location.state.destination);
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const [personCount, setPersonCount] = useState(1);
  const [ticketCount, setTicketCount] = useState(1);


  const { data, loading, reFetch } = useFetch(
    `/artists?city=${destination}&min=${min || 0}&max=${max || 999}`
  );

  const handleClick = () => {
    reFetch();
  }

  //const {dispatch} = useContext(SearchContext)

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  /*const [options] = useState({
    person: 1,
    ticket: 1,
  });*/

  const handlePersonChange = (e) => {
    const newPersonCount = parseInt(e.target.value);
    setPersonCount(newPersonCount);
    setTicketCount(newPersonCount);
  };

  const handleTicketChange = (e) => {
    const newTicketCount = parseInt(e.target.value);
    setTicketCount(newTicketCount);
    setPersonCount(newTicketCount); 
  };

  return (
    <div>
      <Navbar />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Location</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per show</small>
                  </span>
                  <input type="number" onChange={e=>setMin(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per show</small>
                  </span>
                  <input type="number" onChange={e=>setMax(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Person</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={personCount}
                    value={personCount}
                    onChange={handlePersonChange}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Ticket</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={ticketCount}
                    value={ticketCount}
                    onChange={handleTicketChange}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "loading"
              ) : ( <> 
            {data.map(item=>(
            <SearchItem item={item} key={item._id}/>
            ))}
          </>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;