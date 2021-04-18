// import actions from "consts/actions-types";
// import { endNetwork, startNetwork } from "actions/ui";

// const api = ({ dispatch, getState }) => (next: Dispatch) => (action: Action) => {
//   if (action.type !== actions.API) {
//     return next(action);
//   }

//   const { url, success, label } = action.payload;

//   dispatch(startNetwork(label));

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       dispatch(success(data));
//       dispatch(endNetwork(label));
//     })
//     .catch((error) => {
//       if (error.status === 403) {
//         // here actions
//         // dispatch(logout());
//         // dispatch(redirect('/login'))
//       }
//     });
// };
