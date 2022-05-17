import { Link } from "react-router-dom";
import { Text, Box } from "@mantine/core";

function NotFoundPage() {
  return (
    <Box>
      <Text>
        This page does not exist, please go back{" "}
        <Link to="/dash" className="text-blue-600 underline">
          home
        </Link>
      </Text>
    </Box>
  );
}

export default NotFoundPage;
