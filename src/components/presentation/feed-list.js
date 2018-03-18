import React from 'react';
import PropTypes from 'prop-types';
import Feed from './feed';

const FeedList = ({ feeds, handleFeedClick }) => (
	<ul>
		{feeds.map((feed, i) => (
			<Feed
				key={i}
				onClick={() => handleFeedClick(feed.id)}
			/>
		))}
	</ul>
);

FeedList.propTypes = {
	feeds: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			id: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired,
		}).isRequired).isRequired,
	handleFeedClick: PropTypes.func.isRequired,
};

export default FeedList;

