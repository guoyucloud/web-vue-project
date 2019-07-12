#! /usr/bin/expect -f

set timeout 3000

if { ! ([file exists /usr/bin/scp] && [file executable /usr/bin/scp])} {
    puts stderr "/usr/bin/scp does not exist or is not executable"
    exit 7
}

spawn /usr/bin/scp -r -P 11022 ./dist root@211.159.166.222:/usr/share/nginx/html/www
expect {
"yes/no" { send "yes\r"; exp_continue}
"password:" { send "\$G13820066708\r" }
}
expect eof