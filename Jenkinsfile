pipeline {
     agent { docker { image 'rafcasto/nodejs-build' } }

    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
    }
}