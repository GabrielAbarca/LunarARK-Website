import './LoadingSpinner.css'
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export default function LoadingSpinner() {
  return (
    <div className="loading-spinner_container">
      <Stack>
        <CircularProgress sx={{ color: "#00fe8c" }} />
      </Stack>
    </div>
  );
}
