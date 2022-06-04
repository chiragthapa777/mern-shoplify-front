import * as React from 'react';
import Item from './Item';

import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ItemList() {
  return (
    <div className='lg:mr-2 '>
      <table className="border-collapse border  w-[100%]">
        <tbody>
          <Item />
          <Item />
          <Item />
          <Item />
        </tbody>
      </table>

    </div>
   
  );
}
