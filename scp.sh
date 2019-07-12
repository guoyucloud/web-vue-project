#! /usr/bin/expect -f

set timeout 3000
set File [lindex $argv 0]
set Target [lindex $argv 1]
set Host [lindex $argv 2]
set Pass [lindex $argv 3]

if { ! ([file exists /usr/bin/scp] && [file executable /usr/bin/scp])} {
    puts stderr "/usr/bin/scp does not exist or is not executable"
    exit 7
}

spawn /usr/bin/scp -r -P $File root@$Host:$Target
expect {
"yes/no" { send "yes\r"; exp_continue}
"password:" { send "$Pass\r" }
}
expect eof
