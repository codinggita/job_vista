//const express=require("express")
import express from "express";
const app=express();
const port=8001;
app.use(express.json());

//registered companies
const companies = [
    { company_id: 1, company_name: 'ABC Corporation', industry: 'Technology', location: 'San Francisco, CA', size: 'Large', website: 'https://www.abccorp.com' },
    { company_id: 2, company_name: 'XYZ Enterprises', industry: 'Finance', location: 'New York, NY', size: 'Medium', website: 'https://www.xyzenterprises.com' },
    { company_id: 3, company_name: 'Acme Solutions', industry: 'Healthcare', location: 'Chicago, IL', size: 'Small', website: 'https://www.acmesolutions.org' },
    { company_id: 4, company_name: 'Tech Innovators Inc.', industry: 'Technology', location: 'Seattle, WA', size: 'Medium', website: 'https://www.techinnovators.com' },
    { company_id: 5, company_name: 'Global Finance Group', industry: 'Finance', location: 'New York, NY', size: 'Large', website: 'https://www.globalfinancegroup.co.uk' }
  ];

  //api requestes

  app.get("/companies",(req,res)=>{
    console.log("object")
    res.json(companies);
  });
  
  //search by company name
  app.get("/companies/:companyname",(req,res)=>{
    const result=companies.find((c)=>c.company_name===req.params.companyname);
    if(!result){
        res.status(404).send("conpany is not registered.");
    }
    else{
        res.json(result);
    }
  });
  //search by location
  app.get("/companiess/:location",(req,res)=>{
   const result=companies.filter(c=>c.location===req.params.location);
   if(result.length>0){
    res.json(result);
   }
   else{
    res.status(404);
    res.send("not found");
   }
  })
  //add a company
  app.post("/companies",(req,res)=>{
    console.log("object");
    companies.push(req.body);
    res.send("done");
  });

//start the sever
app.listen(port,()=>{
    console.log(`running on the port:${port}`);
})