const fs = require('fs')




if(process.argv[2].toString()==='list' ){
    fs.readFile('./list.json', 'utf8', function (erreur, data)
    {
        if (erreur)
        throw erreur; // Vous pouvez gérer les erreurs avant de parser le JSON
        var monJson = JSON.parse(data);
        console.log(monJson)
    });
}



//node .js add -t newtiltle -b newbody 
// or
// node .js add --tille newtiltle --body newbody
else if(process.argv[2].toString()==='add' && (process.argv[3]==='-t' || process.argv[3]==='--title')  && (process.argv[5]==='-b' || process.argv[5]==='-body')   && process.argv.length ===7) {

    const newtitle=process.argv[4],newbody=process.argv[6];
    var newnote = [{
        title:newtitle,
        body:newbody
    }]
    fs.readFile('./list.json', 'utf8', function (erreur, data){
        if(erreur)
        throw erreur;
        var monJson = JSON.parse(data).concat(newnote) // array of object

        fs.writeFile('./list.json', JSON.stringify(monJson), function (err) {
            if (err) return console.log(err);
          });
    });   
}



// node Note-app.js remove --tille title
// node Note-app.js remove -t title
 else if(process.argv[2].toString()==='remove' && (process.argv[3]==='-t' || process.argv[3]==='--title') && process.argv.length ===5){

        const rmvtitle=process.argv[4];
        fs.readFile('./list.json', 'utf8', function (erreur, data){
            if(erreur)
            throw erreur;
            var monJson = JSON.parse(data)
            var newlist = monJson.filter(el=> el.title!==rmvtitle)
            fs.writeFile('./list.json', JSON.stringify(newlist), function (err) {
                if (err) return console.log(err);
              });

        })

}

// node Note-app.js read --tille title
// node Note-app.js read -t title
else if(process.argv[2].toString()==='read' && (process.argv[3]==='-t' || process.argv[3]==='--title') && process.argv.length ===5){

    const readtitle=process.argv[4];
    fs.readFile('./list.json', 'utf8', function (erreur, data){
        if(erreur)
        throw erreur;
        var monJson = JSON.parse(data)
        var newlist = monJson.filter(el=> el.title===readtitle)
       console.log(newlist)

    })

}

else if(process.argv.length < 3) {
    console.log('Options: \n'+
    '--help, -h       Show help\n'+
    '--title, -t  Title of note\n'+
    '--body, -b   Body of note\n'
    )
}

else {
    console.log('\n\n---------FOR ADDING NEW LIST :\n'+
    'node Note-app.js add -t newtiltle -b newbody\n'+ 
     'or\n'+
     'node Note-app.js add --tille newtitle --body newbody\n\n\n'+
    '---------FOR LIST ALL NOTE\n'+
    'node Note-app.js list\n\n\n'+
    '---------FOR ROMOVE A NOTE\n'+
    'node Note-app.js remove --tille title\n'+
    'or\n'+
    'node Note-app.js remove -t title\n\n\n'+
    '---------FOR READ A SPECIFIC NOTE\n'+
    'node Note-app.js read --tille title\n'+
    'or\n'+
    'node Note-app.js read -t title\n\n\n')

}



    
    //let newnote=[['2',{"title":"node","body":"learn-react"}]]
    // fs.readFile('./list.json', 'utf8', function (erreur, data)
    // {
        // if (erreur)
        // throw erreur; // Vous pouvez gérer les erreurs avant de parser le JSON
        // var monJson = JSON.parse(data);   //object
        // let monJson2 = JSON.stringify(monJson); 
        // let arr=Object.entries(monJson).concat(newnote)
        
        
            
        // fs.writeFile('./list.json', JSON.stringify(arr), function (err) {
        //     if (err) return console.log(err);
        //   });


        //console.log(monJson2.push(newnote[0]))
        // monJson = monJson.push(newnote)
        // let monJson = JSON.stringify(monJson);

        
    //     if (erreur) throw erreur;
    //     var monJson = JSON.parse(data);  //monJson object
    //     //let monJson2 = JSON.stringify(monJson);  //monJsong2 String without espace
    //     let arr=Object.entries(monJson);
    //     monJson.push({"title":newtitle,"body":newbody})
    //     fs.writeFile('./list.json', JSON.stringify(monJson), function(err) {
    //          if (err) return console.log(err);

    //       });

    //     console.log(monJson)


        




        
    // });
    // }