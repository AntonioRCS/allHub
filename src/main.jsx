import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";

import PageHeader from "./pages/PageHeader/PageHeader.jsx";
import Page404 from "./pages/Page404/Page404.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import LittleSquare from "./pages/LittleSquare/LittleSquare.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<div id="route-body">
				<Routes>
					<Route path="allHub" element={<PageHeader />}>
						<Route path="homepage" element={<Homepage />} />
						<Route path="little-square" element={<LittleSquare />} />
					</Route>
					<Route path="*" element={<Page404 />} />
				</Routes>
			</div>
		</BrowserRouter>
	</StrictMode>
);
