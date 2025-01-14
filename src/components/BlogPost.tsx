import Image from 'next/image';
import React from 'react'
import Markdown from 'react-markdown';

type Props = {}

const BlogPost = ({post}: any) => {

    return (
        <div>
          <div className="w-full relative h-56 mb-8">
            <Image
              alt={post.title}
              fill={true}
              src={post.imageUrl}
              loading="lazy"
              objectFit="cover"
            ></Image>
          </div>
          <article className="prose">
            <Markdown>{post.content}</Markdown>
          </article>
        </div>
      );

}

export default BlogPost