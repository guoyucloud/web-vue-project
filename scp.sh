#! /usr/bin/expect -f

set timeout 3000
set File [lindex $argv 0]
set Target [lindex $argv 1]
set Host [lindex $argv 2]
set Port [lindex $argv 3]
set Pass [lindex $argv 4]

if { ! ([file exists /usr/bin/scp] && [file executable /usr/bin/scp])} {
    puts stderr "/usr/bin/scp does not exist or is not executable"
    exit 7
}

echo $Port
echo $File
echo $Host
echo $Target

spawn /usr/bin/scp -r -P $Port $File root@$Host:$Target
expect {
"yes/no" { send "yes\r"; exp_continue}
"password:" { send "$Pass\r" }
}
expect eof
