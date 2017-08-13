var gitOps = require("../core/git-ops");

function initButtons() {
    var projectButton = document.querySelector("#project-submit");
    var loginButton = document.querySelector("#login");
    var addButton = document.querySelector("#git-add");
    var statusButton = document.querySelector("#git-status");
    var pushButton = document.querySelector("#git-push");
    var pullButton = document.querySelector("#git-pull");
    var cloneButton = document.querySelector("#git-clone");
    var commitButton = document.querySelector("#git-commit");

    loginButton.onclick = function() {
        gitOps.login(document.querySelector("#login-user").value, document.querySelector("#login-pass").value)
        .then( (data) => {
            //
        }).catch( (err) => {
            //
        });
    };

    projectButton.onclick = function(){
        gitOps.projectDir(document.querySelector("#project-path").value).then( () => {
            //
        }).catch((err) => {
            console.error(err);
        });
    }

    addButton.onclick = function () {
        gitOps.add(document.querySelector("#git-add-path").value, function(err, data) {
            if (err) console.log(err);
            console.log(data);
        });
    };

    statusButton.onclick = function () {
        gitOps.status([], function(err, data) {
            if (err) console.log(err);
            console.log(data);
        });
    };

    pushButton.onclick = function () {
        gitOps.push("master","master").then( (data) => {
            console.log(data);
        }).catch( (err) => {
            console.log(err);
        });
    };

    pullButton.onclick = function () {
        gitOps.pull([], function(err, data) {
            if (err) console.log(err);
            console.log(data);
        });
    };

    cloneButton.onclick = function () {
        gitOps.clone(document.querySelector("git-clone-url").value, function(err, data) {
            if (err) console.log(err);
            console.log(data);
        });
    };

    commitButton.onclick = function () {
        gitOps.commit(".", function(err, data) {
            if (err) console.log(err);
            console.log(data);
        });
    };
}

initButtons();
