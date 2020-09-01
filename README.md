# MHP Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/4e11de4f-08a6-455e-a138-2c241560a582/deploy-status)](https://app.netlify.com/sites/mhp-test/deploys)
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

_Monash Human Power public website showcasing the best of MHP_

This repo contains all of the code that runs the MHP website. Check out the live site [here](https://monashhumanpower.org).

## Getting Started

### View Online

This website is automatically deployed using Netlify. See the live site [here](https://monashhumanpower.org).

### Run Locally

1. [Install node.js](https://nodejs.org)
2. Run `git clone git@github.com:monash-human-power/MHP-website.git`
3. Install dependencies using `npm install`
4. Install gatsby using `npm install -g gatsby-cli`
5. Start developing using `gatsby develop`

### Project Layout

| File/Folder               |                                                           Information                                                            |
| :------------------------ | :------------------------------------------------------------------------------------------------------------------------------: |
| `gatsby-config.js`        | Configures Gatsby and used to import Gatsby plugins. [More info](https://www.gatsbyjs.com/tutorial/plugin-and-theme-tutorials/). |
| `gatsby-node.js`          |                 Logic to dynamically generate blog posts. [More info](https://www.gatsbyjs.org/docs/node-apis/).                 |
| `gatsby-browser.js`       |  Imports CSS and modules to be used in the browsers global namespace. [More info](https://www.gatsbyjs.org/docs/browser-apis/).  |
| `netlify.toml`            |                                                  Configures the netlify build.                                                   |
| `src/components`          |                                          Contains React components used to build pages.                                          |
| `src/images`              |                                                     Contains website images.                                                     |
| `src/markdown`            |                                     Contains markdown files used to build pages (non-blog).                                      |
| `src/blog`                |                                        Contains markdown files used to build blog pages.                                         |
| `src/pages`               |                           Contains React files that are associated with pages. eg. 404.js == 404 page                            |
| `src/styles`              |                                                    Contains global CSS files.                                                    |
| `static/admin/config.yml` |                              Config file for Netlify CMS. [More info](https://www.netlifycms.org/).                              |

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
