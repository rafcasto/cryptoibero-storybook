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
       
        stage('package') {
            agent any
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
        

        stage('deploy'){
            agent any
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE'){
                   sh 'kubectl delete svc storybook-svc -n storybook '
                   sh 'kubectl delete -n storybook  deployment storybook-dep'
                }
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE'){
                   sh 'kubectl create namespace storybook'
                }
                sh 'kubectl apply -f storybook-deployment.yaml -n storybook'
                sh 'kubectl apply -f storybook-service.yaml -n storybook'
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
