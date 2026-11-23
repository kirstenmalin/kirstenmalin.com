import Code from '#components/code';
import Header from '#components/header';
import Link from '#components/link';
import Main from '#components/main';
import PageHeading from '#components/page-heading';
import Post from '#components/post';
import PostTags from '#components/post-tags';
import ProjectCard from '#components/project-card';
import SectionHeading from '#components/section-heading';
import SkipLink from '#components/skip-link';
import SubHeading from '#components/sub-heading';

export const componentMap = {
  Code,
  Header,
  Link,
  Main,
  PageHeading,
  Post,
  PostTags,
  ProjectCard,
  SectionHeading,
  SkipLink,
  SubHeading,
  a: 'a',
  br: 'br',
  img: 'img',
  p: 'p',
} as const;
