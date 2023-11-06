#!/usr/bin/bash
echo ------------------------------------------------------------------
date
kill $(ps aux | grep chromium | awk '{print $2}')
PATH=/home/adm-lokal/.config/nvm/versions/node/v20.7.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/local/games:/usr/games
export DISPLAY=:0
export XAUTHORITY=/home/adm-lokal/.Xauthority
chromium-browser --kiosk --hide-crash-restore-bubble
