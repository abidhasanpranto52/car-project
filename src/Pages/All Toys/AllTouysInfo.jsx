import React from "react";

const AllTouysInfo = ({toy}) => {
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">Hart Hagerty</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>Zemlak, Daniel and Leannon</td>
      <td>Purple</td>
      <td>$20</td>
      <td>Purple</td>
      <th>
        <button className="btn btn-outline btn-xs">details</button>
      </th>
    </tr>
  );
};

export default AllTouysInfo;
