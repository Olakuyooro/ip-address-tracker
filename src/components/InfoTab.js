import React from 'react';

const InfoTab = (props) => {
  return (
    <div className='w-72 md:w-100 lg:w-128 bg-white rounded-lg p-7'>
      <ul className='flex flex-col justify-center items-center space-y-4 md:flex-row lg:flex-row md:space-x-12 md:space-y-0 text-center md:'>
        <div>
          <li className='mb-2 text-xs font-light'>IP Address</li>
          {/* 102.128.192.0 */}
          <li>{props.ip}</li>
        </div>
        <div>
          <li className='mb-2 text-xs font-light'>LOCATION</li>
          <li>
            {props.city} , {props.region}
            {/* Bodija , Ibadan */}
          </li>
        </div>
        <div>
          <li className='mb-2 text-xs font-light'>TIMEZONE</li>
          <li>{props.timezone} </li>
          {/* GMT + 2 */}
        </div>
        <div>
          <li className='mb-2 text-xs font-light'>ISP</li>
          <li>{props.isp} </li>
          {/* ETISALAT NG */}
        </div>
      </ul>
    </div>
  );
};

export default InfoTab;
