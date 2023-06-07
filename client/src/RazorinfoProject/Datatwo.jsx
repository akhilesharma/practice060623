

import React from 'react';
import { useParams } from 'react-router-dom';
import hpdata from './hpdata';

const DetailPage = () => {
  const { id } = useParams();

  const selectedItem = hpdata.find(item => item.id === parseInt(id));

  if (!selectedItem) {
    return <div>Product not found.</div>;
  }

  return (
  <>
  {/* table.................................................................... */}
  <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Model</th>
            <th>Type</th>
            <th>Color</th>
            <th>Print Speed</th>
            <th>Resolution</th>
            <th>Connectivity</th>
          
          </tr>
        </thead>
        <tbody>
         
            <tr>
              <td data-label="ID">{selectedItem.id}</td>
              <td data-label="Model">{selectedItem.model}</td>
              <td data-label="Type">{selectedItem.type}</td>
              <td data-label="Color">{selectedItem.color}</td>
              <td data-label="Print Speed">{selectedItem.printSpeed}</td>
              <td data-label="Resolution">{selectedItem.resolution}</td>
              <td data-label="Connectivity">{selectedItem.connectivity}</td>
            
            </tr>
          
        </tbody>
      </table>
    </div>
  {/* table................................................................... */}
  
  </>
  );
};

export default DetailPage;
