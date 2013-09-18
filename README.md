jnco.co
=======

Currently just pulls in Instagram posts tagged with #jncocam. Uses Middleman.

## [Middleman](https://github.com/middleman/middleman)

```shell
cd MY_PROJECT
gem install bundler       # May already be installed
bundle install --binstubs # Install Middleman and dependencies (Requires XCode Command-Line tool)
```

From within project directory:

```shell
bin/middleman server      # Start the preview server
bin/middleman build       # Build project to build/
```

By default, `middleman build` will generate a testing build with the compiled site.