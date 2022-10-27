export default function Account() {
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
            // TODO: change page to '/'
          }, 3000);
        }}
      >
        Login
      </button>
    </>
  );
}
