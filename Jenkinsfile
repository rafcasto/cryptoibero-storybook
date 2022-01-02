pipeline {
     agent { docker 
        { 
            image 'rafcasto/nodejs-build'
            args '-e NPM_TOKEN=$NPM_TOKEN' 
        } 
     }
     environment {
        npm_config_cache = 'npm-cache'
    }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
        stage('package') {
            steps {
                sh 'yarn package'
            }
        }
        stage('publish') {
            steps {
                sh 'git config  user.email "info@opennet.co.nz"'
                sh 'git config  user.name "Jenkins Build"'
                sh 'npm version minor'
                sh 'npm publish'
            }
        }
         stage('push') {
            steps {
                
                sh 'git push'
            }
        }

    }
}
