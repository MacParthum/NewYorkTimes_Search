var authKey ="3BjhUi86GMAIrd3GTGFH5vCPIlKCcATh";

var queryTerm  ="";
var numResults = 0;
var startYear  = 0;
var endYear     =0;

var queryURLBase = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;

var articleCounter = 0;

function runQuery(numArticles, queryUrl) {
    $.ajax({url: queryUrl, method: "GET"})
    .done(function(NYTData) {
       console.log(NYTData);
    })

}

$('#searchBtn').on('click', function() {
    runQuery(10, "http://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=3BjhUi86GMAIrd3GTGFH5vCPIlKCcATh&q=Obama");
    
    return false;
})