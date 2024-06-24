import React from 'react';
import CloudNetwork from './CloudNetwork';

const CloudNetworks = () => {
  return (
    <div className="w-1/3 pr-4">
      {/* List of Cloud Networks */}
     <CloudNetwork title='MyCompany-Prod-VPC' status='Critical' />
     <CloudNetwork title='DevTest-VNET' status='Critical' />
     <CloudNetwork title='AcmeCorp-Shared-VPC' status='High' />
     <CloudNetwork title='CloudSecure-VNET' status='High' />
     <CloudNetwork title='AlphaZone-VPC' status='High' />
     <CloudNetwork title='ProjectX-Dev-VPC' status='Medium' />
    </div>
  );
};

export default CloudNetworks;
