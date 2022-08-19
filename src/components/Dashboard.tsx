import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {

  const [examList, setExamList] = useState<any []>([]);

  const fetchExams = async () => {
    const url = 'http://localhost:4000/exams/fetchallexams';
    const response = await axios.get(url);
    console.log(response);
    setExamList(response.data);
  }

  useEffect(() => {
    fetchExams();
  }, [])

  const startExam = () => {
    //api call to start exam
    //fetch list of qs and store locally
    //create entry in examlog table and fetch examlogid
    //store examlog id locally
  }


  return (
    <div className='row'>
        <div className='col-3 bg-warning bg-opacity-50'>
            <Link to="" className='btn btn-success'>Create Exam</Link>
            <Link to="" className='btn btn-success'>Take an Exam</Link>
            <Link to="/qsadd" className='btn btn-success'>Add Question</Link>
            <Link to="" className='btn btn-success'>View Results</Link>
        </div>
        <div className='col-9 bg-warning bg-opacity-10'>
            <table>
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>exam_name</th>
                  <th>subject_id</th>
                  <th>date</th>
                  <th>time</th>
                  <th>duration</th>
                  <th>total_questions</th>
                  <th>negativemarking</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  examList && examList.map((item, index) => (
                    <tr>
                      <td>{item.exam_id}</td>
                      <td>{item.exam_name}</td>
                      <td>{item.subject_id}</td>
                      <td>{item.date}</td>
                      <td>{item.time}</td>
                      <td>{item.duration}</td>
                      <td>{item.total_questions}</td>
                      <td>{item.negativemarking}</td>
                      <td>
                        <button type='button' onClick={startExam} className="btn btn-primary btn-sm">Start Exam</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            
        </div>
    </div>
  )
}

export default Dashboard
