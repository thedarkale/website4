import React from "react";
import { getAuthorPath } from "../../utils/helpers";
import AutoLink from "../AutoLink/AutoLink";

const PostAuthor = ({ author, extraClass = "" }) => (
	<div className={`text-description ${extraClass}`}>
		<AutoLink 
		  to={getAuthorPath(author)} 
		  label={author} 
		>
			<i>By <u>{author}</u></i>
		</AutoLink>
	</div>
)

export default PostAuthor;