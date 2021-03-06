// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';
import Kofi from '../../Kofi';
import Ghost from '../../Ghost';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles["author"]}>
      <p className={styles["author__bio"]}>
        <Kofi />
        <a
          className={styles["author__bio-twitter"]}
          href={getContactHref("twitter", author.contacts.twitter)}
          rel="noopener noreferrer"
          target="_blank"
        >
          Follow <strong>Tui</strong> on Twitter
        </a>
        <Ghost />
      </p>
    </div>
  );
};

export default Author;
