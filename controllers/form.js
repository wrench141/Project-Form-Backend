const FormModel = require("../models/form")

const saveFormData = async(req, res) => {
    try {
        const body = req.body;
        const newForm = new FormModel({
            data: body.data
        });
        await newForm.save();
        
        console.log(body)
        res.status(200).json({data: "Form submitted"})

    } catch (error) {
        console.log(error)
        res.status(500).json({"data": "server error"})
    }
}

const getCompleteData = async(req, res) => {
    try {
        const data = await FormModel.find();
        res.status(200).json({data: data})
    } catch (error) {
        console.log(error)
        res.status(500).json({"data": "server error"})
    }
}

const getInfo = async(req, res) => {
    try {
        const id = req.params.id;
        const data = await FormModel.findById(id);
        console.log(id, data)
        if(!data){
            res.status(404).json({data: "record not found"})
        }else{
            res.status(200).json({data: data})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({"data": "server error"})
    }
}

const deleteData = async(req, res) => {
    try {
        const id = req.params.id;

    } catch (error) {
        console.log(error)
        res.status(500).json({"data": "server error"})
    }
}

const modifyData = async(req, res) => {
    try {
        const id = req.params.id;

    } catch (error) {
        console.log(error)
        res.status(500).json({"data": "server error"})
    }
}

module.exports = {saveFormData, getCompleteData, getInfo, deleteData, modifyData}