(function() {
    function displaySearchResults(results, store) {
        var searchResults = document.getElementById('search-results');

        if (results.size > 0) { // Are there any results?
            var appendString = '';

            results.forEach(function(item) {
                appendString += '<li><a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
                appendString += '<p>' + item.content.substring(0, 150) + '...</p></li>';
            });

            searchResults.innerHTML = appendString;
        } else {
            searchResults.innerHTML = '<li>No results found</li>';
        }
    }

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');

        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');

            if (pair[0] === variable) {
                return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
            }
        }
    }

    function searchXMD(searchTerm) {
        var results = new Set();

        for(var key in window.store) {
            for(var item in window.store[key]) {
                if(window.store[key][item].indexOf(searchTerm) !== -1) {
                    results.add(window.store[key]);
                }
            }
        }

        return results;
    }

    var searchTerm = getQueryVariable('query');

    if (searchTerm) {
        document.getElementById('search-box').setAttribute("value", searchTerm);
        console.log(searchTerm);
        var results = searchXMD(searchTerm); // Get lunr to perform a search
        displaySearchResults(results, window.store); // We'll write this in the next section
    }
})();
