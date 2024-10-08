import { DefinitionProps } from "../../Types";

interface Definition {
  data: DefinitionProps;
}

const Definition = ({ data }: Definition) => {
  return (
    <div className="mt-[120px]">
      <h2 className="text-center">{data?.title}</h2>
    </div>
  );
};

export default Definition;
