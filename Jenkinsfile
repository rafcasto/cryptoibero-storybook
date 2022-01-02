pipeline {
     agent { docker { image 'rafcasto/nodejs-build' } }
     environment {
        npm_config_cache = 'npm-cache'
    }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
    }
}