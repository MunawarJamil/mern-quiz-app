import { Children } from "react";
import { useSelector } from "react-redux";
import { Navigate, replace } from "react-router-dom";

export const attempts_number = function (result) {
  return result.filter((r) => r !== undefined).length;
};

export const earnedPoints = function (result, answer, points) {
  return result
    .map((element, i) => answer[i] === element)
    .filter((i) => i)
    .map((i) => points)
    .reduce((prev, curr) => prev + curr, 0);
};

export function flagResult(totalPoints, earnPoints) {
  return (totalPoints * 50) / 100 < earnPoints;
}

export function CheckUserExist({ children }) {
  const auth = useSelector((state) => state.result.userId);
  return auth ? children : <Navigate to="/" replace={true} />;
}

/** get server data */
export async function getServerData(url, callback) {
  const data = await (await axios.get(url))?.data;
  return callback ? callback(data) : data;
}

/** post server data */
export async function postServerData(url, result, callback) {
  const data = await (await axios.post(url, result))?.data;
  return callback ? callback(data) : data;
}
