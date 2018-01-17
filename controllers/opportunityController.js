const mongoose = require('mongoose');
const moment = require('moment');
const Opportunity = mongoose.model('opportunityModel');

exports.createOpportunity = async (req, res, next) => {
    const request = req.body;

    const opportunity = { 
        title: request.title,
        description: request.description,
        location: request.location,
        startDate: parseInt(request.startDate),
        endDate: parseInt(request.endDate),
        skillsRequired: request.skillsRequired.split(',')
    };


    let newEntry = await new Opportunity(opportunity).save();

    

    res.send(newEntry);
    
}