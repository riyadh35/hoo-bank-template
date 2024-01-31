import App from "../App";
import Homepage from "../Component/Homepage";

const Router = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
    ],
  },
];

export default Router;
