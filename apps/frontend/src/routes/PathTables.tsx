import { Button } from "@mui/material";
import { ChangeEvent } from "react";

function PathTables() {
  function csvHandler(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files!.length != 0) {
      const formData = new FormData();
      formData.append("inputFile", e.target.files![0]);
      alert("CSV file received");
    } else {
      alert("No file was submitted");
    }
  }
  return (
    <div className="w-full grid justify-items-center">
      <div>
        <h1 className="pt-9 text-3xl text-center">
          Upload File with Node Data
        </h1>
        <div className="flex justify-end pr-3">
          <Button variant="contained">Export Map Data</Button>
        </div>
        <hr className="m-8" />
        <div className="w-screen h-screen flex flex-col items-center gap-[2vh]">
          <div>
            {" "}
            {/*import/export buttons*/}
            <div className="flex justify-between">
              <div className="flex">
                <p className="mr-2 mt-1">Import Node CSV:</p>
                <input
                  id="csvFile"
                  type="file"
                  accept=".csv"
                  name="Import CSV"
                  onChange={csvHandler}
                />
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <p className="mr-2 mt-1">Import Edge CSV:</p>
                  <input
                    id="csvFile"
                    type="file"
                    accept=".csv"
                    name="Import CSV"
                    onChange={csvHandler}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <Button variant="contained"> Submit</Button>
              </div>
            </div>
            <h2 className="text-3xl font-bold mt-[2vh] pt-9">Node Table</h2>
            <table className="text-sm text-center text-gray-500 mt-3">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 drop-shadow-lg">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    nodeID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    xcoord
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ycoord
                  </th>
                  <th scope="col" className="px-6 py-3">
                    floor
                  </th>
                  <th scope="col" className="px-6 py-3">
                    building
                  </th>
                  <th scope="col" className="px-6 py-3">
                    nodeType
                  </th>
                  <th scope="col" className="px-6 py-3">
                    longName
                  </th>
                  <th scope="col" className="px-6 py-3">
                    shortName
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-11">
                  <td>ACONF00102</td>
                  <td>1580</td>
                  <td>2538</td>
                  <td>2</td>
                  <td>BTM</td>
                  <td>HALL</td>
                  <td>Hall</td>
                  <td>Hall</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-screen h-screen relative left-64">
            <h2 className="text-3xl font-bold mt-[2vh] left-10 pt-9">
              Edge Table
            </h2>
            <table className="text-sm text-center text-gray-500 mt-3">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 drop-shadow-lg">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    startNodeID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    endNodeID
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
      <button type="submit">Submit</button>
    </div>
  );
}

export default PathTables;
