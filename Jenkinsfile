pipeline {
    agent {
        docker {
            image 'node:12.14.0'
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}
