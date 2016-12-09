import React from "react";
import styles from "isomorphic-style!css?modules!sass!./Avatar.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";

const avatarUrl = (id = 0, avatarSize = 32) => `https://avatars.githubusercontent.com/u/${id}?v=3&s=${avatarSize}`;

export default withStyles(styles)(({user = {}}) => {
	const href  = "https://github.com/" + (user.login || "RickWong/react-isomorphic-starterkit");
	const title = user.login || "you here? star us!";
	const alt   = user.login || "you?";

	return (
		<a className={styles.avatar} href={href} title={title} target="_blank">
			<img src={avatarUrl(user.id)} alt={alt} />
		</a>
	);
});
