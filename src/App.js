import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import './App.css';
import MapSection from './components/MapSection';
import InfoTab from './components/InfoTab';

function App() {
  const [ipValue, setIpValue] = useState('');
  const [generatedResult, setGeneratedResult] = useState('');
  const [totalResult, setTotalResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleIp = (ip) => {
    setIpValue(ip);
  };

  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_z2f4koXGKX7R4PlioduoZYtlxyHrV&ipAddress=${ipValue}`
    )
      .then((res) => res.json())
      .then((result) => {
        setTotalResult(result);
        setGeneratedResult(result.location);
      });
    if (generatedResult.lat && generatedResult.lng !== undefined) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [generatedResult.lat, generatedResult.lng, ipValue]);

  let latitude = generatedResult.lat;
  let longitude = generatedResult.lng;
  console.log(generatedResult);

  return (
    <div>
      <SearchBar handleIp={handleIp}></SearchBar>
      {isLoading && (
        <MapSection longitude={longitude} latitude={latitude} />
      )}
      <div className='w-full absolute top-40 md:absolute md:top-52 flex justify-center items-center z-50'>
        <InfoTab
          ip={totalResult.ip}
          region={generatedResult.region}
          city={generatedResult.city}
          timezone={generatedResult.timezone}
          isp={totalResult.isp}
        ></InfoTab>
      </div>
    </div>
  );
}

export default App;
