import React from 'react';

const DummyList = () => {
  const dummyItems = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5'
  ];

  return (
    <ul>
      {dummyItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default DummyList;