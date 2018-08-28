wepy build --no-cache

U="$(platform url --browser=0 -y | head -1 | sed 's/\/$//' | sed 's/\//\\\//g')"
sed -i "s/window\.location\.origin/'${U}'/" dist/config.js

