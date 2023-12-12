#!/bin/sh

echo $(/usr/sbin/ifconfig tun0 | grep "inet " | awk '{print $2}')