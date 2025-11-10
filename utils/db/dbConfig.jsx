// postgresql://neondb_owner:npg_nrVEO4W0isFM@ep-falling-waterfall-ahd7aqkq-pooler.c-3.us-east-1.aws.neon.tech/neatify-database?sslmode=require&channel_binding=require
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://neondb_owner:npg_nrVEO4W0isFM@ep-falling-waterfall-ahd7aqkq-pooler.c-3.us-east-1.aws.neon.tech/neatify-database?sslmode=require&channel_binding=require"
);
export const db = drizzle(sql, { schema });