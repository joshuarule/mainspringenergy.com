// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// documents
import home from "./documents/home/index.js";
import person from "./documents/person.js";
import solutions from "./documents/solutions";
import technology from "./documents/technology";
import vision from "./documents/vision";
import careers from "./documents/careers";
import company from "./documents/company";
import jobs from "./documents/jobs";
import privacy from "./documents/privacy";
import terms from "./documents/terms";
import patents from "./documents/patents";
// components
import contentBlocks from "./components/contentBlocks.js";
import cta from "./components/callToAction.js";
import hero from "./components/hero.js";
import gallery from "./components/gallery.js";
import video from "./components/video.js";
import figure from "./components/figure.js";
import list from "./components/list.js";
import listItem from "./components/listItem.js";
import settings from "./documents/settings/index.js";
import seo from "./components/seo.js";
import imageGrid from "./components/imageGrid.js";
import blockQuote from "./components/blockquote.js";
import link from "./components/link.js";
import address from "./components/address.js";
import whitePaper from "./components/whitePaper.js";
import fileSrc from "./components/fileSrc.js";
import { home_solutions } from "./documents/home/components.js";
import {
  solutions_specs,
  solutions_specs_media,
  solutions_downloads,
} from "./documents/solutions/components.js";
import { vision_sources } from "./documents/vision/components.js";
// import {  } from './documents/careers/components.js'

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    // document specific
    privacy,
    patents,
    terms,
    home,
    home_solutions,
    person,
    solutions,
    solutions_specs,
    solutions_specs_media,
    technology,
    vision,
    vision_sources,
    careers,
    company,
    jobs,
    // components
    address,
    contentBlocks,
    cta,
    hero,
    gallery,
    video,
    figure,
    list,
    listItem,
    settings,
    seo,
    imageGrid,
    blockQuote,
    link,
    whitePaper,
    fileSrc,
    solutions_downloads,
  ]),
});
