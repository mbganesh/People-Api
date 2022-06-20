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

        await axios.get('https://mb-people-api.herokuapp.com/api/').then(result => {
            let allData = result.data

        let foundData = allData.filter(el => el.isAcitve )
     
            res.json(allData)
        })

    } catch (error) {
        res.json({success:false , message:'Unable to retrieve data,Please try again'})
    }
})



app.get('/api/length/:length' , async (req ,res ) => {
    

    try {
        let reqData = parseInt(req.params.length)

        console.log(reqData);


        let allData = await axios.get('https://mb-people-api.herokuapp.com/api/')
        let com = allData.data.slice(0,reqData)
        res.json(com)

    } catch (error) {
        res.json({success:false , message:'Unable to retrieve data,Please try again'})
    }
})

app.get('/api/random/' , async (req ,res ) => {
    

    try {
        let allData = await axios.get('https://mb-people-api.herokuapp.com/api/')
        let com = allData.data
        res.json(com[Math.floor(Math.random() * com.length)])
    } catch (error) {
        res.json({success:false , message:'Unable to retrieve data,Please try again'})
    }
})


app.listen(PORT , () => console.log(`Server Running on : ${PORT}`))