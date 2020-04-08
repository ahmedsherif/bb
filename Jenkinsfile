pipeline {
     agent {label 'linux'}
    stages {
        stage('Amass') {
            steps {
                sh 'amass enum -active -d yahoo.com -o /home/admin_hookah/yahoo.com -timeout 10'
            }
        }
        stage('nmap') {
            steps {
                sh 'nmap -iL /home/admin_hookah/yahoo.com --top-ports 2000 -T4 -Pn -oA /home/admin_hookah/yahoo.nmap'
            }
        }
    }
}
