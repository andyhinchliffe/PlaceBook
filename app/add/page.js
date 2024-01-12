'use client';

import {useState, useEffect} from 'react'
import Card from '../components/Card';
import { NavbarMain } from '../navbar'; 
// import Form from '@/components/Form';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { PlusCircle } from 'lucide-react';
// import { useHistory } from 'react-router-dom';

// const history = useHistory();

const Page  = () => {
  const fillerPlace = {userName: "Your User Name",
                      title: "Your Place",
                      img : "https://placehold.co/600x400",
                      info : "Your Info",
                      location : "The Location",
                      key: "0"                    
                    } 
  // const [placeholder, setPlaceHolder] = useState (fillerPlace)
  const [places, setPlaces] = useState([ ])
  const [placeObject, setPlaceObject] = useState(fillerPlace)
  
  // const [deleteNum, setDeleteNum] = useState (0)
  // const handleInputChange =(event) => {

  //   setPlaceHolder([event.target.name]: event.target.value)

  // }

  const handleInputChange = (event) => {
    setPlaceObject({
      ...placeObject,
      [event.target.name]: event.target.value
        })
        // if (event.target.name === "img" && event.target.value ===""){
        //   setPlaceObject({[event.target.name]: "https://placehold.co/600x400"})
        // }
  }

  const handleSubmit =(event)=> {
    event.preventDefault();
    setPlaces((prevPlaces) => {
      const updatedPlaces = [...prevPlaces, placeObject];
      localStorage.setItem('places', JSON.stringify(updatedPlaces));
      setPlaceObject(fillerPlace);
      return updatedPlaces;
      
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setPlaces((prevPlaces) => {
      const updatedPlaces = [...prevPlaces, placeObject];
      localStorage.setItem('places', JSON.stringify(updatedPlaces));
      return updatedPlaces;
    });
    setPlaceObject(fillerPlace); // Reset placeObject to its initial state after updating places.
  };
  

  // history.push('/');
  };
  

  return (
    <div className='use-client flex flex-col min-h-screen' style={{ 
      backgroundImage: 'linear-gradient(to top left, #3A8EBA, #FFFFFF)', 
      minHeight: '100vh'
    }}>
    <NavbarMain />
    <div className="flex items-center justify-center flex-wrap gap-10 mt-10 mb-10 " >
    

    {/* Form To Create Post */}
    <div className="w-1/2  min-w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="text-center mt-5 mb-2 text-xl font-bold tracking-tight text-gray-700">Tell Us About Your Favorite Place</h5>
        <form className="flex ml-5 mr-5 flex-col gap-4" onSubmit={handleSubmit}>
        

      {/* Place Name   */}
      <div>
        <div className="ml-3 block">
          <Label htmlFor="email1" value="Place Name" />
        </div>
        <TextInput className="ml-3" id="placeName" type="text" placeholder="What is the place called" onChange={handleInputChange}
                 name="title" required />
        
      </div>


      {/* User Name */}
      <div>
        <div className="ml-3 block">
          <Label  htmlFor="password1" value="User Name" />
        </div>
        <TextInput className="ml-3" id="userName" type="text" placeholder="What is your Name" name="userName" onChange={handleInputChange} required />
      </div>

      {/* Place Info */}
      <div>
      <div className="ml-3 block">
          <Label  htmlFor="placeInfo" value="Place Info" />
        </div>
        <TextInput className="ml-3" id="placeInfo" type="text" placeholder="Tell us about it" name="info" onChange={handleInputChange}/>
      </div>



      {/* Place Location */}
      <div>
      <div className="ml-3 block">
          <Label  htmlFor="placeInfo" value="What Three Words" />
        </div>
        <TextInput className="ml-3" id="placeLocation" type="text" placeholder="What Three Words" name="location" onChange={handleInputChange}/>
      </div>


      {/* Place URL */}
      <div>
        <div className="ml-3 block">
          <Label  htmlFor="img" value="Photo URL" />
        </div>
        <TextInput className="ml-3" id="img" type="text" placeholder="http://mypicture.com" name="img" onChange={handleInputChange}/>
      </div>
      

      {/* Submit Button */}
      <Button className="ml-auto mr-auto mb-5 text-center w-14 px-3 py-2 text-sm font-light text-white bg-gray-300 rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit" ><PlusCircle /></Button>
    </form>

    </div>

    {/* Card To SHow Post being Built */}
    <Card title={placeObject.title}
                img={placeObject.img}
                userName={placeObject.userName}
                info={placeObject.info}
                location={placeObject.location}
            />
        
        
        
    </div>
    <footer className='p-10 text-center bg-gray-600 mt-auto font-thin text-white'>
        <h5>Copyright &copy; social-site 2024</h5>
    </footer>
    </div>
  )
}

export default Page