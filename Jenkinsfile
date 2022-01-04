pipeline {
     agent { docker 
        { 
            image 'rafcasto/nodejs-build'
            args '-e NPM_TOKEN=$NPM_TOKEN -e GIT_TOKEN=$GIT_TOKEN -v /var/run/docker.sock:/var/run/docker.sock:rw -v /usr/bin/docker:/usr/bin/docker:rw -v /usr/local/bin/kubectl:/usr/local/bin/kubectl  -v /var/lib/jenkins/kube/kubeconfig.yml:/home/node/kube/kubeconfig.yml' 
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
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE'){
                    sh 'docker rmi $(docker images)'
                }
            }
        }

        stage('deploy'){
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE'){
                   sh 'kubectl delete svc storybook-svc -n storybook --kubeconfig=/home/node/kube/kubeconfig.yml'
                   sh 'kubectl delete -n storybook  deployment storybook-dep --kubeconfig=/home/node/kube/kubeconfig.yml'
                }
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE'){
                   sh 'kubectl create namespace storybook --kubeconfig=/home/node/kube/kubeconfig.yml'
                }
                sh 'kubectl apply -f storybook-deployment.yaml -n storybook --kubeconfig=/home/node/kube/kubeconfig.yml'
                sh 'kubectl apply -f storybook-service.yaml -n storybook --kubeconfig=/home/node/kube/kubeconfig.yml'
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
