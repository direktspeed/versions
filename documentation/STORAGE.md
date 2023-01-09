# Storage
Storage is a importent topic when you version your content and binary assets.
To get best results you should use a container compatible filesystem that supports
versioning via appendOnly patterns. @direktspeed/versions uses @direktspeed/storage
which is by default compatible to all kinds of patterns on posix systems we suggest.
btrfs as this is the most stable we would suggest to use seed drives.

when you checkout a worktree run the versions btrfs-lfs to link the text storage pointers.

the mount operation will overlay the defined locations with appendOnly mounts that can get commited
and so update the tracked managed references. 

It is like git-lfs and git-annex but in a more generic way that also works with local storage
If you want to work with remote storage use @direktspeed/storage as sync manager or remote storage.

If you got any existing lfs storage implementations use them and incremental switch to @direktspeed/storage if your ready to do so or you maybe even need to do so to archive your goals more fast.

You can activate Storage support via your component-manager 

and remember for all text none binary content you should not use storage directly use @direktspeed/versions and manage also references to stored content inside storage in @direktspeed/versions to get 
all features and the best expirence with the lowest possible work overhead.

## Git users
also use https://github.com/lemanschik/husky2 if you want to speed up your git driven workflows.