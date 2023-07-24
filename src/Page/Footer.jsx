


const Footer = () => {
  return (
    <footer className=" text-white ">
      <div className="footer-container py-8 px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <div className="footer-section ml-8">
           
            <p className='ml-4 text-lg text-white font-semibold'>ABC College Ltd.<br />Encourages visitors to book college services and facilities.
</p>
          </div>


          <div>
            <h1 className="font-bold mb-2 text-2xl text-white">Service</h1>
            <div className='text-md text-white font-semibold'>
            <a className="link link-hover">Branding</a> <br />
            <a className="link link-hover">Design</a> <br />
            <a className="link link-hover">Marketing</a> <br />
            <a className="link link-hover">Advertisement</a>
            </div>
          </div>







          <div className="footer-section">
            <h1 className="font-bold mb-2 text-2xl text-white">Contact Us</h1>
            <p className='text-md text-white font-semibold'>
              Phone: 123-456-7890<br />
              Email: abscollege@gmail.com<br />
              Address: Dhaka Bangladesh
            </p>
          </div>

        </div>
      </div>
      <div className="bg-white text-black py-2 px-4 md:px-10 font-semibold text-center">
        &copy; 2023 ABC COLLEGE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
