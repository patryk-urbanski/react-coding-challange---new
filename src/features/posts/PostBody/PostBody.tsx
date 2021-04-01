import React from 'react';

// TODO: Create a type for the props.
export const PostBody: React.FC<any> = ({ text, summary = false }) => {
  // TODO: Split the text into paragraphs (<p> tags) around new lines (`\n`) rather than using a <pre>
  // TODO: If summary is true, only output the first paragraph.
  return <pre>{text}</pre>;
};
