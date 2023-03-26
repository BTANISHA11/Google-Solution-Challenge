import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../training.css'
import 'aos/dist/aos.css';


export default function Training() {
    return (
        <div>
            <div>
                <Navbar />
            </div>


            <div class="container-fluid" id='trainingcard' style={{ width: "100%" }}>
                <div class="card-header " id='cardheader' data-aos="zoom-in" data-aos-duration="2000">
                    <h4>
                        Here are some basic steps to take when disaster comes.
                    </h4>
                </div>
                <ul class="list-group list-group-">
                    <li class="list-group-item" id='list-items' data-aos="fade-left" data-aos-duration="2000">1. Stay Calm: The first step is to stay calm and assess the situation. Panic can make it difficult to think clearly and take appropriate action.</li>
                    <li class="list-group-item" id='list-items' data-aos="fade-right" data-aos-duration="2000">2. Follow Emergency Alerts: Listen to the radio, TV, or emergency alerts on your phone for important information and instructions from authorities.</li>
                    <li class="list-group-item" id='list-items' data-aos="fade-left" data-aos-duration="2000">3. Evacuate if Necessary: If you are instructed to evacuate, do so immediately. Follow evacuation routes and bring necessary emergency supplies with you.</li>
                    <li class="list-group-item" id='list-items' data-aos="fade-right" data-aos-duration="2000">4.Shelter in Place: If evacuation is not necessary, seek shelter in a safe location such as a basement, storm cellar, or an interior room on the lowest floor with no windows.</li>
                    <li class="list-group-item" id='list-items' data-aos="fade-left" data-aos-duration="2000">5. Check on Others: Check on family members, friends, and neighbors to ensure their safety and well-being.</li>
                    <li class="list-group-item" id='list-items' data-aos="fade-right" data-aos-duration="2000">6. Communicate: Communicate with family members, friends, and emergency services to let them know your location and situation.</li>
                    <li class="list-group-item" id='list-items' data-aos="fade-left" data-aos-duration="2000">7. Emergency Supplies: Have emergency supplies such as food, water, and first aid kits on hand in case of extended power outages or other disruptions.</li>
                    <li class="list-group-item" id='list-items' data-aos="fade-right" data-aos-duration="2000">8. Follow Instructions: Follow instructions from authorities and emergency services. If you're unsure of what to do, call emergency services for guidance.</li>
                    <li class="list-group-item" id='list-items' data-aos="fade-left" data-aos-duration="2000">9. Stay Informed: Stay informed about the situation through news sources and emergency alerts. Be prepared to adjust your plans as the situation changes.</li>
                </ul>
            </div>


            {/* Video Training */}
            <div class="card-group">
                <div class="card">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            <div class="card-group">
                <div class="card">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            <div class="card-group">
                <div class="card">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>



            <div>
                <Footer />
            </div>
        </div>
    )
}
