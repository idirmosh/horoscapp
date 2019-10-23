export const getDataApi = async (name, day = 'today') => {
  try {
    let proxyurl = 'https://api.allorigins.win/get?url=';
    let url = `https://theastrologer-api.herokuapp.com/api/horoscope/${name}/${day}`;
    const res = await fetch(proxyurl + url);
    const json = await res.json();
    const data = await JSON.parse(json.contents);
    return data;
  } catch (error) {
    return error;
  }
};
