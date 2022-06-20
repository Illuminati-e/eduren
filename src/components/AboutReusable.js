import React from 'react'

const AboutReusable = ({ img, flag = false }) => {
  return (
    <div className=' yl-about-video-area relative wow fadeInLeft ' data-wow-delay="0ms" data-wow-duration="1500ms">
      {
        flag && (<div className='yl-about-video-tag pera-content yl-headline'>
          <h4>21</h4>
          <i className='fas fa-trophy'></i>
          <span>Golden years</span>
        </div>)
      }
      <div className="yl-video-img text-center">
        <img src={img} alt="Banner" />
      </div>
    </div>
  )
}

export default AboutReusable