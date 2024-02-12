import React, { useEffect, useState } from 'react'
import '../css/Seekers_Home.css'
import Seekers_Lists from './Seekers_Lists'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { getInitColorSchemeScript } from '@mui/material';
import axios from 'axios';
function Seekers_Home() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetchJobs();
  }, [filters]);

  const fetchJobs = () => {
    axios.get('https://job-vista.onrender.com/seeker_home', { params: filters })
      .then(response => setJobs(response.data))
      .catch(error => console.error('Error fetching jobs:', error));
  };

  const handleSliderChange = (event, newValue) => {
    setFilters({ ...filters, salary: newValue });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFilters({ ...filters, [name]: checked });
  };

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
      <FormControlLabel control={<Checkbox  />}className='color-black' label="Pune" />
      <FormControlLabel control={<Checkbox />} className='color-black'label="Noida" />
      <FormControlLabel control={<Checkbox />} className='color-black'label="Banglore" />
    </FormGroup>
    </div>
    <div>
      <h4>Job Type</h4>
    <FormGroup  style={{margin:'2rem'}}>
      <FormControlLabel control={<Checkbox  />} className='color-black'label="Full Time" />
      <FormControlLabel control={<Checkbox />} className='color-black'label="Internship" />
    </FormGroup>
    </div>
    <div>
      <h4>Company</h4>
    <FormGroup style={{margin:'2rem'}}>
      <FormControlLabel control={<Checkbox />}className='color-black' label="Microsoft" />
      <FormControlLabel control={<Checkbox />}className='color-black' label="Netflix" />
      <FormControlLabel control={<Checkbox />}className='color-black' label="Google" />
    </FormGroup>
    </div>
        </div>
        </div>
      <div className='list'>
      {jobs.map((job, index) => (
          <Seekers_Lists
            key={index}
            heading={job.job_title}
            image={job.company_logo_link}
            duration={job.job_type}
            location={job.location}
            salary={job.salary}
            skills={job.requiredskills}
          />
        ))}
       
       
      </div>
    </div>
    </>
  )
}

export default Seekers_Home
