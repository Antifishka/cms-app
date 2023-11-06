import React from 'react';
import { Table, Head, Line, Cell } from "./DummyTable.styled";

const DummyTable = () => (
  <Table>
    <thead>
      <tr>
        <Head>Type</Head>
        <Head>Amount</Head>
      </tr>
    </thead>

    <tbody>
        <Line>
          <Cell>Unknown</Cell>
          <Cell>Unknown</Cell>
      </Line>
      <Line>
          <Cell>Unknown</Cell>
          <Cell>Unknown</Cell>
      </Line>
    </tbody>
  </Table>
);

export default DummyTable;