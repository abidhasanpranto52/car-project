import React from 'react';

const AllTouysInfo = () => {
    return (
        <div>
            {/* row 1 */}
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
        </div>
    );
};

export default AllTouysInfo;