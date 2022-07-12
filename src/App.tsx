import { QueryClientProvider, QueryClient } from "react-query";
import React, { FC } from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Layout from "./components/Layout";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient =  new QueryClient();

const App:FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Router>
          <Layout />
        </Router>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  );
}

export default App;
