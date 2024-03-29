import React from 'react';

const List = ({ data }) => {

    const shortenUrl = (url) => {
        // Split the URL by '/'
        const parts = url.split('/');
        // Get the last part of the URL (exhibition title or ID)
        const lastPart = parts[parts.length - 2];
        // Return the last part
        return lastPart;
      };

  return (
    <table className='list-table'>
      <thead>
        <tr>
          <th> Exhibition Title</th>
          <th>URL</th>
          <th>Date Start</th>
          <th>Date End</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="list-row">
            <td className='list-cell title'>{item.title.toUpperCase()}</td>
            <td className='list-cell '><a href={item.url}>{shortenUrl(item.url)}</a></td>
            <td className='list-cell'>{item.date_start}</td>
            <td className='list-cell'>{item.date_end}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
