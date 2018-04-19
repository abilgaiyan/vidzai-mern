import React from 'react';
import {Link} from 'react-router-dom';



const Footer = () =>{

    return (
       <div>
         Footer section
         <div className="fixed-action-btn">
          <Link to="" className="btn-floating btn-large red">
           <i className="large material-icons">add</i>
          </Link>
        </div> 
       </div>
    );
}

export default Footer;