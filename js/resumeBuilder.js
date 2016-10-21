
//var name = "Juan Orozco"
//var formattedName = HTMLheaderName.replace("%data%", name);

//var role = "Co-founder";
//var formattedRole = HTMLheaderRole.replace("%data%", role);

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);

var bio = {
    "name" : "Juan Orozco",
    "role" : "Co-founder",
    "contacts" : {
        "mobile" : "044-555-503-0213",
        "email" : "juan.orozco@gmail.com",
        "location" : "InvestaBank"
    },
    "welcomeMessage" : "Saludos",
    "skills" : [
    "Awesomness", "Trading", "Portfolio Managment",
    "Investments"
    ],
    "bioPic" : "images/fry.jpg"
}

var education = {
    "schools" : [
    {
        "name": "ITESM",
        "city": "CEM",
        "degree": "Bachelors Degree",
        "majors": "Industrial Engineering",
        "dates": 2010,
        "url": "http://www.cem.itesm.mx"
    },
    {
        "name": "CFA Institute",
        "city": "Charlottesville, Virginia, US",
        "degree": "2017 Level II Candidate",
        "majors": "CFA",
        "dates": 2017,
        "url": "www.cfainstitute.org"
    }
    ]
}

var work = {
    "jobs": [
    {
        "employer": "Investa Bank",
        "title": "Fixed Income Trader",
        "dates": "Mar.2013 - May.2016",
        "description": "Trading of Fixed Income Instruments"
    },
    {
        "employer": "Citi",
        "title": "Fixed Income Trader",
        "dates": "Feb.2011 - Mar.2013",
        "description": "Trading of Fixed Income Instruments for private bank"
    }
    ]
}

var projects = {
    "projects":[
    {
        "title": "Purge the Universe",
        "dates": "2016",
        "description": "La Li Lu Le Lo",
        "images":[
        "https://i.imgur.com/MCntfgJ.jpg",
        "https://i.ytimg.com/vi/DV7g58wHpQ8/maxresdefault.jpg"
        ]
    }
    ]
}

function prependToHeader(what, how) {
    $("#header").prepend( how.replace("%data%", what) );
}

function appendToResume(what, how, where) {
    $(where).append( how.replace("%data%", what) );
}

prependToHeader(bio.role, HTMLheaderRole);
prependToHeader(bio.name, HTMLheaderName);
appendToResume(bio.contacts.mobile, HTMLmobile, "#topContacts");
appendToResume(bio.contacts.email, HTMLemail, "#topContacts");
//appendToResume(bio.contacts.github, HTMLgithub, "#topContacts");
//appendToResume(bio.contacts.twitter, HTMLtwitter, "#topContacts");
appendToResume(bio.contacts.location, HTMLlocation, "#topContacts");
appendToResume(bio.bioPic, HTMLbioPic, "#header");
appendToResume(bio.welcomeMessage, HTMLwelcomeMsg, "#header");
//$("#header").append(HTMLskillsStart);
//appendToResume(bio.skills, HTMLskills, "#skills");



if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var numberSkill = 0;
    while(numberSkill < bio.skills.length){
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[numberSkill]);
    $("#skills").append(formattedSkill);
    numberSkill = numberSkill + 1;
    }
}
function displayWork(){
for (job in work.jobs) {
    //create new div for work experience
    $("#workExperience").append(HTMLworkStart);
    //concat employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
}
}
displayWork();
$(document).click(function(loc){
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
})


projects.display = function() {
    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0){
            for (image in projects.projects[project].images){
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

projects.display();

function inName(name){
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] +" "+name[1];
}

$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);

