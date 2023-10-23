Add this to crontab on the host:
```
#at reboot a current version of the site is built from the repo and served
@reboot sleep 60 && bash  /home/adm-lokal/ovg-display/ovg-display/scripts/startup.sh >> /home/adm-lokal/ovg-display/deploy.log 2>&1
#the default chromium browser is opened in fullscreen on reboot
@reboot sleep 60 && bash  /home/adm-lokal/ovg-display/ovg-display/scripts/browserstart.sh >> /home/adm-lokal/ovg-display/browserdeploy.log 2>&1
#every day during the week at 9pm the server and browser are shut down
0 21 * * 1,2,3,4,5 /home/adm-lokal/ovg-display/shutdown.sh >> /home/adm-lokal/ovg-display/shutdown.log 2>&1
#every day during the week at 6am the server and browser are started
0 6 * * 1,2,3,4,5 bash  /home/adm-lokal/ovg-display/ovg-display/scripts/startup.sh >> /home/adm-lokal/ovg-display/deploy.log 2>&1
0 6 * * 1,2,3,4,5 bash  /home/adm-lokal/ovg-display/ovg-display/scripts/browserstart.sh >> /home/adm-lokal/ovg-display/browserdeploy.log 2>&1
```


Add this to crontab on any recievers:
```
# on restart the default browser is openend in kiosk mode and we pull the current git changes 
@reboot sleep 30 bash  /home/adm-lokal/ovg-display/ovg-display/scripts/update.sh >> /home/adm-lokal/ovg-display/update.log 2>&1
@reboot sleep 60 && bash  /home/adm-lokal/ovg-display/ovg-display/scripts/browserstart.sh >> /home/adm-lokal/ovg-display/browserdeploy.log 2>&1
#every day during the week at 9pm the server is shut down
0 21 * * 1,2,3,4,5 /home/adm-lokal/ovg-display/shutdown.sh >> /home/adm-lokal/ovg-display/shutdown.log 2>&1
#every day during the week at 6am the browser is started and we pull the current git changes 
0 6 * * 1,2,3,4,5 bash  /home/adm-lokal/ovg-display/ovg-display/scripts/browserstart.sh >> /home/adm-lokal/ovg-display/browserdeploy.log 2>&1
0 6 * * 1,2,3,4,5 bash  /home/adm-lokal/ovg-display/ovg-display/scripts/update.sh >> /home/adm-lokal/ovg-display/update.log 2>&1
```

For both device types it is necessary to set the default home page to the one you want to render (e.g. localhost:3000/the IP shown when running the serve -s build command) in the browser settings beforehand.
