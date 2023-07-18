import React from 'react';

const Table = ({ handleDelete, handleEdit, item, index }) => {
  return (
    <tr
      key={index}
      className="bg-gray-300 border border-grey-500 md:border-none block text-center md:table-row"
    >
      <td className="p-2 md:border md:border-grey-500 block md:table-cell text-center">
        <span className="inline-block w-1/3 md:hidden font-bold">Name</span>
        {item.name}
      </td>
      <td className="p-2 md:border md:border-grey-500 block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">Email</span>
        {item.email}
      </td>
      <td className="p-2 md:border md:border-grey-500 block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">Salary</span>
        {item.salary}
      </td>
      <td className="md:text-center p-2 md:border md:border-grey-500 block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
        <button
          onClick={() => handleEdit(index)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(index)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 ms-3"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Table;
