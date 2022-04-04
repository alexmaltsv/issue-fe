import React from 'react';
import { Companies } from 'features/companies';
import { Layout } from 'components';
import { LookupsLayout } from 'features/lookups';

const App = () => (
  <Layout>
    <LookupsLayout>
      <Companies />
    </LookupsLayout>
  </Layout>
);


export default App;
