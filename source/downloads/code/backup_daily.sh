#!/bin/bash
DEST1=/media/shashank/phoenix_backup/snapshot_daily;
DEST2=/media/shashank/exthdd/backup/snapshot_daily;
EXCLUDE=backup_exclude.txt;

declare -a SOURCE1=('/home/shashank/projects');
declare -a SOURCE2=('/media/media/Music' '/home/shashank/Documents' '/home/shashank/Downloads');

ITEMS1=${#SOURCE1[@]}
ITEMS2=${#SOURCE2[@]}

if [ $(mount | grep -c /media/shashank/phoenix_backup) != 1 ]
  then
  notify-send -u critical BACKUP "Yo BAMF! Time for daily backup. But you need to mount the drive first! Shoo!"
  echo "Yo BAMF! You need to mount the drive first! Shoo!"
else
  echo "Got it! Getting the cranes!"
  for ((i=0; i<$ITEMS1; i++)); do
    echo "FROM ".${SOURCE1[${i}]}."   TO   ".$DEST1
    rsync -a --delete --delete-excluded --exclude-from $EXCLUDE ${SOURCE1[${i}]} $DEST1 
    echo "That was easy. DONE!"
  done
  for ((i=0; i<$ITEMS2; i++)); do
    echo "FROM ".${SOURCE2[${i}]}."   TO   ".$DEST2
    rsync -a --delete --delete-excluded --exclude-from $EXCLUDE ${SOURCE2[${i}]} $DEST2 
    echo "That was easy. DONE!"
  done
fi