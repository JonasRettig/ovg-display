
#!/usr/bin/bash
echo ------------------------------------------------------------------
date
PATH=/home/adm-lokal/.config/nvm/versions/node/v20.7.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/local/games:/usr/games
cd /home/adm-lokal/ovg-display/ovg-display
git checkout main

UPSTREAM=${1:-'@{u}'}
LOCAL=$(git rev-parse @)
REMOTE=$(git rev-parse "$UPSTREAM")
if [ $LOCAL = $REMOTE ]; then
    echo "Up-to-date"
else 
	git pull
	npm install
	npm run build
fi
ls 
serve -s build
