import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import '../style/addwidget.css'
import { IoIosAdd, IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import { updateCloudData } from '../data/store';
import { Link } from 'react-router-dom';

const AddWidget = (props) => {
  const data = useSelector(state => state.dashboard.dashboardData);

  const [selectTab, setSelectTab] = useState('CSPM');
  const [isChecked, setIsChecked] = useState({});
  const [edit, SetEdit] = useState({});
  const tabs = ['CSPM', 'CWPP'];
  const [addWidget, setAddWidget] = useState(false);
  const [cloudData, setCloudData] = useState(data);
  const [addMoreChart , setAddMoreChart] = useState([{id : 1}]);
  const dispatch = useDispatch();

  // const handleUpdate = () => {
  //   const newCloudData = [
  //     { title: "Connected (5)", value: 5, color: "#5578FF" },
  //     { title: "Not Connected (1)", value: 1, color: "#E0EBFF" },
  //   ];
  //   dispatch(updateCloudData({ index: 0, newValue: newCloudData }));
  // };

  const handleClick = (id) => {
    setSelectTab(id);
  }

  const handleEdit = (index) => {
    SetEdit((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  }

  const handleCheck = (parentIndex, index) => {
    setCloudData((prevState) => {
      // Create a deep copy of the entire state
      const newState = [...prevState];
      const updatedCloudData = [...newState[parentIndex].cloudData];
      const updatedItem = { ...updatedCloudData[index], show: !updatedCloudData[index].show };
      updatedCloudData[index] = updatedItem;
      newState[parentIndex] = {
        ...newState[parentIndex],
        cloudData: updatedCloudData,
      };
      return newState;
    });
  };

  useEffect(() => {
    console.log(cloudData);
  }, [cloudData]);

  const handleChange = (parentIndex, index, name, value) => {
    setCloudData((prevState) => {
      // Create a deep copy of the entire state
      const newState = [...prevState];
      const updatedCloudData = [...newState[parentIndex].cloudData];
      const updatedItem = { ...updatedCloudData[index], [name]: value };
      updatedCloudData[index] = updatedItem;
      newState[parentIndex] = {
        ...newState[parentIndex],
        cloudData: updatedCloudData,
      };
      return newState;
    });
  }
  const handleNestedDataChange = (parentIndex, childIndex, index, name, value) => {
    setCloudData((prevState) => {
      // Create a deep copy of the entire state
      const newState = [...prevState];
      const updatedCloudData = [...newState[parentIndex].cloudData];
      const updatedItem = [...updatedCloudData[childIndex].value];
      const updatedNestedItem = { ...updatedItem[index], [name]: value };
      updatedItem[index] = updatedNestedItem;

      updatedCloudData[childIndex] = {
        ...updatedCloudData[childIndex],
        value: updatedItem,
      };
      newState[parentIndex] = {
        ...newState[parentIndex],
        cloudData: updatedCloudData,
      };

      return newState;
    });
  };

  const handleSubmit = () => {
    dispatch(updateCloudData({ newValue: cloudData }));
  }
  // useEffect(() => {
  //   console.log(isChecked);
  // }, [isChecked])

  const handleAddWidget = () => {
    setAddWidget(!addWidget);
  }

  const handleAddMoreChart = () => {
    setAddMoreChart((prevState)=> 
      [
        ...prevState,
        { id: prevState.length + 1 }
      ]
    );
  }

  const handleRemoveAddChart =()=>{

  }

  return (
    <div className='box'>
      <div className='sidebar'>
        <div className='head'>
          <p>Add Widget</p>
          <IoMdClose onClick={props.onClose}/>
        </div>
        <div className='bodystyle'>
          <p>Personalize Your dashboard by adding the following widget</p>
          <div className='tabs'>
            {tabs.map((tab, index) => (
              <div key={index} className={selectTab === tab ? 'active' : ''} onClick={() => handleClick(tab)}>{tab}</div>
            ))}
          </div>
          {selectTab && (
            <>
              {cloudData[tabs.indexOf(selectTab)].cloudData.map((eachData, index) => (
                <>
                  <div key={`widget-${index}`} className='widget'>
                    <input
                      type="checkbox"
                      id={eachData.title}
                      checked={eachData.show}
                      onChange={() => handleCheck(tabs.indexOf(selectTab), index)}
                    />
                    <label htmlFor={eachData.title}>{eachData.title}</label>
                    <button className='button' onClick={() => handleEdit(index)} role='button'>{edit[index] ? "Close" : "Edit"}</button>
                  </div>
                  {edit[index] &&
                    <form onSubmit={handleSubmit} className='form' key={`Edit-${index}`}>
                      <label htmlFor="title">Title: </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={eachData.title}
                        onChange={(event) => handleChange(tabs.indexOf(selectTab), index, event.target.name, event.target.value)}
                      />
                      {eachData.value.map((item, i) => (
                        <div key={i}>
                          {console.log(index)}
                          <label htmlFor={`nested-title-${i}`}>Chart name {i + 1}: </label>
                          <input
                            type="text"
                            id={`nested-title-${i}`}
                            name="title"
                            value={item.title}
                            onChange={(event) => handleNestedDataChange(tabs.indexOf(selectTab), index, i, event.target.name, event.target.value)}
                          />

                          <label htmlFor={`nested-value-${i}`}>Chart Value: </label>
                          <input
                            type="number"
                            id={`nested-value-${i}`}
                            name="value"
                            value={item.value}
                            onChange={(event) => handleNestedDataChange(tabs.indexOf(selectTab), index, i, event.target.name, event.target.value)}
                          />

                          <label htmlFor={`nested-color-${i}`}>Chart Color: </label>
                          <input
                            type="text"
                            id={`nested-color-${i}`}
                            name="color"
                            value={item.color}
                            onChange={(event) => handleNestedDataChange(tabs.indexOf(selectTab), index, i, event.target.name, event.target.value)}
                          />
                        </div>
                      ))}
                      <button className="confirmButton" role="button">Update</button>
                    </form>
                  }
                </>
              ))}
              {/* Adding Widget */}
              <div className='widget' onClick={handleAddWidget}>
                {addWidget ?
                  <>
                    <IoMdClose />
                    Close Widget
                  </> :
                  <>
                    <IoIosAdd />
                    Add Widget
                  </>
                }
              </div>
              {addWidget &&
                <>
                  <form className='form'>
                    <label htmlFor="title">Title: </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                    />
                    {addMoreChart.map((value)=>(
                    <div key={value.id}>
                      <label >Chart name {value.id} </label>
                      <input
                        type="text"
                        name="title"
                      />

                      <label >Chart Value: </label>
                      <input
                        type="number"
                        name="value"
                      />

                      <label >Chart Color: </label>
                      <input
                        type="text"
                        name="color"
                      />
                    </div>
                    ))}
                    <button className="cancelButton" onClick={handleAddMoreChart} role='button'>Add More Chart</button>
                    <button className="confirmButton" role="button">Update</button>
                  </form>
                </>
              }
            </>
          )}
        </div>
        <div className='footer'>
          <button className="cancelButton" role="button" onClick={props.onClose}>Cancle</button>
          <button className="confirmButton" role="button">Done</button>
        </div>
      </div>
    </div>
  )
}

AddWidget.propTypes = {}

export default AddWidget