interface PostSearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PostSearchBar({ value, onChange }: PostSearchBarProps) {
  return (
    <input
      className="post-search-bar"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder='Search posts...'
    />
  );
}