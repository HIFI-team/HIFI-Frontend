import './App.css';
import React, { Component } from 'react';
import { Navigate, Route, Routes, Switch } from 'react-router-dom';
import Home from './pages/common/Home';
import NotFound from './pages/common/NotFound';
import Join from './pages/auth/Join';
import Login from './pages/auth/Login';
import Store from './pages/store/Store';
import StoreDetail from './pages/store/StoreDetail';
function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/user" element={<Home />} />
			<Route path="/join" element={<Join />} />
			<Route path="/login" element={<Login />} />
			<Route path="/store" element={<Store />} />
			<Route exact path="/store/:storeId" element={<StoreDetail />} />
			{/* <Route exact path="/store/:storeId" component={StoreDetail} /> */}
			<Route path="/error" element={<NotFound />} />
			<Route path="*" element={<Navigate to="/error" />} />
		</Routes>
	);
}

export default App;
