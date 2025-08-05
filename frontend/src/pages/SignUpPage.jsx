const SignUpPage = () => {
    const handleSignUp=(e)=>{
        e.preventDefault();
    }
  return (
    <div
      className="max-w-md w-full bg-gray-800/50  backdrop-filter
    backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Create Account
        </h2>
        <form onSubmit={handleSignUp}></form>
      </div>
    </div>
  );
};

export default SignUpPage;
