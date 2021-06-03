import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './navigation-bar.scss';

function NavigationBar (){

    return(
      <ul className="navigationBar">
      <li>
          <Link to="/mfe1">First Application</Link>
      </li>
      <li>
          <Link to="/mfe2">Second Application</Link>
      </li>
       </ul>
    )
}

export default NavigationBar;
