pipeline {
    agent none
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
    }
}
