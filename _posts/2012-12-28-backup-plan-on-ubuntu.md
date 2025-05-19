---
layout: post
title: "Backup plan on Ubuntu"
comments: true
categories: [ubuntu, backup]
draft: true
---

I hate to use backup applications. There, I said it. This is because:
  
1. Many use proprietary/weird formats for backing up data.
2. Backing up is _always_ easy and this ease is advertised but recovery has never been easy.
3. I don't really want to handle the overload of applications settings/features/tools/services whatnots just for a simple backup.

Since I use Ubuntu on daily basis, I tried Deja Dup. As advertised, the backup process is painless. Soon I had snapshots of files for last 7 days. But one day when I tried to revert a file to a three day old snapshot the experience turned out to be horrible. It took insane amount of time to revert a 10kB file. If Deja Dup was not using its own format recovery would have been as easy as `cp /path/to/backed/up/file /path/to/actual/file`. Even when backup softwares don't use their own format, the number of options/settings that they provide are useless for me. I don't need the cruft. 

<!-- more -->

Any experienced Linux guy would have realised by now what I'm getting at. When you do remove the cruft what you get is `rsync` and `cron`. A bash script is enough to take care of my backing up needs.

## Partition setup
### Internal (640 GB HDD)

- 60 GB Windows (ntfs)
- 20 GB Ubuntu (ext4)
- 100 GB /home (ext4)
- 8 GB swap space
- 410 GB Media drive (ntfs)

### External (1TB HDD)

- 840 GB Exthdd (ntfs)
- 100 GB Phoenix_backup (encrypted ext4)

<img src="/images/posts/backup.png" style="float:right; margin: 0px 5px 10px 20px">

Phoenix_backup is used for backing up /home. I had to use ext4 for *nix permissions which are not supported on ntfs, giving up the option of having this partition accesible on any PC. Documents and Downloads are copied to ntfs partition because I might need these files on a different system also. I'm not backing up TV Series, Movies etc because I don't really care if I lose them. Most of the other files like Photographs, College Study Material etc are stored in the internal 410GB partition and backed up to 840GB Exthdd partition. The very important documents and files are also stored on Dropbox where I have ~20GB free space thanks to referrals and Spacerace!

I also do not really need multiple snapshot system. However this is possible with simple bash script, cron and rsync. Refer to [this article](http://www.mikerubel.org/computers/rsync_snapshots/) if you want to setup one. What I have now is a very primitive backup system that satisfies my needs. My only gripe is that I have to deal with two different filesystems, ext4 and ntfs. 

<div style="clear:both">&nbsp;</div>


### References

1. Rsync Snapshots by Mike Rubel [[link]](http://www.mikerubel.org/computers/rsync_snapshots/)
2. Linux Hard Disk Encryption With LUKS. [[link]](http://www.cyberciti.biz/hardware/howto-linux-hard-disk-encryption-with-luks-cryptsetup-command/)