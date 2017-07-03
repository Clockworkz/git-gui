var gitOps = require("../core/git-ops");

var addButton = document.querySelector("#git-add");
addButton.onclick = function () {
    gitOps.add(".", function(err, data) {
        if (err) console.log(err);
        console.log(data);
    });
};