pipeline {
     agent none
     environment {
        npm_config_cache = 'npm-cache'
        registry = "rafcasto/cryptoibero-storybook"
        registryCredential = 'rafcasto-dockerhub-crls'
        dockerImage = ''
    }
    stages { 
        stage('build') {
        agent docker 
        { 
            image 'rafcasto/nodejs-build'
            args 'NPM_TOKEN=$NPM_TOKEN'
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
