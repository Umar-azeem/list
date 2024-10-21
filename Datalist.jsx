function DataList({ data, handleUpdate, deleteData, editData, setEditData,updateData, setUpdateData }) {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-gray-800 flex justify-between mt-4 text-sm rounded-md w-[670px] text-white h-20 p-4"
        >
          {editData === index ? (
            <input 
            className="bg-gray-800 text-sm rounded-md w-[400px] h-10 p-4"
              type="text"
              defaultValue={item}
              onChange={(e) => setUpdateData(e.target.value)}
            />
          ) : (
            <p className="bg-gray-800 flex justify-center">{item}</p>
          )}

          <div>
            {editData === index ? (
              <button
                onClick={handleUpdate}
                className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded bg-blue-700 hover:text-white text-green border-green hover:bg-green"
              >
                Update
              </button>
            ) : (
              <button
                onClick={() => setEditData(index)}
                className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded bg-cyan-500 hover:text-white text-green border-green hover:bg-green"
              >
                Edit
              </button>
            )}
            <button
              onClick={() => deleteData(index)}
              className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red bg-indigo-800 hover:text-white hover:bg-red"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default DataList;
