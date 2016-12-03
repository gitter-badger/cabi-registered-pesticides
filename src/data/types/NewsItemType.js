/**
* CABI Registered Pesticides
 *
 * Copyright © 2016 Stuart Bateman. All rights reserved.
 *
 * .
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const NewsItemType = new ObjectType({
  name: 'NewsItem',
  fields: {
    title: { type: new NonNull(StringType) },
    link: { type: new NonNull(StringType) },
    author: { type: StringType },
    publishedDate: { type: new NonNull(StringType) },
    contentSnippet: { type: StringType },
  },
});

export default NewsItemType;
