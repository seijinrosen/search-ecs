import { Box, Container } from "@mui/material";
import { useDeferredValue, useState } from "react";

import Layout from "./components/Layout";
import { Results } from "./components/Results";
import { SearchField } from "./components/SearchField";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout>
      <Container
        component="main"
        maxWidth="md"
      >
        <Box
          mb={5}
          mt={4}
        >
          <SearchField
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </Box>

        <Results searchQuery={useDeferredValue(searchQuery)} />
      </Container>
    </Layout>
  );
}

export default App;
