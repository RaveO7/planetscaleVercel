"use client"
import { useEffect, useState } from "react"

export default function Home() {
  const [posts, setPosts] = useState([] as any);

  useEffect(() => {
    async function getNumberPage() {
      const apiUrlEndpoint = "/api/posts"

      const response = await fetch(apiUrlEndpoint)
      const res = await response.json()
      setPosts(res)
    }
    getNumberPage();
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {posts.map((post: any) =>
        <div key={post.id}>
          <p>Id : <span className="underline text-xl">{post.id}</span></p>
          <p>Title : <span className="underline text-xl">{post.title}</span></p>
          <p>Description : <span className="underline text-xl">{post.content}</span></p>
        </div>
      )}
    </main>
  )
}
