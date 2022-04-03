pipeline {
    agent none
     environment {
        npm_config_cache = 'npm-cache'
        registry = "rafcasto/cryptoibero-storybook"
        registryCredential = 'rafcasto-dockerhub-crls'
        dockerImage = ''
    }
    stages { 
    /*  stage('npm-packge') {
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
        stage('docker-package'){
            agent {
                docker { 
                    image 'rafcasto/nodejs-build'
                    args '-v /var/run/docker.sock:/var/run/docker.sock:rw -v /usr/bin/docker:/usr/bin/docker:rw -u root:root'    
                }
            }
            steps {
                script {
                    dockerImage = docker.build registry
                    docker.withRegistry( '', registryCredential ) {
                        dockerImage.push()
                    }
                }
            }
        }*/
        stage('kub8-deployment'){
            agent {
                docker { 
                    image 'rafcasto/nodejs-build'
                    args '-v /usr/local/bin/kubectl:/usr/local/bin/kubectl  -v /root/.kube/config:/home/node/.kube/config -u root:root'    
                }
            }
            steps{
                    sh 'kubectl get namespaces --kubeconfig=/home/node/.kube/config'
            }
        }
    }
}
