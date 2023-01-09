# Cheatsheet
- note that git checkout got replaced by git switch -c creates new branch

remove remote branch
```
git push local -d myb/name/name
```

Push to other branch then current on remote
```sh
git push github -u HEAD:development
```

git clone refrenced
```
git clone -s -o local /.versions ./new-project
git switch -c prefix/new-project

echo "# new-project " > README.md
git add README.md && git commit -m "Add: README.md"

## here we change the tracking branch so we can git -b prefix/ when working with that.
git push local -u HEAD:prefix/new-project
git push github HEAD:main

# After that you set your remote tracking branch so you can use 
git push local and everything works as long as you did not switched the branch that you wanted to push


# git clone -s --branch development --recurse-submodules --single-branch
```

Use git show, git ls-tree and other commands to speed up your workflow if your git user.

Git is your number one tool as DevOps Engineer.




