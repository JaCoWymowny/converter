import { QueryClientProvider, QueryClient } from "react-query";
import React, { FC } from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Layout from "./components/Layout";

const queryClient =  new QueryClient();

const App:FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Router>
          <Layout />
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
