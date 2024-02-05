import React from 'react'
import '../css/Seekers_Home.css'
import Seekers_Lists from './Seekers_Lists'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
function Seekers_Home() {
  const marks = [
    {
      value: 0,
      label: '0K',
    },
    {
      value:10,
      label:'10K'
    },
    {
      value: 40,
      label: '40K',
    },
    {
      value: 70,
      label: '70K',
    },
    {
      value: 100,
      label: '100K',
    },
  ];
  
  function valuetext(value) {
    return `${value}K`;
  }
  return (
    <>
    <div className='head'>
      <h2>"Job hunting simplified-find, apply, thrive."</h2>
    </div>
    <div className='main-body'>
      <div className='filters'>
        <h2>Filters</h2>
        <div>
          <h4>Salary</h4>
        <Box sx={{ width: 230 ,margin:'1rem'}}>
      <Slider
        aria-label="Custom marks"
        defaultValue={20}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
    <div>
      <h4>Location</h4>
    <FormGroup style={{margin:'2rem'}}>
      <FormControlLabel control={<Checkbox defaultChecked />}className='color-black' label="Pune" />
      <FormControlLabel control={<Checkbox />} className='color-black'label="Pune" />
      <FormControlLabel control={<Checkbox />} className='color-black'label="Pune" />
    </FormGroup>
    </div>
    <div>
      <h4>Job Type</h4>
    <FormGroup  style={{margin:'2rem'}}>
      <FormControlLabel control={<Checkbox defaultChecked />} className='color-black'label="Full Time" />
      <FormControlLabel control={<Checkbox />} className='color-black'label="Internship" />
    </FormGroup>
    </div>
    <div>
      <h4>Company</h4>
    <FormGroup style={{margin:'2rem'}}>
      <FormControlLabel control={<Checkbox defaultChecked />}className='color-black' label="Microsoft" />
      <FormControlLabel control={<Checkbox />}className='color-black' label="PlaySimpleGames" />
      <FormControlLabel control={<Checkbox />}className='color-black' label="Google" />
    </FormGroup>
    </div>
        </div>
        </div>
      <div className='list'>
        <Seekers_Lists heading='SDEI' image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWCZER?ver=1433&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true" duration='full time' location='Pune'salary='50K' skills='MERN'/>
        <Seekers_Lists heading='SDEI' image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWCZER?ver=1433&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true" duration='full time' location='Pune'salary='50K' skills='MERN'/>
        <Seekers_Lists heading='SDEI' image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWCZER?ver=1433&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true" duration='full time' location='Pune'salary='50K' skills='MERN'/>
        <Seekers_Lists heading='SDEI' image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWCZER?ver=1433&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true" duration='full time' location='Pune'salary='50K' skills='MERN'/>
        <Seekers_Lists heading='SDEI' image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWCZER?ver=1433&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true" duration='full time' location='Pune'salary='50K' skills='MERN'/>
        <Seekers_Lists heading='SDEI' image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWCZER?ver=1433&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true" duration='full time' location='Pune'salary='50K' skills='MERN'/>
        <Seekers_Lists heading='SDEI' image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWCZER?ver=1433&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true" duration='full time' location='Pune'salary='50K' skills='MERN'/>
      </div>
    </div>
    </>
  )
}

export default Seekers_Home
