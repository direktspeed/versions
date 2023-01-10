# Cheatsheet
- note that git checkout got replaced by git switch -c creates new branch
`localBranch(+remteRef)#branchOrRef)`
`direktspeed/versions+github#master`
`direktspeed/versions+github#development`
`direktspeed/versions#master`
`direktspeed/versions`
`direktspeed/versions#!git@github.com#master`

remove remote branch
```
git push local -d myb/name/name
```

Push to other branch then current on remote
```sh
git push github -u HEAD:development
```

git clone refrenced:
as rule of thumb you need to create sub directorys for your branches if they are not the main. 
if it is the main it makes no sense to put it into a subdir but worktrees or checkouts that you add
should represent a branch as by default. 
```
## existing
git clone -s -o origin -b development /.versions ./new-project#development
## new
git clone -s -o origin /.versions ./new-project
git switch -c prefix/new-project#branch

echo "# new-project " > README.md
git add README.md && git commit -m "Add: README.md"

git push origin -u HEAD:prefix/new-project/branch
git push github HEAD:main

# After that you set your remote tracking branch so you can use 
git push origin and everything works as long as you did not switched the branch that you wanted to push


# git clone -s --branch development --recurse-submodules --single-branch
```

Use git show, git ls-tree and other commands to speed up your workflow if your git user.

Git is your number one tool as DevOps Engineer.




