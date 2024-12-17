import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import the icons

const Login = () => {
    const [userLogin, setUserLogin] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => {
                setErrorMessage('');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errorMessage]);

    const navigate = useNavigate();

    const handleForgetNavigate = () => {
        navigate('/forget');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (userLogin.email === "test@gmail.com" && userLogin.password === "test123") {

                const login = "";

            }
            else {
                setErrorMessage('All fields are required');
            }
        } catch (error) {
            setErrorMessage('Email or Password is Incorrect');
        }
    };

    return (
        <div className='tw-grid tw-grid-cols-2 xl:tw-grid-cols-3 tw-px-10 tw-overflow-hidden'>

            <div>
            </div>

            <div className='tw-hidden xl:tw-block'>
            </div>

            <div className="tw-w-full tw-py-10 tw-overflow-hidden tw-h-[90vh]">
                <form onSubmit={handleSubmit} className="tw-bg-[var(--first-color)] tw-p-8 tw-shadow-lg tw-rounded-lg tw-mx-auto tw-h-full tw-flex tw-flex-col tw-justify-between">
                    {errorMessage && (
                        <div className="tw-bg-red-500 tw-text-white tw-p-4 tw-rounded-md tw-mb-4">
                            {errorMessage}
                        </div>
                    )}

                    <div>
                        <div>
                            <p className='tw-font-bold tw-text-white'>
                                ENTER THE CHECKIVERSE
                            </p>
                            <p className='tw-text-[var(--second-color)] tw-text-sm'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas voluptatibus, perferendis officia et unde repellendus quo nesciunt, vitae minus at illo numquam explicabo maiores beatae ducimus aut ad
                            </p>
                        </div>

                        <div className="tw-mt-6">
                            <label htmlFor='emailInp' className="tw-block tw-text-[var(--second-color)] tw-font-semibold tw-mb-2">Your Email:</label>
                            <input
                                id="emailInp"
                                placeholder='Enter your email here....'
                                className="tw-w-full tw-px-4 tw-py-2 tw-border tw-border-[var(--second-color)] tw-rounded-md tw-bg-[var(--third-color)] tw-text-[var(--second-color)]"
                                type="email"
                                value={userLogin.email}
                                onChange={(e) => setUserLogin({ ...userLogin, email: e.target.value })}
                                required
                            />
                        </div>
                        <div className="tw-mt-4">
                            <label htmlFor='passwordInp' className="tw-block tw-text-[var(--second-color)] tw-font-semibold tw-mb-2">Your Password:</label>
                            <div className="tw-relative">
                                <input
                                    id="passwordInp"
                                    placeholder='Enter your password here....'
                                    type={showPassword ? 'text' : 'password'}
                                    value={userLogin.password}
                                    onChange={(e) => setUserLogin({ ...userLogin, password: e.target.value })}
                                    className="tw-w-full tw-px-4 tw-py-2 tw-border tw-border-[var(--second-color)] tw-rounded-md tw-bg-[var(--third-color)] tw-text-[var(--second-color)]"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="tw-absolute tw-right-3 tw-top-1/2 tw-transform tw--translate-y-1/2 tw-cursor-pointer"
                                >
                                    {showPassword ? <FaEyeSlash color='#fff' /> : <FaEye color='#fff' />} {/* Toggle between FaEyeSlash and FaEye */}
                                </button>
                            </div>

                        </div>

                    </div>

                    <div className="tw-text-center">
                        <button
                            type="submit"
                            className="tw-w-full tw-bg-primary tw-text-white tw-font-semibold tw-px-20 tw-py-2 tw-rounded-md hover:tw-bg-gray-400 tw-transition tw-duration-200"
                        >
                            Enter the Checkiverse
                        </button>
                        <div className="tw-mt-2">
                            <p
                                className="tw-text-primary tw-text-sm tw-cursor-pointer hover:tw-text-gray-700"
                                onClick={handleForgetNavigate}
                            >
                                FORGOT PASSWORD?
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;