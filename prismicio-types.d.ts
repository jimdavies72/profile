// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type ArticleDocumentDataSlicesSlice = LinksListSlice | RichTextSlice;

/**
 * Content for Article documents
 */
interface ArticleDocumentData {
  /**
   * Heading field in *Article*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: article.heading
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Article Type field in *Article*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Displayed under the heading
   * - **Default Value**: News Article
   * - **API ID Path**: article.article_type
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  article_type: prismic.SelectField<
    "News Article" | "Case Study" | "Development Project" | "Portfolio Article",
    "filled"
  >;

  /**
   * Description field in *Article*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.body
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Image field in *Article*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Article*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: article.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ArticleDocumentDataSlicesSlice> /**
   * Meta Title field in *Article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: article.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: article.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Article*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Article document from Prismic
 *
 * - **API ID**: `article`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArticleDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ArticleDocumentData>,
    "article",
    Lang
  >;

/**
 * Item in *Footer Settings → links*
 */
export interface FooterSettingsDocumentDataLinksItem {
  /**
   * label field in *Footer Settings → links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_settings.links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * link field in *Footer Settings → links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_settings.links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Footer Settings documents
 */
interface FooterSettingsDocumentData {
  /**
   * links field in *Footer Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_settings.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<FooterSettingsDocumentDataLinksItem>>;
}

/**
 * Footer Settings document from Prismic
 *
 * - **API ID**: `footer_settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterSettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterSettingsDocumentData>,
    "footer_settings",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | IntegrationsSlice
  | ArticlesSlice
  | SkillsSlice
  | CareerHistorySlice
  | ShowcaseSlice
  | ContactMeSlice
  | HeroSlice
  | RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * CTA Button field in *Settings → Navigation*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: settings.navigation[].cta_button
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  cta_button: prismic.BooleanField;

  /**
   * Icon field in *Settings → Navigation*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<"github" | "contactme">;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Fallback OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.fallback_og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  fallback_og_image: prismic.ImageField<never>;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | ArticleDocument
  | FooterSettingsDocument
  | PageDocument
  | SettingsDocument;

/**
 * Item in *Articles → Default → Primary → Articles*
 */
export interface ArticlesSliceDefaultPrimaryArticlesItem {
  /**
   * Article field in *Articles → Default → Primary → Articles*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: articles.default.primary.articles[].article
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  article: prismic.ContentRelationshipField<"article">;
}

/**
 * Primary content in *Articles → Default → Primary*
 */
export interface ArticlesSliceDefaultPrimary {
  /**
   * Heading field in *Articles → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: articles.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *Articles → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: articles.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Articles field in *Articles → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: articles.default.primary.articles[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  articles: prismic.GroupField<
    Simplify<ArticlesSliceDefaultPrimaryArticlesItem>
  >;
}

/**
 * Default variation for Articles Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticlesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ArticlesSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Articles*
 */
type ArticlesSliceVariation = ArticlesSliceDefault;

/**
 * Articles Shared Slice
 *
 * - **API ID**: `articles`
 * - **Description**: Articles
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticlesSlice = prismic.SharedSlice<
  "articles",
  ArticlesSliceVariation
>;

/**
 * Item in *CareerHistory → Default → Primary → Jobs*
 */
export interface CareerHistorySliceDefaultPrimaryJobsItem {
  /**
   * Company Name field in *CareerHistory → Default → Primary → Jobs*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: career_history.default.primary.jobs[].company_name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  company_name: prismic.RichTextField;

  /**
   * Location field in *CareerHistory → Default → Primary → Jobs*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: career_history.default.primary.jobs[].location
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  location: prismic.RichTextField;

  /**
   * Job Title field in *CareerHistory → Default → Primary → Jobs*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: career_history.default.primary.jobs[].job_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  job_title: prismic.RichTextField;

  /**
   * Job Type field in *CareerHistory → Default → Primary → Jobs*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Permanent
   * - **API ID Path**: career_history.default.primary.jobs[].job_type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  job_type: prismic.SelectField<
    "Permanent" | "Contract" | "Temp" | "N/A",
    "filled"
  >;

  /**
   * Job Description field in *CareerHistory → Default → Primary → Jobs*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: career_history.default.primary.jobs[].job_description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  job_description: prismic.RichTextField;

  /**
   * Date From field in *CareerHistory → Default → Primary → Jobs*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: career_history.default.primary.jobs[].date_from
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date_from: prismic.DateField;

  /**
   * Date To field in *CareerHistory → Default → Primary → Jobs*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: career_history.default.primary.jobs[].date_to
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date_to: prismic.DateField;

  /**
   * Current Job field in *CareerHistory → Default → Primary → Jobs*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: career_history.default.primary.jobs[].current_job
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  current_job: prismic.BooleanField;
}

/**
 * Primary content in *CareerHistory → Default → Primary*
 */
export interface CareerHistorySliceDefaultPrimary {
  /**
   * Heading field in *CareerHistory → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: career_history.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *CareerHistory → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: career_history.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Jobs field in *CareerHistory → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: career_history.default.primary.jobs[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  jobs: prismic.GroupField<Simplify<CareerHistorySliceDefaultPrimaryJobsItem>>;
}

/**
 * Default variation for CareerHistory Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CareerHistorySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CareerHistorySliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *CareerHistory*
 */
type CareerHistorySliceVariation = CareerHistorySliceDefault;

/**
 * CareerHistory Shared Slice
 *
 * - **API ID**: `career_history`
 * - **Description**: CareerHistory
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CareerHistorySlice = prismic.SharedSlice<
  "career_history",
  CareerHistorySliceVariation
>;

/**
 * Primary content in *ContactMe → Default → Primary*
 */
export interface ContactMeSliceDefaultPrimary {
  /**
   * Heading field in *ContactMe → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_me.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Description field in *ContactMe → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_me.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Form Enabled field in *ContactMe → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: contact_me.default.primary.form_enabled
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  form_enabled: prismic.BooleanField;
}

/**
 * Default variation for ContactMe Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactMeSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactMeSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ContactMe*
 */
type ContactMeSliceVariation = ContactMeSliceDefault;

/**
 * ContactMe Shared Slice
 *
 * - **API ID**: `contact_me`
 * - **Description**: ContactMe
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactMeSlice = prismic.SharedSlice<
  "contact_me",
  ContactMeSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Intro Heading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Let's meet...
   * - **API ID Path**: hero.default.primary.intro_heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  intro_heading: prismic.RichTextField;

  /**
   * Heading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Gold text Italic
   * - **API ID Path**: hero.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Body field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button Link field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Button Label field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;

  /**
   * Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *Integrations → Default → Primary → Icons*
 */
export interface IntegrationsSliceDefaultPrimaryIconsItem {
  /**
   * Icon field in *Integrations → Default → Primary → Icons*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: integrations.default.primary.icons[].icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<
    "nextjs" | "prismic" | "tailwind" | "vercel" | "npm" | "typescript"
  >;
}

/**
 * Primary content in *Integrations → Default → Primary*
 */
export interface IntegrationsSliceDefaultPrimary {
  /**
   * Heading field in *Integrations → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: integrations.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *Integrations → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: integrations.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Link field in *Integrations → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Website Link
   * - **API ID Path**: integrations.default.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Icons field in *Integrations → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: integrations.default.primary.icons[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  icons: prismic.GroupField<Simplify<IntegrationsSliceDefaultPrimaryIconsItem>>;
}

/**
 * Default variation for Integrations Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IntegrationsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<IntegrationsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Integrations*
 */
type IntegrationsSliceVariation = IntegrationsSliceDefault;

/**
 * Integrations Shared Slice
 *
 * - **API ID**: `integrations`
 * - **Description**: Integrations
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IntegrationsSlice = prismic.SharedSlice<
  "integrations",
  IntegrationsSliceVariation
>;

/**
 * Item in *LinksList → Default → Primary → Links*
 */
export interface LinksListSliceDefaultPrimaryLinksItem {
  /**
   * Link field in *LinksList → Default → Primary → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: links_list.default.primary.links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *LinksList → Default → Primary → Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Link Label
   * - **API ID Path**: links_list.default.primary.links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link Type field in *LinksList → Default → Primary → Links*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: links_list.default.primary.links[].link_type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  link_type: prismic.SelectField<"image" | "font" | "company">;
}

/**
 * Primary content in *LinksList → Default → Primary*
 */
export interface LinksListSliceDefaultPrimary {
  /**
   * Links field in *LinksList → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: links_list.default.primary.links[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<LinksListSliceDefaultPrimaryLinksItem>>;
}

/**
 * Default variation for LinksList Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LinksListSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LinksListSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *LinksList*
 */
type LinksListSliceVariation = LinksListSliceDefault;

/**
 * LinksList Shared Slice
 *
 * - **API ID**: `links_list`
 * - **Description**: LinksList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LinksListSlice = prismic.SharedSlice<
  "links_list",
  LinksListSliceVariation
>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

/**
 * Primary content in *Showcase → Default → Primary*
 */
export interface ShowcaseSliceDefaultPrimary {
  /**
   * Heading field in *Showcase → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Image field in *Showcase → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Icon field in *Showcase → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<"work" | "dev">;

  /**
   * Subheading field in *Showcase → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading: prismic.TitleField;

  /**
   * Body field in *Showcase → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button Text field in *Showcase → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *Showcase → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.default.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;
}

/**
 * Default variation for Showcase Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ShowcaseSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ShowcaseSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Showcase → Reverse → Primary*
 */
export interface ShowcaseSliceReversePrimary {
  /**
   * Heading field in *Showcase → Reverse → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.reverse.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Image field in *Showcase → Reverse → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.reverse.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Icon field in *Showcase → Reverse → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.reverse.primary.icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<"work" | "dev">;

  /**
   * Subheading field in *Showcase → Reverse → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.reverse.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading: prismic.TitleField;

  /**
   * Body field in *Showcase → Reverse → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.reverse.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button Text field in *Showcase → Reverse → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.reverse.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *Showcase → Reverse → Primary*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.reverse.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkToMediaField;
}

/**
 * Reverse variation for Showcase Slice
 *
 * - **API ID**: `reverse`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ShowcaseSliceReverse = prismic.SharedSliceVariation<
  "reverse",
  Simplify<ShowcaseSliceReversePrimary>,
  never
>;

/**
 * Slice variation for *Showcase*
 */
type ShowcaseSliceVariation = ShowcaseSliceDefault | ShowcaseSliceReverse;

/**
 * Showcase Shared Slice
 *
 * - **API ID**: `showcase`
 * - **Description**: Showcase
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ShowcaseSlice = prismic.SharedSlice<
  "showcase",
  ShowcaseSliceVariation
>;

/**
 * Item in *Skills → Default → Primary → Skills*
 */
export interface SkillsSliceDefaultPrimarySkillItem {
  /**
   * Skill Name field in *Skills → Default → Primary → Skills*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skills.default.primary.skill[].skill_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  skill_name: prismic.KeyTextField;

  /**
   * Icon field in *Skills → Default → Primary → Skills*
   *
   * - **Field Type**: Select
   * - **Placeholder**: The icon that represents the skill
   * - **API ID Path**: skills.default.primary.skill[].icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<
    | "node"
    | "javascript"
    | "react"
    | "nextjs"
    | "csharp"
    | "typescript"
    | "python"
    | "npm"
    | "mongodb"
    | "mysql"
    | "json"
    | "xml"
    | "csv"
    | "css"
    | "tailwind"
    | "vscode"
    | "terminal"
    | "netlify"
    | "heroku"
    | "vercel"
    | "jira"
    | "confluence"
    | "github"
    | "prismic"
    | "softskill"
    | "html"
  >;

  /**
   * Experience Level field in *Skills → Default → Primary → Skills*
   *
   * - **Field Type**: Number
   * - **Placeholder**: Experience score out of 5
   * - **API ID Path**: skills.default.primary.skill[].experience_level
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  experience_level: prismic.NumberField;

  /**
   * Show field in *Skills → Default → Primary → Skills*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: skills.default.primary.skill[].show
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  show: prismic.BooleanField;

  /**
   * Icon Colour field in *Skills → Default → Primary → Skills*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Text colour of the displayed Icon
   * - **Default Value**: white
   * - **API ID Path**: skills.default.primary.skill[].icon_colour
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon_colour: prismic.SelectField<
    | "white"
    | "blue"
    | "red"
    | "green"
    | "orange"
    | "gray"
    | "yellow"
    | "purple"
    | "sky",
    "filled"
  >;
}

/**
 * Primary content in *Skills → Default → Primary*
 */
export interface SkillsSliceDefaultPrimary {
  /**
   * Heading field in *Skills → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: skills.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *Skills → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skills.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Skills field in *Skills → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: skills.default.primary.skill[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  skill: prismic.GroupField<Simplify<SkillsSliceDefaultPrimarySkillItem>>;
}

/**
 * Default variation for Skills Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SkillsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SkillsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Skills*
 */
type SkillsSliceVariation = SkillsSliceDefault;

/**
 * Skills Shared Slice
 *
 * - **API ID**: `skills`
 * - **Description**: Skills
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SkillsSlice = prismic.SharedSlice<"skills", SkillsSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ArticleDocument,
      ArticleDocumentData,
      ArticleDocumentDataSlicesSlice,
      FooterSettingsDocument,
      FooterSettingsDocumentData,
      FooterSettingsDocumentDataLinksItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      AllDocumentTypes,
      ArticlesSlice,
      ArticlesSliceDefaultPrimaryArticlesItem,
      ArticlesSliceDefaultPrimary,
      ArticlesSliceVariation,
      ArticlesSliceDefault,
      CareerHistorySlice,
      CareerHistorySliceDefaultPrimaryJobsItem,
      CareerHistorySliceDefaultPrimary,
      CareerHistorySliceVariation,
      CareerHistorySliceDefault,
      ContactMeSlice,
      ContactMeSliceDefaultPrimary,
      ContactMeSliceVariation,
      ContactMeSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      IntegrationsSlice,
      IntegrationsSliceDefaultPrimaryIconsItem,
      IntegrationsSliceDefaultPrimary,
      IntegrationsSliceVariation,
      IntegrationsSliceDefault,
      LinksListSlice,
      LinksListSliceDefaultPrimaryLinksItem,
      LinksListSliceDefaultPrimary,
      LinksListSliceVariation,
      LinksListSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      ShowcaseSlice,
      ShowcaseSliceDefaultPrimary,
      ShowcaseSliceReversePrimary,
      ShowcaseSliceVariation,
      ShowcaseSliceDefault,
      ShowcaseSliceReverse,
      SkillsSlice,
      SkillsSliceDefaultPrimarySkillItem,
      SkillsSliceDefaultPrimary,
      SkillsSliceVariation,
      SkillsSliceDefault,
    };
  }
}
