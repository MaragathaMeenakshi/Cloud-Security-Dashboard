import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/Navbar'
import '../style/dashboard.css'
import CSPMExcutive from '../components/CSPMExcutive'
import AddWidget from '../components/AddWidget'
// import data from '../data/dataset.json';
import { IoIosAdd } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux'
import { toggleWidget } from '../data/store'
import CWPP from '../components/CWPP'

const Dashboard = (props) => {
  const showWidget = useSelector((state) => state.sidebar.showWidget);
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(toggleWidget());
  };
  const data = useSelector(state => state.dashboard.dashboardData);

  //   useEffect(()=>{
  //     if(showWidget){
  //       document.body.style.backgroundColor = 'gray';
  // document.body.style.transition = 'background-color 0.3s ease';
  //     }
  //   },[showWidget]);

  return (
    <>
      {showWidget && <AddWidget onClose={handleSidebar} />}
      <div className={`parent-component ${showWidget ? 'overlay-active' : ''}`}>
        <Navbar></Navbar>
        <div>
          <div className='header_container'>
            <div className='header_text'>CNAPP Dashboard</div>
            <div className='subcontainer'>
              <div>ADD Widget</div>
            </div>
          </div>
          {data.map((eachData, parentIndex) => (
            <>
              <div className='title'>{eachData.title}</div>
              <div className='container'>
                {eachData.cloudData.map((cloudEachData, index) =>
                  <>
                  {parentIndex === 0 &&
                  <div className='card' key={index}>
                    <CSPMExcutive key={index} title={cloudEachData.title} data={cloudEachData.value} />
                  </div>
                  }
                  {parentIndex === 1 && 
                    <div className='card' key={index}>
                    <CWPP key={index} title={cloudEachData.title} data={cloudEachData.value} />
                  </div>
                  }
                  </>
                )}
                <div className='card'>
                  <div className='widgetbox' onClick={handleSidebar}>
                    <IoIosAdd />
                    Add Widget
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

Dashboard.propTypes = {}

export default Dashboard