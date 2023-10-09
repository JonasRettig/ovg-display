#!/usr/bin/bash
echo ------------------------------------------------------------------
date
PATH=/home/adm-lokal/.config/nvm/versions/node/v20.7.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/local/games:/usr/games
cd /home/adm-lokal/ovg-display/ovg-display
git checkout main
git pull
npm install
npm run build
serve -s build
