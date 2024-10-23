import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
const BreadCrumbs = ({ page, title }) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="body1" color="gray">
        Dashboard / <span style={{ fontWeight: "bold" }}>{page}</span>
      </Typography>
      {title ? (
        <>
          <Typography variant="h4" color="initial" sx={{ mt: 3 }}>
            {page}
          </Typography>
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};
export default BreadCrumbs;
