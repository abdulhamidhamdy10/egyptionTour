import React from 'react'

import  Navbar  from '../HomePage/Navbar';
import Foothome from '../HomePage/Foothome';
import Jvamain from './Jvamain';
import Validation from './Validation';

 function AllValidation() {
  return (
    <div>
        <Navbar/>
        <Validation/>
        <Jvamain/>
        <Foothome/>
    </div>
  )
}
export default AllValidation;