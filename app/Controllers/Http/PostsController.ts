import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Post from "App/Models/Post";

export default class PostsController {
  async index({}: HttpContextContract) {
    const posts = await Post.all();
    return posts;
  }

  async store({ request }: HttpContextContract) {
    const data = request.only(["title", "content"]);

    const post = await Post.create(data);
    return post;
  }

  async show({ params, response }: HttpContextContract) {
    const { id } = params;
    const post = await Post.find(id);
    if (!post) response.notFound();

    return post;
  }

  async destroy({ params, response }: HttpContextContract) {
    const { id } = params;
    const post = await Post.find(id);
    if (!post) return response.notFound();

    await post.delete();
  }

  async update({ params, request, response }: HttpContextContract) {
    const { id } = params;
    const post = await Post.find(id);
    if (!post) return response.notFound();

    const data = request.only(["title", "content"]);
    post.merge(data);
    await post.save();

    return post;
  }
}
