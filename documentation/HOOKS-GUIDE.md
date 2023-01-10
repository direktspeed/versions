# Hooks
Component Manager and husky2 as also git do share the same hook system.
This makes it easy to deploy and run your software no matter where you are 
at present with your project. you can incremental adopt via git hooks and husky2 usage.
or use the component manager exclusiv. No matter what path you choose all keeps fully
interop able and code and operational overhead will reduce over time exponential.

## Usecases
Build projects via vite, webpack, rollup, npm

deploy a pre-commit hook that runs and verifys the build and if it successes
creates a dist directory which is inside the .gitignore for good reason then

use in your hook $(git diff --cached --name-status) or --name-only

deploy a post-commit hook that checks if the directory exists and is valid
if so git add .
```js
git['pre-commit'] = () => {
//     cd $(git rev-parse --show-toplevel)
//     # verify release then add files bypass .gitignore
//     git add yourfile
}

// or use post commit and skip above git add that checks 
// for existence and amend verifyed by pre-commit
git['post-commit'] = () => {
//     cd $(git rev-parse --show-toplevel)
//     git add yourfile
//     git commit --amend -C HEAD --no-verify
}
```

## changeId generation
the change id can most best generated via hashing the commit message it self without the two lines
then inserting only the change id the git commit hash then reflects change-id+ signedoff

```git rev-parse --show-toplevel``` get current worktree
```git rev-parse --git-dir``` gets current .git dir
```git rev-parse --abbrev-ref HEAD``` gets current branch
```git diff --cached --name-only``` gets all changed files to
```git diff-tree --no-commit-id --name-status -r HEAD``` only files in current commit

```js
git["prepare-commit-msg"] = () => {
    // verify committer.
    const FILE_PATH=process.argv[1];
    const FILE_CONTENT=fs.promises.readFile(FILE_PATH);
    // BRANCH="$(git rev-parse --abbrev-ref HEAD)" if (process.argv[2] === 'messsage') {};
    fs.promises.writeFile(FILE_PATH, `${FILE_CONTENT}\n
Change-Id: ${new Date()}
Signed-off-by: A. U. Thor <author@example.com>`);
}
```

as rule .versions/refs/* contains files with one line only githashes .