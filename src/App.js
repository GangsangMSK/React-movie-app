import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";

const queryClient = new QueryClient();

function App(){
  return(
    <QueryClientProvider client={queryClient}>
    <div className="root-wrap">
      <BrowserRouter>
        <div className="header-title">Now playing</div>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter> 
    </div>
    </QueryClientProvider>
  )
}

export default App;