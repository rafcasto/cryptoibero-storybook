pipeline {
     agent { docker 
        { 
            image 'rafcasto/nodejs-build'
            args '-e NPM_TOKEN=$NPM_TOKEN -e GIT_TOKEN=$GIT_TOKEN -v /var/run/docker.sock:/var/run/docker.sock:rw -v /usr/bin/docker:/usr/bin/docker:rw' 
        } 
     }
     environment {
        npm_config_cache = 'npm-cache'
        registry = "rafcasto/cryptoibero-storybook"
        registryCredential = 'rafcasto-dockerhub-crls'
        dockerImage = ''
    }
    stages {
        stage('build') {
            steps {
                sh 'git checkout master'
                sh 'npm install'
                sh 'yarn package'
            }
        }
        stage('package') {
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
                sh 'git push "https://$GIT_TOKEN@github.com/rafcasto/cryptoibero-storybook.git"'
            }
        }
        stage('Build image') {
            steps {
                script {
                    dockerImage = docker.build registry
                }
            }
        }
         stage('Push image') {
            steps {
              script {
                docker.withRegistry( '', registryCredential ) {
                        dockerImage.push()
                    }
                }
               
            }
        }

    }
    post {
        // Clean after build
        always {
            //cleanWs()
            deleteDir()
        }
    }
    
}
