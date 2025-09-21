import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Inputs from '../../components/Inputs/inputs';
import { validateEmail } from '../../utils/helper';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';

const SignUp = ({setCurrentPage}) => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    // Add your login logic here
    let profileImageUrl = "";

    if(!fullName) {
      setError("Please enter your full name")
      return
    }

    if(!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    if(!password) {
      setError("Please enter the password")
      return
    }

    setError("")

    // logic
    try {
      
    } catch (error) {
      
    }
  };
  return (
    <div className="w-full p-4 flex flex-col">
      <h3 className="text-lg font-semibold text-black text-center">Welcome Back</h3>
      <p className="text-gray-700 text-xs mt-1 mb-4 text-center">
        Join us today by entering your details below.
      </p>

      <form onSubmit={handleSignup} className="flex flex-col gap-4">

        <ProfilePhotoSelector profilePic={profilePic} setProfilePic={setProfilePic} />

        <Inputs
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Inputs
          label="Address Email"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Inputs
          label="Password"
          type="password"
          placeholder="min 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-xs pb-2 text-center">{error}</p>}

        

        <button
          type="submit"
          className="bg-black text-white cursor-pointer py-2 rounded-md hover:bg-gray-700 transition"
        >
          SIGN UP
        </button>

        <p className="text-[13px] text-gray-800 mt-3 text-center">
          Already have an account?{' '}
          <button
            type="button"
            className="text-black cursor-pointer hover:underline"
            onClick={() => setCurrentPage('login')}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  )
}

export default SignUp
