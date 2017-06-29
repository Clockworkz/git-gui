const exec = require("child_process").exec;
const path = require('path').dirname(require.main.filename)
const process = require("process");

module.exports = {
    runCommand(command, callback) {
        console.log("running " + command + " in " + path);
        let cmd = exec(command, {cwd: path}, (err, stdout, stderr) => {
            if (err) {
                console.log(err)
            }
            if (stdout) {
                console.log(stdout);
            }
            if (stderr) {
                console.log(stderr);
            }
            callback(null, stdout);
        });
    },

    clone(url, callback) {
        let clone = this.runCommand("git clone " + url, (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data);
        });
    },

    add(filename, callback) {
        let add = this.runCommand("git add "+ filename, (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data);
        });
    },

    push(args, callback) {
        let push = this.runCommand("git push", (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data);
        });
    },

    pull(args, callback) {
        let pull = this.runCommand("git pull", (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data);
        });
    },

    status(args, callback) {
        let status = this.runCommand("git status", () => {});
    }
}