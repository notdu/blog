// @flow strict
// @ts-ignore
import type { Node as ReactNode } from 'react';

export type RenderCallback = {
    // $FlowFixMe
    render: (data: any) => ReactNode;
}

export type PageContext = {
    tag: string,
    category: string,
    currentPage: number,
    prevPagePath: string,
    nextPagePath: string,
    hasPrevPage: boolean,
    hasNextPage: boolean
};

export type Node = {
    fields: {
        slug: string,
        categorySlug?: string,
        tagSlugs?: string[]
    },
    frontmatter: {
        date: string,
        description?: string,
        category?: string,
        tags?: string[],
        title: string,
        socialImage?: string,
        thumbnail: string
    },
    html: string,
    id: string
};

export type NodeInfo = {
    frontmatter: {
        uid: string,
        title?: string,
        name: string,
        photo: string,
        bio?: string,
        email?: string,
        facebook?: string,
        telegram?: string,
        twitter?: string,
        github?: string,
        linkedin?: string,
        instagram?: string,
        youtube?: string,
        phone?: string,
        momo?: string,
        bank?: string,
        stk?: string,
        tiktok?: string,
    },
    html: string,
    id: string
};

export type Edge = {
    node: Node
};

export type Edges = Array<Edge>;

export type AllMarkdownRemark = {
    allMarkdownRemark: {
        edges: Edges,
    },
    group: {
        fieldValue: string,
        totalCount: number
    }[]
};

export const options = [
  { value: 'Email' },
  { value: 'Facebook' },
  { value: 'Github' },
  { value: 'Instagram' },
  { value: 'Linkedin' },
  { value: 'Momo' },
  { value: 'Phone' },
  { value: 'Telegram' },
  { value: 'Tiktok' },
  { value: 'Twitter' },
  { value: 'Youtube' },
];

export type MarkdownRemark = Node;
