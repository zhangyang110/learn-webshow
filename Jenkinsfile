def notify(String step, String result){
    def apiUrl = "https://oapi.dingtalk.com/robot/send?access_token=e975ba8a8aa185d005a42922a7a4cc1eb675d77c28826862429749011358313c"
    def payload = "{\"msgtype\":\"link\",\"link\":{\"title\":\"${env.JOB_NAME}/${env.BUILD_NUMBER}\",\"text\":\"${step} result: ${result}\",\"messageUrl\":\"${env.BUILD_URL}\"}}"
    sh "curl -s -H \"Content-type: application/json\" -X POST -d '${payload}' ${apiUrl}"
}

node{
    stage('checkout'){
        checkout scm
    }

    stage('build'){
        try {
            sh "yarn && yarn run build"
            notify("build", "success")

        }
        catch(Exception e) {
           notify("build", "failed")
           throw e;
        }
    }

    stage('publish'){
        try {
            // sh "rsync -rv dist/ root@192.168.1.244:/home/programs/tv/develop/tv_webshow"//开发环境
            sh "sed -ig 's/教育/少儿/g' dist/index.html"
            sh "sed -ig 's/style=\"background-color:#251351\"/style=\"background-color:#151e55\"/g' dist/index.html"
            sh "sed -ig 's/other/android/g' dist/index.html"
            sh "rsync -rv dist/ root@192.168.1.244:/home/programs/tv/integration/tv_webshow/child"//测试环境
            sh "sed -ig 's/android/other/g' dist/index.html"
            sh "rsync -rv dist/ root@192.168.1.244:/home/programs/tv/integration/tv_webshow/child_web"//测试环境
            sh "sed -ig 's/少儿/教育/g' dist/index.html"
            sh "sed -ig 's/style=\"background-color:#151e55\"/style=\"background-color:#251351\"/g' dist/index.html"
            sh "sed -ig 's/other/android/g' dist/index.html"
            sh "rsync -rv dist/ root@192.168.1.244:/home/programs/tv/integration/tv_webshow/education"//测试环境
            sh "sed -ig 's/android/other/g' dist/index.html"
            sh "rsync -rv dist/ root@192.168.1.244:/home/programs/tv/integration/tv_webshow/education_web"//测试环境
            //sh "rsync -rv dist/ root@192.168.1.244:/home/programs/tv/staging/tv_webshow" //准生产环境
            notify("publish", "success")

        }
        catch(Exception e) {
           notify("publish", "failed")
           throw e;
        }
    }
}
