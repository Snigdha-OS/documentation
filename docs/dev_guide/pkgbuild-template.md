---
sidebar_position: 2
---
# PKGBUILD Template
Snigdha OS has it's own `PKGBUILD` template for building packages. We follow the the template so that we can maintain the packages in a better way. If you are building packages for Snigdha OS, then it will be a good option to follow the `PKGBUILD` template.

## What is PKGBUILD?
In Arch Linux or Snigdha OS, `PKGBUILD` is a script used to build packages. It contains metadata about the package as well as instructions on how to compile or otherwise obtain the necessary files to create a package. `PKGBUILD` scripts are used with the `makepkg` utility to create packages in the Arch Linux package format (`.pkg.tar.xz`). But in **Snigdha OS** our package format will be **`.pkg.tar.zst`**. 

**PKGBUILD** typically includes information such as the package name, version, dependencies, build instructions, and optional parameters. They allow users to easily create custom packages from source code or other files, which can then be installed using the package manager (`pacman`). 

Using `PKGBUILD` scripts provides a standardized and reproducible way to create packages, ensuring consistency across the Arch Linux ecosystem. Additionally, the Arch User Repository (AUR) relies heavily on `PKGBUILD` scripts submitted by users to build and distribute packages that are not available in the official repositories. Since **Snigdha OS** also comes in **Arch Linux** ecosystem, we also rely on Arch User Repository for packages.