import Vue from 'vue'
import '@aws-amplify/ui-vue'
import Amplify from 'aws-amplify'

Amplify.configure({
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_9Efl3uz6E',
    /* userPoolWebClientId: '5iovftiffbon4i69hc914498e1' */
    userPoolWebClientId: '1pc8upcd34s2nggthngbfk99g2',
    identityPoolId: 'us-east-1:64d3b2ad-4706-4dba-b5fb-b51a6a74c1d9',
    mandatorySignIn: false,
    oauth: {
      scope: ['email', 'openid'],
      redirectSignIn: 'http://localhost:3000/',
      redirectSignOut: 'http://localhost:3000/',
      responseType: 'code'
    }
  },
  endpoints: [
    {
      name: 'emprendimientos',
      endpoint: 'https://qnbxsn0pa7.execute-api.us-east-1.amazonaws.com/prod'
    }
  ],
  Storage: {
    AWSS3: {
      bucket: 'impulsa-uploads',
      region: 'us-east-1',
      identityPoolId: 'us-east-1:64d3b2ad-4706-4dba-b5fb-b51a6a74c1d9'
    }
  }
})
Vue.prototype.$Amplify = Amplify
