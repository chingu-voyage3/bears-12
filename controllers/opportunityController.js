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

    const convertedDate = moment.unix(opportunity.endDate).format("MM/DD/YYYY hh:mm:ss")

    console.log(convertedDate);

    if(opportunity.startDate >= opportunity.endDate) {
        
        const error = new Error(`The end date ${convertedDate} cannot be before the start date`);
        next(error);
    }
    else if(opportunity.description.length < 140 || opportunity.length > 15000) {
        const error = new Error('The description needs to be between 140 and 15,000 characters');
        next(err);
    }
    
    let newEntry = await new Opportunity(opportunity).save();

    

    res.send(newEntry);
    
}