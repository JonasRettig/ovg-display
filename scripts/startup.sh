#!/usr/bin/bash
echo ------------------------------------------------------------------
date
PATH=/home/adm-lokal/.config/nvm/versions/node/v20.7.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/local/games:/usr/games
cd /home/adm-lokal/ovg-display/ovg-display
git checkout main
if git fetch && [ $(git rev-parse HEAD) != $(git rev-parse @{u}) ]; then
	git pull
	npm install
	npm run build
else
	echo "Up to Date"
fi 
serve -s build
bash /home/adm-lokal/ovg-display/ovg-display/scripts/browserstart.sh >> /home/adm-lokal/ovg-display/browserdeploy.log 2>&1
