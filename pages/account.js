import { useRouter } from "next/router.js";

export default function Account() {
  const router = useRouter();

  return (
    <>
      <h1>Account content here</h1>
      <div>
        <label>
          Username: <input type="text" />
        </label>
      </div>
      <div>
        <label>
          Password: <input type="password" />
        </label>
      </div>
      <button
        onClick={() => {
          setTimeout(() => {
            router.push("/");
          }, 3000);
        }}
      >
        Login
      </button>
    </>
  );
}
