import React, { useState } from "react";
import DataList from "./data/DataList.jsx";

function App() {
  const [data, setData] = useState("");
  const [savedata, setSavedata] = useState([]);
  const [editData, setEditData] = useState(-1);
  const [updateData, setUpdateData] = useState("");

  const handleData = (e) => {
    setData(e.target.value);
  };

  const handleSaveData = () => {
    if (data) {
      setSavedata([...savedata, data]);
      setData("");
    }
  };

  const deleteData = (key) => {
    const deleteArray = savedata.filter((_item, index) => index !== key);
    setSavedata(deleteArray);
  };

  const handleUpdate = () => { 
    const updatedDataArray = savedata.map((v, i) => {
      if (i === editData) {
        v = updateData
        return v
      }
      return v;
    });
    setEditData(-1);
    setSavedata(updatedDataArray);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="container flex flex-col text-white w-fit h-screen bg-gray-900 p-4 rounded-lg">
          <h1 className="text-indigo-600 w-40 font-semibold">Todo List</h1>
          <div className="mt-5">
            <input
              value={data}
              onChange={handleData}
              type="text"
              className="bg-gray-800 text-sm rounded-md w-[615px] h-10 p-4"
              placeholder="Enter a task"
            />
            <button
              onClick={handleSaveData}
              className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red bg-indigo-800 hover:text-white hover:bg-red"
            >
              Add
            </button>
          </div>
          <div>
            <p className="text-gray-500 mb-2 font-semibold">List data</p>
            <div>
              <DataList 
                data={savedata} 
                deleteData={deleteData}
                editData={editData} 
                setEditData={setEditData} 
                updateData={updateData} 
                setUpdateData={setUpdateData} 
                handleUpdate={handleUpdate} 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
