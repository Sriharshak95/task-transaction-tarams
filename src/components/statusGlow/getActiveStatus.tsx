import DotGlow from "./dotGlow";

const GetActiveStatus: React.FC<{ status: string }> = ({ status }) => {
  switch (status) {
    case "Pending":
      return <DotGlow color="bg-yellow-500" />;

    case "Confirm":
      return <DotGlow color="bg-green-500" />;

    case "Cancel":
      return <DotGlow color="bg-red-500" />;

    default:
      break;
  }
};

export default GetActiveStatus;
