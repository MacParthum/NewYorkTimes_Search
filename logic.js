var authKey = "3BjhUi86GMAIrd3GTGFH5vCPIlKCcATh";

var queryTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;

var queryURLBase = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;

var articleCounter = 0;

function runQuery(numArticles, queryURL) {

    $.ajax({ url: queryURL, method: "GET" })
        .done(function (NYTData) {
            console.log(queryURL);
            console.log(NYTData);

        })

}

$('#searchBtn').on('click', function () {

    queryTerm = $('#search').val().trim();
    console.log(queryTerm);

    var newURL = queryURLBase + "&q=" + queryTerm;
    console.log(newURL);

    runQuery(10, newURL);

    return false;
})