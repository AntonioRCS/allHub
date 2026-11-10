<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";

import MainBody from "./pages/MainBody/MainBody.jsx";
import Page404 from "./pages/Page404/Page404.jsx";
import LittleSquare from "./pages/LittleSquare/LittleSquare.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<div id="route-body">
				<Routes>
					<Route path="allHub" element={<MainBody />}>
						<Route path="little-square" element={<LittleSquare />} />
					</Route>
					<Route path="*" element={<Page404 />} />
				</Routes>
			</div>
		</BrowserRouter>
	</StrictMode>
);
>>>>>>> origin/main
