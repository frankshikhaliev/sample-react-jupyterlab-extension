# sample-react-jupyterlab-extension

A great starting point for developing a React/Redux-powered JupyterLab extension.

![Demo](http://daviseford.com/blog/public/img/projects/jupyterlab-extension/demo.gif)

For more instructions and tips, [check out my blog post.](https://daviseford.com/blog/2020/04/24/react-redux-jupyterlab-extension.html)

## Requirements

* JupyterLab >= 2.0

## Install

```bash
jupyter labextension install sample-react-jupyterlab-extension
```

## Contributing

### Install

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Move to sample-react-jupyterlab-extension directory

# Install dependencies
jlpm
# Build Typescript source
jlpm build
# Link your development version of the extension with JupyterLab
jupyter labextension link .
# Rebuild Typescript source after making changes
jlpm build
# Rebuild JupyterLab after making any changes
jupyter lab build
```

You can watch the source directory and run JupyterLab in watch mode to watch for changes in the extension's source and automatically rebuild the extension and application.

```bash
# Watch the source directory in another terminal tab
jlpm watch
# Run jupyterlab in watch mode in one terminal tab
jupyter lab --watch
```

### Uninstall

```bash
jupyter labextension uninstall sample-react-jupyterlab-extension
```
