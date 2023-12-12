#!/bin/sh

echo "%{F#1bbf3e} %{F#ffffff}$(/usr/sbin/ifconfig enp9s0 | grep "inet " | awk '{print $2}')%{u-}"