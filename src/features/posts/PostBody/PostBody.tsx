import React from 'react';

// TODO: Create a type for the props.
interface PostBodyProps {
  text: string;
  summary?: boolean;
}

export const PostBody: React.FC<PostBodyProps> = ({ text, summary = false }) => {
  // TODO: Split the text into paragraphs (<p> tags) around new lines (`\n`) rather than using a <pre>
  // TODO: If summary is true, only output the first paragraph.
  const paragraphs = text.split('\n').map((paragraph, i) => (
    <p key={i}>{paragraph}</p>
  ));

  if (summary) {
    return paragraphs[0];
  }

  return <React.Fragment>{paragraphs}</React.Fragment>;
};
