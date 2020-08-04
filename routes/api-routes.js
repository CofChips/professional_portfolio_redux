

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'refri.track@gmail.com',
    pass: process.env.EMAIL_PASS 
  }
});

function mailOptions (name, email, content){  
  let mailOptions = {
        from: 'test@something.com',
        to: `qiwei.mod@gmail.com`,
        subject: `Hey Chris, you received an email from ${name}`,
        text: `Name: ${name}
        Email: ${email}
        Content: ${content}`
      };
      return mailOptions;
}


function sendMail(name, email, content){
    transporter.sendMail(mailOptions(name,email,content), function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
}
module.exports= function(app){
    app.post("/api/email", function (req, res) {
        console.log(req.body)
        var nameSend = req.body.name;
        var emailSend = req.body.email;
        var contentSend = req.body.content;
        sendMail(nameSend,emailSend,contentSend);
        return res.json(true);
    })
    
}
