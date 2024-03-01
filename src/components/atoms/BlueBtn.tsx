interface Props {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
}

const BlueBtn: React.FC<Props> = ({ title, onClick, disabled }) => {
  return (
    <button
      className={` px-4 py-2 text-white rounded-md ${
        disabled ? 'bg-gray-400' : 'bg-blue-500'
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default BlueBtn;
