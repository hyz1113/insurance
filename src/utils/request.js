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
    let url1='http://119.18.207.134:8080/api/familyinfo';
    axios.post(url1, data,
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
