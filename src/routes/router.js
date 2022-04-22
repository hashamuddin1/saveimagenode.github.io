const express = require("express");
const router = new express.Router();
const { allcategory, cat_subcat, updatecategory, updatenotification, delnotification, allnotification, addcategory, addnotification, delcategory } = require("../controllers/product_controller")
    // const multer = require("multer");
    // //{dest:'uploads/'} ek naya upload ka folder bana dega k jaha images store hogi
    // const upload = multer({ dest: '/uploads/' })

//GET ALL CATEGORY
router.get("/allcategory", allcategory)

//GET ALL NOTIFICATION
router.get("/allnotification", allnotification)

//INSERT CATEGORY
// router.post("/addcategory", [upload.single('image')], addcategory)
router.post("/addcategory", addcategory)

//INSERT NOTIFICATION 
router.post("/addnotification", addnotification)

//DELETE CATEGORY
router.delete("/delcategory/:id", delcategory)

//DELETE NOTIFICATION
router.delete("/delnotification/:id", delnotification)

//UPDATE CATEGORY
router.put("/updatecategory/:id", updatecategory)

//UPDATE NOTIFICATION
router.put("/updatenotification/:id", updatenotification)

//GET SUBCATEGORY IN TERMS OF CATEGORY
router.get("/cat_subcat/:id", cat_subcat)

module.exports = router