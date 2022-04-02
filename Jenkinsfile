pipeline {
    agent none
    stages { 
        stage('build') {
        agent { 
            docker { 
                    image 'rafcasto/nodejs-build'
                    args '-e NPM_TOKEN=$NPM_TOKEN'    
                }
            }
            steps {
                sh 'npm install'
                sh 'yarn package'
            }
            steps {
               sh 'echo $NPM_TOKEN'
               sh 'npm publish'
            }
        }
       
     
    }
}
