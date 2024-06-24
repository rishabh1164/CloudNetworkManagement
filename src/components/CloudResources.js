import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const CloudResources = () => {
  const columnDefs = [
    { headerName: 'Resource IP', field: 'ip' },
    { headerName: 'Risk Level', field: 'riskLevel' },
    { headerName: 'Alerts', field: 'alerts' },
    { headerName: 'Category', field: 'category' },
    { headerName: 'Cloud Network', field: 'cloudNetwork' },
  ];

  const rowData = [
    { ip: '10.10.29.5', riskLevel: 'Critical', alerts: 10, category: 'Malware', cloudNetwork: 'MyCompany-Prod-VPC' },
    { ip: '10.10.29.9', riskLevel: 'Critical', alerts: 5, category: 'High Risk', cloudNetwork: 'DevTest-VNET' },
    { ip: '10.10.29.3', riskLevel: 'Critical', alerts: 5, category: 'High Risk', cloudNetwork: 'AcmeCorp-Shared-VPC' },
    { ip: '10.10.29.11', riskLevel: 'Critical', alerts: 5, category: 'C2', cloudNetwork: 'CloudSecure-VNET' },
    { ip: '10.10.29.59', riskLevel: 'Critical', alerts: 5, category: 'Grayware', cloudNetwork: 'BetaNet-VNET' },
    { ip: '10.10.29.59', riskLevel: 'Critical', alerts: 5, category: 'Malicious IP', cloudNetwork: 'Phoenix-Test-VPC' },
    { ip: '10.10.29.92', riskLevel: 'High', alerts: 1, category: 'High Risk', cloudNetwork: 'Galactic-VPC' },
    { ip: '10.10.29.101', riskLevel: 'High', alerts: 4, category: 'Malware', cloudNetwork: 'BluSky-Prod-VPC' },
    { ip: '10.10.29.127', riskLevel: 'High', alerts: 3, category: 'C2', cloudNetwork: 'TitanLink-VNET' },
    { ip: '10.10.29.3', riskLevel: 'High', alerts: 2, category: 'C2', cloudNetwork: 'StarFleet-VNET' },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact columnDefs={columnDefs} rowData={rowData}></AgGridReact>
    </div>
  );
};

export default CloudResources;
