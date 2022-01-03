pipeline {
     agent { docker 
        { 
            image 'rafcasto/nodejs-build'
            args '-e NPM_TOKEN=$NPM_TOKEN -e GIT_TOKEN=$GIT_TOKEN' 
        } 
     }
     environment {
        npm_config_cache = 'npm-cache'
    }
    stages {
        stage('build') {
            steps {
                sh 'git checkout master'
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
                sh 'echo $NPM_TOKEN'
                sh 'git config  user.email "rafcasto@gmail.com"'
                sh 'git config  user.name "rafcasto"'
                 catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE')
                {
                   sh 'git tag -d $(git tag -l)'
                }
                sh 'npm publish'
                sh 'npm version minor'
            }
        }
         stage('push') {
            steps {
              
                sh 'git push "https://$GIT_TOKEN@github.com/rafcasto/cryptoibero-storybook.git"'
            }
        }

    }
    post {
        // Clean after build
        always {
            cleanWs()
        }
    }
    
}
