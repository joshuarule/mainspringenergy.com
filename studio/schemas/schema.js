// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// documents
import home from "./documents/home/index.js";
import person from "./documents/person/index.js";
import {
  person_image,
  person_category,
} from "./documents/person/components.js";
import personTypes from "./documents/personTypes.js";
import solutions from "./documents/solutions";
import {
  solutions_specs,
  solutions_specs_media,
  solutions_downloads,
  solutions_primary,
  solutions_form,
} from "./documents/solutions/components.js";
import technology from "./documents/technology";
import {
  technology_primarySection,
  technology_secondarySection,
} from "./documents/technology/components.js";
import vision from "./documents/vision";
import {
  vision_sources,
  vision_sources_item,
} from "./documents/vision/components.js";
import careers from "./documents/careers";
import { career_opportunities } from "./documents/careers/components.js";
import company from "./documents/company";
import {
  company_hero,
  company_investors,
} from "./documents/company/components.js";
import privacy from "./documents/privacy";
import terms from "./documents/terms";
import patents from "./documents/patents";
import roles from "./documents/roles";
import role from "./documents/role";
import articles from "./documents/articles";
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
import blockquote from "./components/blockquote.js";
import link from "./components/link.js";
import address from "./components/address.js";
import whitePaper from "./components/whitePaper.js";
import fileSrc from "./components/fileSrc.js";
import sectionTitle from "./components/sectionTitle.js";
import sectionTitleOptions from "./components/sectionTitleOptions.js";
import textColumns from "./components/textColumns.js";
import textColumn from "./components/textColumn.js";
import richTextObj from "./components/richText.js";
import gridImage from "./components/gridImage.js";
import dynamicBlock from "./components/dynamicBlock.js";
// options
import cta_options from "./components/cta_options.js";
import imageBlock_options from "./components/imageBlock_options.js";
import blockquote_options from "./components/blockquote_options.js";
import heroRichText from "./components/heroRichText.js";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    // document specific
    articles,
    roles,
    role,
    privacy,
    patents,
    terms,
    home,
    person,
    person_image,
    personTypes,
    person_category,
    solutions,
    solutions_specs,
    solutions_downloads,
    solutions_specs_media,
    solutions_primary,
    solutions_form,
    technology,
    technology_primarySection,
    technology_secondarySection,
    company,
    company_hero,
    company_investors,
    vision,
    vision_sources,
    vision_sources_item,
    careers,
    career_opportunities,
    // components
    address,
    contentBlocks,
    dynamicBlock,
    imageBlock_options,
    cta,
    cta_options,
    hero,
    gallery,
    video,
    figure,
    list,
    listItem,
    settings,
    seo,
    imageGrid,
    blockquote,
    blockquote_options,
    link,
    whitePaper,
    fileSrc,
    sectionTitle,
    sectionTitleOptions,
    heroRichText,
    gridImage,
    textColumns,
    textColumn,
    richTextObj,
  ]),
});
