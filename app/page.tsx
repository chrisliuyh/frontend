"use client"
import { useRef, useState } from 'react';
import "./globals.css";


const CourseCard1 = () => (
  <div className="course-card-wrapper">
    <div className="course-card1">
      <div className="color-strip" />
      <div className="card-content1">
        <div className="gradient-bar1" />
        <h3 className="card-title">Introduction to programming</h3>
        <p className="card-detail1">Beginner</p>
        <div className="card-description">
          This course covers the most basic concepts in programming using Solidity as an example.
        </div>
        <div className='progress-bars-container1'>
        <div className="progress-bar1">
        <div className='time'></div>
        <div className="course-duration">36 Hour</div></div>
        <div className="progress-bar2">
        <div className='book'></div>
        <div className="course-count">5 Course</div></div>
        <div className="progress-bar3">
          <div className="progress-indicator"></div>
          <div className="progress-text">45% COMPLETED</div>
        </div>
      </div>
      </div>
    </div>
  </div>
);


const CourseCard2 = () => (
  <div className="course-card-wrapper">
    <div className="course-card2">
      <div className="color-strip" />
      <div className="card-content2">
        <h3 className="card-title">Moonshot 2023 Summer Hackathon</h3>
        <p className="card-detail1">All Tracks</p>
        <p className="card-detail2">Solidity</p>
        <p className="card-detail2">ZK</p>
        <div className='card-action'>
        <div className="card-action1">Signup</div>
        <div className="card-date-range">4/15 - 6/15</div>
        <div className="card-divider"><hr className='hr1' /></div>
        <div className='dived'></div>
        <div className="card-action1">Event</div>
        <div className="card-date-range">6/15 - 7/15</div>
        <div className="card-divider"><hr className='hr1' /></div>
        <div className='dived'></div>
        <div className="card-action1">Grant size</div>
        <div className="card-date-range">200K</div>
        <div className="card-divider"><hr className='hr1' /></div>
        </div>
      </div>
    </div>
  </div>
);


const CourseCard3 = () => (
  <div className="course-card-wrapper">
    <div className="course-card3">
      <div className="color-strip" />
      <div className="card-content3">
        <div className="gradient-bar2" />
        <h3 className="card-title">Web 3.0 Programming Basics</h3>
        <p className="card-detail1">Beginner</p>
        <div className="card-description">
          Basic concepts in programming of Solidity. Topics include: variables, functions, flow control, error handling, data structure.
        </div>
        <div className='progress-bars-container2'>
        <div className="progress-bar1">
        <div className='time'></div>
        <div className="course-duration">36 Hour</div></div>
        <div className="progress-bar2">
        <div className='book'></div>
        <div className="course-count">5 Course</div></div>
      </div>
      </div>
    </div>
  </div>
);


const CourseCard4 = () => (
  <div className="course-card-wrapper">
    <div className="course-card4">
      <div className="color-strip" />
      <div className="card-content4">
        <div className="gradient-bar3" />
        <h3 className="card-title4">What is Bitcoin</h3>
        <div className='progress-bars-container4'>
        <div className="progress-bar1">
        <div className='time'></div>
        <div className="course-duration">36 Hour</div></div></div>
      </div>
    </div>
  </div>
);


export default function Home() {
  const scrollContainerRef = useRef(null);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);
  const [showTitle, setShowTitle] = useState(true);
  const [pageWrapperClass, setPageWrapperClass] = useState("page-wrapper1");



  const scrollPrev = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollLeft -= container.offsetWidth;
      setIsAtStart(container.scrollLeft <= 0);
      setIsAtEnd(false); 
      setShowTitle(true);
    }
    setPageWrapperClass("page-wrapper1");

  };
  
  const scrollNext = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollLeft += container.offsetWidth;
      setIsAtEnd(container.scrollWidth <= container.scrollLeft + container.offsetWidth);
      setIsAtStart(false); 
      setShowTitle(false);
    }
    setPageWrapperClass("page-wrapper2");
  
  };
  
  


  return (
    <div className={pageWrapperClass}>
      <div className="container">
      <div className={`title ${showTitle ? '' : 'hide-title'}`}>&lt; / Trending Now &gt;</div>
        { !isAtStart && (
          <button
            onClick={scrollPrev}
            className="button-default button-left"
          >
            <img src="/Vector left.png" alt="Left" />
          </button>
        )}
        <div ref={scrollContainerRef} className="card-container">
          <CourseCard1 />
          <CourseCard2 />
          <CourseCard3 />
          <CourseCard4 />
        </div>
        { !isAtEnd && (
          <button
            onClick={scrollNext}
            className="button-default button-right"
          >
            <img src="/Vector 116.png" alt="Left" />
          </button>
        )}
      </div>
    </div>
  );
  
}






