import Add from "./Add.jsx";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [editIndex, setEditIndex] = useState(-1); // its used -1 because 0 is already an index so we don't need to use default index
  const [updateEdit, setUpdateEdit] = useState(""); // this state is used to store input value of specific edit
  const [value, setValue] = useState("");
  const [savedValues, setSavedValues] = useState([]);

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const addValue = () => {
    setSavedValues([...savedValues, value]);
    setValue("");
  };

  const deleteValue = (key) => {
    const deleteArray = savedValues.filter((item) => item !== key);
    setSavedValues(deleteArray);
  };

  const updateArray = () => {
    const updatearr = savedValues.map((v,i) => { 
      if(i === editIndex){ 
        v = updateEdit 
        return v 
      }  
      return v 
    }); 
     setEditIndex(-1) 
    setSavedValues(updatearr);  
  }

  return (
    <>
      <div className="h-100 w-full flex items-center justify-center bg-black bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>
            <div className="flex mt-4">
              <input
                onChange={handleValue}
                value={value}
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Add Todo"
              />
              <button
                onClick={addValue}
                className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
              >
                Add
              </button>
            </div>
          </div>
          <div>
            <Add
              add={savedValues}
              deleteArray={deleteValue}
              setValue={setValue}
              setUpdateEdit={setUpdateEdit}
              updateEdit={updateEdit}
              editIndex={editIndex}
              updateArray={updateArray}
              setEditIndex={setEditIndex}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
