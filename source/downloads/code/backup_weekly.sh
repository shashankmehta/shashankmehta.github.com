#!/bin/bash
DEST=/media/shashank/phoenix_backup/snapshot_weekly;
SOURCE=/home/shashank/; # Don't miss the trailing '/' !
EXCLUDE=backup_exclude.txt;

if [ $(mount | grep -c /media/shashank/phoenix_backup) != 1 ]
  then
  notify-send -u critical BACKUP "Yo BAMF! Time for weekly backup. But you need to mount the drive first! Shoo!"
  echo "Yo BAMF! You need to mount the drive first! Shoo!"
else
  echo "Got it! Getting the cranes!"
  echo "FROM ".$SOURCE."   TO   ".$DEST
  rsync -a --delete --delete-excluded --exclude-from $EXCLUDE $SOURCE $DEST 
  echo "That was easy. DONE!"
fi