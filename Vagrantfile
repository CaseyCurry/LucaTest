$script = <<SCRIPT
# install chrome
printf '[google-chrome]
name=google-chrome
baseurl=http://dl.google.com/linux/chrome/rpm/stable/\$basearch
enabled=1
gpgcheck=1
gpgkey=https://dl-ssl.google.com/linux/linux_signing_key.pub' /etc/yum.repos.d/google-chrome.repo
yum install -y google-chrome-stable

# install firefox
yum install -y firefox.x86_64

# install xvfb
yum install -y xorg-x11-server-Xvfb.x86_64

# install couchdb
printf '[couchdb]
name=apache-couchdb-rpm
baseurl=http://apache.bintray.com/couchdb-rpm/el\$releasever/\$basearch/
enabled=1
gpgcheck=0
repo_gpgcheck=0' > /etc/yum.repos.d/couchdb.repo
sudo yum install -y couchdb-2.1.0-1
sudo systemctl enable couchdb
sudo systemctl start couchdb

# install consul
sudo yum install -y unzip
curl -LO https://releases.hashicorp.com/consul/0.9.2/consul_0.9.2_linux_amd64.zip
unzip consul_0.9.2_linux_amd64.zip
setsid ./consul agent -dev >/dev/null 2>&1 < /dev/null &

# install nomad
curl -LO https://releases.hashicorp.com/nomad/0.6.2/nomad_0.6.2_linux_amd64.zip
unzip nomad_0.6.2_linux_amd64.zip
setsid ./nomad agent -dev >/dev/null 2>&1 < /dev/null &
SCRIPT

Vagrant.configure("2") do |config|
  config.vm.box = "centos/7"
  config.vm.provision "shell", inline: $script
end
