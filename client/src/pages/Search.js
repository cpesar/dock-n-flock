import React, { useState } from "react";
import TMList from "../components/Results/TMList";
import axios from "axios";
import env from "react-dotenv";
import "../App.css";

import {
  // Flex,
  SimpleGrid,
  Box,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";

function Search() {
  const [formState, setFormState] = useState({ city: "", event: "" });
  const { city, event } = formState;
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const searchSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const result = await axios(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${env.TM_KEY}&city=${city}&keyword=${event}&size=8`
    );
    const ev = result.data._embedded.events;
    setItems(ev);
    setIsLoading(false);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <Box
      p={5}
      borderRadius="50px"
      shadow="md"
      borderWidth="2px"
      bgColor="whiteAlpha.800"
    >
      <form action="submit" onSubmit={searchSubmit}>
        <FormControl colorScheme="whiteAlpha">
          <SimpleGrid columns={2} spacing={10}>
            <Box>
              <Input
                borderColor="gray.700"
                borderWidth="thin"
                variant="solid"
                placeholder="What city are you looking in?"
                type="text"
                id="city"
                name="city"
                defaultValue={city}
                onBlur={handleChange}
              />
            </Box>

            <Box>
              <Input
                borderColor="gray.700"
                borderWidth="thin"
                variant="solid"
                placeholder="What are you searching for?"
                id="event"
                type="text"
                name="event"
                defaultValue={event}
                onBlur={handleChange}
              />
            </Box>
          </SimpleGrid>
        </FormControl>
        <FormControl mt="2">
          <Button type="submit" colorScheme="teal">
            Search Now!
          </Button>
        </FormControl>
      </form>
      {items !== 0 && <TMList isLoading={isLoading} items={items} />}
    </Box>
  );
}

export default Search;
