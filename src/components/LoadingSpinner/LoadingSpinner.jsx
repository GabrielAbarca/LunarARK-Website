import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export default function LoadingSpinner() {
  return (
    <div className="w-full flex justify-center pt-12">
      <Stack>
        <CircularProgress sx={{ color: "#00fe8c" }} />
      </Stack>
    </div>
  );
}
