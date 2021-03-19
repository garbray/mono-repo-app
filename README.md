# Mono Repo

## TODO

- Create a bash script to install all the dependencies
- Add changelog md autogenated

## Installation

Install the following global dependencies

### Volta

The Hassle-Free JavaScript Tool Manager

```
curl https://get.volta.sh | bash
volta install
```

### Lerna

Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.

```
npm install --global lerna

```

### Scripts setup

Make scripts executable

```
chmod -R +x scripts
```

### Tools

In this monorepo we use some a opinion for handle the commit messages

[Commitlint](https://github.com/conventional-changelog/commitlint/#what-is-commitlint)
[Commitlint for lerna](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-lerna-scopes)
Here are more info how you can write well commits message

### Change logs

[Conventional changelog](https://github.com/conventional-changelog/conventional-changelog)
[Changelog lerna](https://github.com/lerna/lerna-changelog)

To be able to have a record of the changes performed by our team during the development process
we add a changelog versioning
