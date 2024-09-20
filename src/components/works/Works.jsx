import "./works.scss"

export default function Works() {
  return (
    <div className='works' id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/mobile.png" alt="" />
                </div>
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Unde molestiae tempora est quos cumque autem dolorem voluptate 
                  pariatur deserunt animi!</p>
                  <span>Projects</span>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
