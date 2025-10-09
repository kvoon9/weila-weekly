module.exports = {
  apps: [
    {
      name: "weeklog",
      script: 'c:/Users/admin/i/weeklog/dist/cli.js',
      instances: 1,
      cron_restart: "30 18 * * *",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
      args: 'c:/Users/admin/weila c:/workspace2 --output C:/Users/admin/Desktop/weila/weekly --all',
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      merge_logs: true,
      autorestart: true,
    },
  ],
};
