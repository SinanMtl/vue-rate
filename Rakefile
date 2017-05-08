desc 'Task description'
task :deploy do
  system "npm run build"
  system "rm -rf /tmp/rate-dist"
  system "cp -a dist /tmp/rate-dist"
  system "git checkout gh-pages"
  system "cp -a /tmp/rate-dist/ ."
end