type Props = {
  title: string;
  author: string;
  image: string;
};

export default function PodcastCard({ title, author, image }: Props) {
  return (
    <div className="bg-gray-800 p-3 rounded-md">
      <div className="aspect-square bg-gray-700 mb-2 rounded">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded"
        />
      </div>
      <h3 className="text-sm font-semibold truncate">{title}</h3>
      <p className="text-xs text-gray-400 truncate">{author}</p>
    </div>
  );
}
