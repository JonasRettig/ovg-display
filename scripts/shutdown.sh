#!/usr/bin/bash
kill $(ps aux | grep serve | awk '{print $2}')
kill $(ps aux | grep chromium | awk '{print $2}')
