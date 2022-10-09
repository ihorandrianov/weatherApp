import cloudy from '../assets/cloudy-3-day.svg';

export const Pin = () => (
        <div className='fixed h-[200px] w-[110px] bg-green-600 top-28 rounded-2xl shadow-2xl flex flex-col'>
            <div className='bg-green-800 h-[100px] w-[110px] rounded-2xl flex flex-col justify-center items-center'>
                <img src={cloudy} alt="cloudy"/>
                <p className='text-xs text-white text-center'>
                    Cloudy
                </p>
            </div>
            <div className='text-white text-5xl flex justify-center items-center h-[100px] w-[110px]'>
                <p>31°</p>
            </div>
        </div>
);
