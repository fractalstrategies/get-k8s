import { useState } from 'react'

import RowRadioButtonsGroup from '../components/radioRow'

import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

export default function Services(props) {
  const [profile, setProfile] = useState()
  const [numOfApps, setNumOfApps] = useState(0)
  const [numOfServ, setNumOfServ] = useState(0)
  const [numOfDBs, setNumOfDBs] = useState(0)
  const [numOfAPIs, setNumOfAPIs] = useState(0)

  // Expected Monthly Savings (ems)
  const emsApps = numOfApps * 100
  const emsServ = numOfServ * 300
  const emsDBs = numOfDBs * 200
  const emsAPIs = numOfAPIs * 500
  const emsTotal = emsApps + emsServ + emsDBs + emsAPIs

  return (
    <div style={{ backgroundColor: '#44444' }}>
      <h1>Value Calculator</h1>
      <RowRadioButtonsGroup
        label='Select Profile'
        options={{
          'Sole Developer': 'sd',
          'Small Business': 'sb',
          'App / Platform': 'ap',
          'Other': 'ot',
        }}
        cb={setProfile}
      />

      <Paper style={{ width: '75%', margin: 'auto', height: '100px', display: 'flex', justifyContent: 'space-evenly',  alignItems: 'center' }}>
        <TextField variant='filled' type='number' label='# of Apps' onChange={e => setNumOfApps(e.target.value)} />
        <TextField variant='filled' type='number' label='# of Services' onChange={e => setNumOfServ(e.target.value)} />
        <TextField variant='filled' type='number' label='# of Databases' onChange={e => setNumOfDBs(e.target.value)} />
        <TextField variant='filled' type='number' label='# of APIs' onChange={e => setNumOfAPIs(e.target.value)} />
      </Paper>

      {profile && (numOfApps || numOfServ || numOfDBs || numOfAPIs) ? <div>
        <h1>Total Expected Montly Savings</h1>
        <p>${emsTotal} per month</p>
      </div> : null}
    </div>
  )
}
