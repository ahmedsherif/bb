properties([[$class: 'JiraProjectProperty'], parameters([string(defaultValue: '', description: 'domain to be scanned', name: 'domain', trim: false), string(defaultValue: '/home/admin_hookah', description: '', name: 'path', trim: false)])])
pipeline {
     agent {label 'linux'}
    stages {
        stage('Amass') {
            steps {
                sh 'amass enum -active -d ${params.domain} -o /home/admin_hookah/${params.domain} -timeout 10'
            }
        }
        stage('nmap') {
            steps {
                sh 'nmap -iL /home/admin_hookah/${params.domain} --top-ports 2000 -T4 -Pn -oA /home/admin_hookah/${params.domain}'
            }
        }
    }
}
