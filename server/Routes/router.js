import { Router } from "express";
import express from 'express'
import {Resend} from 'resend'

const router = Router()

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/mail',async(req,res)=>{
    const {name,number,email,message} = req.body;
    const resend = new Resend('re_SNuAzHik_88KhHwEYLwvihhnMwqn9T3jN');
    console.log(name,number,email,message)
    try{
        const response = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'rajsumit1793@gmail.com',
            subject:'Contact Mail',
            html:`<p>Name: ${name}</p>
            <p>Number: ${number}</p>
            <p>Email: ${email}</p>
            <p>message: ${message}</p>`
        })
        
        console.log(`Successfully sent the mail ${response.data}`)
        
        res.status(200).send({message:'ok'})
    }
    catch(error){
        console.log("Error while sending the mail",error)
        res.status(400).send({message:'error'})
    }
})
export default router