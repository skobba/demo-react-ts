import React, { useState, useEffect } from 'react';
import Table from './Table';

export type AddType = {
  uuid: string;
  title: string;
  description: string;
  engagementtype: string;
};

async function api<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request, {
    headers: {
      accept: 'application/json',
      'accept-language': 'en,nb;q=0.9,no;q=0.8,nn;q=0.7,en-US;q=0.6',
      authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwdWJsaWMudG9rZW4udjFAbmF2Lm5vIiwiYXVkIjoiZmVlZC1hcGktdjEiLCJpc3MiOiJuYXYubm8iLCJpYXQiOjE1NTc0NzM0MjJ9.jNGlLUF9HxoHo5JrQNMkweLj_91bgk97ZebLdfx3_UQ',
    },
  });
  return response.json();
}

const App: React.FC<{}> = () => {
  const [data, setData] = useState<AddType[] | undefined>();

  useEffect(() => {
    async function fetchMyAPI() {
      const someData = await api<any>(
        'https://arbeidsplassen.nav.no/public-feed/api/v1/ads?page=0&size=10'
      );

      const adds: AddType[] = someData.content;

      setData(adds);
    }
    fetchMyAPI();
  }, []);

  return (
    <>
      <p>App.tsx</p>
      <Table adds={data} />
    </>
  );
};

export default App;
