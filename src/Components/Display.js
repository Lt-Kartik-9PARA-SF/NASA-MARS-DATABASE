import React, { useEffect, useState } from 'react'
import { Lazy } from 'react-lazy'
import Data from './Data';
export default function Display() {
    const [data, setData] = useState([]);
    const [rover, setRover] = useState('curiosity');
    const [sol, setSol] = useState(100);
    const [day, setDay] = useState(100);
    const [page, setPage] = useState(1);

    let key = "6k7BTdzhwr94WNvCnX0fI0cLRfeCIj8V1zDala30"

    const pageFunc = (event) => {
        
            event.target.previousElementSibling.setAttribute('class',"");
            event.target.setAttribute("class",'activeBtn');
       
        setPage(event.target.value);
        
    }
const srover = (event)=>{
  //  event.target.setAttribute('class','ractive');
  //  event.target.nextElementSibling.setAttribute('class','');
  //  event.target.previousElementSibling.setAttribute('class','');
   
   console.log(event.target.value);
    
 setRover(event.target.value);
}
    const handleChange = (event) => {
        let input = event.target.value;

        setSol(input);

    }

    const submit = () => {

        setDay(sol);
        console.log(day);
    }

    const fetchData = async () => {
        let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${day}&page=${page}&&api_key=${key}`
        let response = await fetch(url);
        let info = await response.json();
        setData(info.photos);

    }

    console.log(data);

     useEffect(()=>{fetchData()},[rover,day,page]);

    return (

        <div className="mainDiv">
            <div className='selectionPanel'>
                <div className='rovers'>
                    <h2>Select a Rover</h2>

                    <div className='buttons'>
                        <button value='curiosity' onClick={srover}>Curiosity</button>
                        <button value='opportunity' onClick={srover}>Opportunity</button>
                        <button value='spirit' onClick={srover}>Spirit</button>
                    </div>

                    <p className='desktopMsg'>For a better Experience use a Device with a Larger Resolution</p>
                    <p>Total Results: {data.length} </p>
                    <p>Sol : {day}</p>

                </div>

                <div className='sol'>

                    <h2 className="solItem">Enter Solar Day Value</h2>
                    <input type="number" value={sol} onChange={handleChange} className="solItem" />
                    <button onClick={submit} className="submitBtn solItem">Submit</button>
                    <p className="solItem">
                        Sol (borrowed from the Latin word for sun) is a solar day on Mars; that is, a Mars-day.
                        A sol is slightly longer than an Earth day. It is approximately 24 hours, 39 minutes, 35 seconds long. A Martian year is approximately 668 sols, equivalent to approximately 687 Earth days[1] or 1.88 Earth years.
                    </p>
                </div>

            </div>
            {
                data.length == 0 ? <div><h1>Loading...</h1></div> : <div className='displayBox'>

                    <div className='displayBoxItems'>


                        {
                            data.length == 0 ? <h1>Loading</h1> :
                            data.map((element) => {
                                return (
                                    <Data imageUrl={element.img_src} earthDate={element.earth_date} roverName={element.rover.name} id={element.id} launchDate={element.rover.launch_date} landingDate={element.rover.landing_date} status={element.rover.status} sol={element.sol} />
                                );
                            })
                        }

                    </div>

                    <div className='pages'>
                        <span>Page</span>
                        <button className='activeBtn' value={1} onClick={pageFunc}>1</button>
                        <button  value={2} onClick={pageFunc}>2</button>
                        <button  value={3} onClick={pageFunc}>3</button>
                    </div>



                </div>
            }


        </div>
    )
}
