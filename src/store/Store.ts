import { flow, types } from 'mobx-state-tree'
import {
  MSections,
  MFilm,
  MMan,
  MPlanet,
  MSpecies,
  MStarship,
  MVehicle,
  MContext,
} from 'models'
import {
  getSections,
  getFilms,
  getPeople,
  getPlanets,
  getSpecies,
  getStarships,
  getVehicles,
} from 'api'
import { createContext } from 'utils'

const Store = types
  .model({
    sections: types.maybeNull(MSections),
    films: types.optional(
      types.model({
        data: types.array(MFilm),
        context: types.optional(MContext, {}),
      }),
      {}
    ),
    people: types.optional(
      types.model({
        data: types.array(MMan),
        context: types.optional(MContext, {}),
      }),
      {}
    ),
    planets: types.optional(
      types.model({
        data: types.array(MPlanet),
        context: types.optional(MContext, {}),
      }),
      {}
    ),
    species: types.optional(
      types.model({
        data: types.array(MSpecies),
        context: types.optional(MContext, {}),
      }),
      {}
    ),
    starships: types.optional(
      types.model({
        data: types.array(MStarship),
        context: types.optional(MContext, {}),
      }),
      {}
    ),
    vehicles: types.optional(
      types.model({
        data: types.array(MVehicle),
        context: types.optional(MContext, {}),
      }),
      {}
    ),
  })
  .actions((self) => ({
    fetchSections: flow(function* () {
      try {
        const sections = yield getSections()
        self.sections = sections
      } catch (error) {
        console.error(error)
      }
    }),
    fetchFilms: flow(function* (page: number) {
      try {
        const { count, next, previous, results } = yield getFilms()
        self.films.context = createContext(count, next, previous, page)
        self.films.data = results
      } catch (error) {
        console.error(error)
      }
    }),
    fetchPeople: flow(function* (page: number) {
      try {
        const { count, next, previous, results } = yield getPeople(page)
        self.people.context = createContext(count, next, previous, page)
        const people = results.map((man: any) => {
          const splitedUrl = man.url?.split('/')
          const id = Number(splitedUrl[splitedUrl.length - 2])
          return { ...man, id }
        })
        self.people.data = people
      } catch (error) {
        console.error(error)
      }
    }),
    fetchPlanets: flow(function* (page: number) {
      try {
        const { count, next, previous, results } = yield getPlanets(page)
        self.planets.context = createContext(count, next, previous, page)
        self.planets.data = results
      } catch (error) {
        console.error(error)
      }
    }),
    fetchSpecies: flow(function* (page: number) {
      try {
        const { count, next, previous, results } = yield getSpecies(page)
        self.species.context = createContext(count, next, previous, page)
        self.species.data = results
      } catch (error) {
        console.error(error)
      }
    }),
    fetchStarships: flow(function* (page: number) {
      try {
        const { count, next, previous, results } = yield getStarships(page)
        self.starships.context = createContext(count, next, previous, page)
        self.starships.data = results
      } catch (error) {
        console.error(error)
      }
    }),
    fetchVehicles: flow(function* (page: number) {
      try {
        const { count, next, previous, results } = yield getVehicles(page)
        self.vehicles.context = createContext(count, next, previous, page)
        self.vehicles.data = results
      } catch (error) {
        console.error(error)
      }
    }),
  }))

export default Store
