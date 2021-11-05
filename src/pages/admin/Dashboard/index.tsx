import Button from "@mui/material/Button";
import { useSnackbar } from "notistack";

export default function Dashboard() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const variants = ["success", "error", "warning", "info", "default"];
  const handleClick = () => {
    enqueueSnackbar("I love hooks", {
      variant: variants[Math.floor(Math.random() * variants.length)]
    });
  };
  return (
    <>
      <Button variant="contained" onClick={handleClick}>
        Dashboard
      </Button>
    </>
  );
}
