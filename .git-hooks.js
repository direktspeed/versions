// 	path = refs/github/direktspeed/versions/development
// 	url = git@github.com:direktspeed/versions
// 	branch = development
// github:direktspeed/versions/development
// Ignoring git remotes using configured remotes.
// const remotes = ['git@github.com:direktspeed/versions'].map(repo=>[repo+'#main',repo+'#development']);
// remotes.flatMap(ref=> `git push ${ref.split('#')[0]} HEAD:${ref.split('#')[1]}`);

// const downloadGitPrompt = () => fs.promises.readFile('/.git/git-prompt.sh').catch(()=>
// fetch('https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh').then(b=>
// b.text()).then(content=>fs.promises.writeFile('/.git/git-prompt.sh', content)));

// git ls-tree -z HEAD | git mktree # creates tree object.
// # Terminal Prompt: Show git branch name at command prompt add to .bashrc
// # Include git branch, use PROMPT_COMMAND (not PS1) to get color output (see git-prompt.sh for more)
// source /.git/git-prompt.sh 
// Husky2 Config see: https://github.com/lemanschik/husky2
// export GIT_PS1_SHOWCOLORHINTS=true
// export PROMPT_COMMAND='__git_ps1 "\w" "\n\\\$ "'

git = new Proxy({},{ get: (_target, _prop, _receiver) => 
    () => console.log(process.argv) });

const isBinaryOrText = (path) => ['text','binary'][`${child_process
    .execSync(`grep -qI '' ${new URL(path,'file:')}; echo $?`)}`[0]];

// isBinaryOrText(path) === 'binary' && [child_process.execSync(`sha512sum ${absolutePathToTarget}`).split(' ')]
// .map(([sha512]) => ['/.git/storage/sha512',sha512.slice(0,1),sha512.slice(2,3), sha512.slice(4)].join('/'))
// .map((hashPath) => [`mv ${absolutePathToTarget} ${hashPath}`,`ln -s ${hashPath} ${absolutePathToTarget}`]
// .map(child_process.execSync));

//crypto.subtle()

// If we push a worktree branch indicated by not beeing prefixed
// with github or lemanschik or local or private
// default: local/

// local/*
// drop the github local prefixes and make them individual repo branches to reduce 1lvl tree.

// checkout all submodules including branches into reference dirs
// */branch


