// API
import $axios from "axios";

export function requestLogin({ state }, payload) {
  console.log("requestLogin", state, payload);
  const url = "/auth/login";
  let body = payload;
  return $axios.post(url, body);
}

export function requestDupl({ state }, payload) {
  console.log("requestDupl", state, payload);
  const url = `/users/${payload.userid}`;
  return $axios.get(url);
}

export function requestRegister({ state }, payload) {
  console.log("requestRegister", state, payload);
  const url = "/users";
  let body = payload;
  return $axios.post(url, body);
}

export function requestUserInfo({ state }, payload) {
  console.log("requestUserInfo", state, payload);
  const url = "/users/me";
  let body = payload;
  return $axios.get(url, body);
}

export function requestPatch({ state }, payload) {
  console.log("requestPatch", state, payload.userId);
  const url = `/users/${payload.userId}`;
  let body = payload
  return $axios.patch(url, body);
}

export function requestRemove({ state }, payload) {
  console.log("requestRemove", state, payload.userId);
  const url = `/users/${payload.userId}`;
  let body = payload

  return $axios.delete(url, body);
}

export function createConference({ state }, payload) {
  console.log("createConference", state, payload);
  const url = "/conferences";
  let body = payload;
  const jwt = Object.fromEntries(body)['jwt']
  return $axios.post(url, body, {
    headers: {
      "Content-Type": "multipart/form-data",
      "Authorization":  `Bearer ${jwt}`
    }
  });
}

export function getConferenceCategory({ state }, payload) {
  console.log("createConference", state, payload);
  const url = "/conference-categories";
  return $axios.get(url);
}

export function getConferences({ state }, payload) {
  let url = '/conferences';
  for (const filter in payload) {
    url += `?${filter}=${payload[filter]}`
  }

  return $axios.get(url);
}

export function getConferenceDetail({ state }, payload) {
  console.log("getConferenceDetail", state, payload);
  const url = `/conferences/${payload}`;
  return $axios.get(url);
}

export function patchConference({ state }, payload) {
  console.log("patchConference", state, payload);
  let body = payload;
  const conferenceId = body.get('conferenceId')
  const url = `/conferences/${conferenceId}`;
  return $axios.patch(url, body, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
}


export function requestGetRival({state},payload){
  console.log("search rival id ",payload);
  const rivalId= payload.Id;
  console.log(rivalId);
  const url = `/Rivals/${rivalId}`;
  return $axios.get(url);
}

export function requestMakeRival({state},payload){
  console.log("make rival",payload);
  const url=`/Rivals`;
  return $axios.post(url,payload);
}

export function getAllRival({state},payload){
  console.log("all rival",payload);
  const url=`/Rivals/me`;
  return $axios.post(url,payload);
}

export function getRanking({ state }) {
  const url = `/chlnges/scores`;
  return $axios.get(url);
}

export function requestDeleteRival({state},payload){
  const url =`/Rivals/${payload.userId}/${payload.userRivalId}`;
  return $axios.delete(url);
}

export function getRoomSelected({state},payload){
  const url= `/room/conferences/${payload}`;
  return $axios.get(url);
}

export function requestConferenceJoin({state},payload){
  const url=`/room/check`;
  return $axios.post(url, payload);
}

export function leaveRoom({state},payload){
  const url =`room/uncheck`;
  return $axios.delete(url,payload);
}

export function roomJoin({state}, payload){
  const url =`room/join`;
  console.log(payload)
  const jwt = localStorage.getItem('jwt')
  return $axios.post(url, payload, {
    headers: {
      "Content-Type": "application/json",
      "Authorization":  `Bearer ${jwt}`
    }
  });
}

export function roomOut({state}, payload){
  const url =`room/out`;
  const jwt = localStorage.getItem('jwt')
  return $axios.post(url, payload, {
    headers: {
      "Content-Type": "application/json",
      "Authorization":  `Bearer ${jwt}`
    }
  });
}

export function getMyConferenceHistory({state},payload){
  const url= `/history/${payload}`;
  return $axios.get(url);
}
