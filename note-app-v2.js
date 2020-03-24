const fs = require('fs')
const argv = require('yargs').argv



//list all note
if(argv._[0]==='list' && argv._.length === 1){
 
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

else if(argv._[0]==='add' && argv.title  && argv.body  ) {
   
    const newtitle= argv.title,newbody=argv.body;
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
else if(argv._[0]==='remove' && argv.title!=='' ){

        const rmvtitle=argv.title;
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

else if(argv._[0]==='read' && argv.title!=='')
{

        const readtitle=argv.title;
        fs.readFile('./list.json', 'utf8', function (erreur, data){
            if(erreur)
            throw erreur;
            var monJson = JSON.parse(data)
            var newlist = monJson.filter(el=> el.title===readtitle)
           console.log(newlist)
    
        })
    
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