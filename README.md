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

## Project Layout

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

## More Information

Still confused? Don't know how to use the CMS? More info can be found at the notion page [here](https://www.notion.so/MHP-Website-534dbf67d07e4ad2b16445424bbdaca8).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Blake-Haydon"><img src="https://avatars2.githubusercontent.com/u/23159604?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Blake</b></sub></a><br /><a href="https://github.com/monash-human-power /MHP-Website/commits?author=Blake-Haydon" title="Code">💻</a> <a href="https://github.com/monash-human-power /MHP-Website/commits?author=Blake-Haydon" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/clarayew"><img src="https://avatars0.githubusercontent.com/u/71205412?v=4?s=100" width="100px;" alt=""/><br /><sub><b>clarayew</b></sub></a><br /><a href="#content-clarayew" title="Content">🖋</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
