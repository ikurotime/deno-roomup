// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/api/login.ts";
import * as $1 from "./routes/api/register.ts";
import * as $2 from "./routes/api/registered-emails.ts";
import * as $3 from "./routes/auth/login.tsx";
import * as $4 from "./routes/auth/register.tsx";
import * as $5 from "./routes/home/create.tsx";
import * as $6 from "./routes/home/index.tsx";
import * as $7 from "./routes/index.tsx";
import * as $8 from "./routes/room/[name].tsx";
import * as $$0 from "./islands/Confetti.tsx";
import * as $$1 from "./islands/Counter.tsx";
import * as $$2 from "./islands/HomeRooms.tsx";
import * as $$3 from "./islands/LoginForm.tsx";
import * as $$4 from "./islands/RegisterForm.tsx";
import * as $$5 from "./islands/RegisteredEmail.tsx";

const manifest = {
  routes: {
    "./routes/api/login.ts": $0,
    "./routes/api/register.ts": $1,
    "./routes/api/registered-emails.ts": $2,
    "./routes/auth/login.tsx": $3,
    "./routes/auth/register.tsx": $4,
    "./routes/home/create.tsx": $5,
    "./routes/home/index.tsx": $6,
    "./routes/index.tsx": $7,
    "./routes/room/[name].tsx": $8,
  },
  islands: {
    "./islands/Confetti.tsx": $$0,
    "./islands/Counter.tsx": $$1,
    "./islands/HomeRooms.tsx": $$2,
    "./islands/LoginForm.tsx": $$3,
    "./islands/RegisterForm.tsx": $$4,
    "./islands/RegisteredEmail.tsx": $$5,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
