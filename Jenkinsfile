pipeline {
     agent { docker 
        { 
            image 'rafcasto/nodejs-build'
            args '-e NPM_TOKEN=$NPM_TOKEN' 
        } 
     }
     environment {
        npm_config_cache = 'npm-cache'
    }
    stages {
        stage('build') {
            steps {
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
                sh 'git config  user.email "info@opennet.co.nz"'
                sh 'git config  user.name "Jenkins Build"'
                 catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE')
                {
                   sh 'git tag -d $(git tag -l)'
                }
                sh 'npm version minor'
                sh 'npm publish'
            }
        }
         stage('push') {
            steps {
                sh 'git push origin HEAD:master --force'
            }
        }

    }
    post {
        // Clean after build
        always {
            cleanWs(cleanWhenNotBuilt: false,
                    deleteDirs: true,
                    disableDeferredWipeout: true,
                    notFailBuild: true,
                    patterns: [[pattern: '.gitignore', type: 'INCLUDE'],
                               [pattern: '.propsfile', type: 'EXCLUDE']])
        }
    }
    
}
