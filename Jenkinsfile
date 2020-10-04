pipeline {
    agent {
        docker {
            image 'node:12.14.0'
        }
    }
    stages {
        stage('Install') { 
            steps {
                sh 'npm install' 
            }
        }
         stage('Build') { 
            steps {
                sh 'npm build' 
            }
        }
        stage("speak") {
            steps {
                slackSend color: '#BADA55', message: 'build notification', channel: 'build-cicd'
            }
    }
    }
}
