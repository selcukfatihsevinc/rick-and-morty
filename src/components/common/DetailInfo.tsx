const DetailInfo = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => {
  return (
    <div className="flex flex-row">
      <span className="font-semibold w-[80px]">{title}:</span>
      <span>{value}</span>
    </div>
  );
};

export default DetailInfo;
