import express from 'express';
import Company_Register from '../models/Company_Register.js';
import Seekers_Register from '../models/Seekers_Register.js';

const router = express.Router();

// Route to register a new company
router.post('/companyname', async (req, res) => {
    try {
        const existingCompany = await Company_Register.findOne({ email_address: req.body.email_address });

        if (existingCompany) {
            return res.status(400).json();
        } else {
            const newCompany = await Company_Register.create(req.body);
            return res.status(201).json();
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});


//to register a new seeker


router.post('/seekername', async (req, res) => {
    try {
        const existingCompany = await Seekers_Register.findOne({ email_address: req.body.email_address });

        if (existingCompany) {
            return res.status(400).json();
        } else {
            const newCompany = await Seekers_Register.create(req.body);
            return res.status(201).json();
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});


//get req to check if user is registered....

router.get('/check/:userr/:email/:pass', async (req, res) => {
    var data=req.params.userr;
    if(data=='company_home')data=Company_Register;
    else data=Seekers_Register;
    try {
        const existingCompany = await data.findOne({ email_address: req.params.email ,password:req.params.pass});

        if (existingCompany) {
            return res.status(200).json({ exists: true });
        } else {
            return res.status(200).json({ exists: false });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});


export default router;
