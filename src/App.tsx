import { Box, Container } from "@mui/material";
import { useState } from "react";
import Layout from "./components/Layout";
import Results from "./components/Results";
import SearchField from "./components/SearchField";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout>
      <Container
        component="main"
        maxWidth="md"
      >
        <Box
          mt={4}
          mb={5}
        >
          <SearchField
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </Box>
        <Results searchQuery={searchQuery} />
      </Container>
    </Layout>
  );
}

export default App;
