import './Banner.css'

const Banner = () => {
    return (
        <div className='bg-image'>
            <div className='absolute top-40 lg:top-96 left-4 lg:left-60 space-y-1 text-white'>
                <h2 className='text-xl lg:text-5xl font-bold mb-7 font-mono'>Savor the Culinary Journey</h2>
                <button className="rounded-md bg-sky-700 text-white font-semibold px-4 lg:ms-60 w-40">Order Now</button>
            </div>
        </div>
    );
};

export default Banner;