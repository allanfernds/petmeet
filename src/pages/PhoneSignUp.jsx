import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import { FaSpinner } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { BiLogInCircle } from 'react-icons/bi';

const PhoneSignUp = () => {
  const [error, setError] = useState('');
  const [number, setNumber] = useState('');
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    setError('');
    if (number === '' || number === undefined)
      return setError('Insira um numéro de telefone válido');
    try {
      setLoading(true);
      const response = await setUpRecaptha('+' + number);
      setResult(response);
      setFlag(true);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError('');
    if (otp === '' || otp === null) return;
    try {
      setLoading(true);
      await result.confirm(otp);
      navigate('/profilecheck');
    } catch (err) {
      setLoading(false);
      setError('Código OTP inválido!');
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 w-80">
        <h2>Cadastre-se com seu telefone</h2>
        {error && <div>{error}</div>}
        <form onSubmit={getOtp} style={{ display: !flag ? 'block' : 'none' }}>
          <div>
            <PhoneInput
              className="w-full"
              country={'br'}
              value={number}
              onChange={(value) => setNumber(value)}
            />
            <div id="recaptcha-container"></div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <button
              type="submit"
              className="bg-sky-500 text-white px-4 py-2 rounded w-full mt-6 flex items-center justify-center text-xl"
            >
              {loading ? (
                <FaSpinner className="animate-spin m-1" />
              ) : (
                <>
                  <p className="inline-block mr-6">Entrar</p>
                  <BiLogInCircle className="inline-block" />
                </>
              )}
            </button>
          </div>
        </form>

        <form onSubmit={verifyOtp} style={{ display: flag ? 'block' : 'none' }}>
          <div>
            <input
              type="number"
              placeholder="Insira o código"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <button
              type="submit"
              className="bg-sky-500 text-white px-2 py-2 rounded w-full mb-3 text-center"
            >
              {loading ? (
                <FaSpinner className="animate-spin m-1 text-center" />
              ) : (
                'Confirmar'
              )}
            </button>
            <Link className="w-full" to="/home">
              <button
                type="button"
                className="bg-gray-100 text-red-600 underline px-4 py-2 rounded w-full"
              >
                Cancelar
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default PhoneSignUp;
