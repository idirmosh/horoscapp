export const getDataApi = async (name, day = 'today') => {
  try {
    let proxyurl = 'https://cors-dev.herokuapp.com/?q=';
    let url = `https://theastrologer-api.herokuapp.com/api/horoscope/${name}/${day}`;
    const res = await fetch(proxyurl + url);
    const json = await res.json();
    console.log(json);
    //const parsed
    //const data = await JSON.parse(json);
    const data = json;
    return data;
  } catch (error) {
    return error;
  }
};
