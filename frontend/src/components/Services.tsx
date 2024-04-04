const Services = () => {
  const services = [
    { id: 1, img: 'https://via.placeholder.com/100', title: 'Device Repair', description: 'Expert repair services for smartphones, tablets, laptops, and more. Get your devices back to peak performance.' },
    { id: 2, img: 'https://via.placeholder.com/200', title: 'Tech Support', description: 'Professional tech support to assist with setup, troubleshooting, and optimizing your devices and software.' },
    { id: 3, img: 'https://via.placeholder.com/300', title: 'Data Recovery', description: 'Specialized data recovery services to retrieve lost or corrupted data from hard drives, memory cards, and other storage devices.' },
    { id: 4, img: 'https://via.placeholder.com/400', title: 'Home Network Setup', description: 'Comprehensive home network setup and optimization to ensure fast, reliable internet connectivity for all your devices.' },
    { id: 5, img: 'https://via.placeholder.com/500', title: 'Cybersecurity Consultation', description: 'Personalized cybersecurity consultation to assess and strengthen your digital defenses against online threats.' },
    { id: 6, img: 'https://via.placeholder.com/600', title: 'Cloud Storage Solutions', description: 'Secure and convenient cloud storage solutions to store, access, and share your files from anywhere, on any device.' },
    { id: 7, img: 'https://via.placeholder.com/700', title: 'Software Development', description: 'Custom software development services to create tailored solutions for your business needs, from mobile apps to enterprise software.' },
    { id: 8, img: 'https://via.placeholder.com/800', title: 'Website Design & Development', description: 'Professional website design and development services to create stunning, functional websites that drive traffic and engagement.' },
    { id: 9, img: 'https://via.placeholder.com/900', title: 'Digital Marketing', description: 'Strategic digital marketing services to increase your online visibility, attract more customers, and grow your business.' },
    { id: 10, img: 'https://via.placeholder.com/100', title: 'IT Consulting', description: 'Comprehensive IT consulting services to optimize your technology infrastructure, improve efficiency, and reduce costs.' },
    { id: 11, img: 'https://via.placeholder.com/200', title: 'Training & Workshops', description: 'Interactive training sessions and workshops to empower individuals and businesses with essential tech skills and knowledge.' },
    { id: 12, img: 'https://via.placeholder.com/300', title: 'Managed IT Services', description: 'Proactive managed IT services to monitor, maintain, and support your technology environment, ensuring maximum uptime and performance.' },
];


  return (
    <div className="container">
        <h1 className="text-center my-5">Services</h1>
        <div className="row">
            {services.map(service => (
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-4" key={service.id}>
                    <div className="card">
                        <img src={service.img} className="card-img-top" alt="Product" />
                        <div className="card-body">
                            <h5 className="card-title">{service.title}</h5>
                            <p className="card-text">{service.description}</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Services;