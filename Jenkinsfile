pipeline {
    agent none
     environment {
        npm_config_cache = 'npm-cache'
        registry = "rafcasto/cryptoibero-storybook"
        registryCredential = 'rafcasto-dockerhub-crls'
        dockerImage = ''
       
    }
    stages { 
      stage('npm-packge') {
        agent { 
            docker { 
                    image 'node:current-alpine3.14'
                    args '-e NODE_OPTIONS=--max_old_space_size=4096 -e NPM_TOKEN=$NPM_TOKEN -u root:root'    
                }
            }
            steps {
                sh 'npm cache clean --force'
                sh 'npm install'
                sh 'yarn package'
                sh 'echo $NPM_TOKEN'
                sh 'npm publish'
            }
            
        }
        stage('docker-package'){
            agent {
                docker { 
                    image 'node:current-alpine3.14'
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
        }
        stage('kub8-deployment'){
            agent {
                docker { 
                    image 'node:current-alpine3.14'
                    args '-v /usr/local/bin/kubectl:/usr/local/bin/kubectl  -v /root/.kube/config:/home/node/.kube/config -u root:root'    
                }
            }
            steps{
                 catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE'){
                   sh 'kubectl delete svc storybook-svc -n storybook --kubeconfig=/home/node/.kube/config'
                   sh 'kubectl delete -n storybook  deployment storybook-dep --kubeconfig=/home/node/.kube/config'
                 }
                sh 'kubectl apply -f storybook-deployment.yaml -n storybook --kubeconfig=/home/node/.kube/config'
                sh 'kubectl apply -f storybook-service.yaml -n storybook --kubeconfig=/home/node/.kube/config'
            }
        }
    }
   
}
