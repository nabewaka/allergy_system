import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <article>
      <div className="bg-white p-8 rounded-lg prose prose-lg max-w-none mb-3"
        style={{ borderRadius: "var(--radius-lg)" }}
      >
      <p>おやつ管理したい！ここは今日のおやつ入力画面</p>
      </div>

    </article>
  );
}