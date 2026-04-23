module.exports = {
  apps: [
    {
      name: 'crimsonzone',
      script: './server/index.js',

      instances: '1',
      exec_mode: 'fork',

      watch: false,
      autorestart: true,

      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },

      env_development: {
        NODE_ENV: 'development',
        PORT: 3000,
      },

      error_file: './logs/error.log',
      out_file: './logs/out.log',
      merge_logs: true,

      log_date_format: 'YYYY-MM-DD HH:mm:ss',

      max_memory_restart: '512M',
      restart_delay: 4000,

      kill_timeout: 5000,
      listen_timeout: 10000,
    }
  ]
};