const { storageModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL;
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */

const getItems = async (req, res) => {
    const data = await storageModel.find({});
    res.send({data})
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */

const getItem = (req, res) => {};
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */

const createItems = async (req, res) => {
    const { body , file } = req
    console.log(file)
    const fileData = {
        filename: file.filename,
        url:`${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    res.send({data})
};
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */

const updateItems = (req, res) => {};
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */

const deleteItems = (req, res) => {};


module.exports = { getItems, getItem, createItems, updateItems, deleteItems }