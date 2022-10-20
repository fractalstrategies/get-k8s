import { useState } from 'react'

import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

import InputUnit from '../components/InputUnit'

export default function CalculatorHR(props) {
  const [SD, setSD] = useState(10)
  const [DE, setDE] = useState(2)
  const [DA, setDA] = useState(1)
  const [EX, setEX] = useState(1)
  const [SDs, setSDs] = useState(150)
  const [DEs, setDEs] = useState(180)
  const [DAs, setDAs] = useState(130)
  const [EXs, setEXs] = useState(200)
  const deptSD = SD * SDs
  const deptDE = DE * DEs
  const deptDA = DA * DAs
  const deptEX = EX * EXs
  const costHR = deptSD + deptDE + deptDA + deptEX
  const savRateSD = 0.1
  const savRateDE = 0.75
  const savRateDA = 0.2
  const savRateEX = 0.1
  const savSD = deptSD * savRateSD
  const savDE = deptDE * savRateDE
  const savDA = deptDA * savRateDA
  const savEX = deptEX * savRateEX
  const saveHR = savSD + savDE + savDA + savEX

  return (
    <Paper style={{ width: '80%', margin: 'auto', display: 'flex', flexDirection: 'column', padding: 20 }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <TextField variant='filled' type='number' value={SD} label='Software Developers' onChange={e => setSD(e.target.value)} />
        <TextField variant='filled' type='number' value={DE} label='DevOps Engineers' onChange={e => setDE(e.target.value)} />
        <TextField variant='filled' type='number' value={DA} label='Database Administrators' onChange={e => setDA(e.target.value)} />
        <TextField variant='filled' type='number' value={EX} label='IT Executives' onChange={e => setEX(e.target.value)} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
        <InputUnit variant='filled' label='SD Salary' value={SDs} unit='k/yr' onChange={setSDs} />
        <InputUnit variant='filled' label='DE Salary' value={DEs} unit='k/yr' onChange={setDEs} />
        <InputUnit variant='filled' label='DA Salary' value={DAs} unit='k/yr' onChange={setDAs} />
        <InputUnit variant='filled' label='EX Salary' value={EXs} unit='k/yr' onChange={setEXs} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
        <InputUnit variant='standard' width={10} label='Dept Cost' value={deptSD} unit='k/yr' disabled={true} />
        <InputUnit variant='standard' width={10} label='Dept Cost' value={deptDE} unit='k/yr' disabled={true} />
        <InputUnit variant='standard' width={10} label='Dept Cost' value={deptDA} unit='k/yr' disabled={true} />
        <InputUnit variant='standard' width={10} label='Dept Cost' value={deptEX} unit='k/yr' disabled={true} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
        <InputUnit variant='outlined' label='Total IT HR Cost' value={costHR} unit='k/yr' disabled={true} />
      </div>

      <br /><hr style={{ width: '100%' }} /><br />

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
        <InputUnit variant='standard' width={8} label='SD Gain' value={savRateSD * 100} unit='%' disabled={true} />
        <InputUnit variant='standard' width={8} label='DE Gain' value={savRateDE * 100} unit='%' disabled={true} />
        <InputUnit variant='standard' width={8} label='DA Gain' value={savRateDA * 100} unit='%' disabled={true} />
        <InputUnit variant='standard' width={8} label='EX Gain' value={savRateEX * 100} unit='%' disabled={true} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
        <InputUnit variant='standard' width={10} label='Dept Saved' value={savSD} unit='k/yr' disabled={true} />
        <InputUnit variant='standard' width={10} label='Dept Saved' value={savDE} unit='k/yr' disabled={true} />
        <InputUnit variant='standard' width={10} label='Dept Saved' value={savDA} unit='k/yr' disabled={true} />
        <InputUnit variant='standard' width={10} label='Dept Saved' value={savEX} unit='k/yr' disabled={true} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
        <InputUnit variant='outlined' width={20} label='Total IT HR Saved' value={saveHR} unit='k/yr' disabled={true} />
      </div>
    </Paper>
  )
}