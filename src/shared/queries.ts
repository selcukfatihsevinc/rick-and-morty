import { gql } from "@apollo/client";

export type TOrigin = {
  id: string;
  name: string;
};

export type TCharacter = {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  created: string;
  origin: Partial<TOrigin>;
  location: Partial<TLocation>;
};

export const CHARACTERS_QUERY = gql`
  query ($page: Int) {
    characters(page: $page) {
      info {
        pages
        count
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        image
        origin {
          id
          name
        }
        location {
          id
          name
        }
        created
      }
    }
  }
`;

export type TEpisode = {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  created: string;
};

export const EPISODES_QUERY = gql`
  query ($page: Int) {
    episodes(page: $page) {
      info {
        pages
        count
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
        created
      }
    }
  }
`;

export type TLocation = {
  id: string;
  name: string;
  type: string;
  dimension: string;
  created: string;
};

export const LOCATIONS_QUERY = gql`
  query ($page: Int) {
    locations(page: $page) {
      info {
        pages
        count
        next
        prev
      }
      results {
        id
        name
        type
        dimension
        created
      }
    }
  }
`;
