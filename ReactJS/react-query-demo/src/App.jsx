import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Home from "./components/Home";
import SuperHero from "./components/SuperHero";
import RQSuperHero from "./components/RQSuperHero";
import RQSingleSuperHero from "./components/RQSingleSuperHero";
import InfiniteQueriesPage from "./components/InfiniteQueries";
import { PaginatedQueriesPage } from "./components/PaginatedQueries";
import { DynamicParallelPage } from "./components/DynamicParallel";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/super-heroes">
              <SuperHero />
            </Route>
            <Route path="/rq-super-heroes/:heroId">
              <RQSingleSuperHero />
            </Route>
            <Route path="/rq-super-heroes">
              <RQSuperHero />
            </Route>
            <Route path="/rq-dynamic-parallel">
              <DynamicParallelPage heroIds={[1, 3]} />
            </Route>
            <Route path="/rq-dependent">
              <RQSuperHero email="vishwas@example.com" />
            </Route>
            <Route path="/rq-paginated">
              <PaginatedQueriesPage />
            </Route>
            <Route path="/rq-infinite">
              <InfiniteQueriesPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
