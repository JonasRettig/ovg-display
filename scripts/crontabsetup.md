Add this to crontab on the host:
#at reboot a current version of the site is built from the repo and served
@reboot sleep 60 && bash  /home/adm-lokal/ovg-display/ovg-display/scripts/startup.sh >> /home/adm-lokal/ovg-display/deploy.log 2>&1
#the default chromium browser is opened in fullscreen on reboot
@reboot sleep 60 && bash  /home/adm-lokal/ovg-display/ovg-display/scripts/browserstart.sh >> /home/adm-lokal/ovg-display/browserdeploy.log 2>&1
#every day at midnight the version is rebuilt and redeployed
00 00 * * * /home/adm-lokal/ovg-display/startup.sh

Add this to crontab on any recievers:
# on restart the default browser is openend in kiosk mode
@reboot sleep 60 && bash  /home/adm-lokal/ovg-display/ovg-display/scripts/browserstart.sh >> /home/adm-lokal/ovg-display/browserdeploy.log 2>&1

For both device types it is necessary to set the default home page to the one you want to render (e.g. localhost:3000/the IP shown when running the serve -s build command) in the browsers settings beforehand.
