type Props = {
  replyContent: string;
};

export const PostReplyBox: React.FC<Props> = ({ replyContent }) => {
  return (
    <div className="w-full border border-black-lighter">
      <p className="flex justify-between text-black-lighter font-bold">
        <span className="max-w-60	truncate">
          {"> "}
          {replyContent}
        </span>
        <span>に返信</span>
      </p>
    </div>
  );
};
