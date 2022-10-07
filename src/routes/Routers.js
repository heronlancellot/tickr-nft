import { Routes, Route, Navigate} from 'react-router-dom'

import React from 'react'
import Home from '../pages/Home'
import Buy from '../pages/Buy'
import Sell from '../pages/Sell'
import Events from '../pages/Events'
import SellerProfile from '../pages/SellerProfile'
import EditProfile from '../pages/EditProfile'
import Wallet from '../pages/Wallet'
import NftDetails from '../pages/NftDetails'

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/home" /> } />
        <Route path="/" element={<Home /> } />
        <Route path="/" element={<Buy /> } />
        <Route path="/" element={<Sell /> } />
        <Route path="/" element={<Events /> } />
        <Route path="/" element={<SellerProfile /> } />
        <Route path="/" element={<EditProfile /> } />
        <Route path="/" element={<Wallet /> } />
        <Route path="/" element={<NftDetails /> } />

    </Routes>
  );
}

export default Routers