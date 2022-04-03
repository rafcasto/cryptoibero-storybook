pipeline {
    agent none
     environment {
        npm_config_cache = 'npm-cache'
        registry = "rafcasto/cryptoibero-storybook"
        registryCredential = 'rafcasto-dockerhub-crls'
        dockerImage = ''
    }
    stages { 
        stage('npm-build') {
        agent { 
            docker { 
                    image 'rafcasto/nodejs-build'
                    args '-e NPM_TOKEN=$NPM_TOKEN -u root:root'    
                }
            }
            steps {
                sh 'npm install'
                sh 'yarn package'
                sh 'echo $NPM_TOKEN'
                sh 'npm publish'
            }
            
        }
        stage('docker-build'){
            agent docker { 
                    image 'rafcasto/nodejs-build'
                    args '-v /var/run/docker.sock:/var/run/docker.sock:rw -v /usr/bin/docker:/usr/bin/docker:rw -u root:root'    
                }
            }
            steps {
                script {
                    dockerImage = docker.build registry
                }
            }
            steps {
              script {
                docker.withRegistry( '', registryCredential ) {
                        dockerImage.push()
                    }
                }
            }
        }
    }
}
