import React from 'react'

const AboutReusable = ({ img }) => {
  return (
    <div className=' yl-about-video-area relative wow fadeInLeft ' data-wow-delay="0ms" data-wow-duration="1500ms">
      <div className='yl-about-video-tag pera-content yl-headline'>
        <h4>21</h4>
        <i className='fas fa-trophy'></i>
        <span>Golden years</span>
      </div>
      <div className="yl-video-img text-center">
        <img src={img} alt="Banner" />
      </div>
      <div className="yl-video-play-btn text-center">
        <a className="video_box" href="https://www.youtube.com/watch?v=gUYjYEGbxEY">
          <i className="fas fa-play"></i>
          <span className="video_btn_border border_wrap-1"></span>
          <span className="video_btn_border border_wrap-2"></span>
          <span className="video_btn_border border_wrap-3"></span>
        </a>
      </div>
    </div>
  )
}

export default AboutReusable