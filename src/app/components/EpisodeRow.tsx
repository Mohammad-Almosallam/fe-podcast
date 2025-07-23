type Props = {
  title: string;
  author: string;
  image: string;
};

export default function EpisodeRow({ title, author, image }: Props) {
  return (
    <div className="flex items-center space-x-4 bg-gray-800 p-3 rounded-md">
      <img src={image} alt={title} className="w-12 h-12 rounded bg-gray-600" />
      <div className="flex-1">
        <h3 className="text-sm font-semibold truncate">{title}</h3>
        <p className="text-xs text-gray-400 truncate">{author}</p>
      </div>
    </div>
  );
}
