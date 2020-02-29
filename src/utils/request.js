import axios from "axios";
import qs from "qs";

const get = function(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const post = function(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data,
      {
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      }).then(
      response => {
        resolve(response.data);
      },
      err => {
        reject(err);
      }
    );
  });
};
export { get, post, qs };
