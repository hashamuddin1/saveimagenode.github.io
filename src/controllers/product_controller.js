const express = require('express');
const { Notification_detail, Category_detail } = require("../models/schema");
const app = express();
const multer = require("multer");
const upload = multer({ dest: '/uploads/' }).array('files', 2)
const fs = require("fs");

//View all categories
const allcategory = async(req, res) => {
    try {
        const getcat = await Category_detail.find({})
        res.status(201).send(getcat) //koi bhi data insert krne k liye
            //status uska 201 hona chahye
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

//View all notification
const allnotification = async(req, res) => {
    try {
        const getnot = await Notification_detail.find({})
        res.status(201).send(getnot) //koi bhi data insert krne k liye
            //status uska 201 hona chahye
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

//create category
const addcategory = async(req, res) => {
    try {
        const path = './uploads/' + Date.now() + '.jpeg'
        console.log(req.body)
        const imgdata = req.body.image;
        for (var i = 0; i < imgdata.length; i++) {
            userData = imgdata;
            console.log(imgdata[i]);
        }
        // to convert base64 format into random filename
        // const base64Data = imgdata.replace(/^data:([A-Za-z-+/]+);base64,/, '');
        // fs.writeFileSync(path, base64Data, { encoding: 'base64' })
        // return res.send(path);
        const addcat = new Category_detail(req.body)
        console.log(addcat);
        console.log(req.file);
        let insertcat = await addcat.save();
        res.status(201).send(insertcat) //koi bhi data insert krne k liye
            //status uska 201 hona chahye
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

//create notification
const addnotification = async(req, res) => {
    try {
        const addnot = new Notification_detail(req.body)
        console.log(addnot);
        let insertnot = await addnot.save();
        res.status(201).send(insertnot) //koi bhi data insert krne k liye
            //status uska 201 hona chahye
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

//delete category
const delcategory = async(req, res) => {
    try {
        const del = await Category_detail.findByIdAndDelete(req.params.id)

        res.send("Delete Successfully")
    } catch (e) {
        console.log(e)
        res.status(500).send(e) //server say jo error ata hay uskay liye
            //500 port hogi OR update krtay waqt 500 port hogi
    }
}

//delete notification
const delnotification = async(req, res) => {
    try {
        const delprod = await Notification_detail.findByIdAndDelete(req.params.id)

        res.send("Delete Successfully")
    } catch (e) {
        console.log(e)
        res.status(500).send(e) //server say jo error ata hay uskay liye
            //500 port hogi OR update krtay waqt 500 port hogi
    }
}


//Update Category

const updatecategory = async(req, res) => {
    try {
        const _id = req.params.id;
        const updcat = await Category_detail.findByIdAndUpdate(_id, req.body, {
            new: true //new updated value usi waqt mil jae uskay liye kia hay

        })

        res.status(201).send(updcat)
    } catch (e) {
        console.log(e)
        res.status(500).send(e) //server say jo error ata hay uskay liye
            //500 port hogi OR update krtay waqt 500 port hogi
    }
}

//UPDATE NOTIFICATION

const updatenotification = async(req, res) => {
    try {
        const _id = req.params.id;
        const updprod = await Notification_detail.findByIdAndUpdate(_id, req.body, {
            new: true //new updated value usi waqt mil jae uskay liye kia hay

        })

        res.status(201).send(updprod)
    } catch (e) {
        console.log(e)
        res.status(500).send(e) //server say jo error ata hay uskay liye
            //500 port hogi OR update krtay waqt 500 port hogi
    }
}

//SUBCATEGORY ACCORDING TO CATEGORY

const cat_subcat = async(req, res) => {
    try {
        const _id = req.params.id;
        const get_cat_sub = await Category_detail.find({ parent_Id: _id })
            // const get_cat_id = await Category_detail.find({ parent_Id: _id }).select('_id')
            // const get_cat_id_match = await Category_detail.find({ parent_Id: get_cat_id })
        const cat_name = await Category_detail.find({ _id: _id }).select('category_Name')
        res.status(201).send(({ cat_name, get_cat_sub })) //ek sath agar ek say ziada cheezain send krni hay tw
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

module.exports = { allcategory, cat_subcat, updatenotification, updatecategory, delnotification, delcategory, allnotification, addcategory, addnotification, }