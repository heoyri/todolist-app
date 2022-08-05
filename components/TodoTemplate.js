import React from 'react';
import './TodoTemplate.css';
/* import mImg from '../images/custom.png'; */

const TodoTemplate = ({ children }) => {
  const date = new Date();
  const year = date.getFullYear();
  const monthNames = ["JAN", "FAB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();

  return (
    <div className="TodoTemplate">
        <div className="app-title">
          <div className="date_area">
                <div className="left_col">
                  <div className="day_area">{day}</div>
                </div>

                <div className="right_col">
                  <div className="month_area">{month}</div>
                  <div className="year_area">{year}</div>
                </div>
          </div>

          <p>Todo List App</p>
          {/* <img className='imwidth' src={mImg} alt='memo'/> */}
        </div>
        <div className="content">{children}</div>

        <div className='footer'>Todo List App v1.0-Kwon Hye Ri</div>

    </div>
  );
};

export default TodoTemplate;
