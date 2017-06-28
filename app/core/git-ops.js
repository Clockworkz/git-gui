const {spawn} = require("child_process");

class gitCmds {
    constructor(git, project, branch) {
        this.git = git;
        this.project = project;
        this.branch = branch;
    }

    clone = (url) => {
        clone = spawn("git clone", url);
    };
}