const puppeteer = require('puppeteer');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');


var data=[]


module.exports.home=function(req,res){

    if(data.legth != 0){
        data.splice(0, data.length);
    }

    return res.render('home',{
        title: 'Resume'
    })
}



module.exports.add=function(req,res){

    console.log(data.length);
    console.log(data.typeof);

    if(data.length != 0){
        let keys = Object.keys(data);
        for (let key in keys) {
            delete data[key];
          }

          
    }

    data.push({
        name:req.body.name,
        number:req.body.number,
        email:req.body.email,
        add:req.body.address,
        skill:req.body.skill,
        certificate:req.body.certification,
        school:req.body.school,
        degree:req.body.degree,
        title:req.body.title,
        desc:req.body.desc,
        career:req.body.obj,
        linkedin:req.body.linkedin,
        git:req.body.git




    })

    console.log(data.typeof);
    return res.redirect('/resume')
}

module.exports.resume=function(req,res){

    console.log(data);
    return res.render('resume',{
        title:"resume",
        my_data:data
    })
}


module.exports.print=async(req,res)=>{

    try {
        
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://localhost:8012/resume');
        const elementHandle = await page.$('#element');

        const css = fs.readFileSync('./assets/css/resume.css', 'utf8');
        const html = await page.evaluate(element => element.outerHTML, elementHandle)

        const newPage = await browser.newPage();
        await newPage.setContent(`<style>${css}</style>${html}`)


        const pdf = await newPage.pdf({
            // format: 'A4',
            preferCSSPageSize: true,
            printBackground: true,
            fullPage: true,
            width: '170mm',
            padding:{
                top: '0mm',
              bottom: '0mm',
              left: '0mm',
              right: '0mm'
            },
            margin: {
              top: '0mm',
              bottom: '0mm',
              left: '0mm',
              right: '0mm'
            }
        });

        await browser.close();
        res.set('Content-Type', 'application/pdf');
        res.send(pdf);
    
        
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }


}