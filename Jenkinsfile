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
                slackSend color: '#BADA55', message: "build success '${$BUILD_TIMESTAMP}'", channel: 'build-cicd'
                emailext (
      subject: "STARTED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
      body: """<p>STARTED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
        <p>Check console output at &QUOT;<a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]</a>&QUOT;</p>""",
      recipientProviders: [[$class: 'DevelopersRecipientProvider']]
    )
                
            }
    }
    }
}
