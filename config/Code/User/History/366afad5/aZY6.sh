#!/bin/sh

echo "$(/usr/sbin/ifconfig enp9s0 | grep "inet " | awk '{print $2}')"