const express = require("express");
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;


//creating schema of category
const category_schema = new mongoose.Schema({
    category_Name: {
        type: String,
        required: true,
        trim: true
    },
    is_Active: {
        type: Boolean,
        required: true,
        trim: true
    },
    parent_Id: {
        type: Array,
        trim: true
    },
    created_On: {
        type: Date,
        required: true,
        trim: true
    },
    image: {
        type: Array,
        pool: {
            min: 1,
            max: 5
        }
    }

})

//creating schema of notification
const notification_schema = new mongoose.Schema({
    receiving_Date: {
        type: Date,
        required: true,
        trim: true
    },
    seen_Date: {
        type: Date,
        required: true,
        trim: true
    },
    icon: {
        type: String,
    },
    user_Id: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    link: {
        type: String,
    },
    link_Seen_Date: {
        type: Date,
    }

})

//creating collection
const Category_detail = new mongoose.model('Category_detail', category_schema)
const Notification_detail = new mongoose.model('Product_detail', notification_schema)

//export collection
module.exports = { Category_detail, Notification_detail };