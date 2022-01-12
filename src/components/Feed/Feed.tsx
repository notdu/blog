// @flow strict
import React from "react";
import { Link } from "gatsby";
import type { Edges } from "../../types";
import styles from "./Feed.module.scss";

type Props = {
  edges: Edges;
};

const Feed = ({ edges }: Props) => (
  <div className={styles["feed"]}>
    {edges.map((edge) => (
      <div className={styles["feed__item"]} key={edge.node.fields.slug}>
        <div className={styles["feed__item-wrap"]}>
          <div className={styles["feed__item-wrap-meta"]}>
            <div className={styles["content"]}>
              <a
                href={edge.node.fields.slug}
                className={styles["content__wrap"]}
              >
                <div className={styles["content__wrap-title"]}>
                  {edge.node.frontmatter.title}
                </div>
                <div className={styles["content__wrap-description"]}>
                  <div className={styles["content__wrap-description-content"]}>
                    {edge.node.frontmatter.description}
                  </div>
                </div>
              </a>
            </div>
            <div className={styles["info"]}>
              <span className={styles["info__wrap"]}>
                <span className={styles["info__wrap-content"]}>
                  {new Date(edge.node.frontmatter.date).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </span>
              </span>
              <div className={styles["info__dot"]}>
                <span className={styles["info__dot-content"]}>.</span>
              </div>
              <div className={styles["info__wrap"]}>
                <span className={styles["info__wrap-content"]}>5 min read</span>
              </div>
              <div className={styles["info__dot"]}>
                <span className={styles["info__dot-content"]}>.</span>
              </div>
              <a
                href={edge.node.fields.categorySlug}
                className={styles["info__category"]}
              >
                <div className={styles["info__category-content"]}>
                  {edge.node.frontmatter.category}
                </div>
              </a>
            </div>
          </div>
          <a
            href={edge.node.fields.slug}
            className={styles["feed__item-wrap-img"]}
          >
            <img
              height="176"
              width="281.6"
              src="https://www.teachucomp.com/wp-content/uploads/blog-8-23-2016-AddALineBreakInHTML.png"
              alt=""
            />
          </a>
        </div>
      </div>

      // <div className={styles['feed__item']} key={edge.node.fields.slug}>
      //   <div className={styles['feed__item-meta']}>
      //     <time className={styles['feed__item-meta-time']} dateTime={ new Date(edge.node.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}>
      //     { new Date(edge.node.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
      //     </time>
      //     <span className={styles['feed__item-meta-divider']} />
      //     <span className={styles['feed__item-meta-category']}>
      //       <Link to={edge.node.fields.categorySlug} className={styles['feed__item-meta-category-link']}>{edge.node.frontmatter.category}</Link>
      //     </span>
      //   </div>
      //   <h2 className={styles['feed__item-title']}>
      //     <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
      //   </h2>
      //   <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}</p>
      //   <Link className={styles['feed__item-readmore']} to={edge.node.fields.slug}>Read</Link>
      // </div>
    ))}
  </div>
);

export default Feed;
