import {
  HashRouter,
  Routes as ReactRoutes,
  Route,
  Navigate
} from 'react-router-dom'

import Layout from 'libs/layout'

import ListView from 'libs/views/list';
import FormView from 'libs/views/form';

export default function Routes() {
  return (
    <HashRouter>
      <Layout>
          <ReactRoutes>
            <Route path="/" element={<Navigate to="/list" />} />
            <Route path="/list" element={<ListView />} />
            <Route path="/form" element={<FormView />} />
          </ReactRoutes>
      </Layout>
    </HashRouter>
  );
}