import React from 'react';

import type { AddType } from './App';

interface TableProps {
  adds: AddType[] | undefined;
}

const Table: React.FC<TableProps> = ({ adds }: TableProps) => (
  <>
    <p>Table.tsx</p>
    <pre>{JSON.stringify(adds, null, 2)}</pre>
  </>
);
export default Table;
