import { useState } from 'react'

import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

import RowRadioButtonsGroup from '../components/RadioRow'
import CalculatorHR from './CalculatorHR'

export default function Calcualtor(props) {
  const [profile, setProfile] = useState('Small Business')

  // Infra
  const [numOfApps, setNumOfApps] = useState(1)
  const [numOfServ, setNumOfServ] = useState(3)
  const [numOfDBs, setNumOfDBs] = useState(2)
  const [numOfAPIs, setNumOfAPIs] = useState(1)

  const [costApp, setCostApp] = useState(200)
  const [costSrv, setCostSrv] = useState(400)
  const [costDBs, setCostDBs] = useState(150)
  const [costAPI, setCostAPI] = useState(175)

  // Expected Monthly Savings (ems)
  const emsApps = numOfApps * 100
  const emsServ = numOfServ * 300
  const emsDBs = numOfDBs * 200
  const emsAPIs = numOfAPIs * 500
  const emsTotal = emsApps + emsServ + emsDBs + emsAPIs

  return (
    <div style={{ backgroundColor: '#556', padding: 30 }}>
      <h1>Value Calculator</h1>
      <RowRadioButtonsGroup
        label='Select Profile'
        options={[
          'Sole Developer',
          'Small Business',
          'App / Platform',
          'Other',
        ]}
        value={profile}
        cb={setProfile}
      />
      <p>{profile}</p>

      {profile !== 'Sole Developer' ? <CalculatorHR /> : null}

      <br />

      <Paper style={{ width: '80%', margin: 'auto', display: 'flex', flexDirection: 'column', padding: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
          <TextField variant='filled' type='number' value={numOfApps} label='Apps' onChange={e => setNumOfApps(e.target.value)} />
          <TextField variant='filled' type='number' value={numOfServ} label='Services' onChange={e => setNumOfServ(e.target.value)} />
          <TextField variant='filled' type='number' value={numOfDBs} label='Databases' onChange={e => setNumOfDBs(e.target.value)} />
          <TextField variant='filled' type='number' value={numOfAPIs} label='APIs' onChange={e => setNumOfAPIs(e.target.value)} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <TextField variant='filled' type='number' value={costApp} label='$/app/mo' onChange={e => setCostApp(e.target.value)} />
          <TextField variant='filled' type='number' value={costSrv} label='$/service/mo' onChange={e => setCostSrv(e.target.value)} />
          <TextField variant='filled' type='number' value={costDBs} label='$/db/mo' onChange={e => setCostDBs(e.target.value)} />
          <TextField variant='filled' type='number' value={costAPI} label='$/api/mo' onChange={e => setCostAPI(e.target.value)} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
          <TextField disabled variant='standard' type='number' value={((numOfApps * costApp) + (numOfServ * costSrv) + (numOfDBs * costDBs) + (numOfAPIs * costAPI)) * 12 / 1000} label='IT HW Cost ($k/yr)' />
        </div>

        <br /><hr style={{ width: '100%' }} /><br />

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
          <TextField disabled variant='standard' type='number' value={0.15} label='Est Savings' />
          <TextField disabled variant='standard' type='number' value={0.20} label='Est Savings' />
          <TextField disabled variant='standard' type='number' value={0.05} label='Est Savings' />
          <TextField disabled variant='standard' type='number' value={0.25} label='Est Savings' />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
          <TextField disabled variant='standard' type='number' value={numOfApps * costApp * 0.15} label='Dept Savings' />
          <TextField disabled variant='standard' type='number' value={numOfServ * costSrv * 0.20} label='Dept Savings' />
          <TextField disabled variant='standard' type='number' value={numOfDBs * costDBs * 0.05} label='Dept Savings' />
          <TextField disabled variant='standard' type='number' value={numOfAPIs * costAPI * 0.25} label='Dept Savings' />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
          <TextField disabled variant='standard' type='number' value={((numOfApps * costApp * 0.15) + (numOfServ * costSrv * 0.20) + (numOfDBs * costDBs * 0.05) + (numOfAPIs * costAPI * 0.25)) * 12 / 1000} label='IT HR Savings ($k/yr)' />
        </div>
      </Paper>

      {profile && (numOfApps || numOfServ || numOfDBs || numOfAPIs) ? <div>
        <h1>Total Expected Montly Savings</h1>
        <p>${emsTotal} per month</p>
      </div> : null}
    </div>
  )
}
