interface Props {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
}

const RedBtn: React.FC<Props> = ({ title, onClick, disabled }) => {
  return (
    <button
      className={` px-2 py-1 text-sm text-white rounded-md ${
        disabled ? 'bg-gray-400' : 'bg-rose-600'
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default RedBtn;
