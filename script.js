$(function () {
    // Grab the template script
    var theTemplateScript = $("#address-template").html();

    // Compile the template
    var theTemplate = Handlebars.compile(theTemplateScript);

    //// Define our data object
    //var context={
    //    "city": "London",
    //    "street": "Baker Street",
    //    "number": "221B"
    //};

    //var context = {
    //    "description": {
    //        "test":  "<h1>Hoi</h1>"
    //    }
    //}

    var data = {
        students: [
            { firstName: 'Robin', lastName: 'Wiszt' },
            { firstName: 'Kevin', lastName: 'Meijer' },
            { firstName: 'Stijn', lastName: 'Olthof' },
            { firstName: 'Mike', lastName: 'Olgers' }

        ]
    };

    // Pass our data to the template
    var theCompiledHtml = theTemplate(data);

    // Add the compiled html to the page
    $('.content-placeholder').html(theCompiledHtml);


});
