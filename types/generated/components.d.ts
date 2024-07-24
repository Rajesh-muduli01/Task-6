import type { Schema, Attribute } from '@strapi/strapi';

export interface HeroSectionHomepage extends Schema.Component {
  collectionName: 'components_hero_section_homepages';
  info: {
    displayName: 'Homepage';
  };
  attributes: {
    valueProposition: Attribute.Blocks;
    seoExplanation: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hero-section.homepage': HeroSectionHomepage;
    }
  }
}
