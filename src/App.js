import { useState} from 'react';
import { Routes, Route } from "react-router-dom";

import './App.scss';

import Sidebar from './components/sidebar/sidebar.component';
import Asset1 from './components/asset1/asset1.component';
import Asset1Plot from './components/asset1-plot/asset1-plot.component';
import CarbonIntensity from './components/carbon-intensity/carbon-intensity.component';
import Footer from './components/footer/footer.component';

import { Asset1DataContext } from './contexts/asset1Context';

function App() {

  const [asset1Data, setAsset1Data] = useState([]);

  const data_context = {asset1Data, setAsset1Data};

  return (
    <div className="App">
      
      <Sidebar/>

      <Asset1DataContext.Provider value={data_context}>
        <div className="page-content">

        <Routes>
          <Route path="/" element={<><Asset1/><Asset1Plot/></>} />
          <Route path="carbon" element={<CarbonIntensity/>} />
        </Routes>


        </div>
      </Asset1DataContext.Provider>

      <Footer/>

    </div>
  );
}

export default App;
