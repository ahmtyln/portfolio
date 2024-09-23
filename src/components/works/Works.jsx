import "./works.scss";
import {dataWorks} from "../../data";
import { useState, useEffect } from "react";

export default function Works() {

  const [data, setData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
      setData(dataWorks);
  },[])

  const handleLeft = (id) =>{
    if(id<=1){
      setCurrentSlide(parseInt(data[data.length-1].id)-1)
    }else if(id > parseInt(data[data.length-1].id)){
      setCurrentSlide(0);
    }else {
      setCurrentSlide(id-2);
    }

  }

  const handleRight = (id) =>{
    console.log(id)
    if(id>0 && id<data.length){
      setCurrentSlide(id);
    }else if (id <= 0) {
      setCurrentSlide(data.length-1)
    } else if (id >= data.length-1) {
      setCurrentSlide(0)
    }

  }


  return (
    <div className='works' id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
        {data.map( (d) => ( 
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2> {d.title} </h2>
                  <p>{d.desc}</p>
                    <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleLeft(d.id) } />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleRight(d.id) } />
          </div>
        ))  }
      </div>
    </div>
  )
}
