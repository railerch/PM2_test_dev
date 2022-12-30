module.exports = {
  apps: [{
    script: 'server01/src/index.js',
    watch: true,
    name: 'Server01'
  }, {
    script: 'server02/src/index.js',
    watch: true,
    name: 'Server02'
  }, {
    script: 'server03/index.js',
    watch: true,
    name: 'Server03'
  }
  ],

  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
