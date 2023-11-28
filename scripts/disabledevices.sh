#!/usr/bin/bash
'
echo ------------------------------------------------------------------
date
echo '1-1' | sudo tee /sys/bus/usb/drivers/usb/unbind
sudo ifconfig eth0 down
'
