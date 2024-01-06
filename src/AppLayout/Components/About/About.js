const About = () => {
    return(
        <div className="flex flex-col md:flex-row justify-center md:justify-around items-center h-[100vh] bg-gray-100 w-full">
            <div className="w-[90%] rounded-lg hover:scale-105 md:w-1/2 flex justify-center item-center">
                <img src="https://images.pexels.com/photos/2922312/pexels-photo-2922312.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" className="rounded-xl"/>
            </div>
            <div className="flex flex-col my-2 px-2 md:px-5 py-2 md:w-1/2">
                <h1 className="font-bold text-xl md:text-3xl text-orange-600 my-2">About us</h1>
                <p className="text-lg md:text-xl font-serif text-gray-950">Our story began with a vision to create more than just a place to eat; we wanted to craft a haven where every meal tells a tale. Rooted in [inspiration or origin story], our founders embarked on a mission to curate a menu that celebrates local ingredients, global influences, and innovative techniques.</p>
                <p className="text-lg md:text-xl font-serif text-gray-950">Our story began with a vision to create more than just a place to eat; we wanted to craft a haven where every meal tells a tale. Rooted in [inspiration or origin story], our founders embarked on a mission to curate a menu that celebrates local ingredients, global influences, and innovative techniques.</p>
                <button className="bg-orange-500 w-28 py-2 rounded-md text-gray-950 text-lg flex justify-center items-center my-2 font-bold px-5 hover:bg-gray-950 hover:text-orange-600 ease-in-out duration-500 shadow-lg">Readmore</button>
            </div>
        </div>
    );
}

export default About;