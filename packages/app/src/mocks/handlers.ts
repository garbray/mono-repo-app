import { rest } from "msw";

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    // persist user's authentication in the session
    console.log(req);
    sessionStorage.setItem("is-authenticated", "true");

    return res(ctx.status(200));
  }),
  rest.get("/user", (_, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem("is-authenticated");

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),
];
