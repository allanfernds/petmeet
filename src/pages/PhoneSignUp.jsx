import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const PhoneSignUp = () => {
  const [error, setError] = useState('');
  const [number, setNumber] = useState('');
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState('');
  const [result, setResult] = useState('');
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    setError('');
    if (number === '' || number === undefined)
      return setError('Please enter a valid phone number!');
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError('');
    if (otp === '' || otp === null) return;
    try {
      await result.confirm(otp);
      navigate('/profilecheck');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div>
        <h2>Firebase Phone Auth</h2>
        {error && <div>{error}</div>}
        <form onSubmit={getOtp} style={{ display: !flag ? 'block' : 'none' }}>
          <div>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <div id="recaptcha-container"></div>
          </div>
          <div>
            <Link to="/">
              <button type="button">Cancel</button>
            </Link>
            <button type="submit">Send Otp</button>
          </div>
        </form>

        <form onSubmit={verifyOtp} style={{ display: flag ? 'block' : 'none' }}>
          <div>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <div>
            <Link to="/phonesignup">
              <button type="button">Cancel</button>
            </Link>
            <button type="submit">Verify</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PhoneSignUp;
