import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

function App() {
  return (
    <>
      {/* <ApolloProvider client={client}> */}
      <Router>
        <Header />
        <div className="container">
          <Routes>
            {/* <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<Project />} />
              <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </Router>
      {/* </ApolloProvider> */}
    </>
  );
}

export default App;
