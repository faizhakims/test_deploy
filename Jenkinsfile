pipeline {
    agent any

    environment {
        DEPLOY_DIR = "/home/hakims/Documents"
    }
    stages {
        stage ('Checkout'){
            steps { Checkout scm }
        }

        stage ('Install'){
            steps { sh 'npm Install' }
        }

        stage ('Test'){
            steps { sh 'npm test' }
        }

        stage ('Install'){
            steps {
                sh '''
                    echo "Build new DIR"
                    mkdir -p ${DEPLOY_DIR}
                    echo "Remove old"
                    rm -rf ${DEPLOY_DIR}/*
                    echo "Copy new"
                    cp -r ./* ${DEPLOY_DIR}/
                    echo "App redi"
                '''
            }
        }
    }
    
    post {
        success {
            echo "Pipeline SUCCESS: build, test, deploy OK"
        }
        failure {
            echo "Pipeline FAILED: cek log di Console Output"
        }
    }
}