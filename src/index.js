import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import imageOne from './img/device.svg'
import imageTwo from './img/laptop.svg'
import imageThree from './img/monitor.svg' 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <div className="container">
      <ul className="header-list">
        <li className="list-item">
          <a href="#" className="item-link">
            <img className='item-images1' width={75} src={imageOne} alt="images" />
            <h2 className="item-title">M O B I L E</h2>
            <p className="item-text">Get notifications about new <br /> relases in our mobile app</p>
            <span className='dollar'>$</span><span className="number">10</span><span className="month"> / month</span>
          </a>
        </li>
        <li className="list-item">
          <a href="#" className="item-link">
            <img className='item-images2' width={75} src={imageTwo} alt="images" />
            <h2 className="item-title">D E S K T O P</h2>
            <p className="item-text">Enjoy new episodes on your laptop <br /> in browser with our web service, <br /> which supports all the platforms.</p>
            <span className='dollar'>$</span><span className="number">15</span><span className="month"> / month</span>
          </a>
        </li>
        <li className="list-item">
          <a href="#" className="item-link">
            <img className='item-images3' width={75} src={imageThree} alt="images" />
            <h2 className="item-title">T V</h2>
            <p className="item-text">Watch your favorite series at home <br /> on large screen with our TV <br /> application.</p>
            <span className='dollar'>$</span><span className="number">20</span><span className="month"> / month</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

  export default root;