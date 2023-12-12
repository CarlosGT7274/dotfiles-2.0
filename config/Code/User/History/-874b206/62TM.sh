#!/bin/sh

IFACE=$(/usr/sbin/ifconfig | grep tun0 | awk '{print $1}' | tr -d ':')

echo $(/usr/sbin/ifconfig tun0 | grep "inet " | awk '{print $2}')