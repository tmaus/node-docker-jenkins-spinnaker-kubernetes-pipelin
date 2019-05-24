pipeline {
    agent any
    tools {nodejs "nodejs"}
    stages {        
        stage('Build & Test') { 
            steps {
                sh 'npm install' 
                sh 'npm test'
            }
        }        
    }
}