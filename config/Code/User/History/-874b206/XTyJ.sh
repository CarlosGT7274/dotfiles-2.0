#!/bin/sh

IFACE=$(/usr/sbin/ifconfig tun0 | grep "inet " | awk '{print $2}')

echo $(/usr/sbin/ifconfig tun0 | grep "inet " | awk '{print $2}')