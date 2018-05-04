pipeline {
  agent {
    docker {
      image 'ruby'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh '''bundle install

curl -sL https://deb.nodesource.com/setup_9.x | bash -
apt-get install -y nodejs

export LC_ALL="C.UTF-8"
export LANG="en_US.UTF-8"
export LANGUAGE="en_US.UTF-8"

jekyll build'''
      }
    }
    stage('Deploy') {
      steps {
        sh '''apt-get install -y rsync
rsync -avz -e "ssh -i /root/.ssh/id_rsa_jenkins" ./_site/ shepherddog@firehawk.shepherddog.co:/var/www/blog.shepherddog.co/public_html/'''
      }
    }
    stage('Notify') {
      steps {
        mail(subject: 'Shepherd Dog Site Deployed', body: '---', to: 'david@shep.dog')
      }
    }
  }
}