import React from 'react'
import marquee from 'react-fast-marquee'

function SlidingAnimation() {
  return (
    <div>
        <h1>Sliding Animation using marquee</h1>
       <marquee>
        <div>
            <img src="catImg.jpg" style={{ width: "150px", height: "auto" ,marginLeft: "20px"}} alt="cat" />
            <img src="catImg.jpg" style={{ width: "150px", height: "auto" ,marginLeft: "20px"}} alt="cat" />
            <img src="catImg.jpg" style={{ width: "150px", height: "auto" ,marginLeft: "20px"}} alt="cat" />
            <img src="catImg.jpg" style={{ width: "150px", height: "auto" ,marginLeft: "20px"}} alt="cat" />
            <img src="catImg.jpg" style={{ width: "150px", height: "auto" ,marginLeft: "20px"}} alt="cat" />
            <img src="catImg.jpg" style={{ width: "150px", height: "auto" ,marginLeft: "20px"}} alt="cat" />
            <img src="catImg.jpg" style={{ width: "150px", height: "auto" ,marginLeft: "20px"}} alt="cat" />
        </div>
       </marquee>
    </div>
  )
}

export default SlidingAnimation
