module.exports = {
  apps: [
    {
      name: 'medusa-production',
      script: 'npm',
      args: 'start',
      cwd: '/home/davinlore-admin/htdocs/admin.davinlore.com/medusa',
      env: {
        NODE_ENV: 'production',
        PORT: 9000
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true
    }
  ]
};
