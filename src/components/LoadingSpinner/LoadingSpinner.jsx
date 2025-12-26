import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export default function LoadingSpinner() {
  return (
    <>
    <div className="w-full flex justify-center pt-12">
      <Stack>
        <CircularProgress sx={{ color: "#00fe8c" }} />
      </Stack>
    </div>
    <div className="w-full flex justify-center pt-12 text-center text-white mb-200 font-bold text-lg">The initial response may take up to 20 seconds. Thank you for your patience.</div>
    </>
  );
}