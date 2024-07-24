const Header = () => {
  return (
    <div>
      <nav className="flex bg-blue-400 justify-center gap-48 p-5">
        <img src="" alt="logo" />
        <button className="ml-auto bg-violet-300 rounded-md hover:bg-violet-400 px-4 py-2">
          Login
        </button>
        <button className="rounded-md mr-8 bg-violet-300 px-4 py-2 hover:bg-violet-400 ">
          Signup
        </button>
      </nav>
    </div>
  );
}

export default Header