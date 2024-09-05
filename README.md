<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<!-- markdownlint-disable MD033 -->

<a id="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/The-Shamrock/shamrockSite">
    <img src="https://i.imgur.com/GDFU5cb.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">The Shamrock Website</h3>

  <p align="center">
    A web companion to The Shamrock's digital issues
    <br />
    <a href="https://github.com/The-Shamrock/shamrockSite/issues/new?assignees=&labels=bug&projects=&template=bug-report-%F0%9F%90%9E.md&title=Bug%3A+.....">Report Bug</a>
    ·
    <a href="https://github.com/The-Shamrock/shamrockSite/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.md&title=Feat%3A+.....">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#environment-setup">Environment Setup</a></li>
        <li><a href="#development-setup">Development Setup</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Shamrock Screen Shot][product-screenshot]](https://example.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Angular][Angular.io]][Angular-url]
- [![Bootstrap][Bootstrap.com]][Bootstrap-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Environment Setup

If you've already setup your machine with Visual Studio, NVM, Yarn, etc., double check your versions and you can skip this section. If this is your first time setting up your dev machine, buckle in.

1. Install Visual Studio Code
   - Download & follow the installation instructions [here](https://code.visualstudio.com/download).
   - Once it is installed, be sure to install the [NX Console extension](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console)
2. Install NVM
   - For Windows, go [here](https://github.com/coreybutler/nvm-windows#readme) and click the "Download Now!" button.
   - For Mac/Linux, go [here](https://github.com/nvm-sh/nvm?tab=readme-ov-file), read the docs, and install using the script.
3. Install Node
   - From your terminal (while running as an Admin), run `nvm install 20.11.1`
   - Then run `nvm use 20.11.1`
4. Install Yarn
   - Continuing in the terminal, run `npm install -g yarn`
   - Note: If you need to update your `PATH` variable, [here's a simple gist](https://gist.github.com/yetanotherchris/1e339bd72d4698f70e2c3a02b04fc1c8).
5. Install Angular
   - Continuing in the terminal, run `yarn add global @angular/cli@18.2.0`

### Development Setup

Now that your machine is setup and environment is ready, let's get the codebase rolling.

1. Clone the Repo
   - From the [repo itself](https://github.com/The-Shamrock/shamrockSite), you can click the "Code" button, and clone from there in whichever way you'd like.
2. Setup the Site
   - Open the repo in VS Code
   - From the terminal, run `yarn`. This will install all packages needed.
3. Run the Site
   - Now that the packages are restored, it's time to run.
   - Open the NX Console extension, under Projects -> shamrock-site -> serve
   - Click serve, this will start building the website. It can take up to a minute depending on your system.
   - Once this is done, the site can be accessed at `localhost:4200`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Finish making the home page
- [ ] Add Issues page

See the [open issues](https://github.com/The-Shamrock/shamrockSite/issues?q=is%3Aopen+is%3Aissue) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

1. Create your Branch (`git checkout -b feat/AmazingFeature`)
2. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
3. Push to the Branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[product-screenshot]: https://i.imgur.com/fNnx6l1.png
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
