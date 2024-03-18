const { matchedData } = require("express-validator")
const { tracksModel } = require("../models");
const {handleHttpError} = require("../utils/handleError")


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */

const getItems = async (req, res) => {

    try{
        const data = await tracksModel.find({});
        res.send({data})
    }catch(e){
        handleHttpError(res, 'ERROR_GET_ITEMS');
    }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */

const getItem = async (req, res) => {
    try {
        req = matchedData(req)
        const {id} = req;
        const data = await tracksModel.findById(id);
        res.send({data})
    }catch(e){
        handleHttpError(res, "ERROR_GET_ITEM")
    }
};
    

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */

const createItems = async (req, res) => {
    try {
        const body =  matchedData(req)
        const data = await tracksModel.create(body);
        res.send({ data })
    }catch (e) {
        handleHttpError(res, 'ERROR_CREATE_ITEMS');
    }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */

const updateItems = async (req, res) => { 
    try {
        const {id, ...body} =  matchedData(req)
        console.log("ID", id)
        console.log("Body", body)
        const data = await tracksModel.findOneAndUpdate(
        {id, id}
        );
    res.send({ data })
    }catch (e) {
    handleHttpError(res, 'ERROR_UPDATE_ITEMS');
}};
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */

const deleteItems = async (req, res) => {
    try {
        req = matchedData(req)
        const {id} = req;
        const data = await tracksModel.deleteOne({_id:id});
        res.send({ data })
        console.log(data)

    }catch(e){
        console.log(e)
        handleHttpError(res, "ERROR_DELETE_ITEM")
    }

};


module.exports = { getItems, getItem, createItems, updateItems, deleteItems }