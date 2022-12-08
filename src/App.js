import GlobalStyle from "./style/globalStyles";
import HomePage from "./components/HomePage/Home";
import SessionPage from "./components/SessionPage/Session";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/sessoes/:idFilme" element={<SessionPage />}/>
			</Routes>
		</BrowserRouter>
  );
}

export default App;
