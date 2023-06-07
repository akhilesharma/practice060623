import React from 'react';
import hpdata from './hpdata';
import { Link } from 'react-router-dom';

export default function Dataone() {
  return (
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          {hpdata.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <Link to={`/datatwo/${item.id}`}>{item.model}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
