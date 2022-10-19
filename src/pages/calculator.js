import { useState } from 'react'

import RowRadioButtonsGroup from '../components/radioRow'

import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

export default function Services(props) {
  const [profile, setProfile] = useState('sb')

  const [SD, setSD] = useState(10)
  const [DE, setDE] = useState(2)
  const [DA, setDA] = useState(1)
  const [EX, setEX] = useState(1)

  const [SDs, setSDs] = useState(150)
  const [DEs, setDEs] = useState(180)
  const [DAs, setDAs] = useState(130)
  const [EXs, setEXs] = useState(200)

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
    <div style={{ backgroundColor: '#555', padding: 25 }}>
      <h1>Value Calculator</h1>
      <RowRadioButtonsGroup
        label='Select Profile'
        value={profile}
        options={{
          'Sole Developer': 'sd',
          'Small Business': 'sb',
          'App / Platform': 'ap',
          'Other': 'ot',
        }}
        cb={setProfile}
      />

      <Paper style={{ width: '80%', margin: 'auto', display: 'flex', flexDirection: 'column', padding: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <TextField variant='filled' type='number' value={SD} label='Software Developers' onChange={e => setSD(e.target.value)} />
          <TextField variant='filled' type='number' value={DE} label='DevOps Engineers' onChange={e => setDE(e.target.value)} />
          <TextField variant='filled' type='number' value={DA} label='Database Administrators' onChange={e => setDA(e.target.value)} />
          <TextField variant='filled' type='number' value={EX} label='IT Executives' onChange={e => setEX(e.target.value)} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <TextField variant='filled' type='number' value={SDs} label='$k/yr' onChange={e => setSDs(e.target.value)} />
          <TextField variant='filled' type='number' value={DEs} label='$k/yr' onChange={e => setDEs(e.target.value)} />
          <TextField variant='filled' type='number' value={DAs} label='$k/yr' onChange={e => setDAs(e.target.value)} />
          <TextField variant='filled' type='number' value={EXs} label='$k/yr' onChange={e => setEXs(e.target.value)} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
          <TextField disabled variant='standard' type='number' value={SD * SDs} label='Dept Cost' />
          <TextField disabled variant='standard' type='number' value={DE * DEs} label='Dept Cost' />
          <TextField disabled variant='standard' type='number' value={DA * DAs} label='Dept Cost' />
          <TextField disabled variant='standard' type='number' value={EX * EXs} label='Dept Cost' />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
          <TextField disabled variant='standard' type='number' value={(SD * SDs) + (DE * DEs) + (DA * DAs) + (EX * EXs)} label='IT HR Cost ($k/yr)' />
        </div>

        <br /><hr style={{ width: '100%' }} /><br />

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
          <TextField disabled variant='standard' type='number' value={0.3} label='Est Savings' />
          <TextField disabled variant='standard' type='number' value={0.75} label='Est Savings' />
          <TextField disabled variant='standard' type='number' value={0.2} label='Est Savings' />
          <TextField disabled variant='standard' type='number' value={0.1} label='Est Savings' />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
          <TextField disabled variant='standard' type='number' value={SD * SDs * 0.3} label='Dept Savings' />
          <TextField disabled variant='standard' type='number' value={DE * DEs * 0.75} label='Dept Savings' />
          <TextField disabled variant='standard' type='number' value={DA * DAs * 0.2} label='Dept Savings' />
          <TextField disabled variant='standard' type='number' value={EX * EXs * 0.1} label='Dept Savings' />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
          <TextField disabled variant='standard' type='number' value={(SD * SDs * 0.3) + (DE * DEs * 0.75) + (DA * DAs * 0.2) + (EX * EXs * 0.1)} label='IT HR Savings ($k/yr)' />
        </div>
      </Paper>

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
