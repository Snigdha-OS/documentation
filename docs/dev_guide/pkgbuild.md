---
sidebar_position: 2
---
# PKGBUILD Template
Snigdha OS has it's own `PKGBUILD` template for building packages. We follow the the template so that we can maintain the packages in a better way. If you are building packages for Snigdha OS, then it will be a good option to follow the `PKGBUILD` template.

## What is PKGBUILD?
In Arch Linux or Snigdha OS, `PKGBUILD` is a script used to build packages. It contains metadata about the package as well as instructions on how to compile or otherwise obtain the necessary files to create a package. `PKGBUILD` scripts are used with the `makepkg` utility to create packages in the Arch Linux package format (`.pkg.tar.xz`). But in **Snigdha OS** our package format will be **`.pkg.tar.zst`**. 

**PKGBUILD** typically includes information such as the package name, version, dependencies, build instructions, and optional parameters. They allow users to easily create custom packages from source code or other files, which can then be installed using the package manager (`pacman`). 

Using `PKGBUILD` scripts provides a standardized and reproducible way to create packages, ensuring consistency across the Arch Linux ecosystem. Additionally, the Arch User Repository (AUR) relies heavily on `PKGBUILD` scripts submitted by users to build and distribute packages that are not available in the official repositories. Since **Snigdha OS** also comes in **Arch Linux** ecosystem, we also rely on Arch User Repository for packages.

## A simple PKGBUILD
Writing a `PKGBUILD` for Arch Linux and Snigdha OS involves several key steps. Below is a basic example of a `PKGBUILD` for a fictitious application called "exampleapp." This example assumes that "exampleapp" is a simple Python application with a `setup.py` file for installation.

```PKGBUILD
# Maintainer: Your Name <your_email@example.com>
pkgname=exampleapp
pkgver=1.0
pkgrel=1
pkgdesc="A simple example application"
arch=('any')
url="https://example.com/exampleapp"
license=('MIT')
depends=('python')

source=("https://example.com/exampleapp/exampleapp-${pkgver}.tar.gz")

build() {
    cd "${srcdir}/exampleapp-${pkgver}"
    python setup.py build
}

package() {
    cd "${srcdir}/exampleapp-${pkgver}"
    python setup.py install --root="${pkgdir}/" --optimize=1
}

# Checksums, uncomment these lines and provide the correct checksums:
# sha256sums=('SKIP')

```

Here's a breakdown of the sections:

1. **Metadata**: This section defines metadata about the package, including its name (`pkgname`), version (`pkgver`), release number (`pkgrel`), description (`pkgdesc`), architecture (`arch`), URL (`url`), and license (`license`). These fields are essential for identifying and describing the package.

2. **Dependencies**: The `depends` array lists the runtime dependencies required for the package to function correctly. You should include any libraries or packages that your application relies on.

3. **Source**: The `source` array specifies where to download the source code for the application. In this example, the source is assumed to be a tarball available at a URL. You may need to adjust this section based on the source code's location and format.

4. **Build() function**: This function contains the commands needed to build the package. It typically involves navigating to the source directory (`${srcdir}`) and running build commands specific to your application. In this example, we're assuming a Python application with a `setup.py` file, so we use `python setup.py build`.

5. **Package() function**: This function contains the commands needed to install the package into the package directory (`${pkgdir}`). It typically involves navigating to the source directory and running installation commands. Here, we're assuming a Python application with a `setup.py` file, so we use `python setup.py install`.

6. **Checksums**: Uncomment the `sha256sums` array and provide the correct checksum for the source tarball. This ensures that the source hasn't been tampered with.

Once you've written the `PKGBUILD`, save it to a file named `PKGBUILD` and place it in a directory with the same name as the package. You can then use the `makepkg` command to build the package:

```bash
$ makepkg
```

This command will generate a `.pkg.tar.zst` file containing the built package, which you can then install using `pacman`.

## Snigdha OS PKGBUILD 

Here is the PKGBUILD Template we follow specifically for Snigdha OS.

```bash
# Maintainer: Your Name <your_email@provider.com>
pkgname=
org=Snigdha-OS # The username/organization username where you upload the Source Code. 
branch=master # Your GitHub/GitLab/Gitea repository branch. Possible values: master, main, devlopment
pkgver= # Initiate it with 1.
pkgrel= # Initiate it with 1.
pkgdesc='' # A short description of your package.
arch=('') # Possible options: any,x86_64, arm64 etc.
url="" # Your package source code URL 
license=('') # Possible options: MIT, GPL, AGPL, custom
makedepends=('') # Dependency it install or run the package
source=("") # The source of the package 
sha256sums=('') # checksums
install=$pkgname.install # Further instuction after installing/building the package.

pkgver() {
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

# Since we maintain the package version with the github repository commit count an the last commit, we use pkgver() function.
# It is a good option the maintain the package version. Somtimes I forgot to change the version.

package() {
	# Your package function goes here with instructions to build the package. 
}
```
