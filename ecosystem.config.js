module.exports = {
  apps: [
    {
      name: 'medusa-server',
      script: 'npm',
      args: 'run start',  // Fixed: was missing 'run'
      cwd: '/home/davinlore-admin/htdocs/admin.davinlore.com/medusa/.medusa/server',
      instances: 1,
      exec_mode: 'fork',  // Changed from 'cluster' to 'fork' for single instance
      
      // Load environment from .env file
      env_file: '/home/davinlore-admin/htdocs/admin.davinlore.com/medusa/.env',
      
      env: {
        NODE_ENV: 'production',
        PORT: 9000,
      },
      
      // Logging
      log_file: '/home/davinlore-admin/htdocs/admin.davinlore.com/medusa/logs/medusa-combined.log',
      out_file: '/home/davinlore-admin/htdocs/admin.davinlore.com/medusa/logs/medusa-out.log',
      error_file: '/home/davinlore-admin/htdocs/admin.davinlore.com/medusa/logs/medusa-error.log',
      
      // Auto-restart settings
      watch: false,
      autorestart: true,
      restart_delay: 1000,
      max_restarts: 10,
      min_uptime: '10s',
      
      // Memory and performance
      max_memory_restart: '1G',
    }
  ]
};
