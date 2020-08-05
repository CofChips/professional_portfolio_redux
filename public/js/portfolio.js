$(document).ready(function () {
    $.get("/api/portfolio").then(function (result) {
        var portfolioEls = $("#portfolioEls");
        for(var i = 0; i<result.length; i++){
            var name = result[i].name;
            var img = result[i].img;
            var live = result[i].live;
            var repo = result[i].repo;
            var site = $(`
            <div class="card col-md-4 mb-5 border-0">
                <div class="lighten">
                    <a href="${live}" target="blank">
                        <img src="assets/img/${img}" class="card-img-top image border" alt="${name}">
                    </a>
                </div>
               
                <div class="card-body text-center">
                    <p class="card-title"> <a href="${live}" target="blank" class="text-secondary"> Live site </a> |  <a href="https://github.com/CofChips/${repo}" target="blank" class="text-secondary">Repository</a></p>
                    
                </div>
            </div>
            `);
            portfolioEls.append(site);
        }
    })

});