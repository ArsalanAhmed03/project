const Register = () => {
  return (
    <section id="register" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Register Now</h2>
          <p className="text-gray-600 mb-8">
            Ready to put your skills to the test? Register now for IEEE Week
            competitions and compete in the challenges that excite you! Whether
            you're into coding, robotics, or problem-solving, there's something for
            everyone. Don't miss your chance to showcase your talent—sign up
            today!
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-md text-lg hover:bg-opacity-90">
            Register Now
          </button>
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-gray-600 mb-8">
            Be part of something big! Join the IEEE Week team and help bring this
            incredible event to life. Whether you're passionate about organizing,
            marketing, or tech, there's a place for you. Gain experience, make
            connections, and be at the heart of the action—sign up now!
          </p>
          <button className="bg-secondary text-white px-8 py-3 rounded-md text-lg hover:bg-opacity-90">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;