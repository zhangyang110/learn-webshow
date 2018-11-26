#!/bin/bash

sed -ig 's/教育/少儿/g' dist/index.html
sed -ig 's/style=\"background-color:#251351\"/style=\"background-color:#151e55\"/g' dist/index.html
sed -ig 's/other/android/g' dist/index.html
rsync -rv dist/ root@192.168.1.244:/home/programs/tv/integration/tv_webshow/child
sed -ig 's/android/other/g' dist/index.html
rsync -rv dist/ root@192.168.1.244:/home/programs/tv/integration/tv_webshow/child_web

sed -ig 's/少儿/教育/g' dist/index.html
sed -ig 's/style=\"background-color:#151e55\"/style=\"background-color:#251351\"/g' dist/index.html
sed -ig 's/other/android/g' dist/index.html
rsync -rv dist/ root@192.168.1.244:/home/programs/tv/integration/tv_webshow/education
sed -ig 's/android/other/g' dist/index.html
rsync -rv dist/ root@192.168.1.244:/home/programs/tv/integration/tv_webshow/education_web