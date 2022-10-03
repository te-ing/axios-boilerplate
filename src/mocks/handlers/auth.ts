import { rest } from "msw";

export const login = rest.post("/login", (req, res, ctx) => {
  return res(
    ctx.cookie("authToken", "test"),
    ctx.json({
      id: "testUser",
      firstName: "Kim",
    })
  );
});

export const getAuth = rest.get("/auth", (req, res, ctx) => {
  const { authToken } = req.cookies;
  console.log(req.cookies);
  if (authToken === "test") {
    return res(
      ctx.cookie("auth-token", "test"),
      ctx.json({
        id: "testUser",
        firstName: "Kim",
      })
    );
  } else
    return res(
      ctx.status(403),
      ctx.json({ message: "Failed to authenticate!" })
    );
});
