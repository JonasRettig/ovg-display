Add this to crontab on the host:
```
#at reboot a current version of the site is built from the repo and served with chromium
@reboot sleep 60 && bash /home/adm-lokal/ovg-display/ovg-display/scripts/startup.sh >> /home/adm-lokal/ovg-display/deploy.log 2>&1
#usb and ethernet ports are disabled on startupt
@reboot bash /home/adm-lokal/ovg-display/ovg-display/scripts/disabledevices.sh >> /home/adm-lokal/ovg-display/disabledevices.log 2>&1
#every day during the week at 9pm the server and browser are shut down
0 21 * * 1,2,3,4,5 bash /home/adm-lokal/ovg-display/ovg-display/scripts/shutdown.sh >> /home/adm-lokal/ovg-display/shutdown.log 2>&1
```


Add this to crontab on any recievers:
```
# on restart the default browser is openend in kiosk mode and we pull the current git changes 
@reboot sleep 30 bash /home/adm-lokal/ovg-display/ovg-display/scripts/update.sh >> /home/adm-lokal/ovg-display/update.log 2>&1
@reboot sleep 60 && bash /home/adm-lokal/ovg-display/ovg-display/scripts/browserstart.sh >> /home/adm-lokal/ovg-display/browserdeploy.log 2>&1
#usb and ethernet ports are disabled on startupt
@reboot bash /home/adm-lokal/ovg-display/ovg-display/scripts/disabledevices.sh >> /home/adm-lokal/ovg-display/disabledevices.log 2>&1
#every day during the week at 9pm the server is shut down
0 21 * * 1,2,3,4,5 bash /home/adm-lokal/ovg-display/ovg-display/scripts/shutdown.sh >> /home/adm-lokal/ovg-display/shutdown.log 2>&1
```

For both device types it is necessary to set the default home page to the one you want to render (e.g. localhost:3000/the IP shown when running the serve -s build command) in the browser settings beforehand.
