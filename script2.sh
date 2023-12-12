#!/bin/bash

# Obtener la salida de xrandr y filtrar los nombres de los monitores
monitor_names=($(xrandr | grep -w connected | awk '{print $1}'))


# Reemplazar las líneas INTERNAL_MONITOR y EXTERNAL_MONITOR en el archivo de configuración
sed -i "s/INTERNAL_MONITOR=.*/INTERNAL_MONITOR=${monitor_names[0]}/" ~/.config/bspwm/bspwmrc
sed -i "s/EXTERNAL_MONITOR=.*/EXTERNAL_MONITOR=${monitor_names[1]}/" ~/.config/bspwm/bspwmrc

echo "Proceso completado. Archivo actualizado."

