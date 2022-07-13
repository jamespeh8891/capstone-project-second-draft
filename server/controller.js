const emailArr = []





module.exports = {
    
    heartBtn: (req, res) => {
        res.status(200).send("Item added to favorites");
    },

    saveEmail: (req, res) => {
        const { email } = req.body
        emailArr.push(email)
        res.status(200).send("Email saved")
        
        
    },
   
}