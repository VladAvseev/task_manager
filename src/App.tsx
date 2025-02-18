import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { board } from "./modules/_board/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Header } from "./components/Header";
import { ErrorPage } from "./modules/_error";
import { timeline } from "./modules/_timeline/routes";
import { createTask } from "./modules/_createTask/routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/board" replace />} />
          {board()}
          {timeline()}
          {createTask()}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
