const PORT =process.env.PORT || 3030

import axios from "axios"
import express from "express"
import Data from './PeopleModal.js'



const app  = express()

app.get('/' , (req ,res ) => {
    res.json('People API Avaliable in EndPoint of /api')
})


app.get('/api' , (req ,res ) => {

    try {
        res.json(Data())
    } catch (error) {
        res.json({success:false , message:'Unable to retrieve data,Please try again'})
    }
})


app.get('/api/isActive/:isAcitve' , async (req ,res ) => {
    

    try {
        let reqData = req.params.isAcitve

        console.log(Boolean(reqData));

        axios.get('http://localhost:3030/api/').then(result => {
            let allData = result.data


        console.log(allData);

        let foundData = allData.filter(el => el.isAcitve === Boolean(reqData))

            res.json(foundData)
        })



        
    } catch (error) {
        res.json({success:false , message:'Unable to retrieve data,Please try again'})
    }
})

app.listen(PORT , () => console.log(`Server Running on : ${PORT}`))