(function() {

    var data = [
        {
            name: 'CSS Peek',
            description: 'Allow peeking to css ID and class strings from html files to CSS.',
            author: 'Pranay Prakash',
            url: 'https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek',
            downloads: 4039646,
            stars: 3.5,
            price: 0,
            selector: 'p1'
        },
        {
            name: 'Path Intellisense',
            description: 'Visual Studio Code plugin that autocompletes filenames.',
            author: 'Christian Kohler',
            url: 'https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense',
            downloads: 9378525,
            stars: 5,
            price: 0,
            selector: 'p2'

        }
    ];

    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString();
        }

        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        }
    }
    
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    document.write(today);


    var getEl = function (id) {
        return document.getElementById(id);
    }

    var writePackageInfo = function(package) {
        var selector = package.selector,
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + '-description'),
        authEl = getEl(selector + '-author'),
        downloadEl = getEl(selector + '-downloads'),
        starsEl = getEl(selector + '-stars');

        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
    }

    for (var i =0; i < data.length; i++){
        var package = new Package(data[i]);
        writePackageInfo(package);
    }

}());