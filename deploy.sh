quasar build
sudo rm -f /var/www/menu_barluna/js/*
sudo rm -f /var/www/menu_barluna/css/*
sudo cp -r dist/spa/* /var/www/menu_barluna/
sudo chown -R www-data. /var/www/menu_barluna/
