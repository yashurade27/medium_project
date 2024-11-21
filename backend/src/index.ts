import { userRouter } from './routes/user';
import { blogRouter } from './routes/blogs';
import { Hono } from 'hono';

// Create the main Hono app
const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	}
}>();


app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

export default app;

