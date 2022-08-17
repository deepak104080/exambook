import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='row'>
        <div className='col-3 bg-warning bg-opacity-50'>
            <Link to="" className='btn btn-success'>Create Exam</Link>
            <Link to="" className='btn btn-success'>Take an Exam</Link>
            <Link to="/qsadd" className='btn btn-success'>Add Question</Link>
            <Link to="" className='btn btn-success'>View Results</Link>
        </div>
        <div className='col-9 bg-warning bg-opacity-10'>
            
        </div>
    </div>
  )
}

export default Dashboard
