<<<<<<< HEAD
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

=======
>>>>>>> 4dd5b5dc9fdb275410df7727645dadcd8113c1ed
export default function LoadingSpinner() {
  return (
    <>
    <div className="w-full flex justify-center pt-12">
<<<<<<< HEAD
      <Stack>
        <CircularProgress sx={{ color: "#00fe8c" }} />
      </Stack>
=======
      <div className="w-10 h-10 rounded-full border-4 border-neon-green/30 border-t-neon-green animate-spin" />
>>>>>>> 4dd5b5dc9fdb275410df7727645dadcd8113c1ed
    </div>
    <div className="w-full flex justify-center pt-12 text-center text-white mb-200 font-bold text-lg">The initial response may take up to 20 seconds. Thank you for your patience.</div>
    </>
  );
}