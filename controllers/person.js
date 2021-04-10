const Person = require('../models/person');

exports.index = async (request, response,next) =>{
    try{
        const people = await Person.find();

        response.status(200).json(people);
    } catch (error){
        next(error);
    }
};

exports.create = async (request, response, next) => {
    try{
        const{
            firstName,
            lastName
        } = request.body;

        const person = await Person.create({
            firstName,
            lastName
        });

        response.status(200).json({
            message: "Successfully created a person",
            status: "success",
            person

        });

    } catch (error){
        next(error);
    }
}