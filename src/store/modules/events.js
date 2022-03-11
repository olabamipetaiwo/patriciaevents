/* eslint-disable no-unused-vars */
import { getAllEvents } from "@/services/EventService";
import {
  FETCH_ALL_EVENTS,
  FETCH_FILTERED_EVENTS,
  FETCHING_EVENTS,
  SET_FILTER,
  SET_ERROR,
  CLEAR_ERROR,
} from "../types";

export default {
  namespaced: true,
  state: {
    allEvents: [],
    filteredEvents: [],
    fetchingEvents: true,
    hasFetchedEvents: false,
    filterKeyWord: "",
    error: null,
  },
  getters: {
    getAllEventsLength(state) {
      return state.allEvents.length;
    },
    getFilteredEventsLength(state) {
      return state.filteredEvents.length;
    },
    getFeaturedEvents(state) {
      return state.allEvents.filter((_eventItem) => {
        return _eventItem?.artist;
      });
    },
    getFeaturedEventsLength(state, getters) {
      return getters.getFeaturedEvents.length;
    },
  },
  mutations: {
    [FETCH_ALL_EVENTS](state, events) {
      state.allEvents = events;
      state.filteredEvents = events;
      state.fetchingEvents = false;
      state.error = null;
    },
    [FETCH_FILTERED_EVENTS](state, events) {
      state.filteredEvents = events;
    },
    [FETCHING_EVENTS](state) {
      state.fetchingEvents = true;
    },
    [SET_FILTER](state, keyword) {
      state.filterKeyWord = keyword;
    },
    [SET_ERROR](state, error) {
      state.error = error;
    },
    [CLEAR_ERROR](state) {
      state.error = null;
    },
  },
  actions: {
    async fetchEvents({ commit }) {
      try {
        commit(FETCHING_EVENTS);
        const result = await getAllEvents();
        commit(FETCH_ALL_EVENTS, result.data);
      } catch (error) {
        commit(SET_ERROR, "Error Occured");
      }
    },
    filterEvents({ state, commit }, searchInput) {
      try {
        commit(CLEAR_ERROR);
        const regEx = new RegExp(`${searchInput}`, "gi");
        commit(SET_FILTER, searchInput);
        const result = state.allEvents.filter((eventItem) => {
          return (
            // eventItem?.title.match(regEx) ||
            eventItem?.artist?.name.match(regEx) ||
            eventItem?.description.match(regEx) ||
            eventItem?.venue?.name.match(regEx) ||
            eventItem?.venue?.location.match(regEx)
          );
        });
        commit(FETCH_FILTERED_EVENTS, result);
      } catch (err) {
        commit(SET_ERROR, `Invalid SearchInpuut ${searchInput}`);
      }
    },
  },
};
