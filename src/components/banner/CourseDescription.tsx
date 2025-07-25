interface Props {
  html: string;
}

export default function ProductDescription({ html }: Props) {
  return (
    <div className="prose prose-sm mb-6 w-[700px] "
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
