#!/bin/sh

# run in docker container, like dpokidov/imagemagick

rm_bkg() {
    color=$( convert "$1" -format "%[pixel:p{0,0}]" info:- )
    convert "$1" -fuzz 2% -fill "#030844" -opaque "$color" "new.$1"
    mv "new.$1" "$1"
    convert "$1" -strip "new.$1"
    mv "new.$1" "$1"
}

ls -1 | grep -Ev '\.sh$' | while read f
do
    rm_bkg "$f"
done
