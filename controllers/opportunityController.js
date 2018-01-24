const mongoose = require('mongoose');
const moment = require('moment');
const Opportunity = mongoose.model('opportunityModel');

exports.createOpportunity = async (req, res, next) => {
    const request = req.body;

    let opportunity = { 
        title: request.title,
        description: request.description,
        location: request.location,
        startDate: new Date(request.startDate),
        endDate: new Date(request.endDate),
        // skillsRequired: request.skillsRequired.split(',')
    };

    
    // opportunity.startDate = opportunity.startDate.getTime() / 1000;
    // opportunity.endDate = opportunity.endDate.getTime() / 1000;
    
    console.log(opportunity);
    
    if(opportunity.startDate >= opportunity.endDate) {
        
        const error = new Error(`The end date ${convertedDate} cannot be before the start date`);
        next(error);
    }
    else if(opportunity.description.length < 140 || opportunity.length > 15000) {
        const error = new Error('The description needs to be between 140 and 15,000 characters');
        next(error);
    }
    
    let newEntry = await new Opportunity(opportunity).save().then((result) => {
        res.status(200).send({
            success: 'Opportunity was successfully saved!'
        });
    }).catch((err) => {
        res.status(500).send({
            fail: "Uh-oh looks like the server took a tumble and failed your request. Please reach out to our developers for further help"
        })  
    });

    

    
    
}