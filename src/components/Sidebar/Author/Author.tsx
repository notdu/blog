// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import styles from './Author.module.scss';

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string
  },
  isIndex?: boolean
};

const Author = ({ author, isIndex }: Props) => (
  <div className={styles["author"]}>
    <Link to="/">
      {/* <img
        src={withPrefix(author.photo)}
        className={styles["author__photo"]}
        width="110"
        height="110"
        alt={author.name}
      /> */}
      <amp-img
        src="https://d12v9rtnomnebu.cloudfront.net/oursite/logo_white.png"
        alt="site logo"
        width="264"
        height="96"
        layout="responsive"
      ></amp-img>
    </Link>

    {isIndex === true ? (
      <h1 className={styles["author__title"]}>
        <Link className={styles["author__title-link"]} to="/">
          {author.name}
        </Link>
      </h1>
    ) : (
      <h2 className={styles["author__title"]}>
        <Link className={styles["author__title-link"]} to="/">
          {author.name}
        </Link>
      </h2>
    )}
    <p className={styles["author__subtitle"]}>{author.bio}</p>
  </div>
);

export default Author;
