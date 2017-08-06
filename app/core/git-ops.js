const exec = require("child_process").exec;
const path = require('path').dirname(require.main.filename)
const process = require("process");

module.exports = {
    runCommand(command) {
        return new Promise( (resolve, reject) => {
            console.log("running " + command + " in " + path);
            let cmd = exec(command, {cwd: path}, (err, stdout, stderr) => {
                if (err) {
                    reject(err);
                }
                if (stdout) {
                    console.log(stdout);
                }
                if (stderr) {
                    console.log(stderr);
                    reject(err);
                }
                resolve(stdout);
            });
        });
    },

    projectDir(dir) {
        return new Promise( (resolve, reject) => {
            try{
                process.chdir(dir);
                resolve();
            }
            catch(err){
                reject(err);
            }
        });
    },

    clone(url) {
        return this.runCommand("git clone " + url);
    },

    add(filename) {
        return this.runCommand("git add "+ filename);
    },

    push(branch, tag) {
        return this.runCommand(`git push -u origin ${branch}:${tag}`);
    },

    pull(args) {
        return this.runCommand("git pull");
    },

    status(args) {
        return this.runCommand("git status");
    },

    commit(message) {
        return this.runCommand("git commit -m" + '"' + message + '"');
    }
};